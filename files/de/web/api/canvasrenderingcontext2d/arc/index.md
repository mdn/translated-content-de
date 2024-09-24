---
title: "CanvasRenderingContext2D: arc()-Methode"
short-title: arc()
slug: Web/API/CanvasRenderingContext2D/arc
l10n:
  sourceCommit: be68d68e0bf1c9cdf5f40939201403638fb90cbe
---

{{APIRef}}

Die **`CanvasRenderingContext2D.arc()`**-Methode der [Canvas 2D API](/de/docs/Web/API/CanvasRenderingContext2D) fügt einen Kreisbogen zur aktuellen Unterpfad hinzu.

## Syntax

```js-nolint
arc(x, y, radius, startAngle, endAngle)
arc(x, y, radius, startAngle, endAngle, counterclockwise)
```

Die `arc()`-Methode erstellt einen Kreisbogen mit dem Zentrum bei `(x, y)` und einem Radius von `radius`. Der Pfad beginnt bei `startAngle`, endet bei `endAngle` und folgt der Richtung, die durch `counterclockwise` angegeben wird (standardmäßig im Uhrzeigersinn).

### Parameter

- `x`
  - : Die horizontale Koordinate des Bogenzentrums.
- `y`
  - : Die vertikale Koordinate des Bogenzentrums.
- `radius`
  - : Der Radius des Bogens. Muss positiv sein.
- `startAngle`
  - : Der Winkel, bei dem der Bogen beginnt in Bogenmaß, gemessen ab der positiven x-Achse.
- `endAngle`
  - : Der Winkel, bei dem der Bogen endet in Bogenmaß, gemessen ab der positiven x-Achse.
- `counterclockwise` {{optional_inline}}
  - : Ein optionaler boolescher Wert. Wenn `true`, wird der Bogen gegen den Uhrzeigersinn zwischen den Start- und Endwinkeln gezeichnet. Der Standardwert ist `false` (im Uhrzeigersinn).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Einen vollständigen Kreis zeichnen

Dieses Beispiel zeichnet einen vollständigen Kreis mit der `arc()`-Methode.

#### HTML

```html
<canvas></canvas>
```

#### JavaScript

Der Bogen erhält eine x-Koordinate von 100, eine y-Koordinate von 75 und einen Radius von 50. Um einen vollständigen Kreis zu zeichnen, beginnt der Bogen bei einem Winkel von 0 Radianten (0°) und endet bei einem Winkel von 2π Radianten (360°).

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

Dieses Beispiel zeigt verschiedene Formen, um zu demonstrieren, was mit `arc()` möglich ist.

```html hidden
<canvas width="150" height="200"></canvas>
```

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Formen zeichnen
for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 2; j++) {
    ctx.beginPath();
    let x = 25 + j * 50; // x-Koordinate
    let y = 25 + i * 50; // y-Koordinate
    let radius = 20; // Bogenradius
    let startAngle = 0; // Startpunkt auf dem Kreis
    let endAngle = Math.PI + (Math.PI * j) / 2; // Endpunkt auf dem Kreis
    let counterclockwise = i % 2 === 1; // Gegen den Uhrzeigersinn zeichnen

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

- Das Interface, das diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
- Verwenden Sie {{domxref("CanvasRenderingContext2D.ellipse()")}}, um einen elliptischen Bogen zu zeichnen.
