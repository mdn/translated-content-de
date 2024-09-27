---
title: "CanvasRenderingContext2D: lineWidth-Eigenschaft"
short-title: lineWidth
slug: Web/API/CanvasRenderingContext2D/lineWidth
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die **`CanvasRenderingContext2D.lineWidth`**-Eigenschaft der Canvas 2D API legt die Dicke von Linien fest.

> [!NOTE]
> Linien können mit den Methoden
> [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke),
> [`strokeRect()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect)
> und [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) gezeichnet werden.

## Wert

Eine Zahl, die die Linienbreite in Einheiten des Koordinatenraums angibt. Werte wie Null, negative Zahlen, {{jsxref("Infinity")}} und {{jsxref("NaN")}} werden ignoriert. Der Standardwert ist `1.0`.

## Beispiele

### Ändern der Linienbreite

Dieses Beispiel zeichnet eine Linie und ein Rechteck mit einer Linienbreite von 15 Einheiten.

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

Weitere Beispiele und Erklärungen zu dieser Eigenschaft finden Sie unter [Anwendung von Stilen und Farbe](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) im [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Eigenschaft definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.lineCap`](/de/docs/Web/API/CanvasRenderingContext2D/lineCap)
- [`CanvasRenderingContext2D.lineJoin`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin)
- [Anwendung von Stilen und Farbe](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
