---
title: "CanvasRenderingContext2D: Methode quadraticCurveTo()"
short-title: quadraticCurveTo()
slug: Web/API/CanvasRenderingContext2D/quadraticCurveTo
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die Methode
**`CanvasRenderingContext2D.quadraticCurveTo()`**
der Canvas 2D API fügt dem aktuellen Unterpfad eine quadratische {{Glossary("Bezier_curve", "Bézier-Kurve")}} hinzu. Sie benötigt zwei Punkte: Der erste ist ein Kontrollpunkt und der zweite ist
der Endpunkt. Der Startpunkt ist der zuletzt festgelegte Punkt im aktuellen Pfad, der mit [`moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo) geändert werden kann, bevor die quadratische Bézier-Kurve erstellt wird.

## Syntax

```js-nolint
quadraticCurveTo(cpx, cpy, x, y)
```

### Parameter

- `cpx`
  - : Die x-Achsen-Koordinate des Kontrollpunkts.
- `cpy`
  - : Die y-Achsen-Koordinate des Kontrollpunkts.
- `x`
  - : Die x-Achsen-Koordinate des Endpunkts.
- `y`
  - : Die y-Achsen-Koordinate des Endpunkts.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Funktionsweise von quadraticCurveTo

Dieses Beispiel zeigt, wie eine quadratische Bézier-Kurve gezeichnet wird.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Quadratic Bézier curve
ctx.beginPath();
ctx.moveTo(50, 20);
ctx.quadraticCurveTo(230, 30, 50, 100);
ctx.stroke();

// Start and end points
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(50, 20, 5, 0, 2 * Math.PI); // Start point
ctx.arc(50, 100, 5, 0, 2 * Math.PI); // End point
ctx.fill();

// Control point
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(230, 30, 5, 0, 2 * Math.PI);
ctx.fill();
```

#### Ergebnis

In diesem Beispiel ist der Kontrollpunkt rot und die
Start- und Endpunkte sind blau.

{{ EmbedLiveSample('How_quadraticCurveTo_works', 315, 165) }}

### Eine einfache quadratische Kurve

Dieses Beispiel zeichnet eine einfache quadratische Bézier-Kurve mit
`quadraticCurveTo()`.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die Kurve beginnt an dem von `moveTo()` angegebenen Punkt: (20, 110). Der Kontrollpunkt befindet sich bei (230, 150). Die Kurve endet bei (250, 20).

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(20, 110);
ctx.quadraticCurveTo(230, 150, 250, 20);
ctx.stroke();
```

#### Ergebnis

{{ EmbedLiveSample('A_simple_quadratic_curve', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- {{Glossary("Bezier_curve", "Bézier-Kurve")}}
