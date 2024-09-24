---
title: "CanvasRenderingContext2D: lineCap-Eigenschaft"
short-title: lineCap
slug: Web/API/CanvasRenderingContext2D/lineCap
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die **`CanvasRenderingContext2D.lineCap`**-Eigenschaft der Canvas 2D API bestimmt die Form, die zum Zeichnen der Endpunkte von Linien verwendet wird.

> [!NOTE]
> Linien können mit den Methoden {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}}, {{domxref("CanvasRenderingContext2D.strokeRect()", "strokeRect()")}} und {{domxref("CanvasRenderingContext2D.strokeText()", "strokeText()")}} gezeichnet werden.

## Wert

Einer der folgenden Werte:

- `"butt"`
  - : Die Enden von Linien sind an den Endpunkten abgeflacht. Standardwert.
- `"round"`
  - : Die Enden von Linien sind abgerundet.
- `"square"`
  - : Die Enden von Linien sind abgeflacht, indem ein Kästchen mit einer gleichen Breite und der halben Höhe der Liniendicke hinzugefügt wird.

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

### Vergleich von Linienenden

In diesem Beispiel werden drei Linien gezeichnet, jede mit einem anderen Wert für die `lineCap`-Eigenschaft. Zwei Hilfslinien werden hinzugefügt, um die genauen Unterschiede zwischen den drei Linien zu sehen. Jede dieser Linien beginnt und endet genau auf diesen Hilfslinien.

Die Linie links verwendet die Standardeinstellung `"butt"`. Sie ist genau bündig mit den Hilfslinien gezeichnet. Die zweite Linie ist auf die Option `"round"` gesetzt. Diese fügt ein Halbrund an das Ende hinzu, das einen Radius hat, der halb so breit wie die Linie ist. Die Linie rechts verwendet die `"square"`-Option. Diese fügt ein Kästchen hinzu, das die gleiche Breite und die halbe Höhe der Liniendicke hat.

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Hilfslinien zeichnen
ctx.strokeStyle = "#09f";
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(140, 10);
ctx.moveTo(10, 140);
ctx.lineTo(140, 140);
ctx.stroke();

// Linien zeichnen
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

### WebKit/Blink-spezifische Anmerkungen

- In WebKit- und Blink-basierten Browsern ist eine nicht standardisierte und veraltete Methode `ctx.setLineCap()` zusätzlich zu dieser Eigenschaft implementiert.

## Siehe auch

- Die Schnittstelle, die diese Eigenschaft definiert: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineWidth")}}
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
- [Anwenden von Stilen und Farben](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
