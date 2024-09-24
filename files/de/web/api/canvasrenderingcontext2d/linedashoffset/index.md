---
title: "CanvasRenderingContext2D: lineDashOffset-Eigenschaft"
short-title: lineDashOffset
slug: Web/API/CanvasRenderingContext2D/lineDashOffset
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die **`CanvasRenderingContext2D.lineDashOffset`**-Eigenschaft der Canvas 2D API legt den Strichlinienversatz oder die "Phase" fest.

> [!NOTE]
> Linien werden gezeichnet, indem die {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}}-Methode aufgerufen wird.

## Wert

Ein Float, der die Menge des Strichlinienversatzes angibt. Der Standardwert ist `0.0`.

## Beispiele

### Verschiebung einer Strichlinie

Dieses Beispiel zeichnet zwei gestrichelte Linien. Die erste hat keinen Strichlinienversatz. Die zweite hat einen Strichlinienversatz von 4.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.setLineDash([4, 16]);

// Gestrichelte Linie ohne Versatz
ctx.beginPath();
ctx.moveTo(0, 50);
ctx.lineTo(300, 50);
ctx.stroke();

// Gestrichelte Linie mit Versatz von 4
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineDashOffset = 4;
ctx.moveTo(0, 100);
ctx.lineTo(300, 100);
ctx.stroke();
```

#### Ergebnis

Die Linie mit einem Strichlinienversatz wird in Rot gezeichnet.

{{ EmbedLiveSample('Offsetting_a_line_dash', 700, 180) }}

### Laufende Ameisen

Der [Laufende Ameisen](https://en.wikipedia.org/wiki/Marching_ants)-Effekt ist eine Animationstechnik, die häufig in Auswahlwerkzeugen von Grafikprogrammen verwendet wird. Sie hilft dem Benutzer, die Auswahlgrenze vom Bildhintergrund zu unterscheiden, indem die Grenze animiert wird.

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

- Das Interface, das diese Eigenschaft definiert: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.getLineDash()")}}
- {{domxref("CanvasRenderingContext2D.setLineDash()")}}
- [Stile und Farbe anwenden](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
