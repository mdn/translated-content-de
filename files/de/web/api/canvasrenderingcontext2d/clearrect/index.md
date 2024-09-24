---
title: "CanvasRenderingContext2D: Methode clearRect()"
short-title: clearRect()
slug: Web/API/CanvasRenderingContext2D/clearRect
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die **`CanvasRenderingContext2D.clearRect()`**-Methode der Canvas 2D API löscht die Pixel in einem rechteckigen Bereich, indem sie auf transparente Schwarzfarbe gesetzt werden.

> [!NOTE]
> Beachten Sie, dass `clearRect()` unbeabsichtigte
> Nebeneffekte verursachen kann, wenn Sie [Pfade nicht richtig verwenden](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#drawing_paths). Stellen Sie sicher, dass Sie
> {{domxref("CanvasRenderingContext2D.beginPath", "beginPath()")}} aufrufen, bevor Sie nach einem Aufruf von `clearRect()` neue Objekte zeichnen.

## Syntax

```js-nolint
clearRect(x, y, width, height)
```

Die `clearRect()`-Methode setzt die Pixel in einem rechteckigen Bereich auf transparente Schwarzfarbe (`rgb(0 0 0 / 0%)`). Die obere linke Ecke des Rechtecks befindet sich bei `(x, y)`, und seine Größe wird durch `width` und `height` angegeben.

### Parameter

- `x`
  - : Die x-Koordinate des Anfangspunkts des Rechtecks.
- `y`
  - : Die y-Koordinate des Anfangspunkts des Rechtecks.
- `width`
  - : Die Breite des Rechtecks. Positive Werte sind nach rechts, negative nach links.
- `height`
  - : Die Höhe des Rechtecks. Positive Werte sind nach unten, negative nach oben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Löschen der gesamten Leinwand

Dieser Codeausschnitt löscht die gesamte Leinwand. Dies ist in der Regel am Anfang
jeder Animation nötig. Die Größe des zu löschenden Bereichs wird so festgelegt, dass sie den
`width`- und `height`-Attributen des {{HtmlElement("canvas")}}-Elements entspricht.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height);
```

### Löschen eines Teils der Leinwand

Dieses Beispiel zeichnet ein blaues Dreieck auf einem gelblichen Hintergrund. Die
`clearRect()`-Methode löscht dann einen Teil der Leinwand.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Der gelöschte Bereich ist rechteckig, mit der oberen linken Ecke bei (10, 10). Der
gelöschte Bereich hat eine Breite von 120 und eine Höhe von 100.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Gelben Hintergrund zeichnen
ctx.beginPath();
ctx.fillStyle = "#ff6";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Blaues Dreieck zeichnen
ctx.beginPath();
ctx.fillStyle = "blue";
ctx.moveTo(20, 20);
ctx.lineTo(180, 20);
ctx.lineTo(130, 130);
ctx.closePath();
ctx.fill();

// Teil der Leinwand löschen
ctx.clearRect(10, 10, 120, 100);
```

#### Ergebnis

{{EmbedLiveSample('Erasing_part_of_a_canvas', 700, 180)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
