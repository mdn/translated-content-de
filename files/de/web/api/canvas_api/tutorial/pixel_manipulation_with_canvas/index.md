---
title: Pixelmanipulation mit Canvas
slug: Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas
l10n:
  sourceCommit: a52689c74c6c89f45c54447bb148e54ed320db62
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Advanced_animations", "Web/API/Canvas_API/Tutorial/Optimizing_canvas")}}

Bisher haben wir uns noch nicht mit den tatsächlichen Pixeln unseres Canvas beschäftigt. Mit dem `ImageData`-Objekt können Sie direkt ein Datenarray lesen und schreiben, um Pixel-Daten zu manipulieren. Wir werden auch darauf eingehen, wie die Bildglättung (Anti-Aliasing) gesteuert werden kann und wie Sie Bilder von Ihrem Canvas speichern können.

## Das ImageData-Objekt

Das [`ImageData`](/de/docs/Web/API/ImageData)-Objekt repräsentiert die zugrunde liegenden Pixel-Daten eines Bereichs eines Canvas-Objekts. Es enthält die folgenden schreibgeschützten Attribute:

- `width`
  - : Die Breite des Bildes in Pixeln.
- `height`
  - : Die Höhe des Bildes in Pixeln.
- `data`
  - : Ein {{jsxref("Uint8ClampedArray")}}, das ein eindimensionales Array darstellt, das die Daten in der RGBA-Reihenfolge enthält, mit ganzzahligen Werten zwischen `0` und `255` (einschließlich).

Die `data`-Eigenschaft gibt ein {{jsxref("Uint8ClampedArray")}} zurück, das auf die Rohpixel-Daten zugegriffen werden kann; jedes Pixel wird durch vier Ein-Byte-Werte repräsentiert (rot, grün, blau und alpha, in dieser Reihenfolge; d.h. "RGBA"-Format). Jede Farbkomponente wird durch eine Ganzzahl zwischen 0 und 255 dargestellt. Jeder Komponente wird ein aufeinanderfolgender Index innerhalb des Arrays zugewiesen, wobei die rote Komponente des Pixels oben links im Array den Index 0 hat. Die Pixel verlaufen dann von links nach rechts und dann nach unten durch das Array.

Das {{jsxref("Uint8ClampedArray")}} enthält `height` × `width` × 4 Bytes an Daten, mit Indexwerten von 0 bis (`height` × `width` × 4) - 1.

Um beispielsweise den Wert der blauen Komponente des Pixels in Spalte 200, Zeile 50 im Bild zu lesen, würden Sie Folgendes tun:

```js
const blueComponent = imageData.data[50 * (imageData.width * 4) + 200 * 4 + 2];
```

Wenn Sie ein Koordinatenset (X und Y) gegeben haben, könnten Sie Folgendes tun:

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

Sie können auch die Größe des Pixel-Arrays in Bytes durch Lesen des `Uint8ClampedArray.length`-Attributs ermitteln:

```js
const numBytes = imageData.data.length;
```

## Ein ImageData-Objekt erstellen

