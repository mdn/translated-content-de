---
title: "CanvasRenderingContext2D: shadowOffsetX-Eigenschaft"
short-title: shadowOffsetX
slug: Web/API/CanvasRenderingContext2D/shadowOffsetX
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die **`CanvasRenderingContext2D.shadowOffsetX`**-Eigenschaft der Canvas 2D API gibt die Distanz an, um die Schatten horizontal versetzt werden.

> [!NOTE]
> Schatten werden nur gezeichnet, wenn die [`shadowColor`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)-Eigenschaft auf einen nicht-transparenten Wert gesetzt ist. Eine der Eigenschaften [`shadowBlur`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur), `shadowOffsetX` oder [`shadowOffsetY`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY) muss ebenfalls ungleich null sein.

## Wert

Ein Float, der die Distanz angibt, um die Schatten horizontal versetzt werden. Positive Werte verschieben den Schatten nach rechts, negative nach links. Der Standardwert ist `0` (kein horizontaler Versatz). Werte wie {{jsxref("Infinity")}} und {{jsxref("NaN")}} werden ignoriert.

## Beispiele

### Einen Schatten horizontal verschieben

Dieses Beispiel fügt einem Rechteck einen verschwommenen Schatten hinzu. Die [`shadowColor`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)-Eigenschaft setzt dessen Farbe, `shadowOffsetX` verschiebt ihn 25 Einheiten nach rechts, und [`shadowBlur`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur) gibt ihm einen Unschärfegrad von 10.

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

- Das Interface, das diese Eigenschaft definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.shadowOffsetY`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
- [`CanvasRenderingContext2D.shadowColor`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)
- [`CanvasRenderingContext2D.shadowBlur`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
