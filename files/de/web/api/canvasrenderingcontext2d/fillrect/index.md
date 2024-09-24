---
title: "CanvasRenderingContext2D: Methode fillRect()"
short-title: fillRect()
slug: Web/API/CanvasRenderingContext2D/fillRect
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die Methode **`CanvasRenderingContext2D.fillRect()`** der Canvas 2D API zeichnet ein Rechteck, das entsprechend dem aktuellen {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} gefüllt ist.

Diese Methode zeichnet direkt auf die Leinwand, ohne den aktuellen Pfad zu ändern, sodass nachfolgende {{domxref("CanvasRenderingContext2D.fill()", "fill()")}} oder {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}} Aufrufe darauf keinen Einfluss haben.

## Syntax

```js-nolint
fillRect(x, y, width, height)
```

Die `fillRect()`-Methode zeichnet ein gefülltes Rechteck, dessen Startpunkt bei `(x, y)` liegt und dessen Größe durch `width` und `height` angegeben ist. Der Füllstil wird durch das aktuelle `fillStyle`-Attribut bestimmt.

### Parameter

- `x`
  - : Die x-Achsen-Koordinate des Startpunkts des Rechtecks.
- `y`
  - : Die y-Achsen-Koordinate des Startpunkts des Rechtecks.
- `width`
  - : Die Breite des Rechtecks. Positive Werte sind nach rechts, und negative nach links.
- `height`
  - : Die Höhe des Rechtecks. Positive Werte sind nach unten, und negative nach oben.

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

Dieser Codeausschnitt füllt das gesamte Canvas mit einem Rechteck. Dies ist oft nützlich, um einen Hintergrund zu erstellen, auf dem dann andere Dinge gezeichnet werden können. Um dies zu erreichen, werden die Abmessungen des Rechtecks so eingestellt, dass sie den `width`- und `height`-Attributen des {{HtmlElement("canvas")}}-Elements entsprechen.

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

- Das Interface, das diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillStyle")}}
- {{domxref("CanvasRenderingContext2D.clearRect()")}}
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
