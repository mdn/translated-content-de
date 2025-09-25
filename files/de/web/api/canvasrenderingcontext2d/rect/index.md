---
title: "CanvasRenderingContext2D: rect()-Methode"
short-title: rect()
slug: Web/API/CanvasRenderingContext2D/rect
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die
**`CanvasRenderingContext2D.rect()`**
Methode der Canvas 2D API fügt dem aktuellen Pfad ein Rechteck hinzu.

Wie andere Methoden, die den aktuellen Pfad ändern, rendert diese Methode direkt nichts.
Um das Rechteck auf eine Leinwand zu zeichnen, können Sie die
[`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) oder
[`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) Methoden verwenden.

> [!NOTE]
> Um ein Rechteck in einem Schritt zu erstellen und zu rendern, verwenden Sie die
> [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) oder
> [`strokeRect()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect) Methoden.

## Syntax

```js-nolint
rect(x, y, width, height)
```

Die `rect()`-Methode erstellt einen rechteckigen Pfad, dessen Startpunkt bei
`(x, y)` liegt und dessen Größe durch `width` und
`height` angegeben wird.

### Parameter

- `x`
  - : Die x-Achsen-Koordinate des Startpunkts des Rechtecks.
- `y`
  - : Die y-Achsen-Koordinate des Startpunkts des Rechtecks.
- `width`
  - : Die Breite des Rechtecks. Positive Werte sind nach rechts, negative nach links.
- `height`
  - : Die Höhe des Rechtecks. Positive Werte sind nach unten, negative nach oben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Zeichnen eines Rechtecks

Dieses Beispiel erstellt einen rechteckigen Pfad mit der Methode `rect()`. Der Pfad
wird dann mit der Methode `fill()` gerendert.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die Ecke des Rechtecks befindet sich bei (10, 20). Es hat eine Breite von 150 und eine Höhe von 100.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.beginPath(); // Start a new path
ctx.rect(10, 20, 150, 100); // Add a rectangle to the current path
ctx.fill(); // Render the path
```

#### Ergebnis

{{ EmbedLiveSample('Drawing_a_rectangle', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.fillRect`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect)
- [`CanvasRenderingContext2D.strokeRect()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect)
- [`CanvasRenderingContext2D.fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill)
- [`CanvasRenderingContext2D.stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke)
