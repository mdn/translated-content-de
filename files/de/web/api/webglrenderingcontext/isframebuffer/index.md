---
title: "WebGLRenderingContext: Methode isFramebuffer()"
short-title: isFramebuffer()
slug: Web/API/WebGLRenderingContext/isFramebuffer
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGLRenderingContext.isFramebuffer()`** der [WebGL API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn das übergebene [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer) gültig ist, andernfalls `false`.

## Syntax

```js-nolint
isFramebuffer(framebuffer)
```

### Parameter

- `framebuffer`
  - : Ein zu überprüfendes [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer). Bei Übergabe von `null` wird `false` zurückgegeben.

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob der Framebuffer gültig ist.

## Beispiele

### Einen Framebuffer überprüfen

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
