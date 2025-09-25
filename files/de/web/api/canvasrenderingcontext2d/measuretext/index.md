---
title: "CanvasRenderingContext2D: measureText()-Methode"
short-title: measureText()
slug: Web/API/CanvasRenderingContext2D/measureText
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die Methode `CanvasRenderingContext2D.measureText()` gibt ein [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Objekt zurück, das Informationen über den gemessenen Text enthält (wie zum Beispiel seine Breite).

## Syntax

```js-nolint
measureText(text)
```

### Parameter

- `text`
  - : Der zu messende Textstring.

### Rückgabewert

Ein [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Objekt.

## Beispiele

Angenommen, es gibt dieses {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas"></canvas>
```

… Sie können ein [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Objekt mit dem folgenden Code erhalten:

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let text = ctx.measureText("Hello world");
console.log(text.width); // 56;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`TextMetrics`](/de/docs/Web/API/TextMetrics)
