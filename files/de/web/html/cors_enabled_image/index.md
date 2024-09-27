---
title: Zulassen der Cross-Origin-Verwendung von Bildern und Canvas
slug: Web/HTML/CORS_enabled_image
l10n:
  sourceCommit: 5afc72ba4e64ba90815d6a435a5300fd77d11fdf
---

{{HTMLSidebar}}

HTML bietet ein [`crossorigin`](/de/docs/Web/HTML/Element/img#crossorigin)-Attribut für Bilder, das in Kombination mit einem geeigneten [CORS](/de/docs/Glossary/CORS)-Header erlaubt, dass Bilder, die durch das {{ HTMLElement("img") }}-Element definiert sind und von fremden Ursprüngen geladen werden, in einem {{HTMLElement("canvas")}} verwendet werden können, als ob sie vom aktuellen Ursprung geladen worden wären.

Siehe [CORS Einstellungen Attribute](/de/docs/Web/HTML/Attributes/crossorigin) für Details zur Nutzung des `crossorigin`-Attributs.

## Sicherheit und veränderte Canvas

Da die Pixel in einer Bitmap eines Canvas aus verschiedenen Quellen stammen können, einschließlich Bilder oder Videos, die von anderen Hosts abgerufen werden, ist es unvermeidlich, dass Sicherheitsprobleme auftreten können.

Sobald Sie Daten, die ohne CORS-Zustimmung von einem anderen Ursprung geladen wurden, in ein Canvas zeichnen, wird das Canvas **verändert**. Ein verändertes Canvas gilt nicht mehr als sicher, und jeder Versuch, Bilddaten von dem Canvas zurückzugewinnen, führt dazu, dass eine Ausnahme ausgelöst wird.

Wenn die Quelle des fremden Inhalts ein HTML {{HTMLElement("img")}}- oder SVG {{SVGElement("svg")}}-Element ist, ist es nicht erlaubt, die Inhalte des Canvas abzurufen.

Stammen die fremden Inhalte aus einem Bild, das entweder als [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder [`ImageBitMap`](/de/docs/Web/API/ImageBitMap) erhalten wurde, und die Bildquelle entspricht nicht den gleichen Ursprungsregeln, werden Versuche, die Inhalte des Canvas zu lesen, blockiert.

Ein Aufruf einer der folgenden Methoden auf einem veränderten Canvas führt zu einem Fehler:

- Aufruf von [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) auf dem Canvas-Kontext
- Aufruf von [`toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob), [`toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) oder [`captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream) auf dem {{HTMLElement("canvas")}}-Element selbst

Der Versuch, eine dieser Methoden auf einem veränderten Canvas auszuführen, führt zu einem `SecurityError`. Dies schützt die Benutzer davor, dass private Daten durch die Verwendung von Bildern, um ohne Erlaubnis Informationen von entfernten Websites abzurufen, freigelegt werden.

## Speichern eines Bildes von einem fremden Ursprung

In diesem Beispiel möchten wir erlauben, dass Bilder von einem fremden Ursprung abgerufen und im lokalen Speicher gespeichert werden können. Dies erfordert sowohl die Konfiguration des Servers als auch das Schreiben von Code für die Website selbst.

### Webserver-Konfiguration

Das Erste, was wir benötigen, ist ein Server, der so konfiguriert ist, dass er Bilder mit dem {{HTTPHeader("Access-Control-Allow-Origin")}}-Header hostet, der den Cross-Origin-Zugriff auf Bilddateien erlaubt.

Angenommen, wir verwenden [Apache](https://httpd.apache.org/) für unsere Website. Betrachten Sie die HTML5 Boilerplate [Apache-Serverkonfigurationsdatei für CORS-Bilder](https://github.com/h5bp/server-configs-apache/blob/main/h5bp/cross-origin/images.conf), die unten gezeigt wird:

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

Kurz gesagt, dies konfiguriert den Server, um Grafikdateien (die mit den Erweiterungen ".bmp", ".cur", ".gif", ".ico", ".jpg", ".jpeg", ".png", ".svg", ".svgz" und ".webp") von überall im Internet Cross-Origin zugänglich zu machen.

### Implementierung der Speichern-Funktion

Da der Server jetzt so konfiguriert ist, dass er den Abruf der Bilder Cross-Origin erlaubt, können wir den Code schreiben, der dem Benutzer erlaubt, sie im [lokalen Speicher](/de/docs/Web/API/Web_Storage_API) zu speichern, als ob sie vom gleichen Domain-Dienst bereitgestellt würden, von dem der Code ausgeführt wird.

Der Schlüssel besteht darin, das [`crossorigin`](/de/docs/Web/HTML/Element/img#crossorigin)-Attribut zu verwenden, indem [`crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin) auf dem [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) gesetzt wird, in das das Bild geladen wird. Dies teilt dem Browser mit, beim Herunterladen der Bilddaten Cross-Origin-Zugriff anzufordern.

#### Starten des Downloads

Der Code, der den Download startet (zum Beispiel, wenn der Benutzer auf eine Schaltfläche "Download" klickt), sieht so aus:

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

Wir verwenden hier eine fest codierte URL (`imageURL`) und zugehörigen beschreibenden Text (`imageDescription`), aber das könnte leicht von überall herkommen. Um den Bild-Download zu starten, erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt, indem wir den [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)-Konstruktor verwenden. Das Bild wird dann konfiguriert, um Cross-Origin-Downloads durch das Setzen seines `crossOrigin`-Attributs auf `"anonymous"` zu erlauben (das heißt, nicht-authentifiziertes Herunterladen des Bildes Cross-Origin zu erlauben). Ein Event-Listener wird für das [`load`](/de/docs/Web/API/Window/load_event)-Event hinzugefügt, welches auf dem Bildelement ausgelöst wird, was bedeutet, dass die Bilddaten empfangen wurden. Alternativer Text wird dem Bild hinzugefügt; während `<canvas>` das `alt`-Attribut nicht unterstützt, kann der Wert verwendet werden, um ein `aria-label` oder den inneren Inhalt des Canvas zu setzen.

Schließlich wird das [`src`](/de/docs/Web/API/HTMLImageElement/src)-Attribut des Bildes auf die URL des herunterzuladenden Bildes gesetzt; dies löst den Start des Downloads aus.

#### Empfangen und Speichern des Bildes

Der Code, der mit dem neu heruntergeladenen Bild umgeht, befindet sich in der Methode `imageReceived()`:

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

`imageReceived()` wird aufgerufen, um das `"load"`-Event auf dem `HTMLImageElement` zu behandeln, das das heruntergeladene Bild erhält. Dieses Event wird ausgelöst, sobald die heruntergeladenen Daten vollständig verfügbar sind. Es beginnt mit der Erstellung eines neuen {{HTMLElement("canvas")}}-Elements, das wir verwenden werden, um das Bild in eine Daten-URL zu konvertieren, und indem wir auf den 2D-Zeichnungskontext des Canvas ([`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)) in der Variable `context` zugreifen.

Die Größe des Canvas wird angepasst, um das empfangene Bild wiederzugeben, der innere Text wird auf die Bildbeschreibung gesetzt, dann wird das Bild mit [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) in das Canvas gezeichnet. Das Canvas wird dann in das Dokument eingefügt, sodass das Bild sichtbar ist.

Jetzt ist es Zeit, das Bild tatsächlich lokal zu speichern. Dazu verwenden wir den lokalen Speichermodus des Web Storage APIs, auf den über das globale [`localStorage`](/de/docs/Web/API/Window/localStorage) zugegriffen wird. Die Canvas-Methode [`toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) wird verwendet, um das Bild in eine data:// URL zu konvertieren, die ein PNG-Bild darstellt und dann mit [`setItem()`](/de/docs/Web/API/Storage/setItem) im lokalen Speicher gespeichert wird.

## Siehe auch

- [Verwendung von Cross-Domain-Bildern in WebGL und Chrome 13](https://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html)
- [HTML-Spezifikation - das `crossorigin`-Attribut](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-crossorigin)
- [Web Storage API](/de/docs/Web/API/Web_Storage_API)
