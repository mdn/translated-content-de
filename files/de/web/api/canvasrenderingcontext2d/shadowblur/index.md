---
title: "CanvasRenderingContext2D: shadowBlur-Eigenschaft"
short-title: shadowBlur
slug: Web/API/CanvasRenderingContext2D/shadowBlur
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.shadowBlur`**-Eigenschaft der 2D-Canvas-API legt die Menge an Unschärfe fest, die auf Schatten angewendet wird. Der Standardwert ist `0` (keine Unschärfe).

> [!NOTE]
> Schatten werden nur gezeichnet, wenn die [`shadowColor`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)-Eigenschaft auf einen nicht transparenten Wert gesetzt ist. Eine der Eigenschaften `shadowBlur`, [`shadowOffsetX`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX) oder [`shadowOffsetY`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY) muss ebenfalls ungleich Null sein.

## Wert

Ein nicht-negatives `float`, das das Unschärfelevel des Schattens angibt, wobei `0` keine Unschärfe repräsentiert und größere Zahlen eine zunehmend stärkere Unschärfe darstellen. Dieser Wert entspricht keiner Anzahl von Pixeln und wird nicht von der aktuellen Transformationsmatrix beeinflusst. Der Standardwert ist `0`. Negative Werte, {{jsxref("Infinity")}} und {{jsxref("NaN")}} werden ignoriert.

## Beispiele

### Hinzufügen eines Schattens zu einer Form

Dieses Beispiel fügt einem Rechteck einen unscharfen Schatten hinzu. Die `shadowColor`-Eigenschaft legt deren Farbe fest, und `shadowBlur` bestimmt das Unschärfelevel.

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
ctx.shadowBlur = 15;

// Rectangle
ctx.fillStyle = "blue";
ctx.fillRect(20, 20, 150, 100);
```

#### Ergebnis

{{ EmbedLiveSample('Adding_a_shadow_to_a_shape', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### WebKit/Blink-spezifische Hinweise

In WebKit- und Blink-basierten Browsern ist die nicht standardisierte und veraltete Methode `ctx.setShadow()` neben dieser Eigenschaft implementiert.

```js
setShadow(width, height, blur, color, alpha);
setShadow(width, height, blur, graylevel, alpha);
setShadow(width, height, blur, r, g, b, a);
setShadow(width, height, blur, c, m, y, k, a);
```

## Siehe auch

- Das Interface, das diese Eigenschaft definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.shadowColor`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)
