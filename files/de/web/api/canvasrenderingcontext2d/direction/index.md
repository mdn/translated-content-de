---
title: "CanvasRenderingContext2D: direction-Eigenschaft"
short-title: direction
slug: Web/API/CanvasRenderingContext2D/direction
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die **`CanvasRenderingContext2D.direction`**-Eigenschaft der Canvas 2D API legt die aktuelle Textrichtung fest, die zum Zeichnen von Text verwendet wird.

## Wert

Mögliche Werte:

- `"ltr"`
  - : Die Textrichtung ist von links nach rechts.
- `"rtl"`
  - : Die Textrichtung ist von rechts nach links.
- `"inherit"`
  - : Die Textrichtung wird vom {{HTMLElement("canvas")}}-Element oder dem {{domxref("Document")}} geerbt, je nach Situation. Standardwert.

Der Standardwert ist `"inherit"`.

## Beispiele

### Ändern der Textrichtung

Dieses Beispiel zeichnet zwei Textstücke. Das erste ist von links nach rechts und das zweite von rechts nach links. Beachten Sie, dass "Hi!" in `ltr` zu "!Hi" in `rtl` wird.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "48px serif";
ctx.fillText("Hi!", 150, 50);
ctx.direction = "rtl";
ctx.fillText("Hi!", 150, 130);
```

#### Ergebnis

{{ EmbedLiveSample('Changing_text_direction', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Eigenschaft definiert: {{domxref("CanvasRenderingContext2D")}}
