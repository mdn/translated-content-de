---
title: "CanvasRenderingContext2D: Methode isPointInPath()"
short-title: isPointInPath()
slug: Web/API/CanvasRenderingContext2D/isPointInPath
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef}}

Die Methode **`CanvasRenderingContext2D.isPointInPath()`** der Canvas 2D API gibt an, ob der angegebene Punkt im aktuellen Pfad enthalten ist oder nicht.

## Syntax

```js-nolint
isPointInPath(x, y)
isPointInPath(x, y, fillRule)
isPointInPath(path, x, y)
isPointInPath(path, x, y, fillRule)
```

### Parameter

- `x`
  - : Die x-Achsen-Koordinate des zu prüfenden Punktes, die von der aktuellen Transformation des Kontexts nicht beeinflusst wird.
- `y`
  - : Die y-Achsen-Koordinate des zu prüfenden Punktes, die von der aktuellen Transformation des Kontexts nicht beeinflusst wird.
- `fillRule`

  - : Der Algorithmus, um zu bestimmen, ob ein Punkt innerhalb oder außerhalb des Pfads liegt. Mögliche Werte:
    - `nonzero`
      - : Die [Non-Zero-Winding-Regel](https://de.wikipedia.org/wiki/F%C3%BCllregel). Standardregel.
    - `evenodd`
      - : Die [Even-Odd-Winding-Regel](https://de.wikipedia.org/wiki/F%C3%BCllregel#Odd-Even-Regel).

- `path`
  - : Ein [`Path2D`](/de/docs/Web/API/Path2D)-Pfad, gegen den geprüft werden soll. Wenn nicht angegeben, wird der aktuelle Pfad verwendet.

### Rückgabewert

- Ein boolescher Wert
  - : Ein Boolean, der `true` ist, wenn der angegebene Punkt im aktuellen oder angegebenen Pfad enthalten ist, andernfalls `false`.

## Beispiele

### Überprüfung eines Punktes im aktuellen Pfad

Dieses Beispiel verwendet die Methode `isPointInPath()`, um zu prüfen, ob ein Punkt im aktuellen Pfad liegt.

#### HTML

```html
<canvas id="canvas"></canvas>
<p>In path: <code id="result">false</code></p>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const result = document.getElementById("result");

ctx.rect(10, 10, 100, 100);
ctx.fill();
result.innerText = ctx.isPointInPath(30, 70);
```

#### Ergebnis

{{ EmbedLiveSample('Checking_a_point_in_the_current_path', 700, 220) }}

### Überprüfung eines Punktes im angegebenen Pfad

Immer wenn Sie die Maus bewegen, prüft dieses Beispiel, ob sich der Cursor in einem kreisförmigen `Path2D`-Pfad befindet. Ist dies der Fall, wird der Kreis grün, andernfalls rot.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Create circle
const circle = new Path2D();
circle.arc(150, 75, 50, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill(circle);

// Listen for mouse moves
canvas.addEventListener("mousemove", (event) => {
  // Check whether point is inside circle
  const isPointInPath = ctx.isPointInPath(circle, event.offsetX, event.offsetY);
  ctx.fillStyle = isPointInPath ? "green" : "red";

  // Draw circle
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fill(circle);
});
```

#### Ergebnis

{{ EmbedLiveSample('Checking_a_point_in_the_specified_path', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Gecko-spezifische Anmerkung

- Vor Gecko 7.0 (Firefox 7.0 / Thunderbird 7.0 / SeaMonkey 2.4) hat diese Methode fälschlicherweise versäumt, die Koordinaten des angegebenen Punktes mit der aktuellen Transformationsmatrix zu multiplizieren, bevor sie mit dem Pfad verglichen wurden. Jetzt funktioniert diese Methode korrekt, auch wenn der Kontext rotiert, skaliert oder anderweitig transformiert wird.

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
