---
title: "CanvasRenderingContext2D: arc()-Methode"
short-title: arc()
slug: Web/API/CanvasRenderingContext2D/arc
l10n:
  sourceCommit: be68d68e0bf1c9cdf5f40939201403638fb90cbe
---

{{APIRef}}

Die **`CanvasRenderingContext2D.arc()`**-Methode der [Canvas 2D API](/de/docs/Web/API/CanvasRenderingContext2D) fügt dem aktuellen Unterpfad einen kreisförmigen Bogen hinzu.

## Syntax

```js-nolint
arc(x, y, radius, startAngle, endAngle)
arc(x, y, radius, startAngle, endAngle, counterclockwise)
```

Die `arc()`-Methode erstellt einen kreisförmigen Bogen, der auf `(x, y)` zentriert ist und einen Radius von `radius` hat. Der Pfad beginnt bei `startAngle`, endet bei `endAngle` und folgt der durch `counterclockwise` angegebenen Richtung (standardmäßig im Uhrzeigersinn).

### Parameter

- `x`
  - : Die horizontale Koordinate des Mittelpunktes des Bogens.
- `y`
  - : Die vertikale Koordinate des Mittelpunktes des Bogens.
- `radius`
  - : Der Radius des Bogens. Muss positiv sein.
- `startAngle`
  - : Der Winkel, bei dem der Bogen in Radiant beginnt, gemessen von der positiven x-Achse.
- `endAngle`
  - : Der Winkel, bei dem der Bogen in Radiant endet, gemessen von der positiven x-Achse.
- `counterclockwise` {{optional_inline}}
  - : Ein optionaler boolescher Wert. Wenn `true`, wird der Bogen gegen den Uhrzeigersinn zwischen den Start- und Endwinkeln gezogen. Standard ist `false` (im Uhrzeigersinn).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Zeichnen eines vollständigen Kreises

Dieses Beispiel zeichnet mit der `arc()`-Methode einen vollständigen Kreis.

#### HTML

```html
<canvas></canvas>
```

#### JavaScript

Dem Bogen wird eine x-Koordinate von 100, eine y-Koordinate von 75 und ein Radius von 50 gegeben. Um einen vollständigen Kreis zu erstellen, beginnt der Bogen bei einem Winkel von 0 Radiant (0°) und endet bei einem Winkel von 2π Radiant (360°).

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();
```

#### Ergebnis

{{ EmbedLiveSample('Drawing_a_full_circle', 700, 180) }}

### Verschiedene dargestellte Formen

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

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- Verwenden Sie [`CanvasRenderingContext2D.ellipse()`](/de/docs/Web/API/CanvasRenderingContext2D/ellipse), um einen elliptischen Bogen zu zeichnen.
