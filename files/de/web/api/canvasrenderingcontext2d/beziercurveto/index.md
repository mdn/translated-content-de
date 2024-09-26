---
title: "CanvasRenderingContext2D: Methode bezierCurveTo()"
short-title: bezierCurveTo()
slug: Web/API/CanvasRenderingContext2D/bezierCurveTo
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die **`CanvasRenderingContext2D.bezierCurveTo()`**-Methode der Canvas 2D-API fügt dem aktuellen Unterpfad eine kubische [Bézier-Kurve](/de/docs/Glossary/Bezier_curve) hinzu. Es werden drei Punkte benötigt: die ersten beiden sind Kontrollpunkte und der dritte ist der Endpunkt. Der Startpunkt ist der letzte Punkt im aktuellen Pfad, der durch die Verwendung von {{domxref("CanvasRenderingContext2D.moveTo", "moveTo()")}} geändert werden kann, bevor die Bézier-Kurve erstellt wird.

## Syntax

```js-nolint
bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
```

### Parameter

- `cp1x`
  - : Die x-Achsen-Koordinate des ersten Kontrollpunkts.
- `cp1y`
  - : Die y-Achsen-Koordinate des ersten Kontrollpunkts.
- `cp2x`
  - : Die x-Achsen-Koordinate des zweiten Kontrollpunkts.
- `cp2y`
  - : Die y-Achsen-Koordinate des zweiten Kontrollpunkts.
- `x`
  - : Die x-Achsen-Koordinate des Endpunkts.
- `y`
  - : Die y-Achsen-Koordinate des Endpunkts.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Funktionsweise von bezierCurveTo

Dieses Beispiel zeigt, wie eine kubische Bézier-Kurve gezeichnet wird.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
// Definieren von Canvas und Kontext
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Definieren der Punkte als {x, y}
let start = { x: 50, y: 20 };
let cp1 = { x: 230, y: 30 };
let cp2 = { x: 150, y: 80 };
let end = { x: 250, y: 100 };

// Kubische Bézier-Kurve
ctx.beginPath();
ctx.moveTo(start.x, start.y);
ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
ctx.stroke();

// Start- und Endpunkte
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(start.x, start.y, 5, 0, 2 * Math.PI); // Startpunkt
ctx.arc(end.x, end.y, 5, 0, 2 * Math.PI); // Endpunkt
ctx.fill();

// Kontrollpunkte
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(cp1.x, cp1.y, 5, 0, 2 * Math.PI); // Kontrollpunkt eins
ctx.arc(cp2.x, cp2.y, 5, 0, 2 * Math.PI); // Kontrollpunkt zwei
ctx.fill();
```

#### Ergebnis

In diesem Beispiel sind die Kontrollpunkte rot und die Start- und Endpunkte sind blau.

{{ EmbedLiveSample('How_bezierCurveTo_works', 315, 165) }}

### Eine einfache Bézier-Kurve

Dieses Beispiel zeichnet eine einfache Bézier-Kurve mit `bezierCurveTo()`.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die Kurve beginnt an dem durch `moveTo()` angegebenen Punkt: (30, 30). Der erste Kontrollpunkt befindet sich bei (120, 160) und der zweite bei (180, 10). Die Kurve endet bei (220, 140).

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(30, 30);
ctx.bezierCurveTo(120, 160, 180, 10, 220, 140);
ctx.stroke();
```

#### Ergebnis

{{ EmbedLiveSample('A_simple_Bézier_curve', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
- [Bézier-Kurve](/de/docs/Glossary/Bezier_curve)