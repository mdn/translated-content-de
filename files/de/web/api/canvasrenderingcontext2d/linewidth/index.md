---
title: "CanvasRenderingContext2D: Eigenschaft lineWidth"
short-title: lineWidth
slug: Web/API/CanvasRenderingContext2D/lineWidth
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die
**`CanvasRenderingContext2D.lineWidth`**
Eigenschaft der Canvas 2D API legt die Dicke von Linien fest.

> [!NOTE]
> Linien können mit den
> [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke),
> [`strokeRect()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect),
> und [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText)-Methoden gezeichnet werden.

## Wert

Eine Zahl, die die Linienbreite in Einheiten des Koordinatenraums angibt. Null, negative Werte, {{jsxref("Infinity")}} und {{jsxref("NaN")}} werden ignoriert. Der Standardwert ist `1.0`.

## Beispiele

### Ändern der Linienbreite

In diesem Beispiel werden eine Linie und ein Rechteck mit einer Linienbreite von 15 Einheiten gezeichnet.

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

Für weitere Beispiele und Erklärungen zu dieser Eigenschaft siehe [Anwenden von Stilen und Farbe](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) im [Canvas-Leitfaden](/de/docs/Web/API/Canvas_API/Tutorial).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Eigenschaft definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.lineCap`](/de/docs/Web/API/CanvasRenderingContext2D/lineCap)
- [`CanvasRenderingContext2D.lineJoin`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin)
- [Anwenden von Stilen und Farbe](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
