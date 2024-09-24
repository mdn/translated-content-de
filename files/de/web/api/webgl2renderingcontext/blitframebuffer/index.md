---
title: "WebGL2RenderingContext: Methode blitFramebuffer()"
short-title: blitFramebuffer()
slug: Web/API/WebGL2RenderingContext/blitFramebuffer
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{APIRef("WebGL")}}

Die Methode **`WebGL2RenderingContext.blitFramebuffer()`** der [WebGL 2 API](/de/docs/Web/API/WebGL_API) überträgt einen Block von Pixeln vom Lesepuffer zum Zeichnungspuffer. Lese- und Zeichnungspuffer werden mit {{domxref("WebGLRenderingContext.bindFramebuffer()")}} gebunden.

## Syntax

```js-nolint
blitFramebuffer(srcX0, srcY0, srcX1, srcY1,
                dstX0, dstY0, dstX1, dstY1,
                mask, filter)
```

### Parameter

- `srcX0`, `srcY0`, `srcX1`, `srcY1`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, das die Grenzen des Ursprungsrechtecks angibt.
- `dstX0`, `dstY0`, `dstX1`, `dstY1`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, das die Grenzen des Zielrechtecks angibt.
- `mask`

  - : Ein {{domxref("WebGL_API/Types", "GLbitfield")}}, das eine bitweise ODER-Maske angibt, die festlegt, welche Puffer kopiert werden sollen. Mögliche Werte:

    - `gl.COLOR_BUFFER_BIT`
    - `gl.DEPTH_BUFFER_BIT`
    - `gl.STENCIL_BUFFER_BIT`

- `filter`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das die Interpolation angibt, die angewendet wird, wenn das Bild gestreckt wird. Mögliche Werte:

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

- {{domxref("WebGLRenderingContext.bindFramebuffer()")}}
- {{domxref("WebGLRenderingContext.getRenderbufferParameter()")}}
