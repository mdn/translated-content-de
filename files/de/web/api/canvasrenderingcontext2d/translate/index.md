---
title: "CanvasRenderingContext2D: Methode translate()"
short-title: translate()
slug: Web/API/CanvasRenderingContext2D/translate
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die **`CanvasRenderingContext2D.translate()`**-Methode der Canvas 2D API fügt der aktuellen Matrix eine Übersetzungstransformation hinzu.

## Syntax

```js-nolint
translate(x, y)
```

Die `translate()`-Methode fügt der aktuellen Matrix eine Übersetzungstransformation hinzu, indem sie die Leinwand und ihren Ursprung um `x` Einheiten horizontal und `y` Einheiten vertikal im Raster verschiebt.

![Der Ursprung einer Leinwand wird entsprechend der Werte der translate-Methode auf den x- und y-Achsen verschoben.](canvas_grid_translate.png)

### Parameter

- `x`
  - : Entfernung der Verschiebung in horizontaler Richtung. Positive Werte gehen nach rechts, negative nach links.
- `y`
  - : Entfernung der Verschiebung in vertikaler Richtung. Positive Werte gehen nach unten, negative nach oben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Verschieben einer Form

Dieses Beispiel zeichnet ein Quadrat, das durch die `translate()`-Methode von seiner Standardposition verschoben wird. Ein nicht verschobenes Quadrat derselben Größe wird dann zum Vergleich gezeichnet.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die `translate()`-Methode übersetzt den Kontext um 110 horizontal und 30 vertikal. Das erste Quadrat wird um diese Beträge von seiner Standardposition verschoben.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Verschobenes Quadrat
ctx.translate(110, 30);
ctx.fillStyle = "red";
ctx.fillRect(0, 0, 80, 80);

// Aktuelle Transformationsmatrix auf die Einheitsmatrix zurücksetzen
ctx.setTransform(1, 0, 0, 1, 0, 0);

// Nicht verschobenes Quadrat
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

- Die Schnittstelle, die diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
