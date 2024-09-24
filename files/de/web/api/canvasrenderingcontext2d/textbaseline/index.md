---
title: "CanvasRenderingContext2D: textBaseline Eigenschaft"
short-title: textBaseline
slug: Web/API/CanvasRenderingContext2D/textBaseline
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die **`CanvasRenderingContext2D.textBaseline`** Eigenschaft der Canvas 2D API legt die aktuelle Textbaseline fest, die beim Zeichnen von Text verwendet wird.

## Wert

Mögliche Werte:

- `"top"`
  - : Die Textbaseline ist der obere Rand des Em-Quadrats.
- `"hanging"`
  - : Die Textbaseline ist die Hängelinie. (Verwendet für tibetische und andere indische Schriften.)
- `"middle"`
  - : Die Textbaseline befindet sich in der Mitte des Em-Quadrats.
- `"alphabetic"`
  - : Die Textbaseline ist die normale alphabetische Baseline. Standardwert.
- `"ideographic"`
  - : Die Textbaseline ist die ideographische Baseline; dies ist der untere Rand des Körpers der Zeichen, wenn der Hauptkörper der Zeichen unter die alphabetische Baseline ragt. (Verwendet für chinesische, japanische und koreanische Schriften.)
- `"bottom"`
  - : Die Textbaseline ist der untere Rand des Begrenzungsrahmens. Dies unterscheidet sich von der ideographischen Baseline, da die ideographische Baseline keine Absenker berücksichtigt.

Der Standardwert ist `"alphabetic"`.

## Beispiele

### Vergleich der Eigenschaftswerte

Dieses Beispiel zeigt die verschiedenen `textBaseline`-Eigenschaftswerte.

#### HTML

```html
<canvas id="canvas" width="550" height="500"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const baselines = [
  "top",
  "hanging",
  "middle",
  "alphabetic",
  "ideographic",
  "bottom",
];
ctx.font = "36px serif";
ctx.strokeStyle = "red";

baselines.forEach((baseline, index) => {
  ctx.textBaseline = baseline;
  const y = 75 + index * 75;
  ctx.beginPath();
  ctx.moveTo(0, y + 0.5);
  ctx.lineTo(550, y + 0.5);
  ctx.stroke();
  ctx.fillText(`Abcdefghijklmnop (${baseline})`, 0, y);
});
```

#### Ergebnis

{{ EmbedLiveSample('Comparison_of_property_values', 700, 550) }}

### Vergleich der Eigenschaftswerte auf derselben Linie

Wie im vorherigen Beispiel zeigt auch dieses Beispiel die verschiedenen `textBaseline`-Eigenschaftswerte, jedoch in diesem Fall horizontal auf einer einzigen Linie ausgerichtet — um es einfacher zu machen, ihre Unterschiede zu erkennen.

#### HTML

```html
<canvas id="canvas" width="724" height="160"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const baselines = [
  "top",
  "hanging",
  "middle",
  "alphabetic",
  "ideographic",
  "bottom",
];
ctx.font = "20px serif";
ctx.strokeStyle = "red";

ctx.beginPath();
ctx.moveTo(0, 100);
ctx.lineTo(840, 100);
ctx.moveTo(0, 55);
ctx.stroke();

baselines.forEach((baseline, index) => {
  ctx.save();
  ctx.textBaseline = baseline;
  let x = index * 120 + 10;
  ctx.fillText("Abcdefghijk", x, 100);
  ctx.restore();
  ctx.fillText(baseline, x + 5, 50);
});
```

#### Ergebnis

{{ EmbedLiveSample('Comparison of property values on the same line', 900, 200) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Eigenschaft definiert: {{domxref("CanvasRenderingContext2D")}}
