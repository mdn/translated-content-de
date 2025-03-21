---
title: Erlauben der übergreifenden Verwendung von Bildern und Canvas
slug: Web/HTML/CORS_enabled_image
l10n:
  sourceCommit: 5afc72ba4e64ba90815d6a435a5300fd77d11fdf
---

{{HTMLSidebar}}

HTML bietet ein [`crossorigin`](/de/docs/Web/HTML/Element/img#crossorigin)-Attribut für Bilder, das in Kombination mit einem geeigneten {{Glossary("CORS", "CORS")}}-Header, ermöglicht, dass Bilder, die durch das {{ HTMLElement("img") }}-Element von fremden Ursprüngen geladen werden, in ein {{HTMLElement("canvas")}} integriert werden können, als ob sie vom aktuellen Ursprung geladen worden wären.

Details zur Verwendung des `crossorigin`-Attributs finden Sie unter [CORS-Einstellungsattribute](/de/docs/Web/HTML/Attributes/crossorigin).

## Sicherheit und beeinträchtigte Canvas-Elemente

Da die Pixel im Bitmap eines Canvas aus verschiedenen Quellen stammen können, einschließlich Bilder oder Videos von anderen Hosts, ist es unvermeidlich, dass Sicherheitsprobleme auftreten können.

Sobald Sie Daten, die von einem anderen Ursprung ohne CORS-Genehmigung geladen wurden, in ein Canvas zeichnen, wird es als **beeinträchtigt** betrachtet. Ein beeinträchtigtes Canvas gilt nicht mehr als sicher, und jeder Versuch, Bilddaten aus dem Canvas abzurufen, führt zu einer Ausnahme.

Wenn die Quelle des fremden Inhalts ein HTML {{HTMLElement("img")}}- oder SVG {{SVGElement("svg")}}-Element ist, ist der Versuch, den Inhalt des Canvas abzurufen, nicht erlaubt.

Wenn der fremde Inhalt aus einem Bild stammt, das entweder als [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder [`ImageBitMap`](/de/docs/Web/API/ImageBitmap) erhalten wurde und die Bildquelle nicht die gleichen Ursprungsregeln erfüllt, werden Versuche, die Inhalte des Canvas zu lesen, blockiert.

Ein Aufruf einer der folgenden Methoden auf ein beeinträchtigtes Canvas führt zu einem Fehler:

- Aufruf von [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) im Kontext des Canvas
- Aufruf von [`toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob), [`toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) oder [`captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream) auf dem {{HTMLElement("canvas")}}-Element selbst

Der Versuch, eines dieser Dinge zu tun, wenn das Canvas beeinträchtigt ist, wird einen `SecurityError` auslösen. Dies schützt Benutzer davor, dass private Daten durch die Verwendung von Bildern zur Informationsgewinnung von entfernten Websites ohne Erlaubnis offengelegt werden.

## Speichern eines Bildes von einem fremden Ursprung

In diesem Beispiel möchten wir zulassen, dass Bilder von einem fremden Ursprung abgerufen und im lokalen Speicher gespeichert werden. Die Umsetzung erfordert die Konfiguration des Servers sowie das Schreiben von Code für die Website selbst.

### Webserver-Konfiguration

Zunächst benötigen wir einen Server, der so konfiguriert ist, dass er Bilder mit dem {{HTTPHeader("Access-Control-Allow-Origin")}}-Header hostet, um den übergreifenden Zugriff auf Bilddateien zu ermöglichen.

Angenommen, wir betreiben unsere Website mit [Apache](https://httpd.apache.org/). Betrachten Sie die HTML5 Boilerplate [Apache-Server-Konfigurationsdatei für CORS-Bilder](https://github.com/h5bp/server-configs-apache/blob/main/h5bp/cross-origin/images.conf), die unten gezeigt wird:

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

Kurz gesagt, diese Konfiguration ermöglicht es, dass Grafikdateien (mit den Erweiterungen ".bmp", ".cur", ".gif", ".ico", ".jpg", ".jpeg", ".png", ".svg", ".svgz" und ".webp") von überall im Internet übergreifend zugänglich sind.

### Implementierung der Speicherfunktion

Nachdem der Server so konfiguriert wurde, dass er das Abrufen der Bilder übergreifend erlaubt, können wir den Code schreiben, der es dem Benutzer ermöglicht, sie im [lokalen Speicher](/de/docs/Web/API/Web_Storage_API) zu speichern, als ob sie vom gleichen Domain, auf dem der Code ausgeführt wird, bereitgestellt worden wären.

Der Schlüssel ist, das [`crossorigin`](/de/docs/Web/HTML/Element/img#crossorigin)-Attribut zu nutzen, indem Sie [`crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin) auf dem [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) setzen, in das das Bild geladen wird. Dies teilt dem Browser mit, beim Herunterladen der Bilddaten übergreifenden Zugriff anzufordern.

#### Starten des Downloads

Der Code, der den Download startet (zum Beispiel, wenn der Benutzer auf einen "Download"-Button klickt), sieht so aus:

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

Wir verwenden hier eine fest codierte URL (`imageURL`) und zugehörigen beschreibenden Text (`imageDescription`), aber das könnte leicht von überall her kommen. Um das Herunterladen des Bildes zu beginnen, erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt, indem wir den [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)-Konstruktor verwenden. Das Bild wird dann so konfiguriert, dass es übergreifendes Herunterladen erlaubt, indem sein `crossOrigin`-Attribut auf `"anonymous"` gesetzt wird (d.h. nicht authentifiziertes Herunterladen des Bildes übergreifend erlauben). Ein Event-Listener wird für das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis hinzugefügt, das auf das Bildelement ausgelöst wird, was bedeutet, dass die Bilddaten empfangen wurden. Alternativer Text wird dem Bild hinzugefügt; während `<canvas>` das `alt`-Attribut nicht unterstützt, kann der Wert verwendet werden, um ein `aria-label` oder den inneren Inhalt des Canvas festzulegen.

Schließlich wird das [`src`](/de/docs/Web/API/HTMLImageElement/src)-Attribut des Bildes auf die URL des herunterzuladenden Bildes gesetzt; dies löst den Download aus.

#### Empfang und Speicherung des Bildes

Der Code, der das neu heruntergeladene Bild verarbeitet, findet sich in der `imageReceived()`-Methode:

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

`imageReceived()` wird aufgerufen, um das `"load"`-Ereignis auf dem `HTMLImageElement`, das das heruntergeladene Bild empfängt, zu verarbeiten. Dieses Ereignis wird ausgelöst, sobald die heruntergeladenen Daten vollständig verfügbar sind. Es beginnt mit der Erstellung eines neuen {{HTMLElement("canvas")}}-Elements, das wir verwenden, um das Bild in eine Daten-URL zu konvertieren, und indem auf den 2D-Zeichnungskontext des Canvas ([`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)) in der Variablen `context` zugegriffen wird.

Die Größe des Canvas wird angepasst, um zum empfangenen Bild zu passen, der innere Text wird auf die Bildbeschreibung gesetzt, dann wird das Bild mit [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) in das Canvas gezeichnet. Das Canvas wird dann ins Dokument eingefügt, sodass das Bild sichtbar ist.

Jetzt ist es an der Zeit, das Bild tatsächlich lokal zu speichern. Dazu nutzen wir den Mechanismus für lokalen Speicher der Web Storage API, auf den über die globale [`localStorage`](/de/docs/Web/API/Window/localStorage) zugegriffen wird. Die Canvas-Methode [`toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) wird verwendet, um das Bild in eine data://-URL zu konvertieren, die ein PNG-Bild darstellt, welches dann in den lokalen Speicher mit [`setItem()`](/de/docs/Web/API/Storage/setItem) gespeichert wird.

## Siehe auch

- [Using Cross-domain images in WebGL and Chrome 13](https://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html)
- [HTML Spezifikation - das `crossorigin` Attribut](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-crossorigin)
- [Web Storage API](/de/docs/Web/API/Web_Storage_API)
