---
title: "CanvasRenderingContext2D: fillRect()-Methode"
short-title: fillRect()
slug: Web/API/CanvasRenderingContext2D/fillRect
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.fillRect()`**-Methode der Canvas 2D-API zeichnet ein Rechteck, das gemäß dem aktuellen [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) gefüllt ist.

Diese Methode zeichnet direkt auf die Leinwand, ohne den aktuellen Pfad zu verändern, sodass nachfolgende [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill)- oder [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke)-Aufrufe keinen Effekt darauf haben werden.

## Syntax

```js-nolint
fillRect(x, y, width, height)
```

Die `fillRect()`-Methode zeichnet ein gefülltes Rechteck, dessen Ausgangspunkt bei `(x, y)` liegt und dessen Größe durch `width` und `height` angegeben wird. Der Füllstil wird durch das aktuelle `fillStyle`-Attribut bestimmt.

### Parameter

- `x`
  - : Die x-Achsen-Koordinate des Ausgangspunkts des Rechtecks.
- `y`
  - : Die y-Achsen-Koordinate des Ausgangspunkts des Rechtecks.
- `width`
  - : Die Breite des Rechtecks. Positive Werte sind nach rechts und negative nach links.
- `height`
  - : Die Höhe des Rechtecks. Positive Werte sind nach unten und negative nach oben.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

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

### Die gesamte Leinwand füllen

Dieser Codeausschnitt füllt die gesamte Leinwand mit einem Rechteck. Dies ist oft nützlich, um einen Hintergrund zu erstellen, auf dem dann andere Dinge gezeichnet werden können. Um dies zu erreichen, werden die Abmessungen des Rechtecks auf die `width`- und `height`-Attribute des {{HtmlElement("canvas")}}-Elements gesetzt.

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
