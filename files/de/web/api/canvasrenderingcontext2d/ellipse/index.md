---
title: "CanvasRenderingContext2D: ellipse() Methode"
short-title: ellipse()
slug: Web/API/CanvasRenderingContext2D/ellipse
l10n:
  sourceCommit: be68d68e0bf1c9cdf5f40939201403638fb90cbe
---

{{APIRef}}

Die
**`CanvasRenderingContext2D.ellipse()`**
Methode der Canvas 2D API fügt einen elliptischen Bogen zum aktuellen Unterpfad hinzu.

## Syntax

```js-nolint
ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)
ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise)
```

Die `ellipse()` Methode erstellt einen elliptischen Bogen, der am Mittelpunkt `(x, y)` mit den Radien `radiusX` und `radiusY` zentriert ist. Der Pfad beginnt bei `startAngle` und endet bei `endAngle` und verläuft in der durch `counterclockwise` angegebenen Richtung (standardmäßig im Uhrzeigersinn).

### Parameter

- `x`
  - : Die x-Achse (horizontale) Koordinate des Mittelpunkts der Ellipse.
- `y`
  - : Die y-Achse (vertikale) Koordinate des Mittelpunkts der Ellipse.
- `radiusX`
  - : Der Radius der Hauptachse der Ellipse. Muss nicht-negativ sein.
- `radiusY`
  - : Der Radius der Nebenachse der Ellipse. Muss nicht-negativ sein.
- `rotation`
  - : Die Rotation der Ellipse, ausgedrückt in Radiant.
- `startAngle`
  - : Der [Exzentrische Winkel](https://en.wikipedia.org/wiki/Angular_eccentricity), bei dem die Ellipse beginnt, im Uhrzeigersinn vom positiven x-Achse gemessen und in Radiant ausgedrückt.
- `endAngle`
  - : Der [Exzentrische Winkel](https://en.wikipedia.org/wiki/Angular_eccentricity), bei dem die Ellipse endet, im Uhrzeigersinn vom positiven x-Achse gemessen und in Radiant ausgedrückt.
- `counterclockwise` {{optional_inline}}
  - : Ein optionaler boolescher Wert, der bei `true` die Ellipse gegen den Uhrzeigersinn (entgegengesetzt dem Uhrzeigersinn) zeichnet. Der Standardwert ist `false` (im Uhrzeigersinn).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Zeichnen einer vollständigen Ellipse

Dieses Beispiel zeichnet eine Ellipse in einem Winkel von π/4 Radiant (45°). Um eine vollständige Ellipse zu zeichnen, beginnt der Bogen bei einem Winkel von 0 Radiant (0°) und endet bei einem Winkel von 2π Radiant (360°).

#### HTML

```html
<canvas id="canvas" width="200" height="200"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Draw the ellipse
ctx.beginPath();
ctx.ellipse(100, 100, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
ctx.stroke();

// Draw the ellipse's line of reflection
ctx.beginPath();
ctx.setLineDash([5, 5]);
ctx.moveTo(0, 200);
ctx.lineTo(200, 0);
ctx.stroke();
```

#### Ergebnis

{{ EmbedLiveSample('Drawing_a_full_ellipse', 700, 250) }}

### Verschiedene elliptische Bögen

Dieses Beispiel erzeugt drei elliptische Pfade mit unterschiedlichen Eigenschaften.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.beginPath();
ctx.ellipse(60, 75, 50, 30, Math.PI * 0.25, 0, Math.PI * 1.5);
ctx.fill();

ctx.fillStyle = "blue";
ctx.beginPath();
ctx.ellipse(150, 75, 50, 30, Math.PI * 0.25, 0, Math.PI);
ctx.fill();

ctx.fillStyle = "green";
ctx.beginPath();
ctx.ellipse(240, 75, 50, 30, Math.PI * 0.25, 0, Math.PI, true);
ctx.fill();
```

#### Ergebnis

{{ EmbedLiveSample('Various_elliptical_arcs', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- Verwenden Sie [`CanvasRenderingContext2D.arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc), um einen kreisförmigen Bogen zu zeichnen
