---
title: "CanvasRenderingContext2D: lineTo()-Methode"
short-title: lineTo()
slug: Web/API/CanvasRenderingContext2D/lineTo
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die Methode **`lineTo()`** des {{domxref("CanvasRenderingContext2D")}}, Teil der Canvas 2D API, fügt dem aktuellen Teilpfad eine gerade Linie hinzu, indem sie den letzten Punkt des Teilpfads mit den angegebenen `(x, y)`-Koordinaten verbindet.

Wie andere Methoden, die den aktuellen Pfad ändern, rendert diese Methode nichts direkt. Um den Pfad auf einer Leinwand zu zeichnen, können Sie die Methoden {{domxref("CanvasRenderingContext2D.fill", "fill()")}} oder {{domxref("CanvasRenderingContext2D.stroke", "stroke()")}} verwenden.

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

Kein ({{jsxref("undefined")}}).

## Beispiele

### Zeichnen einer geraden Linie

Dieses Beispiel zeichnet eine gerade Linie mit der `lineTo()`-Methode.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die Linie beginnt bei (30, 50) und endet bei (150, 100).

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath(); // Starten eines neuen Pfades
ctx.moveTo(30, 50); // Bewegen des Stifts zu (30, 50)
ctx.lineTo(150, 100); // Zeichnen einer Linie zu (150, 100)
ctx.stroke(); // Rendern des Pfades
```

#### Ergebnis

{{ EmbedLiveSample('Drawing_a_straight_line', 700, 180) }}

### Zeichnen verbundener Linien

Jeder Aufruf von `lineTo()` (und ähnlichen Methoden) fügt automatisch zum aktuellen Teilpfad hinzu, was bedeutet, dass alle Linien gemeinsam gezeichnet oder gefüllt werden. Dieses Beispiel zeichnet einen Buchstaben 'M' mit einer einzigen durchgängigen Linie.

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

- Die Schnittstelle, die diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.moveTo()")}}
- {{domxref("CanvasRenderingContext2D.stroke()")}}
