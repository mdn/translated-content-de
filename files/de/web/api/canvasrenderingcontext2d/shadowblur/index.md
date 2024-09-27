---
title: "CanvasRenderingContext2D: shadowBlur-Eigenschaft"
short-title: shadowBlur
slug: Web/API/CanvasRenderingContext2D/shadowBlur
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die **`CanvasRenderingContext2D.shadowBlur`**-Eigenschaft der Canvas 2D API gibt an, wie viel Unschärfe auf Schatten angewendet wird. Der Standardwert ist `0` (keine Unschärfe).

> [!NOTE]
> Schatten werden nur gezeichnet, wenn die [`shadowColor`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)-Eigenschaft auf einen nicht-transparenten Wert gesetzt ist. Eine der Eigenschaften `shadowBlur`, [`shadowOffsetX`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX) oder [`shadowOffsetY`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY) muss ebenfalls ungleich null sein.

## Wert

Ein nicht-negativer `float`, der das Maß der Schattenunschärfe angibt, wobei `0` keine Unschärfe darstellt und größere Zahlen zunehmend mehr Unschärfe bedeuten. Dieser Wert entspricht keiner bestimmten Anzahl von Pixeln und wird nicht von der aktuellen Transformationsmatrix beeinflusst. Der Standardwert ist `0`. Negative Werte, {{jsxref("Infinity")}} und {{jsxref("NaN")}}-Werte werden ignoriert.

## Beispiele

### Hinzufügen eines Schattens zu einer Form

Dieses Beispiel fügt einem Rechteck einen unscharfen Schatten hinzu. Die `shadowColor`-Eigenschaft legt seine Farbe fest und `shadowBlur` legt das Maß der Unschärfe fest.

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

### WebKit/Blink-spezifische Anmerkungen

In WebKit- und Blink-basierten Browsern wird die nicht standardisierte und veraltete Methode `ctx.setShadow()` zusätzlich zu dieser Eigenschaft implementiert.

```js
setShadow(width, height, blur, color, alpha);
setShadow(width, height, blur, graylevel, alpha);
setShadow(width, height, blur, r, g, b, a);
setShadow(width, height, blur, c, m, y, k, a);
```

## Siehe auch

- Das Interface, das diese Eigenschaft definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.shadowColor`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)
