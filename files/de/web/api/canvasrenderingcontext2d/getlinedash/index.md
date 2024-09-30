---
title: "CanvasRenderingContext2D: getLineDash() Methode"
short-title: getLineDash()
slug: Web/API/CanvasRenderingContext2D/getLineDash
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die **`getLineDash()`** Methode der Canvas 2D API's [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Schnittstelle erhält das aktuelle Strichmuster.

## Syntax

```js-nolint
getLineDash()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Array")}} von Zahlen, das die Abstände angibt, um abwechselnd eine Linie zu zeichnen und
eine Lücke (in Koordinatenraumeinheiten). Wenn die Anzahl der Elemente ungerade ist, werden
die Elemente des Arrays kopiert und verknüpft. Zum Beispiel führt das Festlegen des Strichmusters auf
`[5, 15, 25]` dazu, dass man
`[5, 15, 25, 5, 15, 25]` zurückbekommt.

## Beispiele

### Das aktuelle Strichmuster abfragen

Dieses Beispiel demonstriert die Nutzung der `getLineDash()` Methode.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Wie durch [`setLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash) festgelegt, bestehen Striche aus Linien, die 10 Einheiten breit sind, mit Abständen von 20 Einheiten zwischen jeder
Linie.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.setLineDash([10, 20]);
console.log(ctx.getLineDash()); // [10, 20]

// Draw a dashed line
ctx.beginPath();
ctx.moveTo(0, 50);
ctx.lineTo(300, 50);
ctx.stroke();
```

#### Ergebnis

{{ EmbedLiveSample('Getting_the_current_line_dash_setting', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.setLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash)
- [`CanvasRenderingContext2D.lineDashOffset`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
