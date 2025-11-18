---
title: "CanvasRenderingContext2D: isPointInPath()-Methode"
short-title: isPointInPath()
slug: Web/API/CanvasRenderingContext2D/isPointInPath
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.isPointInPath()`**-Methode der Canvas-2D-API gibt an, ob der angegebene Punkt im aktuellen Pfad enthalten ist oder nicht.

## Syntax

```js-nolint
isPointInPath(x, y)
isPointInPath(x, y, fillRule)
isPointInPath(path, x, y)
isPointInPath(path, x, y, fillRule)
```

### Parameter

- `x`
  - : Die x-Koordinate des zu überprüfenden Punktes, unbeeinflusst von der aktuellen Transformation des Kontextes.
- `y`
  - : Die y-Koordinate des zu überprüfenden Punktes, unbeeinflusst von der aktuellen Transformation des Kontextes.
- `fillRule`
  - : Der Algorithmus, der bestimmt, ob ein Punkt innerhalb oder außerhalb des Pfads liegt. Mögliche Werte:
    - `nonzero`
      - : Die [non-zero winding rule](https://en.wikipedia.org/wiki/Nonzero-rule). Standardregel.
    - `evenodd`
      - : Die [even-odd winding rule](https://en.wikipedia.org/wiki/Even%E2%80%93odd_rule).

- `path`
  - : Ein [`Path2D`](/de/docs/Web/API/Path2D)-Pfad, gegen den überprüft werden soll. Wenn nichts angegeben ist, wird der aktuelle Pfad verwendet.

### Rückgabewert

Ein boolescher Wert, der `true` ist, wenn der angegebene Punkt im aktuellen oder angegebenen Pfad enthalten ist, andernfalls `false`.

## Beispiele

### Überprüfung eines Punktes im aktuellen Pfad

Dieses Beispiel verwendet die `isPointInPath()`-Methode, um zu überprüfen, ob ein Punkt innerhalb des aktuellen Pfades liegt.

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

Wann immer Sie die Maus bewegen, überprüft dieses Beispiel, ob sich der Cursor in einem kreisförmigen `Path2D`-Pfad befindet. Wenn ja, wird der Kreis grün, andernfalls rot.

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

- Vor Gecko 7.0 (Firefox 7.0 / Thunderbird 7.0 / SeaMonkey 2.4) versagte diese Methode fälschlicherweise darin, die Koordinaten des angegebenen Punktes mit der aktuellen Transformationsmatrix zu multiplizieren, bevor sie mit dem Pfad verglichen wurden. Jetzt funktioniert diese Methode korrekt, selbst wenn der Kontext gedreht, skaliert oder anderweitig transformiert ist.

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
