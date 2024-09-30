---
title: "CanvasRenderingContext2D: shadowOffsetY-Eigenschaft"
short-title: shadowOffsetY
slug: Web/API/CanvasRenderingContext2D/shadowOffsetY
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die **`CanvasRenderingContext2D.shadowOffsetY`**-Eigenschaft der Canvas 2D API gibt die Entfernung an, um die Schatten vertikal versetzt werden.

> [!NOTE]
> Schatten werden nur gezeichnet, wenn die [`shadowColor`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)-Eigenschaft auf einen nicht-transparenten Wert gesetzt ist. Eine der Eigenschaften [`shadowBlur`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur), [`shadowOffsetX`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX) oder `shadowOffsetY` muss ebenfalls ungleich null sein.

## Wert

Ein Float, der die Entfernung spezifiziert, um die Schatten vertikal versetzt werden. Positive Werte sind nach unten, negative nach oben. Der Standardwert ist `0` (kein vertikaler Versatz). {{jsxref("Infinity")}} und {{jsxref("NaN")}}-Werte werden ignoriert.

## Beispiele

### Einen Schatten vertikal verschieben

Dieses Beispiel fügt einem Rechteck einen verschwommenen Schatten hinzu. Die [`shadowColor`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)-Eigenschaft legt seine Farbe fest, `shadowOffsetY` legt seinen Versatz um 25 Einheiten nach unten fest, und [`shadowBlur`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur) gibt ihm einen Unschärfegrad von 10.

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

- Das Interface, das diese Eigenschaft definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.shadowOffsetX`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)
- [`CanvasRenderingContext2D.shadowColor`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)
- [`CanvasRenderingContext2D.shadowBlur`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
