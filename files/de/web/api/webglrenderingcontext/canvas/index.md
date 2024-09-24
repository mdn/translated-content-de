---
title: "WebGLRenderingContext: canvas-Eigenschaft"
short-title: canvas
slug: Web/API/WebGLRenderingContext/canvas
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.canvas`**-Eigenschaft ist eine schreibgeschützte Referenz auf das {{domxref("HTMLCanvasElement")}} oder {{domxref("OffscreenCanvas")}}-Objekt, das mit dem Kontext verbunden ist. Sie könnte [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein, wenn sie nicht mit einem {{HTMLElement("canvas")}}-Element oder einem {{domxref("OffscreenCanvas")}}-Objekt verknüpft ist.

## Syntax

```js-nolint
gl.canvas
```

### Rückgabewert

Entweder ein {{domxref("HTMLCanvasElement")}} oder {{domxref("OffscreenCanvas")}}-Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

## Beispiele

### Canvas-Element

Gegeben dieses {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas"></canvas>
```

Sie können eine Referenz darauf von dem `WebGLRenderingContext` über die `canvas`-Eigenschaft erhalten:

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
gl.canvas; // HTMLCanvasElement
```

### Offscreen-Canvas

Beispiel mit dem experimentellen {{domxref("OffscreenCanvas")}}-Objekt.

```js
const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("webgl");
gl.canvas; // OffscreenCanvas
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("CanvasRenderingContext2D.canvas")}}
- Die {{domxref("OffscreenCanvas")}}-Schnittstelle
