---
title: "CanvasRenderingContext2D: Eigenschaft shadowBlur"
short-title: shadowBlur
slug: Web/API/CanvasRenderingContext2D/shadowBlur
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die Eigenschaft
**`CanvasRenderingContext2D.shadowBlur`**
der Canvas 2D-API legt die Menge an Unschärfe fest, die auf Schatten angewendet wird. Der Standardwert ist `0` (keine Unschärfe).

> [!NOTE]
> Schatten werden nur gezeichnet, wenn die
> {{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor")}}-Eigenschaft auf einen
> nicht transparenten Wert gesetzt ist. Eine der `shadowBlur`,
> {{domxref("CanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX")}} oder
> {{domxref("CanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY")}} Eigenschaften muss
> ebenfalls ungleich null sein.

## Wert

Ein nicht-negatives Gleitkommawert, der das Niveau der Schattenunschärfe angibt, wobei `0` keine Unschärfe bedeutet und größere Zahlen eine zunehmend stärkere Unschärfe darstellen. Dieser Wert entspricht keiner Anzahl von Pixeln und wird nicht von der aktuellen Transformationsmatrix beeinflusst. Der Standardwert ist `0`. Negative Werte, {{jsxref("Infinity")}} und {{jsxref("NaN")}} werden ignoriert.

## Beispiele

### Hinzufügen eines Schattens zu einer Form

Dieses Beispiel fügt einem Rechteck einen unscharfen Schatten hinzu. Die Eigenschaft `shadowColor`
legt ihre Farbe fest, und `shadowBlur` bestimmt das Unschärfeniveau.

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

In auf WebKit- und Blink-basierten Browsern ist die nicht-standardisierte und veraltete Methode
`ctx.setShadow()` zusätzlich zu dieser Eigenschaft implementiert.

```js
setShadow(width, height, blur, color, alpha);
setShadow(width, height, blur, graylevel, alpha);
setShadow(width, height, blur, r, g, b, a);
setShadow(width, height, blur, c, m, y, k, a);
```

## Siehe auch

- Die Schnittstelle, die diese Eigenschaft definiert: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.shadowColor")}}
