---
title: "CanvasRenderingContext2D: measureText()-Methode"
short-title: measureText()
slug: Web/API/CanvasRenderingContext2D/measureText
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die Methode `CanvasRenderingContext2D.measureText()` gibt ein [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Objekt zurück, das Informationen über den gemessenen Text enthält (wie beispielsweise dessen Breite).

## Syntax

```js-nolint
measureText(text)
```

### Parameter

- `text`
  - : Die zu messende Textzeichenfolge.

### Rückgabewert

Ein [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Objekt.

## Beispiele

Angenommen, dieses {{HTMLElement("canvas")}}-Element ist gegeben:

```html
<canvas id="canvas"></canvas>
```

… können Sie ein [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Objekt mit dem folgenden Code erhalten:

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
