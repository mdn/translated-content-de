---
title: "CanvasRenderingContext2D: moveTo()-Methode"
short-title: moveTo()
slug: Web/API/CanvasRenderingContext2D/moveTo
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die
**`CanvasRenderingContext2D.moveTo()`**
Methode der Canvas 2D API beginnt einen neuen Unterpfad an dem durch die angegebenen
`(x, y)` Koordinaten spezifizierten Punkt.

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

Dieses Beispiel verwendet `moveTo()`, um zwei Unterpfade innerhalb eines einzigen Pfades zu erstellen.
Beide Unterpfade werden dann mit einem einzigen `stroke()`-Aufruf gezeichnet.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die erste Linie beginnt bei (50, 50) und endet bei (200, 50). Die zweite Linie beginnt bei (50,
90\) und endet bei (280, 120).

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50, 50); // Beginne ersten Unterpfad
ctx.lineTo(200, 50);
ctx.moveTo(50, 90); // Beginne zweiten Unterpfad
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

- Das Interface, das diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineTo()")}}
- {{domxref("CanvasRenderingContext2D.stroke()")}}
