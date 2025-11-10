---
title: "CanvasRenderingContext2D: Methode scale()"
short-title: scale()
slug: Web/API/CanvasRenderingContext2D/scale
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die Methode **`CanvasRenderingContext2D.scale()`** der Canvas 2D API fügt dem Canvas eine Skalierungstransformation der Einheiten horizontal und/oder vertikal hinzu.

Standardmäßig entspricht eine Einheit auf dem Canvas genau einem Pixel. Eine Skalierungstransformation ändert dieses Verhalten. Ein Skalierungsfaktor von 0,5 führt beispielsweise zu einer Einheitengröße von 0,5 Pixeln; Formen werden somit in halber normaler Größe gezeichnet. Ebenso führt ein Skalierungsfaktor von 2,0 dazu, dass die Einheitengröße auf zwei Pixel erhöht wird; Formen werden somit in doppelter normaler Größe gezeichnet.

## Syntax

```js-nolint
scale(x, y)
```

### Parameter

- `x`
  - : Skalierungsfaktor in der horizontalen Richtung. Ein negativer Wert spiegelt Pixel über die vertikale Achse. Ein Wert von `1` führt zu keiner horizontalen Skalierung.
- `y`
  - : Skalierungsfaktor in der vertikalen Richtung. Ein negativer Wert spiegelt Pixel über die horizontale Achse. Ein Wert von `1` führt zu keiner vertikalen Skalierung.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Skalierung einer Form

Dieses Beispiel zeichnet ein skaliertes Rechteck. Ein nicht skaliertes Rechteck wird anschließend zum Vergleich gezeichnet.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Das Rechteck hat eine angegebene Breite von 8 und eine Höhe von 20. Die Transformationsmatrix skaliert es horizontal um das 9-fache und vertikal um das 3-fache. Somit beträgt seine endgültige Größe eine Breite von 72 und eine Höhe von 60.

Beachten Sie, dass sich auch seine Position auf dem Canvas ändert. Da die angegebene Ecke (10, 10\) ist, wird die gerenderte Ecke zu (90, 30).

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Scaled rectangle
ctx.scale(9, 3);
ctx.fillStyle = "red";
ctx.fillRect(10, 10, 8, 20);

// Reset current transformation matrix to the identity matrix
ctx.setTransform(1, 0, 0, 1, 0, 0);

// Non-scaled rectangle
ctx.fillStyle = "gray";
ctx.fillRect(10, 10, 8, 20);
```

#### Ergebnis

Das skalierte Rechteck ist rot, und das nicht skalierte Rechteck ist grau.

{{ EmbedLiveSample('Scaling_a_shape', 700, 180) }}

### Horizontales oder vertikales Spiegeln

Sie können `scale(-1, 1)` verwenden, um den Kontext horizontal zu spiegeln, und `scale(1, -1)`, um ihn vertikal zu spiegeln. In diesem Beispiel werden die Worte "Hello world!" horizontal gespiegelt.

Beachten Sie, dass der Aufruf von [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText) eine negative x-Koordinate angibt. Dies geschieht, um den negativen Skalierungsfaktor anzupassen: `-280 * -1` wird zu `280`, und der Text wird von diesem Punkt aus nach links gezeichnet.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.scale(-1, 1);
ctx.font = "48px serif";
ctx.fillText("Hello world!", -280, 90);
ctx.setTransform(1, 0, 0, 1, 0, 0);
```

#### Ergebnis

{{ EmbedLiveSample('Flipping_things_horizontally_or_vertically', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
