---
title: "CanvasRenderingContext2D: textAlign-Eigenschaft"
short-title: textAlign
slug: Web/API/CanvasRenderingContext2D/textAlign
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die **`CanvasRenderingContext2D.textAlign`**-Eigenschaft der Canvas 2D API gibt die aktuelle Textausrichtung an, die beim Zeichnen von Text verwendet wird.

Die Ausrichtung bezieht sich auf den `x`-Wert der {{domxref("CanvasRenderingContext2D.fillText", "fillText()")}}-Methode. Zum Beispiel, wenn `textAlign` auf `"center"` gesetzt ist, dann befindet sich der linke Rand des Textes bei `x - (textWidth / 2)`.

## Wert

Mögliche Werte:

- `"left"`
  - : Der Text ist linksbündig.
- `"right"`
  - : Der Text ist rechtsbündig.
- `"center"`
  - : Der Text ist zentriert.
- `"start"`
  - : Der Text ist am normalen Anfang der Zeile ausgerichtet (links für Links-nach-Rechts-Sprachen, rechts für Rechts-nach-Links-Sprachen).
- `"end"`
  - : Der Text ist am normalen Ende der Zeile ausgerichtet (rechts für Links-nach-Rechts-Sprachen, links für Rechts-nach-Links-Sprachen).

Der Standardwert ist `"start"`.

## Beispiele

### Allgemeine Textausrichtung

Dieses Beispiel demonstriert die drei "physischen" Werte der `textAlign`-Eigenschaft: `"left"`, `"center"` und `"right"`.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
canvas.width = 350;
const ctx = canvas.getContext("2d");
const x = canvas.width / 2;

ctx.beginPath();
ctx.moveTo(x, 0);
ctx.lineTo(x, canvas.height);
ctx.stroke();

ctx.font = "30px serif";

ctx.textAlign = "left";
ctx.fillText("left-aligned", x, 40);

ctx.textAlign = "center";
ctx.fillText("center-aligned", x, 85);

ctx.textAlign = "right";
ctx.fillText("right-aligned", x, 130);
```

#### Ergebnis

{{ EmbedLiveSample('General_text_alignment', 700, 180) }}

### Richtungsabhängige Textausrichtung

Dieses Beispiel demonstriert die zwei richtungsabhängigen Werte der `textAlign`-Eigenschaft: `"start"` und `"end"`. Beachten Sie, dass die {{domxref("CanvasRenderingContext2D.direction", "direction")}}-Eigenschaft manuell als `"ltr"` festgelegt ist, obwohl dies auch der Standard für englischsprachigen Text ist.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "30px serif";
ctx.direction = "ltr";

ctx.textAlign = "start";
ctx.fillText("Start-aligned", 0, 50);

ctx.textAlign = "end";
ctx.fillText("End-aligned", canvas.width, 120);
```

#### Ergebnis

{{ EmbedLiveSample('Direction-dependent_text_alignment', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Eigenschaft definiert: {{domxref("CanvasRenderingContext2D")}}
