---
title: "CanvasRenderingContext2D: putImageData()-Methode"
short-title: putImageData()
slug: Web/API/CanvasRenderingContext2D/putImageData
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die **`CanvasRenderingContext2D.putImageData()`**-Methode der Canvas 2D API malt Daten aus dem übergebenen [`ImageData`](/de/docs/Web/API/ImageData)-Objekt auf die Leinwand. Wird ein "schmutziges" Rechteck angegeben, werden nur die Pixel aus diesem Rechteck gemalt. Diese Methode wird von der Transformationsmatrix der Leinwand nicht beeinflusst.

> [!NOTE]
> Bilddaten können von einer Leinwand mithilfe der [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData)-Methode abgerufen werden.

Weitere Informationen zu `putImageData()` und der allgemeinen Manipulation von Leinwandinhalten finden Sie im Artikel [Pixelmanipulation mit dem Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas).

## Syntax

```js-nolint
putImageData(imageData, dx, dy)
putImageData(imageData, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight)
```

### Parameter

- `imageData`
  - : Ein [`ImageData`](/de/docs/Web/API/ImageData)-Objekt, das das Pixelwert-Array enthält.
- `dx`
  - : Horizontale Position (x-Koordinate), an der die Bilddaten auf der Zielleinwand platziert werden sollen.
- `dy`
  - : Vertikale Position (y-Koordinate), an der die Bilddaten auf der Zielleinwand platziert werden sollen.
- `dirtyX` {{optional_inline}}
  - : Horizontale Position (x-Koordinate) der oberen linken Ecke, von der die Bilddaten extrahiert werden. Standardwert ist `0`.
- `dirtyY` {{optional_inline}}
  - : Vertikale Position (y-Koordinate) der oberen linken Ecke, von der die Bilddaten extrahiert werden. Standardwert ist `0`.
- `dirtyWidth` {{optional_inline}}
  - : Breite des zu malenden Rechtecks. Standardwert ist die Breite der Bilddaten.
- `dirtyHeight` {{optional_inline}}
  - : Höhe des zu malenden Rechtecks. Standardwert ist die Höhe der Bilddaten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eines der Argumente unendlich ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Daten des `ImageData`-Objekts getrennt wurden.

## Beispiele

### Verständnis von putImageData

Um zu verstehen, was dieser Algorithmus im Hintergrund macht, hier eine Implementierung basierend auf [`CanvasRenderingContext2D.fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect).

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function putImageData(
  ctx,
  imageData,
  dx,
  dy,
  dirtyX,
  dirtyY,
  dirtyWidth,
  dirtyHeight,
) {
  const data = imageData.data;
  const height = imageData.height;
  const width = imageData.width;
  dirtyX = dirtyX || 0;
  dirtyY = dirtyY || 0;
  dirtyWidth = dirtyWidth !== undefined ? dirtyWidth : width;
  dirtyHeight = dirtyHeight !== undefined ? dirtyHeight : height;
  const limitBottom = dirtyY + dirtyHeight;
  const limitRight = dirtyX + dirtyWidth;
  for (let y = dirtyY; y < limitBottom; y++) {
    for (let x = dirtyX; x < limitRight; x++) {
      const pos = y * width + x;
      ctx.fillStyle = `rgb(${data[pos * 4 + 0]} ${data[pos * 4 + 1]}
      ${data[pos * 4 + 2]} / ${data[pos * 4 + 3] / 255})`;
      ctx.fillRect(x + dx, y + dy, 1, 1);
    }
  }
}

// Draw content onto the canvas
ctx.fillRect(0, 0, 100, 100);
// Create an ImageData object from it
const imagedata = ctx.getImageData(0, 0, 100, 100);
// use the putImageData function that illustrates how putImageData works
putImageData(ctx, imagedata, 150, 0, 50, 50, 25, 25);
```

#### Ergebnis

{{ EmbedLiveSample('Understanding_putImageData', 700, 180) }}

### Datenverlust durch Browser-Optimierung

> [!WARNING]
> Durch die verlustbehaftete Konvertierung zu und von vorvermultiplizierten Alpha-Farbwerten kann es passieren, dass Pixel, die gerade mit `putImageData()` gesetzt wurden, in einem entsprechenden `getImageData()` als unterschiedliche Werte zurückgegeben werden.

#### JavaScript

```js
const canvas = document.createElement("canvas");
canvas.width = 1;
canvas.height = 1;
const context = canvas.getContext("2d");
const imgData = context.getImageData(0, 0, canvas.width, canvas.height);
const pixels = imgData.data;
pixels[0 + 0] = 1;
pixels[0 + 1] = 127;
pixels[0 + 2] = 255;
pixels[0 + 3] = 1;
console.log("before:", pixels);
context.putImageData(imgData, 0, 0);
const imgData2 = context.getImageData(0, 0, canvas.width, canvas.height);
const pixels2 = imgData2.data;
console.log("after:", pixels2);
```

Die Ausgabe könnte folgendermaßen aussehen:

```plain
before: Uint8ClampedArray(4) [ 1, 127, 255, 1 ]
after: Uint8ClampedArray(4) [ 255, 255, 255, 1 ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`ImageData`](/de/docs/Web/API/ImageData)-Objekt
- [`CanvasRenderingContext2D.getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData)
- [Pixelmanipulation mit dem Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
