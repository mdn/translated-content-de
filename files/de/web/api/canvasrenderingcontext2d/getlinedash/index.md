---
title: "CanvasRenderingContext2D: Methode getLineDash()"
short-title: getLineDash()
slug: Web/API/CanvasRenderingContext2D/getLineDash
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die **`getLineDash()`** Methode der {{domxref("CanvasRenderingContext2D")}}-Schnittstelle der Canvas 2D API erhält das aktuelle Strichmuster der Linie.

## Syntax

```js-nolint
getLineDash()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Array")}} von Zahlen, die die Entfernungen angeben, um abwechselnd eine Linie und einen Abstand zu zeichnen (in Koordinateneinheiten). Wenn die Zahl beim Festlegen der Elemente ungerade ist, werden die Elemente des Arrays kopiert und verkettet. Beispielsweise wird das Festlegen des Linienstichs auf `[5, 15, 25]` das Ergebnis `[5, 15, 25, 5, 15, 25]` liefern.

## Beispiele

### Abrufen der aktuellen Linienstich-Einstellung

Dieses Beispiel demonstriert die Verwendung der `getLineDash()`-Methode.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Wie durch {{domxref("CanvasRenderingContext2D.setLineDash()", "setLineDash()")}} festgelegt, bestehen Striche aus Linien, die 10 Einheiten breit sind, mit Abständen von 20 Einheiten zwischen den einzelnen Linien.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.setLineDash([10, 20]);
console.log(ctx.getLineDash()); // [10, 20]

// Zeichnen einer gestrichelten Linie
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

- Die Schnittstelle, die diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.setLineDash()")}}
- {{domxref("CanvasRenderingContext2D.lineDashOffset")}}
