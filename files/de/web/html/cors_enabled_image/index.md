---
title: Erlauben grenzüberschreitender Nutzung von Bildern und Canvas
slug: Web/HTML/CORS_enabled_image
l10n:
  sourceCommit: 5afc72ba4e64ba90815d6a435a5300fd77d11fdf
---

{{HTMLSidebar}}

HTML bietet ein [`crossorigin`](/de/docs/Web/HTML/Element/img#crossorigin)-Attribut für Bilder an, das in Kombination mit einem geeigneten {{Glossary("CORS")}}-Header ermöglicht, dass Bilder, die durch das {{ HTMLElement("img") }}-Element definiert und aus fremden Ursprüngen geladen werden, in einem {{HTMLElement("canvas")}} verwendet werden können, als ob sie vom aktuellen Ursprung geladen worden wären.

Siehe [CORS-Attribut-Einstellungen](/de/docs/Web/HTML/Attributes/crossorigin) für weitere Details zur Verwendung des `crossorigin`-Attributs.

## Sicherheit und verfälschte Canvas

Da die Pixel in einer Canvas-Bitmap aus verschiedenen Quellen stammen können, einschließlich Bilder oder Videos, die von anderen Hosts abgerufen werden, ist es unvermeidlich, dass Sicherheitsprobleme auftreten können.

Sobald Sie in eine Canvas Daten einfügen, die ohne CORS-Zustimmung aus einem anderen Ursprung geladen wurden, wird die Canvas als **verfälscht** betrachtet. Eine verfälschte Canvas wird nicht mehr als sicher angesehen, und jeder Versuch, Bilddaten aus der Canvas abzurufen, wird eine Ausnahme auslösen.

Wenn die Quelle des fremden Inhalts ein HTML {{HTMLElement("img")}}- oder SVG {{SVGElement("svg")}}-Element ist, ist der Versuch, die Inhalte der Canvas abzurufen, nicht gestattet.

Wenn der fremde Inhalt von einem Bild stammt, das entweder aus {{domxref("HTMLCanvasElement")}} oder {{domxref("ImageBitMap")}} bezogen wurde, und die Bildquelle nicht den gleichen Ursprungsregeln entspricht, werden Versuche, den Inhalt der Canvas zu lesen, blockiert.

Aufrufen eines der folgenden Methoden auf einer verfälschten Canvas wird zu einem Fehler führen:

- Aufruf von {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}} auf dem Canvas-Kontext
- Aufruf von {{domxref("HTMLCanvasElement.toBlob", "toBlob()")}}, {{domxref("HTMLCanvasElement.toDataURL", "toDataURL()")}} oder {{domxref("HTMLCanvasElement.captureStream", "captureStream()")}} auf dem {{HTMLElement("canvas")}}-Element selbst

Versuche, diese durchzuführen, wenn die Canvas verfälscht ist, werden einen `SecurityError` auslösen. Dies schützt die Benutzer davor, dass private Daten ohne Erlaubnis durch die Nutzung von Bildern von entfernten Websites preisgegeben werden.

## Speichern eines Bildes aus einem fremden Ursprung

In diesem Beispiel möchten wir erlauben, dass Bilder aus einem fremden Ursprung abgerufen und im lokalen Speicher gespeichert werden können. Die Umsetzung erfordert die Konfiguration des Servers sowie das Schreiben von Code für die Website selbst.

### Web-Server-Konfiguration

Als erstes benötigen wir einen Server, der konfiguriert ist, um Bilder mit dem {{HTTPHeader("Access-Control-Allow-Origin")}}-Header zu hosten, der den grenzüberschreitenden Zugriff auf Bilddateien erlaubt.

