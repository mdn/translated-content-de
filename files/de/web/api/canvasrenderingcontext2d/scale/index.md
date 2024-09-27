---
title: "CanvasRenderingContext2D: scale()-Methode"
short-title: scale()
slug: Web/API/CanvasRenderingContext2D/scale
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die **`CanvasRenderingContext2D.scale()`**-Methode der Canvas 2D API fügt eine Skalierungstransformation zu den Canvas-Einheiten horizontal und/oder vertikal hinzu.

Standardmäßig entspricht eine Einheit auf dem Canvas genau einem Pixel. Eine Skalierungstransformation ändert dieses Verhalten. Beispielsweise führt ein Skalierungsfaktor von 0,5 dazu, dass eine Einheit 0,5 Pixel groß ist; Formen werden somit in halber Normalgröße gezeichnet. Ebenso vergrößert ein Skalierungsfaktor von 2,0 die Einheitengröße so, dass eine Einheit zwei Pixel entspricht; Formen werden somit doppelt so groß gezeichnet.

## Syntax

```js-nolint
scale(x, y)
```

### Parameter

- `x`
  - : Skalierungsfaktor in horizontaler Richtung. Ein negativer Wert spiegelt Pixel entlang der vertikalen Achse. Ein Wert von `1` führt zu keiner horizontalen Skalierung.
- `y`
  - : Skalierungsfaktor in vertikaler Richtung. Ein negativer Wert spiegelt Pixel entlang der horizontalen Achse. Ein Wert von `1` führt zu keiner vertikalen Skalierung.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Skalierung einer Form

Dieses Beispiel zeichnet ein skaliertes Rechteck. Ein nicht skaliertes Rechteck wird dann zum Vergleich gezeichnet.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Das Rechteck hat eine angegebene Breite von 8 und eine Höhe von 20. Die Transformationsmatrix skaliert es um das 9-fache horizontal und das 3-fache vertikal. Somit beträgt seine endgültige Größe eine Breite von 72 und eine Höhe von 60.

Beachten Sie, dass sich seine Position auf dem Canvas ebenfalls ändert. Da seine angegebene Ecke (10, 10) ist, wird seine gezeichnete Ecke zu (90, 30).

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

### Dinge horizontal oder vertikal spiegeln

Sie können `scale(-1, 1)` verwenden, um den Kontext horizontal zu spiegeln, und `scale(1, -1)` um ihn vertikal zu spiegeln. In diesem Beispiel werden die Worte "Hello world!" horizontal gespiegelt.

Beachten Sie, dass der Aufruf von [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText) eine negative x-Koordinate angibt. Dies dient der Anpassung an den negativen Skalierungsfaktor: `-280 * -1` wird zu `280`, und der Text wird von diesem Punkt aus nach links gezeichnet.

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

- Das Interface, das diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
