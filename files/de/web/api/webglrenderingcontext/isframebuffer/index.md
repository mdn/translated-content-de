---
title: "WebGLRenderingContext: isFramebuffer()-Methode"
short-title: isFramebuffer()
slug: Web/API/WebGLRenderingContext/isFramebuffer
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.isFramebuffer()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn der übergebene {{domxref("WebGLFramebuffer")}} gültig ist, und `false` andernfalls.

## Syntax

```js-nolint
isFramebuffer(framebuffer)
```

### Parameter

- `framebuffer`
  - : Ein {{domxref("WebGLFramebuffer")}}, der überprüft werden soll.

### Rückgabewert

Ein {{domxref("WebGL_API/Types", "GLboolean")}}, der angibt, ob der Framebuffer gültig ist oder nicht.

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

- {{domxref("WebGLRenderingContext.bindFramebuffer()")}}
- {{domxref("WebGLRenderingContext.createFramebuffer()")}}
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
- Andere Puffer: {{domxref("WebGLBuffer")}}, {{domxref("WebGLRenderbuffer")}}
