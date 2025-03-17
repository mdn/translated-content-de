---
title: Pixelmanipulation mit Canvas
slug: Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Advanced_animations", "Web/API/Canvas_API/Tutorial/Optimizing_canvas")}}

Bis jetzt haben wir uns nicht mit den tatsächlichen Pixeln unseres Canvas beschäftigt. Mit dem `ImageData`-Objekt können Sie direkt auf ein Daten-Array zugreifen und dieses bearbeiten, um Pixeldaten zu manipulieren. Wir werden auch untersuchen, wie Bildglättung (Anti-Aliasing) gesteuert werden kann und wie Sie Bilder aus Ihrem Canvas speichern können.

## Das ImageData-Objekt

Das [`ImageData`](/de/docs/Web/API/ImageData)-Objekt repräsentiert die zugrundeliegenden Pixeldaten eines Bereichs eines Canvas-Objekts. Es enthält die folgenden Nur-Lese-Attribute:

- `width`
  - : Die Breite des Bildes in Pixeln.
- `height`
  - : Die Höhe des Bildes in Pixeln.
- `data`
  - : Ein {{jsxref("Uint8ClampedArray")}}, das ein eindimensionales Array darstellt, das die Daten in der RGBA-Reihenfolge enthält, mit ganzzahligen Werten zwischen `0` und `255` (einschließlich).

Die Eigenschaft `data` gibt ein {{jsxref("Uint8ClampedArray")}} zurück, das auf die Roh-Pixeldaten zugreifen lässt; jedes Pixel wird durch vier Ein-Byte-Werte repräsentiert (Rot, Grün, Blau und Alpha, in dieser Reihenfolge; d.h. im "RGBA"-Format). Jede Farbkomponente wird durch eine ganze Zahl zwischen 0 und 255 dargestellt. Jede Komponente erhält einen fortlaufenden Index innerhalb des Arrays, beginnend mit der roten Komponente des Pixels oben links bei Index 0 im Array. Danach werden die Pixel von links nach rechts und von oben nach unten im Array fortgesetzt.

Das {{jsxref("Uint8ClampedArray")}} enthält `height` × `width` × 4 Byte an Daten, mit Indexwerten von 0 bis (`height` × `width` × 4) - 1.

Um beispielsweise den Wert der blauen Komponente des Pixels in Spalte 200, Zeile 50 im Bild zu lesen, führen Sie Folgendes aus:

```js
const blueComponent = imageData.data[50 * (imageData.width * 4) + 200 * 4 + 2];
```

Wenn Sie ein Koordinatenpaar (X und Y) haben, könnten Sie Folgendes tun:

```js
const xCoord = 50;
const yCoord = 100;
const canvasWidth = 1024;

const getColorIndicesForCoord = (x, y, width) => {
  const red = y * (width * 4) + x * 4;
  return [red, red + 1, red + 2, red + 3];
};

const colorIndices = getColorIndicesForCoord(xCoord, yCoord, canvasWidth);

const [redIndex, greenIndex, blueIndex, alphaIndex] = colorIndices;
```

Die Größe des Pixel-Arrays in Bytes kann auch über das Attribut `Uint8ClampedArray.length` abgerufen werden:

```js
const numBytes = imageData.data.length;
```

## Ein ImageData-Objekt erstellen

