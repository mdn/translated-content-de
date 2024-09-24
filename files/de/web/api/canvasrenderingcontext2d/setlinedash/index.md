---
title: "CanvasRenderingContext2D: setLineDash()-Methode"
short-title: setLineDash()
slug: Web/API/CanvasRenderingContext2D/setLineDash
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die **`setLineDash()`**-Methode der {{domxref("CanvasRenderingContext2D")}}-Schnittstelle des Canvas 2D API setzt das Linienstreichmuster, das beim Zeichnen von Linien verwendet wird. Sie verwendet ein Array von Werten, die abwechselnd Längen von Linien und Lücken spezifizieren, um das Muster zu beschreiben.

> [!NOTE]
> Um wieder feste Linien zu verwenden, setzen Sie die Liste der Linienstreichelungen auf ein leeres Array.

## Syntax

```js-nolint
setLineDash(segments)
```

### Parameter

- `segments`
  - : Ein {{jsxref("Array")}} von Zahlen, das Entfernungen angibt, um abwechselnd eine Linie und eine Lücke zu zeichnen (in Einheiten des Koordinatenraums). Wenn die Anzahl der Elemente im Array ungerade ist, werden die Elemente des Arrays kopiert und verkettet. Zum Beispiel wird `[5, 15, 25]` zu `[5, 15, 25, 5, 15, 25]`. Wenn das Array leer ist, wird die Liste der Linienstreichelungen gelöscht und die Linien werden wieder fest.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Einfaches Beispiel

Dieses Beispiel verwendet die `setLineDash()`-Methode, um eine gestrichelte Linie über einer festen Linie zu zeichnen.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Gestrichelte Linie
ctx.beginPath();
ctx.setLineDash([5, 15]);
ctx.moveTo(0, 50);
ctx.lineTo(300, 50);
ctx.stroke();

// Feste Linie
ctx.beginPath();
ctx.setLineDash([]);
ctx.moveTo(0, 100);
ctx.lineTo(300, 100);
ctx.stroke();
```

#### Ergebnis

{{ EmbedLiveSample('Basic_example', 700, 180) }}

### Einige gängige Muster

Dieses Beispiel illustriert eine Vielzahl von gängigen Linienstreichmustern.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die unten erstellte Funktion `drawDashedLine()` vereinfacht das Zeichnen mehrerer gestrichelter Linien. Sie erhält ein Muster-Array als einzigen Parameter.

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
drawDashedLine([12, 3, 3]); // Entspricht [12, 3, 3, 12, 3, 3]
```

#### Ergebnis

{{ EmbedLiveSample('Some_common_patterns', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.getLineDash()")}}
- {{domxref("CanvasRenderingContext2D.lineDashOffset")}}
