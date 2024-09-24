---
title: "CanvasRenderingContext2D: Methode quadraticCurveTo()"
short-title: quadraticCurveTo()
slug: Web/API/CanvasRenderingContext2D/quadraticCurveTo
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die
**`CanvasRenderingContext2D.quadraticCurveTo()`**
Methode der Canvas 2D API fügt dem aktuellen Unterpfad eine quadratische [Bézier-Kurve](/de/docs/Glossary/Bezier_curve) hinzu. Sie benötigt zwei Punkte: der erste ist ein Kontrollpunkt und der zweite ist der Endpunkt. Der Ausgangspunkt ist der zuletzt definierte Punkt im aktuellen Pfad, der mithilfe von {{domxref("CanvasRenderingContext2D.moveTo", "moveTo()")}} vor der Erstellung der quadratischen Bézier-Kurve geändert werden kann.

## Syntax

```js-nolint
quadraticCurveTo(cpx, cpy, x, y)
```

### Parameter

- `cpx`
  - : Die x-Achsenkoordinate des Kontrollpunktes.
- `cpy`
  - : Die y-Achsenkoordinate des Kontrollpunktes.
- `x`
  - : Die x-Achsenkoordinate des Endpunktes.
- `y`
  - : Die y-Achsenkoordinate des Endpunktes.

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

// Quadratische Bézier-Kurve
ctx.beginPath();
ctx.moveTo(50, 20);
ctx.quadraticCurveTo(230, 30, 50, 100);
ctx.stroke();

// Start- und Endpunkte
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(50, 20, 5, 0, 2 * Math.PI); // Startpunkt
ctx.arc(50, 100, 5, 0, 2 * Math.PI); // Endpunkt
ctx.fill();

// Kontrollpunkt
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(230, 30, 5, 0, 2 * Math.PI);
ctx.fill();
```

#### Ergebnis

In diesem Beispiel ist der Kontrollpunkt rot und die Start- und Endpunkte sind blau.

{{ EmbedLiveSample('How_quadraticCurveTo_works', 315, 165) }}

### Eine einfache quadratische Kurve

Dieses Beispiel zeichnet eine einfache quadratische Bézier-Kurve mit
`quadraticCurveTo()`.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die Kurve beginnt an dem Punkt, der durch `moveTo()` angegeben ist: (20, 110). Der
Kontrollpunkt befindet sich bei (230, 150). Die Kurve endet bei (250, 20).

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

- Die Schnittstelle, die diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
- [Bézier-Kurve](/de/docs/Glossary/Bezier_curve)
