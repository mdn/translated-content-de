---
title: "CanvasRenderingContext2D: fill() Methode"
short-title: fill()
slug: Web/API/CanvasRenderingContext2D/fill
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die
**`CanvasRenderingContext2D.fill()`**
Methode der Canvas 2D API füllt den aktuellen oder angegebenen Pfad mit dem aktuellen
{{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}}.

## Syntax

```js-nolint
fill()
fill(path)
fill(fillRule)
fill(path, fillRule)
```

### Parameter

- `fillRule`

  - : Der Algorithmus, mit dem bestimmt wird, ob ein Punkt innerhalb oder außerhalb des Füllbereichs liegt.
    Mögliche Werte:

    - `nonzero`
      - : Die [non-zero Windregel](https://de.wikipedia.org/wiki/Nicht-Null-Regel).
        Standardregel.
    - `evenodd`
      - : Die [Even-Odd Windregel](https://de.wikipedia.org/wiki/Even-Odd-Regel).

- `path`
  - : Ein {{domxref("Path2D")}} Pfad zum Füllen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Ein Rechteck füllen

Dieses Beispiel füllt ein Rechteck mit der `fill()` Methode.

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

Dieses Beispiel speichert einige sich schneidende Linien in einem Path2D Objekt. Die `fill()`
Methode wird dann verwendet, um das Objekt auf die Leinwand zu rendern. Ein Loch in der Mitte des
Objekts bleibt durch die Verwendung der `"evenodd"` Regel ungefüllt; standardmäßig (mit der
`"nonzero"` Regel) würde das Loch ebenfalls gefüllt werden.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Pfad erstellen
let region = new Path2D();
region.moveTo(30, 90);
region.lineTo(110, 20);
region.lineTo(240, 130);
region.lineTo(60, 130);
region.lineTo(190, 20);
region.lineTo(270, 90);
region.closePath();

// Pfad füllen
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

- Die Schnittstelle, die diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillStyle")}}
