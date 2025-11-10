---
title: Verwenden von Cross-Origin-Bildern in einem Canvas
short-title: Verwendung von Cross-Origin-Bildern
slug: Web/HTML/How_to/CORS_enabled_image
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

HTML bietet ein `crossorigin`-Attribut für Bilder, das in Kombination mit einem geeigneten {{Glossary("CORS", "CORS")}}-Header ermöglicht, dass Bilder, die durch das {{ HTMLElement("img") }}-Element definiert und von fremden Ursprüngen geladen werden, in einem {{HTMLElement("canvas")}} verwendet werden können, als ob sie vom aktuellen Ursprung geladen worden wären.

Siehe [CORS-Einstellungen für Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für Details zur Verwendung des `crossorigin`-Attributs.

## Sicherheit und verfälschte Canvases

Da die Pixel in einem Canvas-Bitmap aus verschiedenen Quellen stammen können, einschließlich Bilder oder Videos, die von anderen Hosts abgerufen werden, ist es unvermeidlich, dass Sicherheitsprobleme auftreten können.

Sobald Sie in ein Canvas Daten einzeichnen, die von einem anderen Ursprung ohne CORS-Genehmigung geladen wurden, wird das Canvas **verfälscht**. Ein verfälschtes Canvas gilt nicht mehr als sicher, und jeder Versuch, Bilddaten aus dem Canvas zurückzugewinnen, führt zu einer Ausnahme.

Wenn die Quelle des fremden Inhalts ein HTML-{{HTMLElement("img")}}- oder SVG-{{SVGElement("svg")}}-Element ist, ist es nicht erlaubt, den Inhalt des Canvas abzurufen.

Wenn der fremde Inhalt von einem Bild stammt, das entweder als [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder [`ImageBitMap`](/de/docs/Web/API/ImageBitmap) gewonnen wurde und die Bildquelle nicht die Regeln des gleichen Ursprungs erfüllt, werden Versuche, den Inhalt des Canvas zu lesen, blockiert.

Der Aufruf eines der folgenden auf einem verfälschten Canvas führt zu einem Fehler:

- Aufruf von [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) im Canvas-Kontext
- Aufruf von [`toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob), [`toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) oder [`captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream) auf dem {{HTMLElement("canvas")}}-Element selbst

Der Versuch, eines dieser Methoden anzuwenden, wenn das Canvas verfälscht ist, wird einen `SecurityError` auslösen. Dies schützt Benutzer davor, dass private Daten offengelegt werden, indem Bilder verwendet werden, um Informationen von entfernten Websites ohne Erlaubnis zu ziehen.

## Speichern eines Bildes von einer fremden Quelle

In diesem Beispiel möchten wir Bilder von einer fremden Quelle abrufen und im lokalen Speicher speichern. Die Umsetzung dessen erfordert sowohl die Konfiguration des Servers als auch das Schreiben von Code für die Website selbst.

### Webserver-Konfiguration

Das Erste, was wir brauchen, ist ein Server, der so konfiguriert ist, dass er Bilder mit dem {{HTTPHeader("Access-Control-Allow-Origin")}}-Header hostet, der den Cross-Origin-Zugriff auf Bilddateien ermöglicht.

Nehmen wir an, wir betreiben unsere Seite mit [Apache](https://httpd.apache.org/). Betrachten Sie die HTML5 Boilerplate [Apache-Serverkonfigurationsdatei für CORS-Bilder](https://github.com/h5bp/server-configs-apache/blob/main/h5bp/cross-origin/images.conf), unten dargestellt:

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

Kurz gesagt, dies konfiguriert den Server, um Grafikdateien (mit den Erweiterungen ".bmp", ".cur", ".gif", ".ico", ".jpg", ".jpeg", ".png", ".svg", ".svgz" und ".webp") zuzugreifen, indem der Cross-Origin-Zugriff von überall im Internet gestattet wird.

### Implementierung der Speicherfunktion

Nachdem der Server nun so konfiguriert ist, dass das Abrufen der Bilder über Cross-Origin erlaubt ist, können wir den Code schreiben, der es dem Benutzer ermöglicht, sie im [lokalen Speicher](/de/docs/Web/API/Web_Storage_API) zu speichern, so, als ob sie von derselben Domain bereitgestellt würden, auf der der Code ausgeführt wird.

Der Schlüssel liegt darin, das `crossorigin`-Attribut zu verwenden, indem wir [`crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin) auf dem [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) setzen, in das das Bild geladen wird. Dies teilt dem Browser mit, dass bei der Bilddatenanforderung ein Cross-Origin-Zugriff angefordert werden soll.

#### Beginn des Downloads

Der Code, der den Download startet (zum Beispiel, wenn der Benutzer auf eine "Download"-Schaltfläche klickt), sieht so aus:

```js
function startDownload() {
  let imageURL = "https://mdn.github.io/shared-assets/images/examples/mdn.svg";
  let imageDescription = "Logo of a dinosaur in front of a map";

  downloadedImg = new Image();
  downloadedImg.crossOrigin = "anonymous";
  downloadedImg.addEventListener("load", imageReceived);
  downloadedImg.alt = imageDescription;
  downloadedImg.src = imageURL;
}
```

Wir verwenden hier eine fest codierte URL (`imageURL`) und einen zugehörigen beschreibenden Text (`imageDescription`), aber das könnte leicht von überall herkommen. Um mit dem Herunterladen des Bildes zu beginnen, erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt, indem wir den [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)-Konstruktor verwenden. Das Bild wird dann so konfiguriert, dass ein Cross-Origin-Download erlaubt ist, indem das Attribut `crossOrigin` auf `"anonymous"` (d.h. erlauben nicht authentifizierten Cross-Origin-Download des Bildes) gesetzt wird. Ein Ereignis-Listener wird zum [`load`](/de/docs/Web/API/Window/load_event)-Ereignis hinzugefügt, der auf das Bild-Element abgefeuert wird, was bedeutet, dass die Bilddaten empfangen wurden. Alternativer Text wird zum Bild hinzugefügt; obwohl `<canvas>` das `alt`-Attribut nicht unterstützt, kann der Wert verwendet werden, um ein `aria-label` oder den inneren Inhalt des Canvas zu setzen.

Schließlich wird das [`src`](/de/docs/Web/API/HTMLImageElement/src)-Attribut des Bildes auf die URL des herunterzuladenden Bildes gesetzt; dies löst den Beginn des Downloads aus.

#### Empfangen und Speichern des Bildes

Der Code, der das neu heruntergeladene Bild verarbeitet, ist in der Methode `imageReceived()` zu finden:

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

`imageReceived()` wird aufgerufen, um das `"load"`-Ereignis auf dem `HTMLImageElement` zu verarbeiten, das das heruntergeladene Bild empfängt. Dieses Ereignis wird ausgelöst, sobald die heruntergeladenen Daten vollständig verfügbar sind. Es beginnt mit der Erstellung eines neuen {{HTMLElement("canvas")}}-Elements, das wir verwenden, um das Bild in eine Data-URL zu konvertieren, und indem wir in der Variable `context` auf den 2D-Zeichenkontext des Canvas zugreifen ([`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)).

Die Größe des Canvas wird an das empfangene Bild angepasst, der innere Text wird auf die Bildbeschreibung gesetzt, dann wird das Bild unter Verwendung von [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) ins Canvas gezeichnet. Das Canvas wird dann ins Dokument eingefügt, damit das Bild sichtbar ist.

Jetzt ist es an der Zeit, das Bild tatsächlich lokal zu speichern. Dafür verwenden wir den lokalen Speichermodus der Web Storage API, der durch das globale [`localStorage`](/de/docs/Web/API/Window/localStorage) zugänglich ist. Die Canvas-Methode [`toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) wird verwendet, um das Bild in eine data:// URL zu konvertieren, die ein PNG-Bild repräsentiert, und es wird dann im lokalen Speicher mithilfe von [`setItem()`](/de/docs/Web/API/Storage/setItem) gespeichert.

## Siehe auch

- [Verwendung von Cross-Domain-Bildern in WebGL und Chrome 13](https://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html)
- [HTML-Spezifikation - das `crossorigin`-Attribut](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-crossorigin)
- [Web Storage API](/de/docs/Web/API/Web_Storage_API)
