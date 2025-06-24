---
title: "CanvasRenderingContext2D: fill()-Methode"
short-title: fill()
slug: Web/API/CanvasRenderingContext2D/fill
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef}}

Die **`CanvasRenderingContext2D.fill()`**-Methode der Canvas 2D-API füllt den aktuellen oder angegebenen Pfad mit dem aktuellen [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle).

## Syntax

```js-nolint
fill()
fill(path)
fill(fillRule)
fill(path, fillRule)
```

### Parameter

- `fillRule`

  - : Der Algorithmus, nach dem bestimmt wird, ob ein Punkt innerhalb oder außerhalb des Füllbereichs liegt.
    Mögliche Werte:
    - `nonzero`
      - : Die [non-zero winding rule](https://en.wikipedia.org/wiki/Nonzero-rule).
        Standardregel.
    - `evenodd`
      - : Die [even-odd winding rule](https://en.wikipedia.org/wiki/Even%E2%80%93odd_rule).

- `path`
  - : Ein [`Path2D`](/de/docs/Web/API/Path2D)-Pfad, der gefüllt werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Ein Rechteck füllen

Dieses Beispiel füllt ein Rechteck mit der `fill()`-Methode.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.rect(10, 10, 150, 100);
ctx.fill();
```

#### Ergebnis

{{ EmbedLiveSample('Filling_a_rectangle', 700, 180) }}

### Einen Pfad und eine fillRule angeben

Dieses Beispiel speichert einige sich kreuzende Linien in einem Path2D-Objekt. Die `fill()`-Methode wird dann verwendet, um das Objekt auf die Leinwand zu rendern. Ein Loch in der Mitte des Objekts bleibt ungefüllt, indem die `"evenodd"`-Regel verwendet wird; standardmäßig (mit der `"nonzero"`-Regel) würde das Loch ebenfalls gefüllt.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Create path
let region = new Path2D();
region.moveTo(30, 90);
region.lineTo(110, 20);
region.lineTo(240, 130);
region.lineTo(60, 130);
region.lineTo(190, 20);
region.lineTo(270, 90);
region.closePath();

// Fill path
ctx.fillStyle = "green";
ctx.fill(region, "evenodd");
```

#### Ergebnis

{{ EmbedLiveSample('Specifying_a_path_and_a_fillRule', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)
