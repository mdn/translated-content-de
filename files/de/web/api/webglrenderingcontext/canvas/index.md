---
title: "WebGLRenderingContext: canvas-Eigenschaft"
short-title: canvas
slug: Web/API/WebGLRenderingContext/canvas
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.canvas`**-Eigenschaft ist ein schreibgeschützter
Verweis auf das [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas),
das mit dem Kontext assoziiert ist. Sie kann [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein, wenn sie nicht
mit einem {{HTMLElement("canvas")}}-Element oder einem [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
assoziiert ist.

## Syntax

```js-nolint
gl.canvas
```

### Rückgabewert

Entweder ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekt oder
[`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

## Beispiele

### Canvas-Element

Gegeben ist dieses {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas"></canvas>
```

Sie können über die `canvas`-Eigenschaft des `WebGLRenderingContext` darauf zugreifen:

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
gl.canvas; // HTMLCanvasElement
```

### Offscreen-Canvas

Ein Beispiel mit dem experimentellen [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekt.

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
