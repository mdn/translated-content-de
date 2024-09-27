---
title: "CanvasRenderingContext2D: isPointInStroke()-Methode"
short-title: isPointInStroke()
slug: Web/API/CanvasRenderingContext2D/isPointInStroke
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef}}

Die
**`CanvasRenderingContext2D.isPointInStroke()`**
Methode des Canvas 2D API ermittelt, ob der angegebene Punkt innerhalb des Bereichs liegt, der durch das Nachziehen eines Pfads umschlossen wird.

## Syntax

```js-nolint
isPointInStroke(x, y)
isPointInStroke(path, x, y)
```

### Parameter

- `x`
  - : Die x-Achsen-Koordinate des zu überprüfenden Punkts.
- `y`
  - : Die y-Achsen-Koordinate des zu überprüfenden Punkts.
- `path`
  - : Ein [`Path2D`](/de/docs/Web/API/Path2D)-Pfad, der überprüft werden soll. Wenn nicht angegeben, wird der aktuelle Pfad verwendet.

### Rückgabewert

- Ein boolescher Wert
  - : Ein Boolescher Wert, der `true` ist, wenn der Punkt innerhalb des Bereichs liegt, der durch das Nachziehen eines Pfads umschlossen wird, andernfalls `false`.

## Beispiele

### Überprüfen eines Punkts im aktuellen Pfad

Dieses Beispiel verwendet die `isPointInStroke()`-Methode, um zu prüfen, ob ein Punkt innerhalb des Bereichs des Strichs des aktuellen Pfads liegt.

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

### Überprüfen eines Punkts im angegebenen Pfad

Wann immer Sie die Maus bewegen, prüft dieses Beispiel, ob sich der Cursor im Strich eines elliptischen `Path2D`-Pfads befindet. Wenn ja, wird der Strich der Ellipse grün, andernfalls rot.

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

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
