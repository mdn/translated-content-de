---
title: "CanvasRenderingContext2D: drawImage() Methode"
short-title: drawImage()
slug: Web/API/CanvasRenderingContext2D/drawImage
l10n:
  sourceCommit: c0f1aecaed48d75652c6dd97f30c7febd07e5cde
---

{{APIRef}}

Die **`CanvasRenderingContext2D.drawImage()`**-Methode der Canvas-2D-API bietet verschiedene Möglichkeiten, ein Bild auf die Leinwand zu zeichnen.

## Syntax

```js-nolint
drawImage(image, dx, dy)
drawImage(image, dx, dy, dWidth, dHeight)
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
```

![drawImage](canvas_drawimage.jpg)

### Parameter

- `image`
  - : Ein Element, das in den Kontext gezeichnet werden soll. Die Spezifikation erlaubt jede Canvasbildquelle, insbesondere,
    ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement),
    ein [`SVGImageElement`](/de/docs/Web/API/SVGImageElement),
    ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement),
    ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement),
    ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap),
    ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas),
    oder ein [`VideoFrame`](/de/docs/Web/API/VideoFrame).
- `sx` {{optional_inline}}
  - : Die x-Koordinate der oberen linken Ecke des Teilrechtecks des Quell`image`, das in den Zielkontext gezeichnet werden soll. Verwenden Sie die 3- oder 5-Argument-Syntax, um dieses Argument auszulassen.
- `sy` {{optional_inline}}
  - : Die y-Koordinate der oberen linken Ecke des Teilrechtecks des Quell`image`, das in den Zielkontext gezeichnet werden soll. Verwenden Sie die 3- oder 5-Argument-Syntax, um dieses Argument auszulassen.
- `sWidth` {{optional_inline}}
  - : Die Breite des Teilrechtecks des Quell`image`, das in den Zielkontext gezeichnet werden soll. Wenn nicht angegeben, wird das gesamte Rechteck von den Koordinaten `sx` und `sy` bis zur unteren rechten Ecke des Bildes verwendet. Verwenden Sie die 3- oder 5-Argument-Syntax, um dieses Argument auszulassen. Ein negativer Wert dreht das Bild.
- `sHeight` {{optional_inline}}
  - : Die Höhe des Teilrechtecks des Quell`image`, das in den Zielkontext gezeichnet werden soll. Verwenden Sie die 3- oder 5-Argument-Syntax, um dieses Argument auszulassen. Ein negativer Wert dreht das Bild.
- `dx`
  - : Die x-Koordinate im Ziel-Canvas, an der die obere linke Ecke des Quell`image` platziert werden soll.
- `dy`
  - : Die y-Koordinate im Ziel-Canvas, an der die obere linke Ecke des Quell`image` platziert werden soll.
- `dWidth`
  - : Die Breite, mit der das `image` im Ziel-Canvas gezeichnet werden soll. Dies ermöglicht eine Skalierung des gezeichneten Bildes. Wenn nicht angegeben, wird das Bild beim Zeichnen in der Breite nicht skaliert. Beachten Sie, dass dieses Argument nicht in der 3-Argument-Syntax enthalten ist.
- `dHeight`
  - : Die Höhe, mit der das `image` im Ziel-Canvas gezeichnet werden soll. Dies ermöglicht eine Skalierung des gezeichneten Bildes. Wenn nicht angegeben, wird das Bild beim Zeichnen in der Höhe nicht skaliert. Beachten Sie, dass dieses Argument nicht in der 3-Argument-Syntax enthalten ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Bild keine Bilddaten hat oder wenn die Breite oder Höhe des Canvas oder des Quellrechtecks null ist.
- `TypeMismatchError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein `null` oder `undefined` Bild als Parameter übergeben wird.

## Beispiele

### Zeichnen eines Bildes auf das Canvas

Dieses Beispiel zeichnet ein Bild auf das Canvas unter Verwendung der `drawImage()`-Methode.

#### HTML

```html
<canvas id="canvas"></canvas>
<div style="display:none;">
  <img
    id="source"
    src="https://mdn.github.io/shared-assets/images/examples/rhino.jpg"
    width="300"
    height="227" />
</div>
```

#### JavaScript

Das Quellbild wird von den Koordinaten (33, 71) mit einer Breite von 104 und einer Höhe von 124 entnommen. Es wird auf das Canvas bei (21, 20) gezeichnet, wo es eine Breite von 87 und eine Höhe von 104 erhält.

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

### Verständnis der Größe des Quell-Elements

Die `drawImage()`-Methode verwendet die _intrinsische Größe in CSS-Pixeln_ des Quell-Elements beim Zeichnen.

Zum Beispiel, wenn Sie ein `Image` laden und die optionalen Größenparameter in seinem [Konstruktor](/de/docs/Web/API/HTMLImageElement/Image) angeben, müssen Sie die `naturalWidth`- und `naturalHeight`-Eigenschaften der erstellten Instanz verwenden, um Dinge wie Zuschneiden und Skalieren richtig zu berechnen, anstatt `element.width` und `element.height`. Dasselbe gilt für `videoWidth` und `videoHeight`, wenn das Element ein {{htmlelement("video")}}-Element ist, und so weiter.

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

## Hinweise

- `drawImage()` funktioniert nur korrekt auf einem [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), wenn dessen [`HTMLMediaElement.readyState`](/de/docs/Web/API/HTMLMediaElement/readyState) größer als 1 ist (d.h. das **seek**-Ereignis ausgelöst wird, nachdem die `currentTime`-Eigenschaft gesetzt wurde).
- `drawImage()` verwendet immer die _intrinsische Größe in CSS-Pixeln_ des Quell-Elements beim Zeichnen, Zuschneiden und/oder Skalieren.
- In einigen älteren Browserversionen ignoriert `drawImage()` alle EXIF-Metadaten in Bildern, einschließlich der Ausrichtung. Dieses Verhalten ist besonders auf iOS-Geräten problematisch. Sie sollten die Ausrichtung selbst erkennen und `rotate()` verwenden, um sie richtig darzustellen.

## Siehe auch

- Das Interface, das diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
