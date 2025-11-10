---
title: "CanvasPattern: setTransform() Methode"
short-title: setTransform()
slug: Web/API/CanvasPattern/setTransform
l10n:
  sourceCommit: b2fb522de3a3aaf238d9b5af8dcf627d201551f7
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`CanvasPattern.setTransform()`** Methode verwendet ein [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) Objekt als Transformationsmatrix für das Muster und wendet es auf das Muster an.

## Syntax

```js-nolint
setTransform(matrix)
```

### Parameter

- `matrix`
  - : Eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), die als Transformationsmatrix für das Muster verwendet wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Verwendung der `setTransform` Methode

Dies ist ein Code-Snippet, das die `setTransform` Methode verwendet, um ein [`CanvasPattern`](/de/docs/Web/API/CanvasPattern) mit der vorgegebenen Mustertransformation von einer [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zu erstellen. Das Muster wird angewendet, wenn Sie es als aktuelles [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) festlegen und auf die Leinwand zeichnen, wenn Sie zum Beispiel die Methode [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) verwenden.

```html live-sample___canvas
<canvas id="canvas"></canvas>
```

```js live-sample___canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const matrix = new DOMMatrix([1, 0.2, 0.8, 1, 0, 0]);

const img = new Image();
img.src = "canvas_create_pattern.png";

img.onload = () => {
  const pattern = ctx.createPattern(img, "repeat");
  pattern.setTransform(matrix.rotate(-45).scale(1.5));
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 400, 400);
};
```

{{EmbedLiveSample('canvas', , 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`CanvasPattern`](/de/docs/Web/API/CanvasPattern)
- [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)
