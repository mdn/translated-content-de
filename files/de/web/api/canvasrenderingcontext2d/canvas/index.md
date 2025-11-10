---
title: "CanvasRenderingContext2D: canvas-Eigenschaft"
short-title: canvas
slug: Web/API/CanvasRenderingContext2D/canvas
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.canvas`** Eigenschaft, Teil der
[Canvas API](/de/docs/Web/API/Canvas_API), ist ein schreibgeschützter Verweis auf das
[`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)-Objekt, das mit einem bestimmten Kontext verknüpft ist. Sie kann [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein, wenn kein zugehöriges {{HTMLElement("canvas")}}-Element existiert.

## Wert

Ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)-Objekt.

## Beispiele

Angenommen, Sie haben dieses {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas"></canvas>
```

… Sie können eine Referenz auf das Canvas-Element innerhalb des
`CanvasRenderingContext2D` über die `canvas`-Eigenschaft erhalten:

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.canvas; // HTMLCanvasElement
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Schnittstelle
- [Canvas API](/de/docs/Web/API/Canvas_API)