Um ein neues, leeres `ImageData`-Objekt zu erstellen, verwenden Sie die Methode [`createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData). Es gibt zwei Versionen der Methode `createImageData()`:

```js
const myImageData = ctx.createImageData(width, height);
```

Damit wird ein neues `ImageData`-Objekt mit den angegebenen Abmessungen erstellt. Alle Pixel sind auf transparentes Schwarz voreingestellt (alle Nullen, d.h. rgb(0 0 0 / 0%)).

Sie können auch ein neues `ImageData`-Objekt erstellen, das dieselben Abmessungen wie das von `anotherImageData` angegebene Objekt hat. Die Pixel des neuen Objekts sind alle auf transparentes Schwarz voreingestellt. **Dies kopiert die Bilddaten nicht!**

```js
const myImageData = ctx.createImageData(anotherImageData);
```

## Die Pixeldaten für einen Kontext abrufen

Um ein `ImageData`-Objekt zu erhalten, das eine Kopie der Pixeldaten für einen Canvas-Kontext enthält, können Sie die Methode `getImageData()` verwenden:

```js
const myImageData = ctx.getImageData(left, top, width, height);
```

Diese Methode gibt ein `ImageData`-Objekt zurück, das die Pixeldaten für den Bereich der Canvas repräsentiert, dessen Ecken durch die Punkte (`left`, `top`), (`left+width`, `top`), (`left`, `top+height`) und (`left+width`, `top+height`) angegeben sind. Die Koordinaten werden in Einheiten des Canvas-Koordinatensystems angegeben.

> [!NOTE]
> Alle Pixel außerhalb des Canvas werden im resultierenden `ImageData`-Objekt als transparentes Schwarz zurückgegeben.

Diese Methode wird auch im Artikel [Manipulating video using canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas) demonstriert.

### Ein Farbpicker

In diesem Beispiel verwenden wir die Methode [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData), um die Farbe unter dem Mauszeiger anzuzeigen. Dazu benötigen wir die aktuelle Position der Maus, dann suchen wir die Pixeldaten an dieser Position im von [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) bereitgestellten Pixelarray nach. Schließlich verwenden wir diese Array-Daten, um eine Hintergrundfarbe und einen Text in `<div>` festzulegen, um die Farbe anzuzeigen. Beim Klicken auf das Bild wird dieselbe Operation ausgeführt, die ausgewählte Farbe jedoch gespeichert.

```js
const img = new Image();
img.crossOrigin = "anonymous";
img.src = "./assets/rhino.jpg";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
img.addEventListener("load", () => {
  ctx.drawImage(img, 0, 0);
  img.style.display = "none";
});
const hoveredColor = document.getElementById("hovered-color");
const selectedColor = document.getElementById("selected-color");

function pick(event, destination) {
  const bounding = canvas.getBoundingClientRect();
  const x = event.clientX - bounding.left;
  const y = event.clientY - bounding.top;
  const pixel = ctx.getImageData(x, y, 1, 1);
  const data = pixel.data;

  const rgbColor = `rgb(${data[0]} ${data[1]} ${data[2]} / ${data[3] / 255})`;
  destination.style.background = rgbColor;
  destination.textContent = rgbColor;

  return rgbColor;
}

canvas.addEventListener("mousemove", (event) => pick(event, hoveredColor));
canvas.addEventListener("click", (event) => pick(event, selectedColor));
```

Die Anwendung des Codes wird im folgenden Live-Beispiel demonstriert:

{{EmbedGHLiveSample("dom-examples/canvas/pixel-manipulation/color-picker.html", '100%', 300)}}

Siehe auch den Quellcode — [HTML](https://github.com/mdn/dom-examples/blob/main/canvas/pixel-manipulation/color-picker.html), [JavaScript](https://github.com/mdn/dom-examples/blob/main/canvas/pixel-manipulation/color-picker.js).

## Pixeldaten in einen Kontext malen

Sie können die Methode [putImageData()](/de/docs/Web/API/CanvasRenderingContext2D/putImageData) verwenden, um Pixeldaten in einen Kontext zu malen:

```js
ctx.putImageData(myImageData, dx, dy);
```

Die Parameter `dx` und `dy` geben die Gerätekoordinaten innerhalb des Kontexts an, an denen die linke obere Ecke der zu malenden Pixeldaten gezeichnet werden soll.

Um beispielsweise das gesamte durch `myImageData` dargestellte Bild in die obere linke Ecke des Kontextes zu malen, können Sie Folgendes tun:

```js
ctx.putImageData(myImageData, 0, 0);
```

### In Graustufen und Farben invertieren

In diesem Beispiel iterieren wir über alle Pixel, um deren Werte zu ändern, und setzen das geänderte Pixelarray anschließend mit [putImageData()](/de/docs/Web/API/CanvasRenderingContext2D/putImageData) zurück in die Canvas. Die Invertierungsfunktion subtrahiert jede Farbe vom Maximalwert 255. Die Graustufenfunktion verwendet den Durchschnitt von Rot, Grün und Blau. Sie können auch einen gewichteten Durchschnitt verwenden, der beispielsweise durch die Formel `x = 0.299r + 0.587g + 0.114b` gegeben ist. Weitere Informationen finden Sie unter [Graustufen](https://de.wikipedia.org/wiki/Graustufen) auf Wikipedia.

```js
const img = new Image();
img.crossOrigin = "anonymous";
img.src = "./assets/rhino.jpg";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

img.onload = () => {
  ctx.drawImage(img, 0, 0);
};

const original = () => {
  ctx.drawImage(img, 0, 0);
};

const invert = () => {
  ctx.drawImage(img, 0, 0);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    data[i] = 255 - data[i]; // red
    data[i + 1] = 255 - data[i + 1]; // green
    data[i + 2] = 255 - data[i + 2]; // blue
  }
  ctx.putImageData(imageData, 0, 0);
};

const grayscale = () => {
  ctx.drawImage(img, 0, 0);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = avg; // red
    data[i + 1] = avg; // green
    data[i + 2] = avg; // blue
  }
  ctx.putImageData(imageData, 0, 0);
};

