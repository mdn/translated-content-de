---
title: "CanvasRenderingContext2D: lineWidth-Eigenschaft"
short-title: lineWidth
slug: Web/API/CanvasRenderingContext2D/lineWidth
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.lineWidth`**-Eigenschaft der Canvas 2D API legt die Dicke von Linien fest.

> [!NOTE]
> Linien können mit den
> [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke),
> [`strokeRect()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect),
> und [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) Methoden gezeichnet werden.

## Wert

Eine Zahl, die die Linienstärke in Koordinatenraumeinheiten angibt. Werte wie Null, negativ, {{jsxref("Infinity")}}, und {{jsxref("NaN")}} werden ignoriert. Der Standardwert ist `1.0`.

## Beispiele

### Änderung der Linienstärke

In diesem Beispiel wird eine Linie und ein Rechteck gezeichnet, wobei eine Linienstärke von 15 Einheiten verwendet wird.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.lineWidth = 15;

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(130, 130);
ctx.rect(40, 40, 70, 70);
ctx.stroke();
```

#### Ergebnis

{{ EmbedLiveSample('Changing_line_width', 700, 180) }}

### Weitere Beispiele

Weitere Beispiele und Erklärungen zu dieser Eigenschaft finden Sie unter [Anwenden von Stilen und Farben](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) im [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Eigenschaft definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.lineCap`](/de/docs/Web/API/CanvasRenderingContext2D/lineCap)
- [`CanvasRenderingContext2D.lineJoin`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin)
- [Anwenden von Stilen und Farben](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
