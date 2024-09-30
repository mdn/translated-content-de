---
title: "CanvasRenderingContext2D: lineTo()-Methode"
short-title: lineTo()
slug: Web/API/CanvasRenderingContext2D/lineTo
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die Methode **`lineTo()`** der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D), die Teil der Canvas 2D API ist, fügt dem aktuellen Unterpfad eine gerade Linie hinzu, indem der letzte Punkt des Unterpfads mit den angegebenen `(x, y)`-Koordinaten verbunden wird.

Wie andere Methoden, die den aktuellen Pfad ändern, rendert diese Methode nichts direkt. Um den Pfad auf eine Leinwand zu zeichnen, können Sie die Methoden [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) oder [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) verwenden.

## Syntax

```js-nolint
lineTo(x, y)
```

### Parameter

- `x`
  - : Die x-Koordinate des Endpunkts der Linie.
- `y`
  - : Die y-Koordinate des Endpunkts der Linie.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

### Zeichnen einer geraden Linie

Dieses Beispiel zeigt, wie man eine gerade Linie mit der Methode `lineTo()` zeichnet.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die Linie beginnt bei (30, 50) und endet bei (150, 100).

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath(); // Start a new path
ctx.moveTo(30, 50); // Move the pen to (30, 50)
ctx.lineTo(150, 100); // Draw a line to (150, 100)
ctx.stroke(); // Render the path
```

#### Ergebnis

{{ EmbedLiveSample('Drawing_a_straight_line', 700, 180) }}

### Zeichnen verbundener Linien

Jeder Aufruf von `lineTo()` (und ähnlichen Methoden) fügt automatisch dem aktuellen Unterpfad hinzu, was bedeutet, dass alle Linien gemeinsam gestroket oder gefüllt werden. Dieses Beispiel zeichnet den Buchstaben 'M' mit einer einzigen zusammenhängenden Linie.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.moveTo(90, 130);
ctx.lineTo(95, 25);
ctx.lineTo(150, 80);
ctx.lineTo(205, 25);
ctx.lineTo(210, 130);
ctx.lineWidth = 15;
ctx.stroke();
```

#### Ergebnis

{{ EmbedLiveSample('Drawing_connected_lines', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo)
- [`CanvasRenderingContext2D.stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke)
