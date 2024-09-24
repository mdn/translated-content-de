---
title: "WebGLRenderingContext: Methode isRenderbuffer()"
short-title: isRenderbuffer()
slug: Web/API/WebGLRenderingContext/isRenderbuffer
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.isRenderbuffer()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn der übergebene {{domxref("WebGLRenderbuffer")}} gültig ist, und `false` andernfalls.

## Syntax

```js-nolint
isRenderbuffer(renderbuffer)
```

### Parameter

- `renderbuffer`
  - : Ein {{domxref("WebGLRenderbuffer")}}, der überprüft werden soll.

### Rückgabewert

Ein {{domxref("WebGL_API/Types", "GLboolean")}}, der angibt, ob der Renderbuffer gültig ist oder nicht.

## Beispiele

### Überprüfen eines Renderbuffers

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const renderbuffer = gl.createRenderbuffer();

gl.isRenderbuffer(renderbuffer);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.createRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.deleteRenderbuffer()")}}
- Andere Buffer: {{domxref("WebGLBuffer")}}, {{domxref("WebGLFramebuffer")}}
