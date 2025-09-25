---
title: "CanvasRenderingContext2D: setLineDash()-Methode"
short-title: setLineDash()
slug: Web/API/CanvasRenderingContext2D/setLineDash
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die **`setLineDash()`**-Methode des [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Interfaces der Canvas 2D API legt das Strichmuster fest, das beim Zeichnen von Linien verwendet wird. Sie verwendet ein Array von Werten, die abwechselnde Längen von Linien und Lücken angeben, die das Muster beschreiben.

> [!NOTE]
> Um wieder durchgehende Linien zu verwenden, setzen Sie die Strichliste auf ein leeres Array.

## Syntax

```js-nolint
setLineDash(segments)
```

### Parameter

- `segments`
  - : Ein {{jsxref("Array")}} von Zahlen, die die Abstände angeben, um abwechselnd eine Linie und eine Lücke zu zeichnen (in Koordinatenraumeinheiten). Wenn die Anzahl der Elemente im Array ungerade ist, werden die Elemente des Arrays kopiert und aneinander gehängt. Zum Beispiel wird `[5, 15, 25]` zu `[5, 15, 25, 5, 15, 25]`. Wenn das Array leer ist, wird die Strichliste gelöscht und die Linienstriche kehren zu durchgehenden Linien zurück.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Einfaches Beispiel

Dieses Beispiel verwendet die `setLineDash()`-Methode, um eine gestrichelte Linie über einer durchgehenden Linie zu zeichnen.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Dashed line
ctx.beginPath();
ctx.setLineDash([5, 15]);
ctx.moveTo(0, 50);
ctx.lineTo(300, 50);
ctx.stroke();

// Solid line
ctx.beginPath();
ctx.setLineDash([]);
ctx.moveTo(0, 100);
ctx.lineTo(300, 100);
ctx.stroke();
```

#### Ergebnis

{{ EmbedLiveSample('Basic_example', 700, 180) }}

### Einige gängige Muster

Dieses Beispiel zeigt eine Vielzahl von gängigen Strichmustern.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die `drawDashedLine()`-Funktion, die unten erstellt wird, vereinfacht das Zeichnen mehrerer gestrichelter Linien. Sie erhält ein Muster-Array als einzigen Parameter.

```js
function drawDashedLine(pattern) {
  ctx.beginPath();
  ctx.setLineDash(pattern);
  ctx.moveTo(0, y);
  ctx.lineTo(300, y);
  ctx.stroke();
  y += 20;
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let y = 15;

drawDashedLine([]);
drawDashedLine([1, 1]);
drawDashedLine([10, 10]);
drawDashedLine([20, 5]);
drawDashedLine([15, 3, 3, 3]);
drawDashedLine([20, 3, 3, 3, 3, 3, 3, 3]);
drawDashedLine([12, 3, 3]); // Equals [12, 3, 3, 12, 3, 3]
```

#### Ergebnis

{{ EmbedLiveSample('Some_common_patterns', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.getLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/getLineDash)
- [`CanvasRenderingContext2D.lineDashOffset`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
