---
title: "CanvasRenderingContext2D: setLineDash()-Methode"
short-title: setLineDash()
slug: Web/API/CanvasRenderingContext2D/setLineDash
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{APIRef("Canvas API")}}

Die **`setLineDash()`**-Methode der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Schnittstelle des 2D-Canvas-API setzt das Linienmuster, das beim Zeichnen von Linien verwendet wird. Sie verwendet ein Array von Werten, die abwechselnde Längen von Linien und Lücken angeben, die das Muster beschreiben.

> [!NOTE]
> Um wieder feste Linien zu verwenden, setzen Sie die Strichmusterliste auf ein leeres Array.

## Syntax

```js-nolint
setLineDash(segments)
```

### Parameter

- `segments`
  - : Ein {{jsxref("Array")}} von Zahlen, die die Abstände angeben, um abwechselnd eine Linie und eine Lücke zu zeichnen (in Koordinatenraumeinheiten). Wenn die Anzahl der Elemente im Array ungerade ist, werden die Elemente des Arrays kopiert und angehängt. Zum Beispiel wird `[5, 15, 25]` zu `[5, 15, 25, 5, 15, 25]`. Wenn das Array leer ist, wird die Linie-Strichliste gelöscht und Linienstriche sind wieder fest.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Einfaches Beispiel

Dieses Beispiel verwendet die `setLineDash()`-Methode, um oberhalb einer festen Linie eine gestrichelte Linie zu zeichnen.

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

Dieses Beispiel veranschaulicht eine Vielzahl von gängigen Strichmustern.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die unten erstellte `drawDashedLine()`-Funktion vereinfacht das Zeichnen mehrerer gestrichelter Linien. Sie erhält ein Muster-Array als einzigen Parameter.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let y = 15;

function drawDashedLine(pattern) {
  ctx.beginPath();
  ctx.setLineDash(pattern);
  ctx.moveTo(0, y);
  ctx.lineTo(300, y);
  ctx.stroke();
  y += 20;
}

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

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.getLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/getLineDash)
- [`CanvasRenderingContext2D.lineDashOffset`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
