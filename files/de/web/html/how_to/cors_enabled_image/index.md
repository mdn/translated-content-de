---
title: Anleitung zur Verwendung von <img> mit Cross-Origin-Bildern und <canvas>
short-title: So verwenden Sie Cross-Origin-Bilder
slug: Web/HTML/How_to/CORS_enabled_image
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

HTML stellt ein [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin) Attribut für Bilder bereit, das in Kombination mit einem entsprechenden {{Glossary("CORS", "CORS")}}-Header es ermöglicht, Bilder, die durch das {{ HTMLElement("img") }} Element definiert sind und von fremden Ursprüngen geladen werden, in einem {{HTMLElement("canvas")}} zu verwenden, als wären sie vom aktuellen Ursprung geladen.

Sehen Sie sich [CORS-Einstellungsattribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) an, um zu erfahren, wie das `crossorigin`-Attribut verwendet wird.

## Sicherheit und kontaminierte Canvas-Elemente

Da die Pixel in einem Bitmap eines Canvas aus verschiedenen Quellen stammen können, einschließlich Bilder oder Videos, die von anderen Hosts abgerufen werden, ist es unvermeidlich, dass Sicherheitsprobleme auftreten können.

Sobald Sie in ein Canvas Daten einfügen, die ohne CORS-Zulassung von einem anderen Ursprung geladen wurden, wird das Canvas **kontaminiert**. Ein kontaminiertes Canvas wird als nicht mehr sicher angesehen, und jeder Versuch, Bilddaten zurück vom Canvas abzurufen, führt zu einer Exception.

Wenn die Quelle des fremden Inhalts ein HTML {{HTMLElement("img")}} oder SVG {{SVGElement("svg")}} Element ist, ist der Versuch, die Inhalte des Canvas abzurufen, nicht erlaubt.

