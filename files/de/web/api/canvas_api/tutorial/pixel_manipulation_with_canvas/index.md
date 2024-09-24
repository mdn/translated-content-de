---
title: Pixel-Manipulation mit Canvas
slug: Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Advanced_animations", "Web/API/Canvas_API/Tutorial/Optimizing_canvas")}}

Bisher haben wir uns noch nicht mit den tatsächlichen Pixeln unseres Canvas beschäftigt. Mit dem `ImageData`-Objekt können Sie direkt ein Datenarray lesen und schreiben, um Pixeldaten zu manipulieren. Wir werden uns auch ansehen, wie das Bildglätten (Anti-Aliasing) gesteuert werden kann und wie Sie Bilder aus Ihrem Canvas speichern können.

## Das ImageData-Objekt

Das {{domxref("ImageData")}}-Objekt repräsentiert die zugrundeliegenden Pixeldaten eines Bereichs eines Canvas-Objekts. Es enthält die folgenden schreibgeschützten Attribute:

- `width`
  - : Die Breite des Bildes in Pixeln.
- `height`
  - : Die Höhe des Bildes in Pixeln.
- `data`
  - : Ein {{jsxref("Uint8ClampedArray")}}, das ein eindimensionales Array darstellt und die Daten im RGBA-Format enthält, mit ganzzahligen Werten zwischen `0` und `255` (inklusive).

Die `data`-Eigenschaft gibt ein {{jsxref("Uint8ClampedArray")}} zurück, auf das zugegriffen werden kann, um die rohen Pixeldaten anzusehen; jedes Pixel wird durch vier Ein-Byte-Werte dargestellt (Rot, Grün, Blau und Alpha, in dieser Reihenfolge; d. h. im "RGBA"-Format). Jede Farbkomponente wird durch eine Ganzzahl zwischen 0 und 255 dargestellt. Jede Komponente erhält einen aufeinanderfolgenden Index innerhalb des Arrays, wobei das Rot der oberen linken Ecke bei Index 0 im Array liegt. Die Pixel verlaufen dann von links nach rechts und dann nach unten durch das Array.

Das {{jsxref("Uint8ClampedArray")}} enthält `height` × `width` × 4 Bytes Daten, mit Indexwerten von 0 bis (`height` × `width` × 4) - 1.

Um beispielsweise den Wert der blauen Komponente des Pixels an Spalte 200, Zeile 50 im Bild zu lesen, würden Sie Folgendes tun:

```js
const blueComponent = imageData.data[50 * (imageData.width * 4) + 200 * 4 + 2];
```

Wenn Sie ein Set von Koordinaten (X und Y) haben, könnten Sie so etwas tun:

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

Die Größe des Pixelarrays in Bytes können Sie auch durch Lesen des Attributs `Uint8ClampedArray.length` abrufen:

```js
const numBytes = imageData.data.length;
```

## Erstellen eines ImageData-Objekts

Um ein neues, leeres `ImageData`-Objekt zu erstellen, sollten Sie die Methode {{domxref("CanvasRenderingContext2D.createImageData", "createImageData()")}} verwenden. Es gibt zwei Versionen der `createImageData()`-Methode:

```js
const myImageData = ctx.createImageData(width, height);
```

Dies erstellt ein neues `ImageData`-Objekt mit den angegebenen Dimensionen. Alle Pixel sind auf transparentes Schwarz voreingestellt (alle Nullen, d. h. rgb(0 0 0 / 0%)).

Sie können auch ein neues `ImageData`-Objekt mit denselben Dimensionen wie das durch `anotherImageData` angegebene Objekt erstellen. Die Pixel des neuen Objekts sind alle auf transparentes Schwarz voreingestellt. **Dies kopiert nicht die Bilddaten!**

```js
const myImageData = ctx.createImageData(anotherImageData);
```

## Abrufen der Pixeldaten für einen Kontext

Um ein `ImageData`-Objekt zu erhalten, das eine Kopie der Pixeldaten für einen Canvas-Kontext enthält, können Sie die Methode `getImageData()` verwenden:

```js
const myImageData = ctx.getImageData(left, top, width, height);
```

