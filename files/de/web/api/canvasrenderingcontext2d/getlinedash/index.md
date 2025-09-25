---
title: "CanvasRenderingContext2D: getLineDash()-Methode"
short-title: getLineDash()
slug: Web/API/CanvasRenderingContext2D/getLineDash
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die **`getLineDash()`**-Methode des [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Interfaces der Canvas 2D API gibt das aktuelle Strichelmuster zurück.

## Syntax

```js-nolint
getLineDash()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Array")}} von Zahlen, die Abstände angeben, um abwechselnd eine Linie und eine Lücke zu zeichnen (in Koordinateneinheiten). Wenn die Zahl beim Festlegen der Elemente ungerade ist, werden die Elemente des Arrays kopiert und angefügt. Zum Beispiel wird durch Festlegen des Linienstrichs auf `[5, 15, 25]` letztlich `[5, 15, 25, 5, 15, 25]` zurückgegeben.

## Beispiele

### Abrufen der aktuellen Line-Dash-Einstellung

Dieses Beispiel zeigt die Verwendung der `getLineDash()`-Methode.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Wie durch [`setLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash) festgelegt, bestehen Striche aus Linien, die 10 Einheiten breit sind, mit Abständen von 20 Einheiten zwischen jeder Linie.

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

- Das Interface, das diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.setLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash)
- [`CanvasRenderingContext2D.lineDashOffset`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
