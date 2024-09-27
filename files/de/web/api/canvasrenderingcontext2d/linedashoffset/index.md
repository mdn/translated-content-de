---
title: "CanvasRenderingContext2D: lineDashOffset-Eigenschaft"
short-title: lineDashOffset
slug: Web/API/CanvasRenderingContext2D/lineDashOffset
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die
**`CanvasRenderingContext2D.lineDashOffset`**
Eigenschaft der Canvas 2D API legt den Linienstrichelversatz oder „Phase“ fest.

> [!NOTE]
> Linien werden durch Aufruf der
> [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke)-Methode gezeichnet.

## Wert

Ein Float, der die Menge des Linienstrichelversatzes angibt. Der Standardwert ist `0.0`.

## Beispiele

### Versatz eines Linienstrichels

Dieses Beispiel zeichnet zwei gestrichelte Linien. Die erste hat keinen Strichelversatz. Die zweite hat einen
Strichelversatz von 4.

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

Die Linie mit einem Strichelversatz wird in Rot gezeichnet.

{{ EmbedLiveSample('Offsetting_a_line_dash', 700, 180) }}

### Marching Ants

Der [Marching-Ants](https://en.wikipedia.org/wiki/Marching_ants)-Effekt ist
eine Animationstechnik, die häufig in Auswahlwerkzeugen von Grafikprogrammen verwendet wird. Sie
hilft dem Benutzer dabei, die Auswahlkante vom Bildhintergrund zu unterscheiden, indem sie die Kante animiert.

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
- [Anwenden von Stilen und Farben](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
