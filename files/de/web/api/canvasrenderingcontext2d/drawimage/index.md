---
title: "CanvasRenderingContext2D: drawImage() Methode"
short-title: drawImage()
slug: Web/API/CanvasRenderingContext2D/drawImage
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.drawImage()`**-Methode der Canvas 2D API bietet verschiedene Möglichkeiten, ein Bild auf die Leinwand zu zeichnen.

## Syntax

```js-nolint
drawImage(image, dx, dy)
drawImage(image, dx, dy, dWidth, dHeight)
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
```

![drawImage](canvas_drawimage.jpg)

### Parameter

- `image`
  - : Ein Element, das in den Kontext gezeichnet werden soll. Die Spezifikation erlaubt jede Canvas-Bildquelle, insbesondere ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), ein [`SVGImageElement`](/de/docs/Web/API/SVGImageElement), ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement), ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap), ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) oder ein [`VideoFrame`](/de/docs/Web/API/VideoFrame).
- `sx` {{optional_inline}}
  - : Die x-Achsenkoordinate der oberen linken Ecke des Unterrechtecks der Quell-`image`, das in den Zielkontext gezeichnet werden soll. Verwenden Sie die 3- oder 5-Argument-Syntax, um dieses Argument zu weglassen.
- `sy` {{optional_inline}}
  - : Die y-Achsenkoordinate der oberen linken Ecke des Unterrechtecks der Quell-`image`, das in den Zielkontext gezeichnet werden soll. Verwenden Sie die 3- oder 5-Argument-Syntax, um dieses Argument zu weglassen.
- `sWidth` {{optional_inline}}
  - : Die Breite des Unterrechtecks der Quell-`image`, das in den Zielkontext gezeichnet werden soll. Wenn nicht angegeben, wird das gesamte Rechteck von den durch `sx` und `sy` angegebenen Koordinaten bis zur unteren rechten Ecke des Bildes verwendet. Verwenden Sie die 3- oder 5-Argument-Syntax, um dieses Argument zu weglassen. Negative Werte vergrößern das Unterrechteck in die entgegengesetzte Richtung, aber die Pixel werden immer in der ursprünglichen Richtung verarbeitet, und das Bild wird nicht gespiegelt.
- `sHeight` {{optional_inline}}
  - : Die Höhe des Unterrechtecks der Quell-`image`, das in den Zielkontext gezeichnet werden soll. Verwenden Sie die 3- oder 5-Argument-Syntax, um dieses Argument zu weglassen. Negative Werte vergrößern das Unterrechteck in die entgegengesetzte Richtung, aber die Pixel werden immer in der ursprünglichen Richtung verarbeitet, und das Bild wird nicht gespiegelt.
- `dx`
  - : Die x-Achsenkoordinate im Ziel-Canvas, an der die obere linke Ecke des Quell-`image` platziert werden soll.
- `dy`
  - : Die y-Achsenkoordinate im Ziel-Canvas, an der die obere linke Ecke des Quell-`image` platziert werden soll.
- `dWidth`
  - : Die Breite, um das `image` im Ziel-Canvas zu zeichnen. Dies ermöglicht die Skalierung des gezeichneten Bildes. Wenn nicht angegeben, wird das Bild beim Zeichnen in der Breite nicht skaliert. Beachten Sie, dass dieses Argument in der 3-Argument-Syntax nicht enthalten ist. Negative Werte vergrößern das Unterrechteck in die entgegengesetzte Richtung, aber die Pixel werden immer in der ursprünglichen Richtung verarbeitet, und das Bild wird nicht gespiegelt.
- `dHeight`
  - : Die Höhe, um das `image` im Ziel-Canvas zu zeichnen. Dies ermöglicht die Skalierung des gezeichneten Bildes. Wenn nicht angegeben, wird das Bild beim Zeichnen in der Höhe nicht skaliert. Beachten Sie, dass dieses Argument in der 3-Argument-Syntax nicht enthalten ist. Negative Werte vergrößern das Unterrechteck in die entgegengesetzte Richtung, aber die Pixel werden immer in der ursprünglichen Richtung verarbeitet, und das Bild wird nicht gespiegelt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Bild keine Bilddaten hat oder wenn die Breite oder Höhe des Canvas- oder Quellrechtecks Null ist.
- `TypeMismatchError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein `null` oder `undefined` Bild als Parameter übergeben wird.

