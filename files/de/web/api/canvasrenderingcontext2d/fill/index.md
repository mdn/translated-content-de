---
title: "CanvasRenderingContext2D: fill()-Methode"
short-title: fill()
slug: Web/API/CanvasRenderingContext2D/fill
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

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
  - : Der Algorithmus, um zu bestimmen, ob ein Punkt innerhalb oder außerhalb der Füllregion liegt.
    Mögliche Werte:
    - `nonzero`
      - : Die [non-zero winding rule](https://de.wikipedia.org/wiki/Nonzero-rule).
        Standardregel.
    - `evenodd`
      - : Die [even-odd winding rule](https://de.wikipedia.org/wiki/Even%E2%80%93odd_rule).

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

### Einen Pfad und ein fillRule angeben

In diesem Beispiel werden einige sich schneidende Linien in einem Path2D-Objekt gespeichert. Die `fill()`-Methode wird dann verwendet, um das Objekt auf die Leinwand zu rendern. In der Mitte des Objekts bleibt ein Loch ungefüllt, indem die Regel `"evenodd"` verwendet wird; standardmäßig (mit der `"nonzero"`-Regel) würde das Loch ebenfalls gefüllt werden.

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

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)
