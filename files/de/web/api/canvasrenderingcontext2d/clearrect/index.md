---
title: "CanvasRenderingContext2D: clearRect()-Methode"
short-title: clearRect()
slug: Web/API/CanvasRenderingContext2D/clearRect
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die Methode
**`CanvasRenderingContext2D.clearRect()`**
des Canvas 2D API löscht die Pixel in einem rechteckigen Bereich, indem sie auf transparentes Schwarz gesetzt werden.

> [!NOTE]
> Beachten Sie, dass `clearRect()` unbeabsichtigte Nebenwirkungen haben kann, wenn Sie nicht [Wege richtig verwenden](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#drawing_paths). Achten Sie darauf, [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) aufzurufen, bevor Sie nach einem Aufruf von `clearRect()` neue Elemente zeichnen.

## Syntax

```js-nolint
clearRect(x, y, width, height)
```

Die Methode `clearRect()` setzt die Pixel in einem rechteckigen Bereich auf transparent. Die obere linke Ecke des Rechtecks befindet sich bei `(x, y)`, und seine Größe wird durch `width` und `height` angegeben.

### Parameter

- `x`
  - : Die x-Achsenkoordinate des Startpunkts des Rechtecks.
- `y`
  - : Die y-Achsenkoordinate des Startpunkts des Rechtecks.
- `width`
  - : Die Breite des Rechtecks. Positive Werte liegen rechts, negative links.
- `height`
  - : Die Höhe des Rechtecks. Positive Werte gehen nach unten, negative nach oben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Löschen des gesamten Canvas

Dieses Codebeispiel löscht das gesamte Canvas. Dies ist normalerweise am Anfang jedes Frames in einer Animation erforderlich. Die Dimensionen des gelöschten Bereichs werden gleich den `width` und `height`-Attributen des {{HtmlElement("canvas")}}-Elements gesetzt.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height);
```

### Löschen eines Teils eines Canvas

Dieses Beispiel zeichnet ein blaues Dreieck auf einen gelblichen Hintergrund. Die Methode `clearRect()` löscht dann einen Teil des Canvas.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Der gelöschte Bereich ist rechteckig mit seiner oberen linken Ecke bei (10, 10). Der gelöschte Bereich hat eine Breite von 120 und eine Höhe von 100.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Draw yellow background
ctx.beginPath();
ctx.fillStyle = "#ffff66";
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

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect)
- [`CanvasRenderingContext2D.strokeRect()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect)