Um ein neues, leeres `ImageData`-Objekt zu erstellen, sollten Sie die Methode [`createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData) verwenden. Es gibt zwei Versionen der `createImageData()`-Methode:

```js
const myImageData = ctx.createImageData(width, height);
```

Dies erstellt ein neues `ImageData`-Objekt mit den angegebenen Abmessungen. Alle Pixel sind auf transparentes Schwarz voreingestellt (alle Nullen, d.h. rgb(0 0 0 / 0%)).

Sie können auch ein neues `ImageData`-Objekt mit den gleichen Abmessungen wie das durch `anotherImageData` angegebene Objekt erstellen. Die Pixel des neuen Objekts sind alle auf transparentes Schwarz voreingestellt. **Dies kopiert die Bilddaten nicht!**

```js
const myImageData = ctx.createImageData(anotherImageData);
```

## Das Pixel-Daten für einen Kontext abrufen

Um ein `ImageData`-Objekt zu erhalten, das eine Kopie der Pixel-Daten für einen Canvas-Kontext enthält, können Sie die Methode `getImageData()` verwenden:

```js
const myImageData = ctx.getImageData(left, top, width, height);
```

Diese Methode gibt ein `ImageData`-Objekt zurück, das die Pixel-Daten für den Bereich des Canvas repräsentiert, dessen Ecken durch die Punkte (`left`, `top`), (`left+width`, `top`), (`left`, `top+height`) und (`left+width`, `top+height`) dargestellt werden. Die Koordinaten werden in Einheiten des Canvas-Koordinatenraums angegeben.

> [!NOTE]
> Alle Pixel außerhalb des Canvas werden im resultierenden `ImageData`-Objekt als transparentes Schwarz zurückgegeben.

Diese Methode wird auch im Artikel [Manipulating video using canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas) demonstriert.

### Ein Farb-Picker

In diesem Beispiel verwenden wir die Methode [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData), um die Farbe unter dem Mauszeiger anzuzeigen. Dafür benötigen wir die aktuelle Position der Maus, dann schauen wir die Pixel-Daten an dieser Position im Pixel-Array nach, das uns [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) bereitstellt. Schließlich verwenden wir die Array-Daten, um eine Hintergrundfarbe und einen Text im `<div>` festzulegen, um die Farbe anzuzeigen. Ein Klick auf das Bild führt dieselbe Operation aus, merkt sich jedoch die ausgewählte Farbe.

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

Die Verwendung des Codes wird im folgenden Live-Beispiel demonstriert:

{{EmbedGHLiveSample("dom-examples/canvas/pixel-manipulation/color-picker.html", '100%', 300)}}

Siehe auch den Quellcode — [HTML](https://github.com/mdn/dom-examples/blob/main/canvas/pixel-manipulation/color-picker.html), [JavaScript](https://github.com/mdn/dom-examples/blob/main/canvas/pixel-manipulation/color-picker.js).

## Pixel-Daten in einen Kontext malen

Sie können die Methode [putImageData()](/de/docs/Web/API/CanvasRenderingContext2D/putImageData) verwenden, um Pixel-Daten in einen Kontext zu malen:

```js
ctx.putImageData(myImageData, dx, dy);
```

Die `dx`- und `dy`-Parameter geben die Gerätekoordinaten innerhalb des Kontexts an, an denen die linke obere Ecke der zu zeichnenden Pixel-Daten gemalt werden soll.

Um beispielsweise das gesamte Bild, das durch `myImageData` repräsentiert wird, in die obere linke Ecke des Kontexts zu malen, könnten Sie Folgendes tun:

```js
ctx.putImageData(myImageData, 0, 0);
```

### Graustufen und Farben invertieren

In diesem Beispiel iterieren wir über alle Pixel, um deren Werte zu ändern, dann geben wir das modifizierte Pixel-Array mit [putImageData()](/de/docs/Web/API/CanvasRenderingContext2D/putImageData) zurück an das Canvas. Die Invertierungsfunktion subtrahiert jede Farbe vom Maximalwert 255. Die Graustufenfunktion verwendet den Durchschnitt von Rot, Grün und Blau. Sie können auch einen gewichteten Durchschnitt verwenden, der durch die Formel `x = 0.299r + 0.587g + 0.114b` gegeben ist. Weitere Informationen finden Sie unter [Grayscale](https://en.wikipedia.org/wiki/Grayscale) auf Wikipedia.

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

Die Verwendung des Codes wird im folgenden Live-Beispiel demonstriert:

{{EmbedGHLiveSample("dom-examples/canvas/pixel-manipulation/color-manipulation.html", '100%', 300)}}

Siehe auch den Quellcode — [HTML](https://github.com/mdn/dom-examples/blob/main/canvas/pixel-manipulation/color-manipulation.html), [JavaScript](https://github.com/mdn/dom-examples/blob/main/canvas/pixel-manipulation/color-manipulation.js).

## Zoomen und Anti-Aliasing

Mit der Methode [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage), einem zweiten Canvas und der [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled)-Eigenschaft können wir in unser Bild hineinzoomen und die Details sehen. Ein drittes Canvas ohne [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled) wird auch gezeichnet, um einen nebeneinander liegenden Vergleich zu ermöglichen.

Wir erhalten die Position der Maus und schneiden ein Bild von 5 Pixeln links und oben bis zu 5 Pixeln rechts und unten aus. Dann kopieren wir dieses auf ein anderes Canvas und ändern die Bildgröße auf die gewünschte Größe. Im Zoom-Canvas verändern wir die Größe eines 10×10 Pixel-Ausschnitts des ursprünglichen Canvas auf 200×200.

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

Die Verwendung des Codes wird im folgenden Live-Beispiel demonstriert:

{{EmbedGHLiveSample("dom-examples/canvas/pixel-manipulation/image-smoothing.html", '100%', 300)}}

Siehe auch den Quellcode — [HTML](https://github.com/mdn/dom-examples/blob/main/canvas/pixel-manipulation/image-smoothing.html), [JavaScript](https://github.com/mdn/dom-examples/blob/main/canvas/pixel-manipulation/image-smoothing.js).

## Bilder speichern

Das [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) bietet eine `toDataURL()`-Methode, die beim Speichern von Bildern nützlich ist. Sie gibt eine [Data-URL](/de/docs/Web/URI/Reference/Schemes/data) zurück, die eine Darstellung des Bildes im durch den `type`-Parameter angegebenen Format enthält (Standard ist [PNG](https://en.wikipedia.org/wiki/Portable_Network_Graphics)). Das zurückgegebene Bild hat eine Auflösung von 96 dpi.

> [!NOTE]
> Beachten Sie, dass, wenn das Canvas Pixels enthält, die von einem anderen {{Glossary("origin", "Ursprung")}} ohne Verwendung von CORS erhalten wurden, das Canvas **verfälscht** ist und sein Inhalt nicht mehr gelesen und gespeichert werden kann.
> Siehe [Sicherheit und verfälschte Canvases](/de/docs/Web/HTML/CORS_enabled_image#security_and_tainted_canvases).

- [`canvas.toDataURL('image/png')`](/de/docs/Web/API/HTMLCanvasElement/toDataURL)
  - : Standardeinstellung. Erstellt ein PNG-Bild.
- [`canvas.toDataURL('image/jpeg', quality)`](/de/docs/Web/API/HTMLCanvasElement/toDataURL)
  - : Erstellt ein JPG-Bild. Optional können Sie eine Qualität im Bereich von 0 bis 1 angeben, wobei eins die beste Qualität ist und 0 fast nicht erkennbar, aber klein in der Dateigröße ist.

Sobald Sie eine Data-URL aus Ihrem Canvas generiert haben, können Sie sie als Quelle eines {{HTMLElement("img")}} verwenden oder in einen Hyperlink mit einem [download-Attribut](/de/docs/Web/HTML/Element/a#download) einfügen, um sie beispielsweise auf die Festplatte zu speichern.

Sie können auch ein [`Blob`](/de/docs/Web/API/Blob) aus dem Canvas erstellen.

- [`canvas.toBlob(callback, type, encoderOptions)`](/de/docs/Web/API/HTMLCanvasElement/toBlob)
  - : Erstellt ein `Blob`-Objekt, das das im Canvas enthaltene Bild repräsentiert.

## Siehe auch

- [`ImageData`](/de/docs/Web/API/ImageData)
- [Manipulating video using canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Download Canvas API-Generated Images Using toBlob](https://www.digitalocean.com/community/tutorials/js-canvas-toblob)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Advanced_animations", "Web/API/Canvas_API/Tutorial/Optimizing_canvas")}}
