---
title: "WebGLRenderingContext: canvas-Eigenschaft"
short-title: canvas
slug: Web/API/WebGLRenderingContext/canvas
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.canvas`**-Eigenschaft ist ein schreibgeschützter
Verweis auf das [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder das [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
Objekt, das mit dem Kontext verbunden ist. Sie kann [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein, wenn sie nicht
mit einem {{HTMLElement("canvas")}}-Element oder einem [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
Objekt verbunden ist.

## Wert

Entweder ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Objekt oder
[`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

## Beispiele

### Canvas-Element

Gegeben sei dieses {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas"></canvas>
```

Sie können über die `canvas`-Eigenschaft eine Referenz darauf aus dem `WebGLRenderingContext` zurückerhalten:

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
gl.canvas; // HTMLCanvasElement
```

### Offscreen-Canvas

Beispiel mit dem experimentellen [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekt.

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

- [`CanvasRenderingContext2D.canvas`](/de/docs/Web/API/CanvasRenderingContext2D/canvas)
- Das [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Interface
