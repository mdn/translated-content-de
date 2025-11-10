---
title: "CanvasRenderingContext2D: moveTo() Methode"
short-title: moveTo()
slug: Web/API/CanvasRenderingContext2D/moveTo
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.moveTo()`**-Methode der Canvas 2D-API beginnt einen neuen Unterpfad an dem Punkt, der durch die angegebenen `(x, y)`-Koordinaten spezifiziert wird.

## Syntax

```js-nolint
moveTo(x, y)
```

### Parameter

- `x`
  - : Die x-Achse (horizontale) Koordinate des Punktes.
- `y`
  - : Die y-Achse (vertikale) Koordinate des Punktes.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Erstellen mehrerer Unterpfade

Dieses Beispiel verwendet `moveTo()`, um zwei Unterpfade innerhalb eines einzelnen Pfades zu erstellen. Beide Unterpfade werden dann mit einem einzigen `stroke()`-Aufruf gerendert.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die erste Linie beginnt bei (50, 50) und endet bei (200, 50). Die zweite Linie beginnt bei (50, 90) und endet bei (280, 120).

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50, 50); // Begin first sub-path
ctx.lineTo(200, 50);
ctx.moveTo(50, 90); // Begin second sub-path
ctx.lineTo(280, 120);
ctx.stroke();
```

#### Ergebnis

{{ EmbedLiveSample('Creating_multiple_sub-paths', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.lineTo()`](/de/docs/Web/API/CanvasRenderingContext2D/lineTo)
- [`CanvasRenderingContext2D.stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke)
