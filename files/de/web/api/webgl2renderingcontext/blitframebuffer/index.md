---
title: "WebGL2RenderingContext: blitFramebuffer() Methode"
short-title: blitFramebuffer()
slug: Web/API/WebGL2RenderingContext/blitFramebuffer
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.blitFramebuffer()`** Methode der
[WebGL 2 API](/de/docs/Web/API/WebGL_API) überträgt einen Block von Pixeln
vom Leseframebuffer zum Zeichnenframebuffer. Lese- und Zeichnenframebuffer werden mithilfe von [`WebGLRenderingContext.bindFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindFramebuffer) gebunden.

## Syntax

```js-nolint
blitFramebuffer(srcX0, srcY0, srcX1, srcY1,
                dstX0, dstY0, dstX1, dstY1,
                mask, filter)
```

### Parameter

- `srcX0`, `srcY0`, `srcX1`, `srcY1`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Grenzen des Quellrechtecks angibt.
- `dstX0`, `dstY0`, `dstX1`, `dstY1`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Grenzen des Zielrechtecks angibt.
- `mask`

  - : Ein [`GLbitfield`](/de/docs/Web/API/WebGL_API/Types), der eine Bitmaske angibt, welche Puffer zu kopieren sind. Mögliche Werte:
    - `gl.COLOR_BUFFER_BIT`
    - `gl.DEPTH_BUFFER_BIT`
    - `gl.STENCIL_BUFFER_BIT`

- `filter`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der die Interpolation angibt, die angewendet wird, wenn das Bild gestreckt wird. Mögliche Werte:
    - `gl.NEAREST`
    - `gl.LINEAR`

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.blitFramebuffer(
  0,
  0,
  canvas.width,
  canvas.height,
  0,
  0,
  canvas.width,
  canvas.height,
  gl.COLOR_BUFFER_BIT,
  gl.NEAREST,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.bindFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindFramebuffer)
- [`WebGLRenderingContext.getRenderbufferParameter()`](/de/docs/Web/API/WebGLRenderingContext/getRenderbufferParameter)
