---
title: "WebGLRenderingContext: canvas-Eigenschaft"
short-title: canvas
slug: Web/API/WebGLRenderingContext/canvas
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.canvas`**-Eigenschaft ist eine schreibgeschützte
Referenz auf das [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekt, das mit dem Kontext verknüpft ist. Sie kann [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein, wenn sie nicht mit einem {{HTMLElement("canvas")}}-Element oder einem [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekt verknüpft ist.

## Syntax

```js-nolint
gl.canvas
```

### Rückgabewert

Entweder ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekt oder
[`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

## Beispiele

### Canvas-Element

Gegeben sei dieses {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas"></canvas>
```

Sie können eine Referenz darauf vom `WebGLRenderingContext` mittels
der `canvas`-Eigenschaft erhalten:

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
gl.canvas; // HTMLCanvasElement
```

### Offscreen-Canvas

Beispiel unter Verwendung des experimentellen [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekts.

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
- Die [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Schnittstelle
