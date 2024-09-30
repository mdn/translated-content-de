---
title: "WebGLRenderingContext: isBuffer() Methode"
short-title: isBuffer()
slug: Web/API/WebGLRenderingContext/isBuffer
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.isBuffer()`** Methode des [WebGL API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn der übergebene [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) gültig ist, und `false` andernfalls.

## Syntax

```js-nolint
isBuffer(buffer)
```

### Parameter

- `buffer`
  - : Ein [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), der überprüft werden soll.

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der anzeigt, ob der Buffer gültig ist oder nicht.

## Beispiele

### Erstellen eines Buffers

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createBuffer();

gl.isBuffer(buffer);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer)
- [`WebGLRenderingContext.createBuffer()`](/de/docs/Web/API/WebGLRenderingContext/createBuffer)
- [`WebGLRenderingContext.deleteBuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteBuffer)
- Andere Buffers: [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer), [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
