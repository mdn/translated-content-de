---
title: "CanvasRenderingContext2D: fillRect()-Methode"
short-title: fillRect()
slug: Web/API/CanvasRenderingContext2D/fillRect
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die
**`CanvasRenderingContext2D.fillRect()`**
Methode der Canvas 2D API zeichnet ein Rechteck, das entsprechend dem aktuellen
[`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) gefüllt ist.

Diese Methode zeichnet direkt auf die Leinwand, ohne den aktuellen Pfad zu verändern, daher haben nachfolgende Aufrufe von [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) oder
[`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) keinen Einfluss darauf.

## Syntax

```js-nolint
fillRect(x, y, width, height)
```

Die `fillRect()`-Methode zeichnet ein gefülltes Rechteck, dessen Startpunkt bei
`(x, y)` liegt und dessen Größe durch `width` und
`height` festgelegt wird. Der Füllstil wird durch das aktuelle `fillStyle`-
Attribut bestimmt.

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

### Ein einfaches gefülltes Rechteck

Dieses Beispiel zeichnet ein gefülltes grünes Rechteck mit der `fillRect()`-Methode.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die obere linke Ecke des Rechtecks befindet sich bei (20, 10). Es hat eine Breite von 150 und eine Höhe von 100.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(20, 10, 150, 100);
```

#### Ergebnis

{{ EmbedLiveSample('A_simple_filled_rectangle', 700, 180) }}

### Das gesamte Canvas füllen

Dieses Code-Snippet füllt die gesamte Leinwand mit einem Rechteck. Dies ist oft nützlich, um einen Hintergrund zu erstellen, auf den andere Dinge gezeichnet werden können. Um dies zu erreichen, werden die Dimensionen des Rechtecks so eingestellt, dass sie den `width`- und `height`-Attributen des {{HtmlElement("canvas")}}-Elements entsprechen.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.fillRect(0, 0, canvas.width, canvas.height);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)
- [`CanvasRenderingContext2D.clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)
- [`CanvasRenderingContext2D.strokeRect()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect)
