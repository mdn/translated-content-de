---
title: "WebGLRenderingContext: isTexture() Methode"
short-title: isTexture()
slug: Web/API/WebGLRenderingContext/isTexture
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.isTexture()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn die übergebene [`WebGLTexture`](/de/docs/Web/API/WebGLTexture) gültig ist, und `false` andernfalls.

## Syntax

```js-nolint
isTexture(texture)
```

### Parameter

- `texture`
  - : Eine [`WebGLTexture`](/de/docs/Web/API/WebGLTexture), die überprüft werden soll.

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob die Textur gültig ist.

## Beispiele

### Überprüfung einer Textur

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const texture = gl.createTexture();

gl.isTexture(texture);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.bindTexture()`](/de/docs/Web/API/WebGLRenderingContext/bindTexture)
- [`WebGLRenderingContext.createTexture()`](/de/docs/Web/API/WebGLRenderingContext/createTexture)
- [`WebGLRenderingContext.deleteTexture()`](/de/docs/Web/API/WebGLRenderingContext/deleteTexture)
- [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D)
