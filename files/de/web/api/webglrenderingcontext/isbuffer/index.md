---
title: "WebGLRenderingContext: isBuffer()-Methode"
short-title: isBuffer()
slug: Web/API/WebGLRenderingContext/isBuffer
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGLRenderingContext.isBuffer()`** der [WebGL-API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn der übergebene [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) gültig ist, andernfalls `false`.

## Syntax

```js-nolint
isBuffer(buffer)
```

### Parameter

- `buffer`
  - : Ein zu überprüfender [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer). Wird `null` übergeben, gibt die Methode `false` zurück.

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob der Buffer gültig ist.

## Beispiele

### Einen Buffer erstellen

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
- Weitere Buffer: [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer), [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
