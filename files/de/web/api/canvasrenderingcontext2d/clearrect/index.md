---
title: "CanvasRenderingContext2D: clearRect() Methode"
short-title: clearRect()
slug: Web/API/CanvasRenderingContext2D/clearRect
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{APIRef}}

Die **`CanvasRenderingContext2D.clearRect()`** Methode der Canvas 2D API löscht die Pixel in einem rechteckigen Bereich, indem sie auf transparentes Schwarz gesetzt werden.

> [!NOTE]
> Beachten Sie, dass `clearRect()` unbeabsichtigte Nebeneffekte verursachen kann, wenn Sie [Pfade nicht richtig verwenden](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#drawing_paths). Stellen Sie sicher, dass Sie [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) aufrufen, bevor Sie nach dem Aufruf von `clearRect()` neue Elemente zeichnen.

## Syntax

```js-nolint
clearRect(x, y, width, height)
```

Die `clearRect()` Methode setzt die Pixel in einem rechteckigen Bereich auf transparent. Die obere linke Ecke des Rechtecks befindet sich bei `(x, y)`, und seine Größe wird durch `width` und `height` angegeben.

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

### Löschen der gesamten Leinwand

Dieses Codebeispiel löscht die gesamte Leinwand. Dies ist häufig zu Beginn jedes Frames in einer Animation erforderlich. Die Abmessungen des gelöschten Bereichs entsprechen den `width` und `height` Attributen des {{HtmlElement("canvas")}} Elements.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height);
```

### Löschen eines Teils einer Leinwand

Dieses Beispiel zeichnet ein blaues Dreieck auf einem gelblichen Hintergrund. Die `clearRect()` Methode löscht dann einen Teil der Leinwand.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Der gelöschte Bereich ist rechteckig und seine obere linke Ecke befindet sich bei (10, 10). Der gelöschte Bereich hat eine Breite von 120 und eine Höhe von 100.

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
