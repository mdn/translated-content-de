---
title: "CanvasRenderingContext2D: translate() Methode"
short-title: translate()
slug: Web/API/CanvasRenderingContext2D/translate
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die
**`CanvasRenderingContext2D.translate()`**
Methode der Canvas 2D API fügt der aktuellen Matrix eine Übersetzungstransformation hinzu.

## Syntax

```js-nolint
translate(x, y)
```

Die `translate()` Methode fügt der aktuellen Matrix eine Übersetzungstransformation hinzu, indem sie die Leinwand und ihren Ursprung `x` Einheiten horizontal und `y` Einheiten vertikal im Raster verschiebt.

![Der Ursprung einer Leinwand wurde basierend auf den Werten der translate Methode auf den x- und y-Achsen verschoben.](canvas_grid_translate.png)

### Parameter

- `x`
  - : Abstand, um den in horizontaler Richtung verschoben wird. Positive Werte sind nach rechts und negative nach links.
- `y`
  - : Abstand, um den in vertikaler Richtung verschoben wird. Positive Werte sind nach unten und negative nach oben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Verschieben einer Form

Dieses Beispiel zeichnet ein Quadrat, das von seiner Standardposition durch die `translate()` Methode verschoben wird. Ein unverschobenes Quadrat in derselben Größe wird dann zum Vergleich gezeichnet.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die `translate()` Methode verschiebt den Kontext um 110 horizontal und 30 vertikal. Das erste Quadrat wird um diese Beträge von seiner Standardposition verschoben.

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

Das verschobene Quadrat ist rot, und das unverschobene Quadrat ist grau.

{{ EmbedLiveSample('Moving_a_shape', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
