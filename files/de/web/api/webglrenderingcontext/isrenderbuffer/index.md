---
title: "WebGLRenderingContext: isRenderbuffer() Methode"
short-title: isRenderbuffer()
slug: Web/API/WebGLRenderingContext/isRenderbuffer
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.isRenderbuffer()`** Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn das übergebene [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer) gültig ist, und `false`, wenn nicht.

## Syntax

```js-nolint
isRenderbuffer(renderbuffer)
```

### Parameter

- `renderbuffer`
  - : Ein [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer), der überprüft werden soll.

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), das angibt, ob das Renderbuffer gültig ist oder nicht.

## Beispiele

### Überprüfung eines Renderbuffers

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const renderbuffer = gl.createRenderbuffer();

gl.isRenderbuffer(renderbuffer);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.bindRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindRenderbuffer)
- [`WebGLRenderingContext.createRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/createRenderbuffer)
- [`WebGLRenderingContext.deleteRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteRenderbuffer)
- Andere Puffer: [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)
