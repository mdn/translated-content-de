---
title: "CanvasRenderingContext2D: translate() Methode"
short-title: translate()
slug: Web/API/CanvasRenderingContext2D/translate
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.translate()`**-Methode der Canvas 2D API fügt der aktuellen Matrix eine Übersetzungstransformation hinzu.

## Syntax

```js-nolint
translate(x, y)
```

Die `translate()`-Methode fügt der aktuellen Matrix eine Übersetzungstransformation hinzu, indem sie die Leinwand und ihren Ursprung um `x` Einheiten horizontal und `y` Einheiten vertikal im Raster verschiebt.

![Der Ursprung einer Leinwand wurde auf den x- und y-Achsen basierend auf den Werten der translate-Methode verschoben.](canvas_grid_translate.png)

### Parameter

- `x`
  - : Entfernung für die Bewegung in horizontaler Richtung. Positive Werte sind nach rechts, negative nach links.
- `y`
  - : Entfernung für die Bewegung in vertikaler Richtung. Positive Werte sind nach unten, negative nach oben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Bewegung einer Form

Dieses Beispiel zeichnet ein Quadrat, das mit der `translate()`-Methode von seiner Standardposition verschoben wird. Ein nicht verschobenes Quadrat gleicher Größe wird dann zum Vergleich gezeichnet.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die `translate()`-Methode verschiebt den Kontext um 110 Einheiten horizontal und 30 Einheiten vertikal. Das erste Quadrat wird um diese Beträge von seiner Standardposition verschoben.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Moved square
ctx.translate(110, 30);
ctx.fillStyle = "red";
ctx.fillRect(0, 0, 80, 80);

// Reset current transformation matrix to the identity matrix
ctx.setTransform(1, 0, 0, 1, 0, 0);

// Unmoved square
ctx.fillStyle = "gray";
ctx.fillRect(0, 0, 80, 80);
```

#### Ergebnis

Das verschobene Quadrat ist rot, und das nicht verschobene Quadrat ist grau.

{{ EmbedLiveSample('Moving_a_shape', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
