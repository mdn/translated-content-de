---
title: "CanvasRenderingContext2D: Eigenschaft shadowOffsetY"
short-title: shadowOffsetY
slug: Web/API/CanvasRenderingContext2D/shadowOffsetY
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die **`CanvasRenderingContext2D.shadowOffsetY`**-Eigenschaft der Canvas 2D API gibt die Entfernung an, um die Schatten vertikal versetzt werden.

> [!NOTE]
> Schatten werden nur gezeichnet, wenn die Eigenschaft {{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor")}} auf einen nicht transparenten Wert gesetzt ist. Eine der Eigenschaften {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}}, {{domxref("CanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX")}} oder `shadowOffsetY` muss ebenfalls ungleich null sein.

## Wert

Ein Float, der die Entfernung angibt, um die Schatten vertikal versetzt werden. Positive Werte sind nach unten, negative nach oben. Der Standardwert ist `0` (kein vertikaler Versatz). Werte von {{jsxref("Infinity")}} und {{jsxref("NaN")}} werden ignoriert.

## Beispiele

### Einen Schatten vertikal verschieben

Dieses Beispiel fügt einem Rechteck einen verschwommenen Schatten hinzu. Die Eigenschaft {{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor")}} legt seine Farbe fest, `shadowOffsetY` legt seinen Versatz um 25 Einheiten nach unten fest, und {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}} gibt ihm einen Unschärfegrad von 10.

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
ctx.shadowOffsetY = 25;
ctx.shadowBlur = 10;

// Rectangle
ctx.fillStyle = "blue";
ctx.fillRect(20, 20, 150, 80);
```

#### Ergebnis

{{ EmbedLiveSample('Moving_a_shadow_vertically', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Eigenschaft definiert: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.shadowOffsetX")}}
- {{domxref("CanvasRenderingContext2D.shadowColor")}}
- {{domxref("CanvasRenderingContext2D.shadowBlur")}}
