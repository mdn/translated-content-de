---
title: "CanvasRenderingContext2D: Methode translate()"
short-title: translate()
slug: Web/API/CanvasRenderingContext2D/translate
l10n:
  sourceCommit: e874c91a572640824bb4cd8e8ab5b6111fd04661
---

{{APIRef("Canvas API")}}

Die Methode **`CanvasRenderingContext2D.translate()`** der Canvas 2D API fügt der aktuellen Matrix eine Verschiebungstransformation hinzu.

## Syntax

```js-nolint
translate(x, y)
```

Die Methode `translate()` fügt der aktuellen Matrix eine Verschiebungstransformation hinzu, indem sie die Zeichenfläche und ihren Ursprung im Koordinatensystem horizontal um `x` Einheiten und vertikal um `y` Einheiten verschiebt.

![Der Ursprung einer Zeichenfläche wurde anhand der Werte der translate-Methode entlang der x- und y-Achse verschoben.](canvas_grid_translate.svg)

### Parameter

- `x`
  - : Entfernung der horizontalen Verschiebung. Positive Werte verschieben nach rechts, negative nach links.
- `y`
  - : Entfernung der vertikalen Verschiebung. Positive Werte verschieben nach unten, negative nach oben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Eine Form verschieben

Dieses Beispiel zeichnet ein Quadrat, das mit der Methode `translate()` von seiner Standardposition verschoben wird. Anschließend wird zum Vergleich ein nicht verschobenes Quadrat derselben Größe gezeichnet.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die Methode `translate()` verschiebt den Kontext horizontal um 110 und vertikal um 30. Das erste Quadrat wird dadurch um diese Werte von seiner Standardposition verschoben.

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

Das verschobene Quadrat ist rot, das nicht verschobene Quadrat grau.

{{ EmbedLiveSample('Moving_a_shape', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
