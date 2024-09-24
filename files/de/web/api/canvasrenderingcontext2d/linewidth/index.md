---
title: "CanvasRenderingContext2D: lineWidth-Eigenschaft"
short-title: lineWidth
slug: Web/API/CanvasRenderingContext2D/lineWidth
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die **`CanvasRenderingContext2D.lineWidth`**-Eigenschaft der 2D-Canvas-API legt die Stärke von Linien fest.

> [!NOTE]
> Linien können gezeichnet werden mit den Methoden {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}}, {{domxref("CanvasRenderingContext2D.strokeRect()", "strokeRect()")}} und {{domxref("CanvasRenderingContext2D.strokeText()", "strokeText()")}}.

## Wert

Eine Zahl, die die Linienbreite in Knoteneinheiten angibt. Werte von Null, negativ, {{jsxref("Infinity")}} und {{jsxref("NaN")}} werden ignoriert. Der Standardwert ist `1.0`.

## Beispiele

### Linienbreite ändern

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

Für weitere Beispiele und Erklärungen zu dieser Eigenschaft, siehe [Stile und Farbe anwenden](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) im [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Eigenschaft definiert: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineCap")}}
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
- [Stile und Farbe anwenden](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
