---
title: "CanvasRenderingContext2D: isPointInStroke() Methode"
short-title: isPointInStroke()
slug: Web/API/CanvasRenderingContext2D/isPointInStroke
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.isPointInStroke()`**-Methode der Canvas 2D API gibt an, ob der angegebene Punkt sich innerhalb des durch das Umranden eines Pfades gebildeten Bereichs befindet.

## Syntax

```js-nolint
isPointInStroke(x, y)
isPointInStroke(path, x, y)
```

### Parameter

- `x`
  - : Die x-Koordinate des zu überprüfenden Punktes.
- `y`
  - : Die y-Koordinate des zu überprüfenden Punktes.
- `path`
  - : Ein [`Path2D`](/de/docs/Web/API/Path2D)-Pfad, der überprüft werden soll. Wenn nicht angegeben, wird der aktuelle Pfad verwendet.

### Rückgabewert

- Ein boolescher Wert
  - : Ein Boolean, der `true` ist, wenn sich der Punkt innerhalb des durch das Umranden eines Pfades gebildeten Bereichs befindet, ansonsten `false`.

## Beispiele

### Überprüfung eines Punktes im aktuellen Pfad

Dieses Beispiel verwendet die `isPointInStroke()`-Methode, um zu überprüfen, ob sich ein Punkt innerhalb des Bereichs des Umrisses des aktuellen Pfades befindet.

#### HTML

```html
<canvas id="canvas"></canvas>
<p>In stroke: <code id="result">false</code></p>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const result = document.getElementById("result");

ctx.rect(10, 10, 100, 100);
ctx.stroke();
result.innerText = ctx.isPointInStroke(50, 10);
```

#### Ergebnis

{{ EmbedLiveSample('Checking_a_point_in_the_current_path', 700, 220) }}

### Überprüfung eines Punktes im angegebenen Pfad

Immer wenn Sie die Maus bewegen, prüft dieses Beispiel, ob sich der Cursor innerhalb des Umrisses eines elliptischen `Path2D`-Pfades befindet. Wenn ja, wird der Umriss der Ellipse grün, andernfalls rot.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Create ellipse
const ellipse = new Path2D();
ellipse.ellipse(150, 75, 40, 60, Math.PI * 0.25, 0, 2 * Math.PI);
ctx.lineWidth = 25;
ctx.strokeStyle = "red";
ctx.fill(ellipse);
ctx.stroke(ellipse);

// Listen for mouse moves
canvas.addEventListener("mousemove", (event) => {
  // Check whether point is inside ellipse's stroke
  const isPointInStroke = ctx.isPointInStroke(
    ellipse,
    event.offsetX,
    event.offsetY,
  );
  ctx.strokeStyle = isPointInStroke ? "green" : "red";

  // Draw ellipse
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fill(ellipse);
  ctx.stroke(ellipse);
});
```

#### Ergebnis

{{ EmbedLiveSample('Checking_a_point_in_the_specified_path', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
