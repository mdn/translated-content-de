---
title: Verwendung von Cross-Origin-Bildern in einem Canvas
short-title: Verwendung von Cross-Origin-Bildern
slug: Web/HTML/How_to/CORS_enabled_image
l10n:
  sourceCommit: aa69a7c2f6707e3aea741c9ed38bac9831f7b6d4
---

{{HTMLSidebar}}

HTML bietet ein [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin)-Attribut für Bilder, das in Kombination mit einem entsprechenden {{Glossary("CORS", "CORS")}}-Header es ermöglicht, Bilder, die durch das {{ HTMLElement("img") }}-Element definiert sind und aus fremden Ursprüngen geladen werden, in einem {{HTMLElement("canvas")}} zu verwenden, als ob sie vom aktuellen Ursprung geladen worden wären.

Details zur Verwendung des `crossorigin`-Attributs finden Sie unter [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

## Sicherheit und verfärbte Canvases

Da die Pixel in einem Canvas-Bitmap aus verschiedenen Quellen stammen können, einschließlich Bildern oder Videos, die von anderen Hosts abgerufen wurden, ist es unvermeidlich, dass Sicherheitsprobleme auftreten können.

Sobald Sie in ein Canvas Daten einzeichnen, die ohne CORS-Genehmigung von einem anderen Ursprung geladen wurden, wird das Canvas **verfärbt**. Ein verfärbtes Canvas wird nicht mehr als sicher angesehen, und jeder Versuch, Bilddaten aus dem Canvas zurückzuerhalten, wird eine Ausnahme auslösen.

Wenn die Quelle des fremden Inhalts ein HTML-{{HTMLElement("img")}}- oder SVG-{{SVGElement("svg")}}-Element ist, ist der Versuch, den Inhalt des Canvas abzurufen, nicht erlaubt.

Wenn der fremde Inhalt von einem Bild stammt, das entweder als [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder [`ImageBitMap`](/de/docs/Web/API/ImageBitmap) erhalten wurde, und die Bildquelle nicht den gleichen Ursprungsregeln entspricht, werden Versuche, den Inhalt des Canvas zu lesen, blockiert.

Das Aufrufen einer der folgenden Methoden auf einem verfärbten Canvas wird zu einem Fehler führen:

- Aufrufen von [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) auf dem Kontext des Canvas
- Aufrufen von [`toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob), [`toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) oder [`captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream) auf dem {{HTMLElement("canvas")}}-Element selbst

Der Versuch, eine dieser Aktionen auf einem verfärbten Canvas durchzuführen, führt zu einem `SecurityError`. Dies schützt die Benutzer davor, dass private Daten durch die Verwendung von Bildern von entfernten Websites ohne Erlaubnis offengelegt werden.

## Speichern eines Bildes aus einem fremden Ursprung

In diesem Beispiel möchten wir erlauben, dass Bilder aus einem fremden Ursprung abgerufen und im lokalen Speicher gespeichert werden. Die Umsetzung erfordert die Konfiguration des Servers sowie das Schreiben von Code für die Website selbst.

### Webserver-Konfiguration

Das Erste, was wir benötigen, ist ein Server, der so konfiguriert ist, dass er Bilder mit dem konfigurierten {{HTTPHeader("Access-Control-Allow-Origin")}}-Header hostet, um den Cross-Origin-Zugriff auf Bilddateien zu erlauben.

Lassen Sie uns annehmen, dass wir unsere Seite mit [Apache](https://httpd.apache.org/) bereitstellen. Beachten Sie die HTML5 Boilerplate [Apache Serverkonfigurationsdatei für CORS-Bilder](https://github.com/h5bp/server-configs-apache/blob/main/h5bp/cross-origin/images.conf), wie unten gezeigt:

```apacheconf
<IfModule mod_setenvif.c>
  <IfModule mod_headers.c>
    <FilesMatch "\.(avifs?|bmp|cur|gif|ico|jpe?g|jxl|a?png|svgz?|webp)$">
      SetEnvIf Origin ":" IS_CORS
      Header set Access-Control-Allow-Origin "*" env=IS_CORS
    </FilesMatch>
  </IfModule>
</IfModule>
```

Kurz gesagt, konfiguriert dies den Server so, dass Grafikdateien (die mit den Erweiterungen ".bmp", ".cur", ".gif", ".ico", ".jpg", ".jpeg", ".png", ".svg", ".svgz" und ".webp") von überall im Internet Cross-Origin zugänglich sind.

### Umsetzung der Speicherfunktion

Nachdem der Server so konfiguriert wurde, dass er das Abrufen der Bilder Cross-Origin erlaubt, können wir den Code schreiben, der es dem Benutzer ermöglicht, sie im [lokalen Speicher](/de/docs/Web/API/Web_Storage_API) zu speichern, als ob sie von derselben Domain bereitgestellt wurden, auf der der Code läuft.

Der Schlüssel ist die Verwendung des [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin)-Attributs durch das Setzen von [`crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin) auf das [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), in das das Bild geladen wird. Dies teilt dem Browser mit, dass er beim Herunterladen der Bilddaten Cross-Origin-Zugriff anfordern soll.

#### Start des Downloads

Der Code, der den Download startet (zum Beispiel, wenn der Benutzer auf einen "Download"-Button klickt), sieht so aus:

```js
function startDownload() {
  let imageURL = "https://mdn.github.io/shared-assets/images/examples/mdn.svg";
  let imageDescription = "Logo of a dinosaur in front of a map";

  downloadedImg = new Image();
  downloadedImg.crossOrigin = "anonymous";
  downloadedImg.addEventListener("load", imageReceived, false);
  downloadedImg.alt = imageDescription;
  downloadedImg.src = imageURL;
}
```

Wir verwenden hier eine fest codierte URL (`imageURL`) und dazugehörigen beschreibenden Text (`imageDescription`), aber das könnte leicht von überall stammen. Um den Download des Bildes zu beginnen, erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt, indem wir den [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)-Konstruktor verwenden. Das Bild wird dann konfiguriert, um das herkunftsübergreifende Herunterladen zu erlauben, indem sein `crossOrigin`-Attribut auf `"anonymous"` gesetzt wird (d.h. nicht-authentifiziertes Herunterladen des Bildes Cross-Origin zulassen). Ein Ereignis-Listener wird hinzugefügt für das [`load`](/de/docs/Web/API/Window/load_event)-Event, das auf dem Bildelement ausgelöst wird, was bedeutet, dass die Bilddaten empfangen wurden. Alternativtext wird dem Bild hinzugefügt; während `<canvas>` das `alt`-Attribut nicht unterstützt, kann der Wert verwendet werden, um ein `aria-label` oder den inneren Inhalt des Canvas festzulegen.

Schließlich wird das [`src`](/de/docs/Web/API/HTMLImageElement/src)-Attribut des Bildes auf die URL des herunterzuladenden Bildes gesetzt; dies löst aus, dass der Download beginnt.

#### Empfangen und Speichern des Bildes

Der Code, der das neu heruntergeladene Bild behandelt, befindet sich in der `imageReceived()`-Methode:

```js
function imageReceived() {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  canvas.width = downloadedImg.width;
  canvas.height = downloadedImg.height;
  canvas.innerText = downloadedImg.alt;

  context.drawImage(downloadedImg, 0, 0);
  imageBox.appendChild(canvas);

  try {
    localStorage.setItem("saved-image-example", canvas.toDataURL("image/png"));
  } catch (err) {
    console.error(`Error: ${err}`);
  }
}
```

`imageReceived()` wird aufgerufen, um das `"load"`-Event auf dem `HTMLImageElement` zu behandeln, das das heruntergeladene Bild erhält. Dieses Ereignis wird ausgelöst, sobald die heruntergeladenen Daten alle verfügbar sind. Es beginnt mit der Erstellung eines neuen {{HTMLElement("canvas")}}-Elements, das wir verwenden, um das Bild in eine Daten-URL zu konvertieren, und indem wir Zugriff auf den 2D-Zeichnungskontext des Canvas ([`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)) in der Variablen `context` erhalten.

Die Größe des Canvas wird angepasst, um dem empfangenen Bild zu entsprechen, der innere Text wird auf die Bildbeschreibung gesetzt, dann wird das Bild mit [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) in das Canvas gezeichnet. Das Canvas wird dann in das Dokument eingefügt, damit das Bild sichtbar ist.

Jetzt ist es an der Zeit, das Bild tatsächlich lokal zu speichern. Dazu verwenden wir den lokalen Speichermechanismus der Web Storage API, der über den globalen [`localStorage`](/de/docs/Web/API/Window/localStorage) zugänglich ist. Die Canvas-Methode [`toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) wird verwendet, um das Bild in eine data://-URL zu konvertieren, die ein PNG-Bild darstellt, das dann mit [`setItem()`](/de/docs/Web/API/Storage/setItem) im lokalen Speicher gespeichert wird.

## Siehe auch

- [Verwendung von Bilder von fremden Ursprüngen in WebGL und Chrome 13](https://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html)
- [HTML-Spezifikation - das `crossorigin`-Attribut](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-crossorigin)
- [Web Storage API](/de/docs/Web/API/Web_Storage_API)