Angenommen, wir betreiben unsere Website mit [Apache](https://httpd.apache.org/). Beachten Sie die HTML5 Boilerplate [Apache-Server-Konfigurationsdatei für CORS-Bilder](https://github.com/h5bp/server-configs-apache/blob/main/h5bp/cross-origin/images.conf), die unten dargestellt ist:

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

Kurz gesagt, konfiguriert dies den Server so, dass Grafikdateien (mit den Erweiterungen ".bmp", ".cur", ".gif", ".ico", ".jpg", ".jpeg", ".png", ".svg", ".svgz" und ".webp") von überall im Internet grenzüberschreitend zugegriffen werden können.

### Implementierung der Speicherfunktion

Nachdem der Server so konfiguriert wurde, dass Bilder grenzüberschreitend abgerufen werden können, können wir den Code schreiben, der es dem Benutzer ermöglicht, sie im [lokalen Speicher](/de/docs/Web/API/Web_Storage_API) zu speichern, als ob sie vom selben Domain-Dienst bereitgestellt würden, auf dem der Code ausgeführt wird.

Der Schlüssel ist die Verwendung des [`crossorigin`](/de/docs/Web/HTML/Element/img#crossorigin)-Attributs, indem {{domxref("HTMLImageElement.crossOrigin", "crossOrigin")}} auf dem {{domxref("HTMLImageElement")}} gesetzt wird, in den das Bild geladen wird. Dies teilt dem Browser mit, beim Herunterladen des Bildes grenzüberschreitenden Zugriff anzufordern.

#### Starten des Downloads

Der Code, der den Download startet (zum Beispiel, wenn der Benutzer auf einen "Download"-Button klickt), sieht wie folgt aus:

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

Wir verwenden hier eine fest codierte URL (`imageURL`) und zugehörigen beschreibenden Text (`imageDescription`), aber das könnte leicht von überall kommen. Um mit dem Herunterladen des Bildes zu beginnen, erstellen wir ein neues {{domxref("HTMLImageElement")}}-Objekt durch die Verwendung des {{domxref("HTMLImageElement.Image", "Image()")}}-Konstruktors. Das Bild wird dann so konfiguriert, dass das Herunterladen über Kreuz erlaubt wird, indem sein `crossOrigin`-Attribut auf `"anonymous"` gesetzt wird (d.h. das nicht authentifizierte Herunterladen des Bildes über Kreuz erlauben). Ein Ereignislistener wird für das {{domxref("Window/load_event", "load")}}-Ereignis hinzugefügt, das auf dem Bild-Element ausgelöst wird, was bedeutet, dass die Bilddaten empfangen wurden. Alternativer Text wird dem Bild hinzugefügt; obwohl `<canvas>` das `alt`-Attribut nicht unterstützt, kann der Wert verwendet werden, um ein `aria-label` oder den inneren Inhalt der Canvas zu setzen.

Schließlich wird das {{domxref("HTMLImageElement.src", "src")}}-Attribut des Bildes auf die URL des Bildes gesetzt, das heruntergeladen werden soll; dies löst den Beginn des Downloads aus.

#### Empfangen und Speichern des Bildes

Der Code, der das neu heruntergeladene Bild handhabt, befindet sich in der Methode `imageReceived()`:

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

`imageReceived()` wird aufgerufen, um das `"load"`-Ereignis auf dem `HTMLImageElement` zu behandeln, das das heruntergeladene Bild empfängt. Dieses Ereignis wird ausgelöst, sobald alle heruntergeladenen Daten verfügbar sind. Es beginnt mit der Erstellung eines neuen {{HTMLElement("canvas")}}-Elements, das wir verwenden, um das Bild in eine Daten-URL umzuwandeln, und durch den Zugriff auf den 2D-Zeichenkontext der Canvas ({{domxref("CanvasRenderingContext2D")}}) in der Variable `context`.

Die Größe der Canvas wird angepasst, um dem empfangenen Bild zu entsprechen, der innenstehende Text wird auf die Bildbeschreibung gesetzt, dann wird das Bild mit {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}} in die Canvas gezeichnet. Die Canvas wird dann ins Dokument eingefügt, damit das Bild sichtbar ist.

Jetzt ist es an der Zeit, das Bild tatsächlich lokal zu speichern. Dazu verwenden wir den lokalen Speichermechanismus der Web Storage API, der über den globalen {{domxref("Window.localStorage", "localStorage")}} zugegriffen wird. Die Canvas-Methode {{domxref("HTMLCanvasElement.toDataURL", "toDataURL()")}} wird verwendet, um das Bild in eine data://-URL umzuwandeln, die ein PNG-Bild darstellt, das dann über {{domxref("Storage.setItem", "setItem()")}} im lokalen Speicher gespeichert wird.

## Siehe auch

- [Verwendung von Cross-Domain-Bildern in WebGL und Chrome 13](https://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html)
- [HTML-Spezifikation - das `crossorigin`-Attribut](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-crossorigin)
- [Web Storage API](/de/docs/Web/API/Web_Storage_API)