Diese Methode gibt ein `ImageData`-Objekt zurück, das die Pixeldaten für den Bereich des Canvas repräsentiert, dessen Ecken durch die Punkte (`left`, `top`), (`left+width`, `top`), (`left`, `top+height`) und (`left+width`, `top+height`) dargestellt werden. Die Koordinaten sind in Canvas-Koordinatenraumeinheiten angegeben.

> [!NOTE]
> Alle Pixel außerhalb des Canvas werden im resultierenden `ImageData`-Objekt als transparentes Schwarz zurückgegeben.

Diese Methode wird auch im Artikel [Manipulation von Videos mit Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas) demonstriert.

### Ein Farbwähler

In diesem Beispiel verwenden wir die Methode [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData), um die Farbe unter dem Mauszeiger anzuzeigen. Dazu benötigen wir die aktuelle Position der Maus und dann suchen wir die Pixeldaten an dieser Position im Pixelarray, das [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) uns liefert. Schließlich verwenden wir die Array-Daten, um eine Hintergrundfarbe und einen Text im `<div>` festzulegen, um die Farbe anzuzeigen. Ein Klick auf das Bild führt dieselbe Operation aus, merkt sich aber die gewählte Farbe.

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

Die Nutzung des Codes wird im folgenden Live-Beispiel demonstriert:

{{EmbedGHLiveSample("dom-examples/canvas/pixel-manipulation/color-picker.html", '100%', 300)}}

Sehen Sie sich auch den Quellcode an — [HTML](https://github.com/mdn/dom-examples/blob/main/canvas/pixel-manipulation/color-picker.html), [JavaScript](https://github.com/mdn/dom-examples/blob/main/canvas/pixel-manipulation/color-picker.js).

## Zeichnen von Pixeldaten in einen Kontext

Sie können die Methode [putImageData()](/de/docs/Web/API/CanvasRenderingContext2D/putImageData) verwenden, um Pixeldaten in einen Kontext zu zeichnen:

```js
ctx.putImageData(myImageData, dx, dy);
```

Die Parameter `dx` und `dy` geben die Gerätekoordinaten innerhalb des Kontexts an, an denen die obere linke Ecke der zu zeichnenden Pixeldaten gemalt werden soll.

Um beispielsweise das gesamte Bild, das durch `myImageData` dargestellt wird, in die obere linke Ecke des Kontexts zu malen, können Sie Folgendes tun:

```js
ctx.putImageData(myImageData, 0, 0);
```

### In Graustufen umwandeln und Farben invertieren

In diesem Beispiel iterieren wir über alle Pixel, um ihre Werte zu ändern, und legen dann das modifizierte Pixelarray mit [putImageData()](/de/docs/Web/API/CanvasRenderingContext2D/putImageData) zurück auf das Canvas. Die Invertierungsfunktion subtrahiert jede Farbe vom maximalen Wert von 255. Die Graustufenfunktion verwendet den Durchschnitt von Rot, Grün und Blau. Sie können auch einen gewichteten Durchschnitt verwenden, der durch die Formel `x = 0.299r + 0.587g + 0.114b` gegeben ist. Weitere Informationen finden Sie im Artikel [Graustufen](https://de.wikipedia.org/wiki/Graustufen) auf Wikipedia.

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
    data[i] = 255 - data[i]; // rot
    data[i + 1] = 255 - data[i + 1]; // grün
    data[i + 2] = 255 - data[i + 2]; // blau
  }
  ctx.putImageData(imageData, 0, 0);
};

const grayscale = () => {
  ctx.drawImage(img, 0, 0);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = avg; // rot
    data[i + 1] = avg; // grün
    data[i + 2] = avg; // blau
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

Die Nutzung des Codes wird im folgenden Live-Beispiel demonstriert:

{{EmbedGHLiveSample("dom-examples/canvas/pixel-manipulation/color-manipulation.html", '100%', 300)}}

Sehen Sie sich auch den Quellcode an — [HTML](https://github.com/mdn/dom-examples/blob/main/canvas/pixel-manipulation/color-manipulation.html), [JavaScript](https://github.com/mdn/dom-examples/blob/main/canvas/pixel-manipulation/color-manipulation.js).

## Zoomen und Anti-Aliasing

Mit Hilfe der Methode {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}}, eines zweiten Canvas und der Eigenschaft {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled", "imageSmoothingEnabled")}} können wir in unser Bild zoomen und die Details sehen. Ein drittes Canvas ohne {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled", "imageSmoothingEnabled")}} wird ebenfalls gezeichnet, um einen Vergleich Seite an Seite zu ermöglichen.

