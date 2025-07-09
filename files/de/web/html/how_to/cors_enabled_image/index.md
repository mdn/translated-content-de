---
title: Verwendung von Cross-Origin-Bildern in einem Canvas
short-title: Verwendung von Cross-Origin-Bildern
slug: Web/HTML/How_to/CORS_enabled_image
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

HTML bietet ein [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin) Attribut für Bilder, das in Kombination mit einem passenden {{Glossary("CORS", "CORS")}} Header ermöglicht, dass Bilder, die mit dem {{ HTMLElement("img") }} Element definiert sind und von fremden Ursprüngen geladen wurden, in einem {{HTMLElement("canvas")}} verwendet werden können, als wären sie vom aktuellen Ursprung geladen.

Siehe [CORS-Einstellungsattribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für Details zur Verwendung des `crossorigin` Attributs.

## Sicherheit und belastete Canvases

Da die Pixel in einer Canvas-Bitmap aus verschiedenen Quellen stammen können, einschließlich von Bildern oder Videos, die von anderen Hosts abgerufen werden, ist es unvermeidlich, dass Sicherheitsprobleme auftreten können.

Sobald Sie in eine Canvas jegliche Daten zeichnen, die von einem anderen Ursprung ohne CORS-Genehmigung geladen wurden, wird die Canvas als **belastet** betrachtet. Eine belastete Canvas wird nicht mehr als sicher angesehen, und alle Versuche, Bilddaten von der Canvas zurückzugewinnen, führen dazu, dass eine Ausnahme ausgelöst wird.

Wenn die Quelle des fremden Inhalts ein HTML {{HTMLElement("img")}} oder SVG {{SVGElement("svg")}} Element ist, ist es nicht erlaubt, den Inhalt der Canvas abzurufen.

Wenn der fremde Inhalt aus einem Bild stammt, das entweder als [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder [`ImageBitMap`](/de/docs/Web/API/ImageBitmap) erhalten wurde, und die Bildquelle nicht den gleichen Ursprungsregeln entspricht, werden Versuche, den Inhalt der Canvas zu lesen, blockiert.

Ein Aufruf eines der folgenden auf einer belasteten Canvas führt zu einem Fehler:

- Aufrufen von [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) auf dem Kontext der Canvas
- Aufrufen von [`toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob), [`toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) oder [`captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream) auf dem {{HTMLElement("canvas")}} Element selbst

Versuche, eines dieser Methoden auszuführen, wenn die Canvas belastet ist, wird einen `SecurityError` auslösen. Dies schützt die Benutzer davor, dass private Daten durch die Verwendung von Bildern zum Abrufen von Informationen von entfernten Websites ohne Erlaubnis offengelegt werden.

## Speicherung eines Bildes von einem fremden Ursprung

In diesem Beispiel möchten wir erlauben, dass Bilder von einem fremden Ursprung abgerufen und im lokalen Speicher gespeichert werden. Dies erfordert die Konfiguration des Servers sowie das Schreiben von Code für die Website selbst.

### Webserver-Konfiguration

Das Erste, was wir benötigen, ist ein Server, der so konfiguriert ist, dass er Bilder mit dem {{HTTPHeader("Access-Control-Allow-Origin")}} Header hostet, der den Zugriff auf Bilddateien aus fremden Ursprungs erlaubt.

Nehmen wir an, wir betreiben unsere Website mit [Apache](https://httpd.apache.org/). Betrachten Sie die HTML5 Boilerplate [Apache Server-Konfigurationsdatei für CORS-Bilder](https://github.com/h5bp/server-configs-apache/blob/main/h5bp/cross-origin/images.conf), die unten gezeigt wird:

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

Kurz gesagt, konfiguriert dies den Server so, dass Grafikdateien (solche mit den Extensions ".bmp", ".cur", ".gif", ".ico", ".jpg", ".jpeg", ".png", ".svg", ".svgz" und ".webp") von überall im Internet Cross-Origin zugegriffen werden können.

### Implementierung der Speicherfunktion

Nun, da der Server so konfiguriert wurde, dass das Abrufen der Bilder Cross-Origin erlaubt ist, können wir den Code schreiben, der es dem Benutzer ermöglicht, sie im [lokalen Speicher](/de/docs/Web/API/Web_Storage_API) zu speichern, als ob sie von derselben Domain bereitgestellt worden wären, auf der der Code ausgeführt wird.

Der Schlüssel dazu ist die Verwendung des [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin) Attributs, indem [`crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin) auf dem [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) gesetzt wird, in das das Bild geladen wird. Dies weist den Browser an, beim Herunterladen der Bilddaten Cross-Origin-Zugriff anzufordern.

#### Starten des Downloads

Der Code, der den Download startet (beispielsweise wenn der Benutzer auf einen "Download"-Button klickt), sieht so aus:

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

Wir verwenden hier eine fest codierte URL (`imageURL`) und die zugehörige Beschreibung (`imageDescription`), aber diese könnten leicht von überall herkommen. Um den Bild-Download zu starten, erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Objekt mit dem [`Image()`](/de/docs/Web/API/HTMLImageElement/Image) Konstruktor. Das Bild wird dann konfiguriert, um Cross-Origin-Downloads zu erlauben, indem sein `crossOrigin` Attribut auf `"anonymous"` gesetzt wird (d.h. erlauben nicht-authentifizierte Downloads des Bildes Cross-Origin). Ein Event-Listener wird hinzugefügt für das [`load`](/de/docs/Web/API/Window/load_event) Ereignis, das auf das Bild-Element ausgelöst wird, was bedeutet, dass die Bilddaten empfangen wurden. Alternativtext wird dem Bild hinzugefügt; während `<canvas>` das `alt` Attribut nicht unterstützt, kann der Wert verwendet werden, um ein `aria-label` oder den inneren Inhalt des Canvas zu setzen.

Schließlich wird das [`src`](/de/docs/Web/API/HTMLImageElement/src) Attribut des Bildes auf die URL des zu herunterladenden Bildes gesetzt; dies löst den Beginn des Downloads aus.

#### Empfangen und Speichern des Bildes

Der Code, der das neu heruntergeladene Bild handhabt, befindet sich in der `imageReceived()` Methode:

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

`imageReceived()` wird aufgerufen, um das `"load"` Ereignis auf dem `HTMLImageElement` zu handhaben, das das heruntergeladene Bild empfängt. Dieses Ereignis wird ausgelöst, sobald die heruntergeladenen Daten vollständig verfügbar sind. Es beginnt mit dem Erstellen eines neuen {{HTMLElement("canvas")}} Elements, das wir verwenden, um das Bild in eine Daten-URL zu konvertieren, und durch Zugriff auf den 2D-Zeichenkontext der Canvas ([`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)) in der Variable `context`.

Die Größe der Canvas wird angepasst, um dem empfangenen Bild zu entsprechen, der innere Text wird zur Bildbeschreibung eingestellt, dann wird das Bild in die Canvas mit [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) gezeichnet. Die Canvas wird dann in das Dokument eingefügt, sodass das Bild sichtbar ist.

Jetzt ist es Zeit, das Bild tatsächlich lokal zu speichern. Dazu verwenden wir den lokalen Speichermechanismus der Web Storage API, der über den globalen [`localStorage`](/de/docs/Web/API/Window/localStorage) zugegriffen wird. Die Canvas-Methode [`toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) wird verwendet, um das Bild in eine data:// URL zu konvertieren, die ein PNG-Bild darstellt, das dann mit [`setItem()`](/de/docs/Web/API/Storage/setItem) im lokalen Speicher gespeichert wird.

## Siehe auch

- [Verwendung von Cross-Domain-Bildern in WebGL und Chrome 13](https://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html)
- [HTML-Spezifikation - das `crossorigin` Attribut](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-crossorigin)
- [Web Storage API](/de/docs/Web/API/Web_Storage_API)
