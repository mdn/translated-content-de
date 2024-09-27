---
title: "WebGLRenderingContext: isFramebuffer() Methode"
short-title: isFramebuffer()
slug: Web/API/WebGLRenderingContext/isFramebuffer
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.isFramebuffer()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn das übergebene [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer) gültig ist, andernfalls `false`.

## Syntax

```js-nolint
isFramebuffer(framebuffer)
```

### Parameter

- `framebuffer`
  - : Ein [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer), das überprüft werden soll.

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob der Framebuffer gültig ist oder nicht.

## Beispiele

### Überprüfung eines Framebuffers

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const framebuffer = gl.createFramebuffer();

gl.isFramebuffer(framebuffer);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.bindFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindFramebuffer)
- [`WebGLRenderingContext.createFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/createFramebuffer)
- [`WebGLRenderingContext.deleteFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteFramebuffer)
- Andere Buffer: [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
