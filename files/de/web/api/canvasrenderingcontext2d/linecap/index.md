---
title: "CanvasRenderingContext2D: lineCap-Eigenschaft"
short-title: lineCap
slug: Web/API/CanvasRenderingContext2D/lineCap
l10n:
  sourceCommit: 6f1b699dd8891431bbfe0bc3bb803f929fa6032e
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.lineCap`**-Eigenschaft der Canvas 2D API bestimmt die Form, die zum Zeichnen der Endpunkte von Linien verwendet wird.

> [!NOTE]
> Linien können mit den Methoden [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke), [`strokeRect()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect) und [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) gezeichnet werden.

## Wert

Einer der folgenden:

- `"butt"`
  - : Die Enden der Linien sind an den Endpunkten gerade abgeschnitten. Standardwert.
- `"round"`
  - : Die Enden der Linien sind abgerundet.
- `"square"`
  - : Die Enden der Linien sind durch das Hinzufügen eines Kastens mit gleicher Breite und der halben Höhe der Linienstärke abgeschnitten.

## Beispiele

### Ändern der Form von Linienenden

Dieses Beispiel rundet die Enden einer geraden Linie ab.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineWidth = 15;
ctx.lineCap = "round";
ctx.lineTo(100, 100);
ctx.stroke();
```

#### Ergebnis

{{ EmbedLiveSample('Changing_the_shape_of_line_caps', 700, 180) }}

### Vergleich der Linienenden

In diesem Beispiel werden drei Linien gezeichnet, jede mit einem anderen Wert für die `lineCap`-Eigenschaft. Zwei Leitlinien werden hinzugefügt, um die genauen Unterschiede zwischen den drei zu sehen. Jede dieser Linien beginnt und endet genau auf diesen Leitlinien.

Die Linie links verwendet die Standardoption `"butt"`. Sie ist vollständig bündig mit den Leitlinien gezeichnet. Die zweite ist auf die Option `"round"` eingestellt. Dies fügt dem Ende einen Halbkreis hinzu, der einen Radius von der halben Breite der Linie hat. Die Linie rechts verwendet die Option `"square"`. Dies fügt einen Kasten mit gleicher Breite und der halben Höhe der Linienstärke hinzu.

```html hidden
<canvas id="my-canvas" width="150" height="150"></canvas>
```

```js
const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

// Draw guides
ctx.strokeStyle = "#0099ff";
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(140, 10);
ctx.moveTo(10, 140);
ctx.lineTo(140, 140);
ctx.stroke();

// Draw lines
ctx.strokeStyle = "black";
["butt", "round", "square"].forEach((lineCap, i) => {
  ctx.lineWidth = 15;
  ctx.lineCap = lineCap;
  ctx.beginPath();
  ctx.moveTo(25 + i * 50, 10);
  ctx.lineTo(25 + i * 50, 140);
  ctx.stroke();
});
```

{{EmbedLiveSample("Comparison_of_line_caps", "180", "180")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### WebKit-/Blink-spezifische Hinweise

- In WebKit- und Blink-basierten Browsern ist zusätzlich zu dieser Eigenschaft eine nicht standardisierte und veraltete Methode `ctx.setLineCap()` implementiert.

## Siehe auch

- Das Interface, das diese Eigenschaft definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)
- [`CanvasRenderingContext2D.lineJoin`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin)
- [Anwenden von Stilen und Farben](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
