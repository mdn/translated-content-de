---
title: "CanvasRenderingContext2D: Methode putImageData()"
short-title: putImageData()
slug: Web/API/CanvasRenderingContext2D/putImageData
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.putImageData()`**-Methode der Canvas 2D API malt Daten aus dem angegebenen [`ImageData`](/de/docs/Web/API/ImageData)-Objekt auf die Leinwand. Wenn ein "dirty rectangle" bereitgestellt wird, werden nur die Pixel aus diesem Rechteck gemalt. Diese Methode wird von der Transformationsmatrix der Leinwand nicht beeinflusst.

> [!NOTE]
> Bilddaten können mit der Methode [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) von einer Leinwand abgerufen werden.

Weitere Informationen über `putImageData()` und die allgemeine Manipulation von Leinwandinhalten finden Sie im Artikel [Pixelmanipulation mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas).

## Syntax

```js-nolint
putImageData(imageData, dx, dy)
putImageData(imageData, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight)
```

### Parameter

- `imageData`
  - : Ein [`ImageData`](/de/docs/Web/API/ImageData)-Objekt, das das Array der Pixelwerte enthält.
- `dx`
  - : Horizontale Position (x-Koordinate), an der die Bilddaten auf der Ziellawn platziert werden.
- `dy`
  - : Vertikale Position (y-Koordinate), an der die Bilddaten auf der Ziellawn platziert werden.
- `dirtyX` {{optional_inline}}
  - : Horizontale Position (x-Koordinate) der oberen linken Ecke, ab der die Bilddaten extrahiert werden. Standardwert ist `0`.
- `dirtyY` {{optional_inline}}
  - : Vertikale Position (y-Koordinate) der oberen linken Ecke, ab der die Bilddaten extrahiert werden. Standardwert ist `0`.
- `dirtyWidth` {{optional_inline}}
  - : Breite des zu malenden Rechtecks. Standardwert ist die Breite der Bilddaten.
- `dirtyHeight` {{optional_inline}}
  - : Höhe des zu malenden Rechtecks. Standardwert ist die Höhe der Bilddaten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Argument unendlich ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Daten des `ImageData`-Objekts abgetrennt wurden.

## Beispiele

### Verständnis von putImageData

Um zu verstehen, was dieser Algorithmus im Hintergrund tut, hier eine Implementierung basierend auf [`CanvasRenderingContext2D.fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect).

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
  dirtyX = 0,
  dirtyY = 0,
  dirtyWidth = imageData.width,
  dirtyHeight = imageData.height,
) {
  const data = imageData.data;
  const height = imageData.height;
  const width = imageData.width;
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
> Aufgrund der verlustbehafteten Natur der Umwandlung zu und von vorkonvertierten Alpha-Farbwerten können Pixel, die gerade mit `putImageData()` gesetzt wurden, von einem nachfolgenden `getImageData()` als verschiedene Werte zurückgegeben werden.

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

Die Ausgabe könnte so aussehen:

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
- [Pixelmanipulation mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
