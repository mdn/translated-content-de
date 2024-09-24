---
title: "CanvasRenderingContext2D: isPointInPath()-Methode"
short-title: isPointInPath()
slug: Web/API/CanvasRenderingContext2D/isPointInPath
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die
**`CanvasRenderingContext2D.isPointInPath()`**
Methode der Canvas 2D API gibt an, ob der angegebene Punkt im aktuellen Pfad enthalten ist oder nicht.

## Syntax

```js-nolint
isPointInPath(x, y)
isPointInPath(x, y, fillRule)
isPointInPath(path, x, y)
isPointInPath(path, x, y, fillRule)
```

### Parameter

- `x`
  - : Die x-Koordinate des zu überprüfenden Punktes, unbeeinflusst von der aktuellen
    Transformation des Kontexts.
- `y`
  - : Die y-Koordinate des zu überprüfenden Punktes, unbeeinflusst von der aktuellen
    Transformation des Kontexts.
- `fillRule`

  - : Der Algorithmus, nach dem bestimmt wird, ob ein Punkt innerhalb oder außerhalb des Pfads liegt. Mögliche Werte:

    - `nonzero`
      - : Die [Non-Zero-Füllregel](https://en.wikipedia.org/wiki/Nonzero-rule).
        Standardregel.
    - `evenodd`
      - : Die [Even-Odd-Füllregel](https://en.wikipedia.org/wiki/Even%E2%80%93odd_rule).

- `path`
  - : Ein {{domxref("Path2D")}}-Pfad, gegen den geprüft wird. Falls nicht angegeben, wird der aktuelle Pfad verwendet.

### Rückgabewert

- Ein boolescher Wert
  - : Ein Boolean, der `true` ist, wenn der angegebene Punkt im aktuellen oder angegebenen Pfad enthalten ist, andernfalls `false`.

## Beispiele

### Überprüfung eines Punktes im aktuellen Pfad

Dieses Beispiel verwendet die Methode `isPointInPath()`, um zu prüfen, ob ein Punkt im aktuellen Pfad liegt.

#### HTML

```html
<canvas id="canvas"></canvas>
<p>Im Pfad: <code id="result">false</code></p>
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

Wann immer Sie die Maus bewegen, überprüft dieses Beispiel, ob der Cursor in einem kreisförmigen
`Path2D`-Pfad liegt. Wenn ja, wird der Kreis grün, andernfalls rot.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Kreis erstellen
const circle = new Path2D();
circle.arc(150, 75, 50, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill(circle);

// Mausbewegungen beobachten
canvas.addEventListener("mousemove", (event) => {
  // Überprüfen, ob der Punkt im Kreis liegt
  const isPointInPath = ctx.isPointInPath(circle, event.offsetX, event.offsetY);
  ctx.fillStyle = isPointInPath ? "green" : "red";

  // Kreis zeichnen
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

- Vor Gecko 7.0 (Firefox 7.0 / Thunderbird 7.0 / SeaMonkey 2.4) hat diese Methode fälschlicherweise nicht die Koordinaten des angegebenen Punktes mit der aktuellen Transformationsmatrix multipliziert, bevor sie ihn mit dem Pfad verglich. Jetzt funktioniert diese Methode korrekt, auch wenn der Kontext gedreht, skaliert oder anderweitig transformiert wird.

## Siehe auch

- Das Interface, das diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
