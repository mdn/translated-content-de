---
title: "ImageBitmapRenderingContext: canvas-Eigenschaft"
short-title: canvas
slug: Web/API/ImageBitmapRenderingContext/canvas
l10n:
  sourceCommit: 3610b480fe28dcab6de41edb95300ad9be9b5777
---

{{APIRef}}

Die **`ImageBitmapRenderingContext.canvas`**-Eigenschaft, Teil der
[Canvas-API](/de/docs/Web/API/Canvas_API), ist eine schreibgeschützte Referenz auf das
{{domxref("HTMLCanvasElement")}}- oder {{domxref("OffscreenCanvas")}}-Objekt, das mit dem gegebenen Kontext verbunden ist.

## Wert

Ein {{domxref("HTMLCanvasElement")}}- oder {{domxref("OffscreenCanvas")}}-Objekt.

## Beispiele

Gegeben dieses {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas"></canvas>
```

Sie können innerhalb des `ImageBitmapRenderingContext` eine Referenz auf das Canvas-Element über die `canvas`-Eigenschaft erhalten:

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

- {{domxref("ImageBitmapRenderingContext")}}-Schnittstelle
- [Canvas-API](/de/docs/Web/API/Canvas_API)
