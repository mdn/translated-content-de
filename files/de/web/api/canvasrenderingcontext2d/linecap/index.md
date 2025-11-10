---
title: "CanvasRenderingContext2D: lineCap-Eigenschaft"
short-title: lineCap
slug: Web/API/CanvasRenderingContext2D/lineCap
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.lineCap`**-Eigenschaft der Canvas 2D API bestimmt die Form, die zum Zeichnen der Endpunkte von Linien verwendet wird.

> [!NOTE]
> Linien können mit den
> [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke), [`strokeRect()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect)
> und [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) Methoden gezeichnet werden.

## Wert

Einer der folgenden:

- `"butt"`
  - : Die Enden von Linien werden an den Endpunkten rechtwinklig abgeschnitten. Standardwert.
- `"round"`
  - : Die Enden von Linien sind abgerundet.
- `"square"`
  - : Die Enden von Linien werden durch das Hinzufügen eines Kästchens mit gleicher Breite und halber
    Höhe der Liniendicke rechtwinklig abgeschnitten.

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

### Vergleich der Linienendenformen

In diesem Beispiel werden drei Linien mit jeweils einem anderen Wert für die `lineCap`-Eigenschaft gezeichnet. Zur genauen Unterscheidung zwischen den drei Linien sind zwei Leitlinien hinzugefügt. Jede dieser Linien beginnt und endet exakt auf diesen Leitlinien.

Die Linie links verwendet die Standardoption `"butt"`. Sie wird vollständig flächenbündig mit den Leitlinien gezeichnet. Die zweite Linie ist auf die Option `"round"` eingestellt. Dies fügt ein Halbkreisende hinzu, das einen Radius von der halben Breite der Linie hat. Die Linie rechts verwendet die Option `"square"`. Dies fügt ein Kästchen mit gleicher Breite und halber Höhe der Liniendicke hinzu.

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
const canvas = document.getElementById("canvas");
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

### WebKit/Blink-spezifische Hinweise

- In WebKit- und Blink-basierten Browsern ist eine nicht standardisierte und veraltete Methode `ctx.setLineCap()` zusätzlich zu dieser Eigenschaft implementiert.

## Siehe auch

- Das Interface, das diese Eigenschaft definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)
- [`CanvasRenderingContext2D.lineJoin`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin)
- [Anwenden von Stilen und Farben](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
