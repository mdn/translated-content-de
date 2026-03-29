---
title: "CanvasRenderingContext2D: canvas-Eigenschaft"
short-title: canvas
slug: Web/API/CanvasRenderingContext2D/canvas
l10n:
  sourceCommit: 8ccdf412fafde9ee333233cc4549ab4980291ee7
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.canvas`**-Eigenschaft, Teil der
[Canvas API](/de/docs/Web/API/Canvas_API), ist ein schreibgeschützter Verweis auf das
[`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)-Objekt, das mit einem bestimmten Kontext assoziiert ist.

## Wert

Ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)-Objekt.

## Beispiele

Angenommen, dieses {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas"></canvas>
```

... Sie können innerhalb des `CanvasRenderingContext2D` durch Nutzung der `canvas`-Eigenschaft auf das Canvas-Element zugreifen:

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
- [Canvas API](/de/docs/Web/API/Canvas_API)
