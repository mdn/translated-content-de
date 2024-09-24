---
title: "CanvasRenderingContext2D: measureText()-Methode"
short-title: measureText()
slug: Web/API/CanvasRenderingContext2D/measureText
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die Methode
`CanvasRenderingContext2D.measureText()`
gibt ein {{domxref("TextMetrics")}}-Objekt zurück, das Informationen über den gemessenen Text enthält (zum Beispiel seine Breite).

## Syntax

```js-nolint
measureText(text)
```

### Parameter

- `text`
  - : Der zu messende Textstring.

### Rückgabewert

Ein {{domxref("TextMetrics")}}-Objekt.

## Beispiele

Angenommen, dieses {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas"></canvas>
```

… können Sie ein {{domxref("TextMetrics")}}-Objekt mit folgendem Code erhalten:

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

- Das Interface, das diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("TextMetrics")}}
