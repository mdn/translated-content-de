---
title: "CanvasRenderingContext2D: drawImage()-Methode"
short-title: drawImage()
slug: Web/API/CanvasRenderingContext2D/drawImage
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{APIRef}}

Die **`CanvasRenderingContext2D.drawImage()`**-Methode der Canvas 2D API bietet verschiedene Möglichkeiten, ein Bild auf die Zeichenfläche zu zeichnen.

## Syntax

```js-nolint
drawImage(image, dx, dy)
drawImage(image, dx, dy, dWidth, dHeight)
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
```

![drawImage](canvas_drawimage.jpg)

### Parameter

- `image`
  - : Ein Element, das in den Kontext gezeichnet werden soll. Die Spezifikation erlaubt jede Quelle eines Canvas-Bildes, insbesondere,
    ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement),
    ein [`SVGImageElement`](/de/docs/Web/API/SVGImageElement),
    ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement),
    ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement),
    ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap),
    ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas),
    oder ein [`VideoFrame`](/de/docs/Web/API/VideoFrame).
- `sx` {{optional_inline}}
  - : Die x-Achsen-Koordinate der oberen linken Ecke des Sub-Rechtecks der Quell-`image`, das in den Zielkontext gezeichnet werden soll. Verwenden Sie die 3- oder 5-Argument-Syntax, um dieses Argument auszulassen.
- `sy` {{optional_inline}}
  - : Die y-Achsen-Koordinate der oberen linken Ecke des Sub-Rechtecks der Quell-`image`, das in den Zielkontext gezeichnet werden soll. Verwenden Sie die 3- oder 5-Argument-Syntax, um dieses Argument auszulassen.
- `sWidth` {{optional_inline}}
  - : Die Breite des Sub-Rechtecks der Quell-`image`, das in den Zielkontext gezeichnet werden soll. Wenn nicht angegeben, wird das gesamte Rechteck von den durch `sx` und `sy` angegebenen Koordinaten bis zur unteren rechten Ecke des Bildes verwendet. Ein negativer Wert spiegelt das Bild.
- `sHeight` {{optional_inline}}
  - : Die Höhe des Sub-Rechtecks der Quell-`image`, das in den Zielkontext gezeichnet werden soll. Verwenden Sie die 3- oder 5-Argument-Syntax, um dieses Argument auszulassen. Ein negativer Wert spiegelt das Bild.
- `dx`
  - : Die x-Achsen-Koordinate auf der Ziel-Zeichenfläche, an der die obere linke Ecke der Quell-`image` platziert werden soll.
- `dy`
  - : Die y-Achsen-Koordinate auf der Ziel-Zeichenfläche, an der die obere linke Ecke der Quell-`image` platziert werden soll.
- `dWidth`
  - : Die Breite, mit der das `image` auf der Ziel-Zeichenfläche gezeichnet werden soll. Dies ermöglicht das Skalieren des gezeichneten Bildes. Wenn nicht angegeben, wird das Bild in der Breite nicht skaliert, wenn es gezeichnet wird. Beachten Sie, dass dieses Argument nicht in der 3-Argument-Syntax enthalten ist.
- `dHeight`
  - : Die Höhe, mit der das `image` auf der Ziel-Zeichenfläche gezeichnet werden soll. Dies ermöglicht das Skalieren des gezeichneten Bildes. Wenn nicht angegeben, wird das Bild in der Höhe nicht skaliert, wenn es gezeichnet wird. Beachten Sie, dass dieses Argument nicht in der 3-Argument-Syntax enthalten ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Bild keine Bilddaten hat oder wenn die Breite oder Höhe der Zeichenfläche oder des Quellrechtecks null ist.
- `TypeMismatchError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein `null`- oder `undefined`-Bild als Parameter übergeben wird.

## Beispiele

### Zeichnen eines Bildes auf die Zeichenfläche

Dieses Beispiel zeichnet ein Bild auf die Zeichenfläche mithilfe der `drawImage()`-Methode.

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

Das Quellbild wird von den Koordinaten (33, 71) mit einer Breite von 104 und einer Höhe von 124 entnommen. Es wird auf die Zeichenfläche bei (21, 20) gezeichnet, wo es eine Breite von 87 und eine Höhe von 104 erhält.

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

### Verstehen der Quell-Elementgröße

Die `drawImage()`-Methode verwendet die _intrinsische Größe des Quell-Elements in CSS-Pixel_ beim Zeichnen.

Zum Beispiel, wenn Sie ein `Image` laden und die optionalen Größenparameter in dessen [Konstruktor](/de/docs/Web/API/HTMLImageElement/Image) angeben, müssen Sie die `naturalWidth` und `naturalHeight` Eigenschaften der erstellten Instanz verwenden, um Dinge wie Zuschneiden und Skalierung korrekt zu berechnen, anstatt `element.width` und `element.height`. Gleiches gilt für `videoWidth` und `videoHeight`, wenn das Element ein {{htmlelement("video")}}-Element ist, und so weiter.

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

- `drawImage()` funktioniert nur korrekt auf einem [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), wenn dessen [`HTMLMediaElement.readyState`](/de/docs/Web/API/HTMLMediaElement/readyState) größer als 1 ist (d.h. **seek**-Ereignis nach dem Setzen der `currentTime`-Eigenschaft ausgelöst).
- `drawImage()` verwendet beim Zeichnen, Zuschneiden und/oder Skalieren immer die _intrinsische Größe des Quell-Elements in CSS-Pixel_.
- In einigen älteren Browserversionen ignoriert `drawImage()` alle EXIF-Metadaten in Bildern, einschließlich der Orientierung. Dieses Verhalten ist besonders auf iOS-Geräten problematisch. Sie sollten die Orientierung selbst erkennen und `rotate()` verwenden, um sie korrekt einzustellen.

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
