---
title: "WebGLRenderingContext: isRenderbuffer()-Methode"
short-title: isRenderbuffer()
slug: Web/API/WebGLRenderingContext/isRenderbuffer
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.isRenderbuffer()`**-Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn der
übergebene [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer) gültig ist, und `false` andernfalls.

## Syntax

```js-nolint
isRenderbuffer(renderbuffer)
```

### Parameter

- `renderbuffer`
  - : Ein zu überprüfender [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer).

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob der Renderbuffer gültig ist oder nicht.

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
- Andere Buffer: [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)
