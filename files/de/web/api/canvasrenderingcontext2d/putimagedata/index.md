---
title: "CanvasRenderingContext2D: putImageData() Methode"
short-title: putImageData()
slug: Web/API/CanvasRenderingContext2D/putImageData
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die **`CanvasRenderingContext2D.putImageData()`** Methode der Canvas 2D API malt Daten aus dem gegebenen {{domxref("ImageData")}} Objekt auf die Leinwand. Falls ein 'dirty rectangle' angegeben wird, werden nur die Pixel aus diesem Rechteck gemalt. Diese Methode wird nicht von der Transformationsmatrix der Leinwand beeinflusst.

> [!NOTE]
> Bilddaten können von einer Leinwand mittels der {{domxref("CanvasRenderingContext2D.getImageData()", "getImageData()")}} Methode abgerufen werden.

Weitere Informationen über `putImageData()` und allgemeine Manipulation der Leinwandinhalte finden Sie im Artikel [Pixel-Manipulation mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas).

## Syntax

```js-nolint
putImageData(imageData, dx, dy)
putImageData(imageData, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight)
```

### Parameter

- `imageData`
  - : Ein {{domxref("ImageData")}} Objekt, das das Array der Pixelwerte enthält.
- `dx`
  - : Horizontale Position (x-Koordinate), an der die Bilddaten in der Ziel-Leinwand platziert werden.
- `dy`
  - : Vertikale Position (y-Koordinate), an der die Bilddaten in der Ziel-Leinwand platziert werden.
- `dirtyX` {{optional_inline}}
  - : Horizontale Position (x-Koordinate) der oberen linken Ecke, von der die Bilddaten extrahiert werden. Standardmäßig `0`.
- `dirtyY` {{optional_inline}}
  - : Vertikale Position (y-Koordinate) der oberen linken Ecke, von der die Bilddaten extrahiert werden. Standardmäßig `0`.
- `dirtyWidth` {{optional_inline}}
  - : Breite des zu malenden Rechtecks. Standardmäßig die Breite der Bilddaten.
- `dirtyHeight` {{optional_inline}}
  - : Höhe des zu malenden Rechtecks. Standardmäßig die Höhe der Bilddaten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}
  - : Ausgelöst, wenn eines der Argumente unendlich ist.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Ausgelöst, wenn die Daten des `ImageData` Objekts getrennt worden sind.

## Beispiele

### Verständnis von putImageData

Um zu verstehen, was dieser Algorithmus unter der Haube macht, hier eine Implementierung basierend auf {{domxref("CanvasRenderingContext2D.fillRect()")}}.

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

// Zeichnen Sie Inhalte auf die Leinwand
ctx.fillRect(0, 0, 100, 100);
// Erstellen Sie ein ImageData Objekt daraus
const imagedata = ctx.getImageData(0, 0, 100, 100);
// Verwenden Sie die putImageData Funktion, die veranschaulicht, wie putImageData arbeitet
putImageData(ctx, imagedata, 150, 0, 50, 50, 25, 25);
```

#### Ergebnis

{{ EmbedLiveSample('Understanding_putImageData', 700, 180) }}

### Datenverlust aufgrund von Browser-Optimierung

> [!WARNING]
> Aufgrund der verlustbehafteten Natur der Umwandlung in und aus 'premultiplied alpha' Farbwerten könnten Pixel, die gerade mithilfe von `putImageData()` gesetzt wurden, durch ein nachfolgendes `getImageData()` als unterschiedliche Werte zurückgegeben werden.

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

Die Ausgabe könnte wie folgt aussehen:

```plain
before: Uint8ClampedArray(4) [ 1, 127, 255, 1 ]
after: Uint8ClampedArray(4) [ 255, 255, 255, 1 ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("ImageData")}} Objekt
- {{domxref("CanvasRenderingContext2D.getImageData()")}}
- [Pixel-Manipulation mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