Wir erhalten die Position der Maus und schneiden ein Bild von 5 Pixeln links und oben auf 5 Pixel rechts und unten zu. Dann kopieren wir dieses auf ein anderes Canvas und ändern die Größe des Bildes auf die gewünschte Größe. Auf der Zoom-Leinwand vergrößern wir einen 10×10-Pixel-Ausschnitt des Original-Canvas auf 200×200.

```js
zoomctx.drawImage(
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

Die Nutzung des Codes wird im folgenden Live-Beispiel demonstriert:

{{EmbedGHLiveSample("dom-examples/canvas/pixel-manipulation/image-smoothing.html", '100%', 300)}}

Sehen Sie sich auch den Quellcode an — [HTML](https://github.com/mdn/dom-examples/blob/main/canvas/pixel-manipulation/image-smoothing.html), [JavaScript](https://github.com/mdn/dom-examples/blob/main/canvas/pixel-manipulation/image-smoothing.js).

## Bilder speichern

Das {{domxref("HTMLCanvasElement")}} bietet eine `toDataURL()`-Methode, die beim Speichern von Bildern nützlich ist. Sie gibt eine [Data-URL](/de/docs/Web/URI/Schemes/data) zurück, die eine Darstellung des Bildes im durch den `type`-Parameter angegebenen Format enthält (standardmäßig [PNG](https://de.wikipedia.org/wiki/Portable_Network_Graphics)). Das zurückgegebene Bild hat eine Auflösung von 96 dpi.

> [!NOTE]
> Beachten Sie, dass, wenn das Canvas irgendwelche Pixel enthält, die aus einem anderen {{Glossary("origin")}} ohne Verwendung von CORS stammen, das Canvas **verunreinigt** ist und sein Inhalt nicht mehr gelesen und gespeichert werden kann.
> Siehe [Sicherheit und verunreinigte Canvases](/de/docs/Web/HTML/CORS_enabled_image#security_and_tainted_canvases).

- {{domxref("HTMLCanvasElement.toDataURL", "canvas.toDataURL('image/png')")}}
  - : Standardeinstellung. Erstellt ein PNG-Bild.
- {{domxref("HTMLCanvasElement.toDataURL", "canvas.toDataURL('image/jpeg', quality)")}}
  - : Erstellt ein JPG-Bild. Optional können Sie eine Qualität im Bereich von 0 bis 1 angeben, wobei eins die beste Qualität ist und 0 fast nicht erkennbar, aber klein in der Dateigröße ist.

Sobald Sie eine Data-URL von Ihrem Canvas erstellt haben, können Sie sie als Quelle eines beliebigen {{HTMLElement("img")}} verwenden oder in einen Hyperlink mit einem [Download-Attribut](/de/docs/Web/HTML/Element/a#download) einfügen, um sie beispielsweise auf der Festplatte zu speichern.

Sie können auch ein {{domxref("Blob")}} vom Canvas erstellen.

- {{domxref("HTMLCanvasElement.toBlob", "canvas.toBlob(callback, type, encoderOptions)")}}
  - : Erstellt ein `Blob`-Objekt, das das im Canvas enthaltene Bild repräsentiert.

## Siehe auch

- {{domxref("ImageData")}}
- [Manipulation von Videos mit Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Download von Canvas-API-generierten Bildern mit toBlob](https://www.digitalocean.com/community/tutorials/js-canvas-toblob)
- [HTML5-Canvas-Tutorials](https://www.html5canvastutorials.com/)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Advanced_animations", "Web/API/Canvas_API/Tutorial/Optimizing_canvas")}}
