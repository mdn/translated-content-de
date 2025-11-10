---
title: "CanvasRenderingContext2D: lineDashOffset-Eigenschaft"
short-title: lineDashOffset
slug: Web/API/CanvasRenderingContext2D/lineDashOffset
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die
**`CanvasRenderingContext2D.lineDashOffset`**
Eigenschaft der Canvas 2D API setzt den Linienstrich-Versatz oder die "Phase".

> [!NOTE]
> Linien werden gezeichnet, indem die
> [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) Methode aufgerufen wird.

## Wert

Ein Float, der die Höhe des Versatzes des Linie-Strichs angibt. Der Standardwert ist `0.0`.

## Beispiele

### Versatz eines Linie-Strichs

Dieses Beispiel zeichnet zwei gestrichelte Linien. Die erste hat keinen Linienversatz. Die zweite hat einen
Linienversatz von 4.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.setLineDash([4, 16]);

// Dashed line with no offset
ctx.beginPath();
ctx.moveTo(0, 50);
ctx.lineTo(300, 50);
ctx.stroke();

// Dashed line with offset of 4
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineDashOffset = 4;
ctx.moveTo(0, 100);
ctx.lineTo(300, 100);
ctx.stroke();
```

#### Ergebnis

Die Linie mit einem Linienversatz wird in Rot gezeichnet.

{{ EmbedLiveSample('Offsetting_a_line_dash', 700, 180) }}

### Marching Ants

Der [Marching Ants](https://en.wikipedia.org/wiki/Marching_ants)-Effekt ist
eine Animationstechnik, die oft in Auswahlwerkzeugen von Computer-Grafikprogrammen zu finden ist. Er
hilft dem Benutzer, die Auswahlgrenze vom Hintergrundbild zu unterscheiden, indem die Grenze animiert wird.

```html hidden
<canvas id="canvas"></canvas>
```

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let offset = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.setLineDash([4, 2]);
  ctx.lineDashOffset = offset;
  ctx.strokeRect(10, 10, 100, 100);
}

function march() {
  offset++;
  if (offset > 5) {
    offset = 0;
  }
  draw();
  setTimeout(march, 20);
}

march();
```

{{ EmbedLiveSample('Marching_ants', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Eigenschaft definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.getLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/getLineDash)
- [`CanvasRenderingContext2D.setLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash)
- [Anwenden von Stilen und Farbe](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
