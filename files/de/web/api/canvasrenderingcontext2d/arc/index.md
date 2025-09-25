---
title: "CanvasRenderingContext2D: arc()-Methode"
short-title: arc()
slug: Web/API/CanvasRenderingContext2D/arc
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.arc()`**-Methode der [Canvas 2D API](/de/docs/Web/API/CanvasRenderingContext2D) fügt dem aktuellen Sub-Pfad einen kreisförmigen Bogen hinzu.

## Syntax

```js-nolint
arc(x, y, radius, startAngle, endAngle)
arc(x, y, radius, startAngle, endAngle, counterclockwise)
```

Die Methode `arc()` erstellt einen kreisförmigen Bogen mit dem Mittelpunkt `(x, y)` und einem Radius von `radius`. Der Pfad beginnt bei `startAngle`, endet bei `endAngle` und verläuft in der durch `counterclockwise` angegebenen Richtung (standardmäßig im Uhrzeigersinn).

### Parameter

- `x`
  - : Die horizontale Koordinate des Mittelpunktes des Bogens.
- `y`
  - : Die vertikale Koordinate des Mittelpunktes des Bogens.
- `radius`
  - : Der Radius des Bogens. Muss positiv sein.
- `startAngle`
  - : Der Winkel, bei dem der Bogen in Bogenmaß beginnt, gemessen von der positiven x-Achse.
- `endAngle`
  - : Der Winkel, bei dem der Bogen in Bogenmaß endet, gemessen von der positiven x-Achse.
- `counterclockwise` {{optional_inline}}
  - : Ein optionaler boolescher Wert. Wenn `true`, wird der Bogen gegen den Uhrzeigersinn zwischen den Start- und Endwinkeln gezeichnet. Der Standard ist `false` (im Uhrzeigersinn).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Zeichnen eines vollständigen Kreises

Dieses Beispiel zeichnet einen vollständigen Kreis mit der `arc()`-Methode.

#### HTML

```html
<canvas></canvas>
```

#### JavaScript

Der Bogen erhält eine x-Koordinate von 100, eine y-Koordinate von 75 und einen Radius von 50. Um einen vollständigen Kreis zu erstellen, beginnt der Bogen bei einem Winkel von 0 Bogenmaß (0°) und endet bei einem Winkel von 2π Bogenmaß (360°).

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();
```

#### Ergebnis

{{ EmbedLiveSample('Drawing_a_full_circle', 700, 180) }}

### Verschiedene Formen demonstriert

Dieses Beispiel zeichnet verschiedene Formen, um zu zeigen, was mit `arc()` möglich ist.

```html hidden
<canvas width="150" height="200"></canvas>
```

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Draw shapes
for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 2; j++) {
    ctx.beginPath();
    let x = 25 + j * 50; // x coordinate
    let y = 25 + i * 50; // y coordinate
    let radius = 20; // Arc radius
    let startAngle = 0; // Starting point on circle
    let endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
    let counterclockwise = i % 2 === 1; // Draw counterclockwise

    ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

    if (i > 1) {
      ctx.fill();
    } else {
      ctx.stroke();
    }
  }
}
```

#### Ergebnis

{{EmbedLiveSample('Different_shapes_demonstrated', "", "210")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- Verwenden Sie [`CanvasRenderingContext2D.ellipse()`](/de/docs/Web/API/CanvasRenderingContext2D/ellipse), um einen elliptischen Bogen zu zeichnen.
