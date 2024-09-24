---
title: "CanvasRenderingContext2D: drawImage()-Methode"
short-title: drawImage()
slug: Web/API/CanvasRenderingContext2D/drawImage
l10n:
  sourceCommit: c0f1aecaed48d75652c6dd97f30c7febd07e5cde
---

{{APIRef}}

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
  - : Ein Element, das in den Kontext gezeichnet werden soll. Die Spezifikation erlaubt jede Leinwandbildquelle, insbesondere,
    ein {{domxref("HTMLImageElement")}},
    ein {{domxref("SVGImageElement")}},
    ein {{domxref("HTMLVideoElement")}},
    ein {{domxref("HTMLCanvasElement")}},
    ein {{domxref("ImageBitmap")}},
    ein {{domxref("OffscreenCanvas")}},
    oder ein {{domxref("VideoFrame")}}.
- `sx` {{optional_inline}}
  - : Die x-Achsenkoordinate der oberen linken Ecke des Teilrechtecks der Quell-`image`, das in den Zielkontext gezeichnet werden soll. Verwenden Sie die Drei- oder Fünf-Argumente-Syntax, um dieses Argument wegzulassen.
- `sy` {{optional_inline}}
  - : Die y-Achsenkoordinate der oberen linken Ecke des Teilrechtecks der Quell-`image`, das in den Zielkontext gezeichnet werden soll. Verwenden Sie die Drei- oder Fünf-Argumente-Syntax, um dieses Argument wegzulassen.
- `sWidth` {{optional_inline}}
  - : Die Breite des Teilrechtecks der Quell-`image`, das in den Zielkontext gezeichnet werden soll. Wenn nicht angegeben, wird das gesamte Rechteck von den durch `sx` und `sy` angegebenen Koordinaten bis zur unteren rechten Ecke des Bildes verwendet. Ein negativer Wert dreht das Bild um.
- `sHeight` {{optional_inline}}
  - : Die Höhe des Teilrechtecks der Quell-`image`, das in den Zielkontext gezeichnet werden soll. Verwenden Sie die Drei- oder Fünf-Argumente-Syntax, um dieses Argument wegzulassen. Ein negativer Wert dreht das Bild um.
- `dx`
  - : Die x-Achsenkoordinate auf der Zielleinwand, an der die obere linke Ecke der Quell-`image` platziert werden soll.
- `dy`
  - : Die y-Achsenkoordinate auf der Zielleinwand, an der die obere linke Ecke der Quell-`image` platziert werden soll.
- `dWidth`
  - : Die Breite, in der die `image` auf der Zielleinwand gezeichnet werden soll. Dies ermöglicht das Skalieren des gezeichneten Bildes. Wenn nicht angegeben, wird das Bild beim Zeichnen nicht in der Breite skaliert. Beachten Sie, dass dieses Argument nicht in der Drei-Argumente-Syntax enthalten ist.
- `dHeight`
  - : Die Höhe, in der die `image` auf der Zielleinwand gezeichnet werden soll. Dies ermöglicht das Skalieren des gezeichneten Bildes. Wenn nicht angegeben, wird das Bild beim Zeichnen nicht in der Höhe skaliert. Beachten Sie, dass dieses Argument nicht in der Drei-Argumente-Syntax enthalten ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das Bild keine Bilddaten hat oder wenn die Leinwand oder die Quellrechteckbreite oder -höhe null ist.
- `TypeMismatchError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn ein `null`- oder `undefined`-Bild als Parameter übergeben wird.

## Beispiele

### Ein Bild auf die Leinwand zeichnen

Dieses Beispiel zeigt, wie ein Bild mit der `drawImage()`-Methode auf die Leinwand gezeichnet wird.

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

Das Quellbild wird von den Koordinaten (33, 71) genommen, mit einer Breite von 104 und einer Höhe von 124. Es wird an der Position (21, 20) auf die Leinwand gezeichnet, wobei es eine Breite von 87 und eine Höhe von 104 erhält.

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

Wenn Sie beispielsweise ein `Image` laden und die optionalen Größenparameter in seinem [Konstruktor](/de/docs/Web/API/HTMLImageElement/Image) angeben, müssen Sie die `naturalWidth` und `naturalHeight` Eigenschaften der erstellten Instanz verwenden, um Dinge wie Zuschneide- und Skalierungsregionen korrekt zu berechnen, anstatt `element.width` und `element.height`. Gleiches gilt für `videoWidth` und `videoHeight`, wenn das Element ein {{htmlelement("video")}}-Element ist und so weiter.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const image = new Image(60, 45); // Verwendung der optionalen Größe für das Bild
image.onload = drawImageActualSize; // Zeichne, wenn das Bild geladen ist

// Laden eines Bildes mit intrinsischer Größe 300x227 in CSS-Pixeln
image.src = "https://mdn.github.io/shared-assets/images/examples/rhino.jpg";

function drawImageActualSize() {
  // Verwende die intrinsische Größe des Bildes in CSS-Pixeln für das Canvas-Element
  canvas.width = this.naturalWidth;
  canvas.height = this.naturalHeight;

  // Zeichnet das Bild in 300x227, ignoriert die benutzerdefinierte Größe von 60x45
  // im Konstruktor angegeben
  ctx.drawImage(this, 0, 0);

  // Um die benutzerdefinierte Größe zu verwenden, müssen wir die Skalierungsparameter
  // mit den Breiten- und Höhen-Eigenschaften des Elements angeben - lassen Sie uns eins
  // in der Ecke oben drauf zeichnen:
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

- `drawImage()` funktioniert korrekt bei einem {{domxref("HTMLVideoElement")}} nur, wenn dessen {{domxref("HTMLMediaElement.readyState")}} größer als 1 ist (d.h., **seek**-Ereignis ausgelöst nach dem Setzen der `currentTime`-Eigenschaft).
- `drawImage()` verwendet beim Zeichnen, Zuschneiden und/oder Skalieren immer die _intrinsische Größe in CSS-Pixeln_ des Quell-Elements.
- In einigen älteren Browserversionen ignoriert `drawImage()` alle EXIF-Metadaten in Bildern, einschließlich der Ausrichtung. Dieses Verhalten ist besonders auf iOS-Geräten problematisch. Sie sollten die Ausrichtung selbst erkennen und `rotate()` verwenden, um es richtigzustellen.

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