const inputs = document.querySelectorAll("[name=color]");
for (const input of inputs) {
  input.addEventListener("change", (evt) => {
    switch (evt.target.value) {
      case "inverted":
        return invert();
      case "grayscale":
        return grayscale();
      default:
        return original();
    }
  });
}
```

Die Anwendung des Codes wird im folgenden Live-Beispiel demonstriert:

{{EmbedGHLiveSample("dom-examples/canvas/pixel-manipulation/color-manipulation.html", '100%', 300)}}

Siehe auch den Quellcode — [HTML](https://github.com/mdn/dom-examples/blob/main/canvas/pixel-manipulation/color-manipulation.html), [JavaScript](https://github.com/mdn/dom-examples/blob/main/canvas/pixel-manipulation/color-manipulation.js).

## Zoom und Anti-Aliasing

Mit der Methode [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage), einem zweiten Canvas und der Eigenschaft [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled) können wir in unser Bild zoomen und die Details betrachten. Ein drittes Canvas ohne aktiviertes [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled) wird ebenfalls gezeichnet, um einen Vergleich nebeneinander zu zeigen.

Wir bestimmen die Position der Maus und schneiden fünf Pixel links und oben sowie fünf Pixel rechts und unten aus. Dann kopieren wir diesen Bereich in ein anderes Canvas und ändern die Bildgröße auf die gewünschte Größe. Im Zoom-Canvas wird ein 10×10-Pixel-Ausschnitt des ursprünglichen Canvas auf 200×200 skaliert.

```js
zoomCtx.drawImage(
  canvas,
  Math.min(Math.max(0, x - 5), img.width - 10),
  Math.min(Math.max(0, y - 5), img.height - 10),
  10,
  10,
  0,
  0,
  200,
  200,
);
```

Zoom-Beispiel:

```js
const img = new Image();
img.crossOrigin = "anonymous";
img.src = "./assets/rhino.jpg";
img.onload = () => {
  draw(this);
};

function draw(img) {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  const smoothedZoomCtx = document
    .getElementById("smoothed-zoom")
    .getContext("2d");
  smoothedZoomCtx.imageSmoothingEnabled = true;

  const pixelatedZoomCtx = document
    .getElementById("pixelated-zoom")
    .getContext("2d");
  pixelatedZoomCtx.imageSmoothingEnabled = false;

  const zoom = (ctx, x, y) => {
    ctx.drawImage(
      canvas,
      Math.min(Math.max(0, x - 5), img.width - 10),
      Math.min(Math.max(0, y - 5), img.height - 10),
      10,
      10,
      0,
      0,
      200,
      200,
    );
  };

  canvas.addEventListener("mousemove", (event) => {
    const x = event.layerX;
    const y = event.layerY;
    zoom(smoothedZoomCtx, x, y);
    zoom(pixelatedZoomCtx, x, y);
  });
}
```

Die Anwendung des Codes wird im folgenden Live-Beispiel demonstriert:

{{EmbedGHLiveSample("dom-examples/canvas/pixel-manipulation/image-smoothing.html", '100%', 300)}}

Siehe auch den Quellcode — [HTML](https://github.com/mdn/dom-examples/blob/main/canvas/pixel-manipulation/image-smoothing.html), [JavaScript](https://github.com/mdn/dom-examples/blob/main/canvas/pixel-manipulation/image-smoothing.js).

## Bilder speichern

Das [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) bietet die Methode `toDataURL()`, die nützlich ist, um Bilder zu speichern. Sie gibt eine [Data-URL](/de/docs/Web/URI/Reference/Schemes/data) zurück, die eine Darstellung des Bildes im Format enthält, das durch den Parameter `type` angegeben wird (Standard ist [PNG](https://de.wikipedia.org/wiki/Portable_Network_Graphics)). Das zurückgegebene Bild hat eine Auflösung von 96 dpi.

> [!NOTE]
> Beachten Sie, dass, wenn das Canvas Pixel enthält, die aus einer anderen {{Glossary("origin", "Origin")}} ohne CORS abgerufen wurden, das Canvas **verunreinigt** ist und dessen Inhalte nicht mehr gelesen oder gespeichert werden können. Siehe [Security and tainted canvases](/de/docs/Web/HTML/CORS_enabled_image#security_and_tainted_canvases).

- [`canvas.toDataURL('image/png')`](/de/docs/Web/API/HTMLCanvasElement/toDataURL)
  - : Standardeinstellung. Erstellt ein PNG-Bild.
- [`canvas.toDataURL('image/jpeg', quality)`](/de/docs/Web/API/HTMLCanvasElement/toDataURL)
  - : Erstellt ein JPG-Bild. Optional können Sie eine Qualität im Bereich von 0 bis 1 angeben, wobei 1 die beste Qualität ist und 0 fast unkenntlich, jedoch klein in der Dateigröße.

Sobald Sie eine Data-URL aus Ihrem Canvas generiert haben, können Sie diese als Quelle eines {{HTMLElement("img")}} verwenden oder sie in einen Hyperlink mit einem [download-Attribut](/de/docs/Web/HTML/Element/a#download) einfügen, um sie beispielsweise auf die Festplatte zu speichern.

Sie können auch ein [`Blob`](/de/docs/Web/API/Blob) aus dem Canvas erstellen.

- [`canvas.toBlob(callback, type, encoderOptions)`](/de/docs/Web/API/HTMLCanvasElement/toBlob)
  - : Erstellt ein `Blob`-Objekt, das das im Canvas enthaltene Bild repräsentiert.

## Siehe auch

- [`ImageData`](/de/docs/Web/API/ImageData)
- [Manipulating video using canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Canvas-API-generierte Bilder herunterladen mit toBlob](https://www.digitalocean.com/community/tutorials/js-canvas-toblob)
- [HTML5 Canvas Tutorials](https://www.html5canvastutorials.com/)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Advanced_animations", "Web/API/Canvas_API/Tutorial/Optimizing_canvas")}}
