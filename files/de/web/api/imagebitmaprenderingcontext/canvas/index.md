---
title: "ImageBitmapRenderingContext: canvas-Eigenschaft"
short-title: canvas
slug: Web/API/ImageBitmapRenderingContext/canvas
l10n:
  sourceCommit: e899c6240801be991f92571b36132a1b6b387462
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`ImageBitmapRenderingContext.canvas`**-Eigenschaft, Teil der [Canvas API](/de/docs/Web/API/Canvas_API), ist eine schreibgeschützte Referenz auf das [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder das [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekt, das mit dem gegebenen Kontext verknüpft ist.

## Wert

Ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekt.

## Beispiele

Gegeben ist dieses {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas"></canvas>
```

Sie können eine Referenz auf das Canvas-Element innerhalb des `ImageBitmapRenderingContext` mit der `canvas`-Eigenschaft erhalten:

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

- [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext)-Schnittstelle
- [Canvas API](/de/docs/Web/API/Canvas_API)