## Beispiele

### Ein Bild auf die Leinwand zeichnen

Dieses Beispiel zeichnet ein Bild auf die Leinwand unter Verwendung der `drawImage()`-Methode.

#### HTML

```html
<canvas id="canvas"></canvas>
<div class="hidden">
  <img
    id="source"
    src="https://mdn.github.io/shared-assets/images/examples/rhino.jpg"
    width="300"
    height="227" />
</div>
```

```css hidden
.hidden {
  display: none;
}
```

#### JavaScript

Das Quellbild wird von den Koordinaten (33, 71) mit einer Breite von 104 und einer Höhe von 124 genommen. Es wird auf die Leinwand bei (21, 20) gezeichnet, wobei es eine Breite von 87 und eine Höhe von 104 erhält.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const image = document.getElementById("source");

image.addEventListener("load", (e) => {
  ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);
});
```

#### Ergebnis

{{ EmbedLiveSample('Drawing_an_image_to_the_canvas', 700, 180) }}

### Verständnis der Quellgröße eines Elements

Die `drawImage()`-Methode verwendet die _intrinsische Größe in CSS-Pixel_ des Quell-Elements beim Zeichnen.

Wenn Sie beispielsweise ein `Image` laden und die optionalen Größenparameter im [Konstruktor](/de/docs/Web/API/HTMLImageElement/Image) angeben, müssen Sie die `naturalWidth` und `naturalHeight` Eigenschaften der erstellten Instanz verwenden, um Dinge wie Zuschneidungen und Skalierungsbereiche korrekt zu berechnen, anstatt `element.width` und `element.height`. Das Gleiche gilt für `videoWidth` und `videoHeight`, wenn das Element ein {{htmlelement("video")}}-Element ist, und so weiter.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const image = new Image(60, 45); // Using optional size for image
image.onload = drawImageActualSize; // Draw when image has loaded

// Load an image of intrinsic size 300x227 in CSS pixels
image.src = "https://mdn.github.io/shared-assets/images/examples/rhino.jpg";

function drawImageActualSize() {
  // Use the intrinsic size of image in CSS pixels for the canvas element
  canvas.width = this.naturalWidth;
  canvas.height = this.naturalHeight;

  // Will draw the image as 300x227, ignoring the custom size of 60x45
  // given in the constructor
  ctx.drawImage(this, 0, 0);

  // To use the custom size we'll have to specify the scale parameters
  // using the element's width and height properties - lets draw one
  // on top in the corner:
  ctx.drawImage(this, 0, 0, this.width, this.height);
}
```

#### Ergebnis

{{EmbedLiveSample('Understanding_source_element_size', 700, 260)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Anmerkungen

- `drawImage()` funktioniert nur korrekt mit einem [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), wenn dessen [`HTMLMediaElement.readyState`](/de/docs/Web/API/HTMLMediaElement/readyState) größer als 1 ist (d.h. das **seek**-Ereignis wurde nach dem Setzen der `currentTime`-Eigenschaft ausgelöst).
- `drawImage()` verwendet immer die _intrinsische Größe in CSS-Pixel_ des Quell-Elements beim Zeichnen, Zuschneiden und/oder Skalieren.
- In einigen älteren Browserversionen ignoriert `drawImage()` alle EXIF-Metadaten in Bildern, einschließlich der Orientierung. Dieses Verhalten ist insbesondere auf iOS-Geräten problematisch. Sie sollten die Orientierung selbst erkennen und `rotate()` verwenden, um sie zu korrigieren.

## Siehe auch

- Das Interface, das diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
