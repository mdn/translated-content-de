---
title: "CanvasRenderingContext2D: clearRect() Methode"
short-title: clearRect()
slug: Web/API/CanvasRenderingContext2D/clearRect
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die Methode **`CanvasRenderingContext2D.clearRect()`** der Canvas 2D API löscht die Pixel in einem rechteckigen Bereich, indem sie auf transparentes Schwarz gesetzt werden.

> [!NOTE]
> Beachten Sie, dass `clearRect()` zu unbeabsichtigten Nebeneffekten führen kann, wenn Sie nicht [Pfade richtig verwenden](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#drawing_paths). Stellen Sie sicher, dass Sie [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) aufrufen, bevor Sie nach dem Aufrufen von `clearRect()` neue Elemente zeichnen.

## Syntax

```js-nolint
clearRect(x, y, width, height)
```

Die `clearRect()` Methode setzt die Pixel in einem rechteckigen Bereich auf transparentes Schwarz (`rgb(0 0 0 / 0%)`). Die obere linke Ecke des Rechtecks befindet sich bei `(x, y)`, und seine Größe wird durch `width` und `height` angegeben.

### Parameter

- `x`
  - : Die x-Achsenkoordinate des Startpunkts des Rechtecks.
- `y`
  - : Die y-Achsenkoordinate des Startpunkts des Rechtecks.
- `width`
  - : Die Breite des Rechtecks. Positive Werte sind nach rechts, und negative nach links.
- `height`
  - : Die Höhe des Rechtecks. Positive Werte sind nach unten, und negative nach oben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Löschen des gesamten Canvas

Dieser Code-Schnipsel löscht das gesamte Canvas. Dies ist häufig am Anfang jedes Frames in einer Animation erforderlich. Die Dimensionen des gelöschten Bereichs sind gleich den `width` und `height` Attributen des {{HtmlElement("canvas")}} Elements.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height);
```

### Löschen eines Teils eines Canvas

Dieses Beispiel zeichnet ein blaues Dreieck auf einem gelblichen Hintergrund. Die `clearRect()` Methode löscht dann einen Teil des Canvas.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Der gelöschte Bereich ist rechteckig mit der oberen linken Ecke bei (10, 10). Der gelöschte Bereich hat eine Breite von 120 und eine Höhe von 100.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Draw yellow background
ctx.beginPath();
ctx.fillStyle = "#ff6";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Draw blue triangle
ctx.beginPath();
ctx.fillStyle = "blue";
ctx.moveTo(20, 20);
ctx.lineTo(180, 20);
ctx.lineTo(130, 130);
ctx.closePath();
ctx.fill();

// Clear part of the canvas
ctx.clearRect(10, 10, 120, 100);
```

#### Ergebnis

{{EmbedLiveSample('Erasing_part_of_a_canvas', 700, 180)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect)
- [`CanvasRenderingContext2D.strokeRect()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect)
