---
title: "CanvasRenderingContext2D: ellipse()-Methode"
short-title: ellipse()
slug: Web/API/CanvasRenderingContext2D/ellipse
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.ellipse()`**-Methode der Canvas 2D API fügt dem aktuellen Unterpfad einen elliptischen Bogen hinzu.

## Syntax

```js-nolint
ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)
ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise)
```

Die `ellipse()`-Methode erstellt einen elliptischen Bogen, der bei `(x, y)` zentriert ist und die Radien `radiusX` und `radiusY` hat. Der Pfad beginnt bei `startAngle` und endet bei `endAngle` und verläuft in der durch `counterclockwise` angegebenen Richtung (standardmäßig im Uhrzeigersinn).

### Parameter

- `x`
  - : Die x-Achsen-(horizontale) Koordinate des Mittelpunkts der Ellipse.
- `y`
  - : Die y-Achsen-(vertikale) Koordinate des Mittelpunkts der Ellipse.
- `radiusX`
  - : Der Halbachsenradius der Ellipse. Muss nicht negativ sein.
- `radiusY`
  - : Der Nebenachsenradius der Ellipse. Muss nicht negativ sein.
- `rotation`
  - : Die Rotation der Ellipse, ausgedrückt in Bogenmaß.
- `startAngle`
  - : Der [ekzentrische Winkel](https://en.wikipedia.org/wiki/Angular_eccentricity), bei dem die Ellipse beginnt, im Uhrzeigersinn vom positiven x-Achsenausgangspunkt gemessen und ausgedrückt in Bogenmaß.
- `endAngle`
  - : Der [ekzentrische Winkel](https://en.wikipedia.org/wiki/Angular_eccentricity), bei dem die Ellipse endet, im Uhrzeigersinn vom positiven x-Achsenausgangspunkt gemessen und ausgedrückt in Bogenmaß.
- `counterclockwise` {{optional_inline}}
  - : Ein optionaler boolescher Wert, der, wenn `true`, die Ellipse gegen den Uhrzeigersinn zeichnet. Der Standardwert ist `false` (im Uhrzeigersinn).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Zeichnen einer vollständigen Ellipse

Dieses Beispiel zeichnet eine Ellipse in einem Winkel von π/4 Bogenmaß (45°). Um eine vollständige Ellipse zu erstellen, beginnt der Bogen bei einem Winkel von 0 Bogenmaß (0°) und endet bei einem Winkel von 2π Bogenmaß (360°).

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

Dieses Beispiel erstellt drei elliptische Pfade mit unterschiedlichen Eigenschaften.

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

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- Verwenden Sie [`CanvasRenderingContext2D.arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc), um einen kreisförmigen Bogen zu zeichnen
