---
title: "CanvasRenderingContext2D: canvas-Eigenschaft"
short-title: canvas
slug: Web/API/CanvasRenderingContext2D/canvas
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die **`CanvasRenderingContext2D.canvas`**-Eigenschaft, Teil der
[Canvas-API](/de/docs/Web/API/Canvas_API), ist ein schreibgeschützter Verweis auf das
{{domxref("HTMLCanvasElement")}}-Objekt, das mit einem bestimmten Kontext verknüpft ist. Es
könnte [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein, wenn kein zugehöriges {{HTMLElement("canvas")}}-Element existiert.

## Wert

Ein {{domxref("HTMLCanvasElement")}}-Objekt.

## Beispiele

Angenommen, Sie haben dieses {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas"></canvas>
```

… Sie können einen Verweis auf das Canvas-Element innerhalb des
`CanvasRenderingContext2D` mittels der `canvas`-Eigenschaft erhalten:

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.canvas; // HTMLCanvasElement
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("CanvasRenderingContext2D")}}-Schnittstelle
- [Canvas API](/de/docs/Web/API/Canvas_API)
