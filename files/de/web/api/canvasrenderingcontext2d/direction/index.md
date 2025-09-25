---
title: "CanvasRenderingContext2D: direction-Eigenschaft"
short-title: direction
slug: Web/API/CanvasRenderingContext2D/direction
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die Eigenschaft **`CanvasRenderingContext2D.direction`** der Canvas 2D-API gibt die aktuelle Textrichtung an, die zum Zeichnen von Text verwendet wird.

## Wert

Mögliche Werte:

- `"ltr"`
  - : Die Textrichtung ist von links nach rechts.
- `"rtl"`
  - : Die Textrichtung ist von rechts nach links.
- `"inherit"`
  - : Die Textrichtung wird vom {{HTMLElement("canvas")}}-Element oder dem [`Document`](/de/docs/Web/API/Document) entsprechend geerbt. Standardwert.

Der Standardwert ist `"inherit"`.

## Beispiele

### Ändern der Textrichtung

In diesem Beispiel werden zwei Textstücke gezeichnet. Das erste ist von links nach rechts, und das zweite ist von rechts nach links. Beachten Sie, dass "Hi!" in `ltr` zu "!Hi" in `rtl` wird.

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

- Das Interface, das diese Eigenschaft definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