Wenn der fremde Inhalt aus einem Bild stammt, das entweder als [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder [`ImageBitMap`](/de/docs/Web/API/ImageBitmap) erhalten wurde und die Bildquelle nicht die Regeln desselben Ursprungs erfüllt, werden Versuche, die Inhalte des Canvas zu lesen, blockiert.

Der Aufruf der folgenden Methoden auf einem kontaminierten Canvas führt zu einem Fehler:

- Aufrufen von [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) auf dem Kontext des Canvas
- Aufrufen von [`toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob), [`toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) oder [`captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream) auf dem {{HTMLElement("canvas")}} Element selbst

Der Versuch, eines dieser Dinge zu tun, wenn das Canvas kontaminiert ist, wird dazu führen, dass ein `SecurityError` ausgelöst wird. Dies schützt Benutzer davor, dass private Daten durch die Verwendung von Bildern zum Abrufen von Informationen von entfernten Websites ohne Erlaubnis offengelegt werden.

## Speichern eines Bildes von einem fremden Ursprung

In diesem Beispiel möchten wir erlauben, Bilder von einem fremden Ursprung abzurufen und im lokalen Speicher zu speichern. Die Implementierung erfordert die Konfiguration des Servers sowie das Schreiben von Code für die Website selbst.

### Konfiguration des Webservers

Das Erste, was wir benötigen, ist ein Server, der so konfiguriert ist, dass er Bilder mit dem konfigurierten {{HTTPHeader("Access-Control-Allow-Origin")}} Header hostet, um den Cross-Origin-Zugriff auf Bilddateien zu erlauben.

Nehmen wir an, wir stellen unsere Seite mit [Apache](https://httpd.apache.org/) bereit. Betrachten Sie die [Apache-Serverkonfigurationsdatei für CORS-Bilder](https://github.com/h5bp/server-configs-apache/blob/main/h5bp/cross-origin/images.conf) von HTML5 Boilerplate, wie unten gezeigt:

```xml
<IfModule mod_setenvif.c>
  <IfModule mod_headers.c>
    <FilesMatch "\.(avifs?|bmp|cur|gif|ico|jpe?g|jxl|a?png|svgz?|webp)$">
      SetEnvIf Origin ":" IS_CORS
      Header set Access-Control-Allow-Origin "*" env=IS_CORS
    </FilesMatch>
  </IfModule>
</IfModule>
```

Kurz gesagt, dies konfiguriert den Server so, dass Grafikdateien (jene mit den Erweiterungen ".bmp", ".cur", ".gif", ".ico", ".jpg", ".jpeg", ".png", ".svg", ".svgz" und ".webp") von überall im Internet Cross-Origin abgerufen werden können.

### Implementierung der Speicherfunktion

Nachdem der Server so konfiguriert wurde, dass er den Abruf der Bilder Cross-Origin erlaubt, können wir den Code schreiben, der es dem Benutzer erlaubt, sie im [lokalen Speicher](/de/docs/Web/API/Web_Storage_API) zu speichern, als ob sie vom gleichen Domain-Standort bereitgestellt würden, auf dem der Code läuft.

Der Schlüssel ist die Verwendung des [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin) Attributs, indem `crossOrigin` auf dem [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) gesetzt wird, in das das Bild geladen werden soll. Dies teilt dem Browser mit, beim Herunterladen der Bilddaten Zugriff über Cross-Origin anzufordern.

#### Start des Downloads

Der Code, der den Download startet (zum Beispiel, wenn der Benutzer auf eine "Download"-Schaltfläche klickt), sieht so aus:

```js
function startDownload() {
  let imageURL =
    "https://cdn.glitch.com/4c9ebeb9-8b9a-4adc-ad0a-238d9ae00bb5%2Fmdn_logo-only_color.svg?1535749917189";
  let imageDescription = "The Mozilla logo";

  downloadedImg = new Image();
  downloadedImg.crossOrigin = "anonymous";
  downloadedImg.addEventListener("load", imageReceived, false);
  downloadedImg.alt = imageDescription;
  downloadedImg.src = imageURL;
}
```

Wir verwenden hier eine fest codierte URL (`imageURL`) und zugehörigen beschreibenden Text (`imageDescription`), aber das könnte leicht von überall herkommen. Um mit dem Herunterladen des Bildes zu beginnen, erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Objekt mit dem [`Image()`](/de/docs/Web/API/HTMLImageElement/Image) Konstruktor. Das Bild wird dann so konfiguriert, dass es das Herunterladen über Cross-Origin durch Setzen seines `crossOrigin` Attributs auf `"anonymous"` (d. h. erlaubt nicht authentifiziertes Herunterladen des Bildes über Cross-Origin) erlaubt. Ein Event-Listener wird für das [`load`](/de/docs/Web/API/Window/load_event) Ereignis hinzugefügt, das auf dem Bild-Element ausgelöst wird, was bedeutet, dass die Bilddaten empfangen wurden. Alternativer Text wird dem Bild hinzugefügt; da `<canvas>` das `alt` Attribut nicht unterstützt, kann der Wert verwendet werden, um ein `aria-label` oder den inneren Inhalt des Canvas zu setzen.

Schließlich wird das [`src`](/de/docs/Web/API/HTMLImageElement/src) Attribut des Bildes auf die URL des herunterzuladenden Bildes gesetzt; dies löst den Beginn des Downloads aus.

#### Empfang und Speicherung des Bildes

Der Code, der das neu heruntergeladene Bild behandelt, befindet sich in der `imageReceived()` Methode:

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

`imageReceived()` wird aufgerufen, um das `"load"` Ereignis auf dem `HTMLImageElement`, das das heruntergeladene Bild erhält, zu behandeln. Dieses Ereignis wird ausgelöst, sobald die heruntergeladenen Daten verfügbar sind. Es beginnt mit der Erstellung eines neuen {{HTMLElement("canvas")}} Elements, das wir verwenden, um das Bild in eine Daten-URL zu konvertieren, und indem wir Zugriff auf den 2D-Zeichenkontext des Canvas ([`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)) in der Variablen `context` erhalten.

Die Größe des Canvas wird an das empfangene Bild angepasst, der innere Text wird auf die Bildbeschreibung gesetzt, dann wird das Bild mit [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) in das Canvas gezeichnet. Das Canvas wird dann in das Dokument eingefügt, sodass das Bild sichtbar ist.

Jetzt ist es an der Zeit, das Bild tatsächlich lokal zu speichern. Um dies zu tun, verwenden wir den lokalen Speichermechanismus der Web Storage API, auf den über das globale [`localStorage`](/de/docs/Web/API/Window/localStorage) zugegriffen wird. Die Canvas-Methode [`toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) wird verwendet, um das Bild in eine data:// URL zu konvertieren, die ein PNG-Bild darstellt, das dann im lokalen Speicher mithilfe von [`setItem()`](/de/docs/Web/API/Storage/setItem) gespeichert wird.

## Siehe auch

- [Using Cross-domain images in WebGL and Chrome 13](https://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html)
- [HTML Specification - the `crossorigin` attribute](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-crossorigin)
- [Web Storage API](/de/docs/Web/API/Web_Storage_API)
