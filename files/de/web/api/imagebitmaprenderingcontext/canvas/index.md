---
title: "ImageBitmapRenderingContext: canvas-Eigenschaft"
short-title: canvas
slug: Web/API/ImageBitmapRenderingContext/canvas
l10n:
  sourceCommit: 3610b480fe28dcab6de41edb95300ad9be9b5777
---

{{APIRef}}

Die **`ImageBitmapRenderingContext.canvas`**-Eigenschaft, Teil der
[Canvas API](/de/docs/Web/API/Canvas_API), ist eine schreibgeschützte Referenz auf das
[`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Objekt, das mit dem gegebenen Kontext assoziiert ist.

## Wert

Ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Objekt.

## Beispiele

Gegeben dieses {{HTMLElement("canvas")}} Element:

```html
<canvas id="canvas"></canvas>
```

Sie können eine Referenz auf das Canvas-Element innerhalb des `ImageBitmapRenderingContext` durch Verwendung der `canvas`-Eigenschaft erhalten:

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("bitmaprenderer");
console.log(ctx.canvas === canvas); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) Schnittstelle
- [Canvas API](/de/docs/Web/API/Canvas_API)
