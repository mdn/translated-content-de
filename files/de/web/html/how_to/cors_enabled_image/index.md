---
title: Verwenden Sie <img> mit cross-origin Bildern und <canvas>
short-title: Verwenden von cross-origin Bildern
slug: Web/HTML/How_to/CORS_enabled_image
l10n:
  sourceCommit: cd701f10306c8b0b9690532ff808df826818a04f
---

{{HTMLSidebar}}

HTML bietet ein [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin)-Attribut für Bilder, das in Kombination mit einem geeigneten {{Glossary("CORS", "CORS")}}-Header erlaubt, Bilder, die durch das {{ HTMLElement("img") }}-Element definiert werden und von fremden Ursprüngen geladen werden, in einem {{HTMLElement("canvas")}} zu verwenden, als wären sie vom aktuellen Ursprung geladen worden.

Details zur Verwendung des `crossorigin`-Attributs finden Sie unter [CORS Attributeinstellungen](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

## Sicherheit und kontaminierte Leinwände

Da die Pixel in einer Bitmap-Leinwand aus verschiedenen Quellen stammen können, einschließlich Bildern oder Videos, die von anderen Hosts abgerufen wurden, ist es unvermeidlich, dass Sicherheitsprobleme auftreten können.

Sobald Sie irgendeine Daten, die von einem anderen Ursprung ohne CORS-Genehmigung geladen wurden, in eine Leinwand zeichnen, wird die Leinwand **kontaminiert**. Eine kontaminierte Leinwand wird nicht mehr als sicher betrachtet, und jeder Versuch, Bilddaten von der Leinwand zurückzugewinnen, wird eine Ausnahme auslösen.

Wenn die Quelle des fremden Inhalts ein HTML {{HTMLElement("img")}}- oder SVG {{SVGElement("svg")}}-Element ist, ist es nicht erlaubt, die Inhalte der Leinwand zu abrufen.

Wenn der fremde Inhalt aus einem Bild stammt, das entweder als [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder [`ImageBitMap`](/de/docs/Web/API/ImageBitmap) abgerufen wurde, und die Bildquelle die gleichen Ursprungsregeln nicht erfüllt, werden Versuche, die Inhalte der Leinwand zu lesen, blockiert.

Ein Aufruf eines der folgenden Methoden auf eine kontaminierte Leinwand führt zu einem Fehler:

- Aufrufen von [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) auf dem Kontext der Leinwand
- Aufrufen von [`toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob), [`toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) oder [`captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream) auf dem {{HTMLElement("canvas")}}-Element selbst

Der Versuch, eine dieser Methoden aufzurufen, während die Leinwand kontaminiert ist, wird einen `SecurityError` auslösen. Dies schützt Benutzer davor, dass private Daten exponiert werden, indem Bilder verwendet werden, um Informationen von entfernten Websites ohne Erlaubnis zu ziehen.

## Speichern eines Bildes von einem fremden Ursprung

In diesem Beispiel möchten wir erlauben, dass Bilder von einem fremden Ursprung abgerufen und im lokalen Speicher gespeichert werden. Dies erfordert die Konfiguration des Servers sowie das Schreiben des Codes für die Website selbst.

### Webserver-Konfiguration

Das erste, was wir benötigen, ist ein Server, der so konfiguriert ist, dass er Bilder mit dem {{HTTPHeader("Access-Control-Allow-Origin")}}-Header hostet, der konfiguriert ist, um den Zugriff auf Bilddateien über Ursprungsgrenzen hinweg zu erlauben.

Nehmen wir an, wir bedienen unsere Seite mit [Apache](https://httpd.apache.org/). Betrachten Sie die HTML5 Boilerplate [Apache Server-Konfigurationsdatei für CORS-Bilder](https://github.com/h5bp/server-configs-apache/blob/main/h5bp/cross-origin/images.conf), die unten gezeigt ist:

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

Kurz gesagt, diese Konfiguration erlaubt es, dass Grafikdateien (die mit den Erweiterungen ".bmp", ".cur", ".gif", ".ico", ".jpg", ".jpeg", ".png", ".svg", ".svgz" und ".webp") über Ursprungsgrenzen hinweg von überall im Internet abgerufen werden können.

### Implementierung der Speicherfunktion

Nachdem der Server so konfiguriert wurde, dass er die Bildabfrage über Ursprungsgrenzen hinweg erlaubt, können wir den Code schreiben, der dem Benutzer das Speichern dieser Bilder im [lokalen Speicher](/de/docs/Web/API/Web_Storage_API) ermöglicht, als würden sie vom gleichen Domain bedient, auf der der Code ausgeführt wird.

Der Schlüssel ist die Verwendung des [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin)-Attributs, indem [`crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin) am [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) gesetzt wird, in das das Bild geladen wird. Dies teilt dem Browser mit, dass er beim Herunterladen der Bilddaten cross-origin Zugang anfordern soll.

#### Starten des Downloads

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

Wir verwenden hier eine fest codierte URL (`imageURL`) und zugehörigen beschreibenden Text (`imageDescription`), aber das könnte leicht von überall herkommen. Um den Bilddownload zu starten, erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt durch Verwendung des [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)-Konstruktors. Das Bild wird dann so konfiguriert, dass cross-origin Downloads erlaubt werden, indem das `crossOrigin`-Attribut auf `"anonymous"` gesetzt wird (das heißt, nicht authentifiziertes Herunterladen des Bildes cross-origin erlauben). Ein Ereignis-Listener wird für das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis am Bildelement hinzugefügt, was bedeutet, dass die Bilddaten empfangen wurden. Alternativtext wird dem Bild hinzugefügt; während `<canvas>` das `alt`-Attribut nicht unterstützt, kann der Wert verwendet werden, um ein `aria-label` oder den inneren Inhalt der Leinwand zu setzen.

Schließlich wird das [`src`](/de/docs/Web/API/HTMLImageElement/src)-Attribut des Bildes auf die URL des herunterzuladenden Bildes gesetzt; dies löst den Beginn des Downloads aus.

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

`imageReceived()` wird aufgerufen, um das `"load"`-Ereignis auf dem `HTMLImageElement` zu verarbeiten, das das heruntergeladene Bild erhält. Dieses Ereignis wird ausgelöst, sobald die heruntergeladenen Daten vollständig verfügbar sind. Es beginnt mit der Erstellung eines neuen {{HTMLElement("canvas")}}-Elements, das wir verwenden, um das Bild in eine Daten-URL zu konvertieren, und indem der Zugriff auf den 2D-Zeichenkontext der Leinwand ([`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)) in der Variable `context` erhalten wird.

Die Größe der Leinwand wird an das empfangene Bild angepasst, der innere Text wird auf die Bildbeschreibung gesetzt, dann wird das Bild mit [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) in die Leinwand gezeichnet. Die Leinwand wird dann in das Dokument eingefügt, sodass das Bild sichtbar ist.

Jetzt ist es Zeit, das Bild tatsächlich lokal zu speichern. Dazu verwenden wir den lokalen Speichermodus der Web Storage API, auf die durch die globale [`localStorage`](/de/docs/Web/API/Window/localStorage) zugegriffen wird. Die Leinwandmethode [`toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) wird verwendet, um das Bild in eine data:// URL zu konvertieren, die ein PNG-Bild darstellt, das dann mit [`setItem()`](/de/docs/Web/API/Storage/setItem) im lokalen Speicher gespeichert wird.

## Siehe auch

- [Verwendung von Cross-Domain-Bildern in WebGL und Chrome 13](https://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html)
- [HTML-Spezifikation - das `crossorigin`-Attribut](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-crossorigin)
- [Web Storage API](/de/docs/Web/API/Web_Storage_API)
