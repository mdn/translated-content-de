---
title: "CanvasRenderingContext2D: Eigenschaft shadowOffsetX"
short-title: shadowOffsetX
slug: Web/API/CanvasRenderingContext2D/shadowOffsetX
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die Eigenschaft
**`CanvasRenderingContext2D.shadowOffsetX`**
der Canvas 2D API gibt den horizontalen Abstand an, um den Schatten versetzt werden soll.

> [!NOTE]
> Schatten werden nur gezeichnet, wenn die
> Eigenschaft {{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor")}} auf einen
> nicht-transparenten Wert gesetzt ist. Mindestens eine der Eigenschaften {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}}, `shadowOffsetX` oder
> {{domxref("CanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY")}} muss ebenfalls einen Wert ungleich null aufweisen.

## Wert

Ein Fließkommawert, der den horizontalen Abstand angibt, um den Schatten versetzt werden soll. Positive Werte verschieben den Schatten nach rechts, negative nach links. Der Standardwert ist `0` (keine horizontale Verschiebung). Die Werte {{jsxref("Infinity")}} und {{jsxref("NaN")}} werden ignoriert.

## Beispiele

### Einen Schatten horizontal verschieben

Dieses Beispiel fügt einem Rechteck einen verschwommenen Schatten hinzu. Die
Eigenschaft {{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor")}} setzt die
Farbe, `shadowOffsetX` legt den Versatz 25 Einheiten nach rechts fest, und
{{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}} gibt ihm eine Unschärfe von 10.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Shadow
ctx.shadowColor = "red";
ctx.shadowOffsetX = 25;
ctx.shadowBlur = 10;

// Rectangle
ctx.fillStyle = "blue";
ctx.fillRect(20, 20, 150, 100);
```

#### Ergebnis

{{ EmbedLiveSample('Moving_a_shadow_horizontally', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Eigenschaft definiert: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.shadowOffsetY")}}
- {{domxref("CanvasRenderingContext2D.shadowColor")}}
- {{domxref("CanvasRenderingContext2D.shadowBlur")}}
