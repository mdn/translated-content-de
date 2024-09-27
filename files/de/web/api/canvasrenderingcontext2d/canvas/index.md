---
title: "CanvasRenderingContext2D: canvas-Eigenschaft"
short-title: canvas
slug: Web/API/CanvasRenderingContext2D/canvas
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die **`CanvasRenderingContext2D.canvas`**-Eigenschaft, Teil der
[Canvas-API](/de/docs/Web/API/Canvas_API), ist eine schreibgeschützte Referenz auf das
[`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)-Objekt, das mit einem bestimmten Kontext verknüpft ist. Sie kann [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein, wenn kein zugehöriges {{HTMLElement("canvas")}}-Element vorhanden ist.

## Wert

Ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)-Objekt.

## Beispiele

Angenommen, Sie haben dieses {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas"></canvas>
```

… Sie können eine Referenz auf das Canvas-Element innerhalb des
`CanvasRenderingContext2D` mit der `canvas`-Eigenschaft abrufen:

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

- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Schnittstelle
- [Canvas-API](/de/docs/Web/API/Canvas_API)
