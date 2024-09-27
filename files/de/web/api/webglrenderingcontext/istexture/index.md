---
title: "WebGLRenderingContext: isTexture()-Methode"
short-title: isTexture()
slug: Web/API/WebGLRenderingContext/isTexture
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.isTexture()`**-Methode des [WebGL-API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn das übergebene [`WebGLTexture`](/de/docs/Web/API/WebGLTexture) gültig ist, und `false` andernfalls.

## Syntax

```js-nolint
isTexture(texture)
```

### Parameter

- `texture`
  - : Ein [`WebGLTexture`](/de/docs/Web/API/WebGLTexture), das überprüft werden soll.

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob die Textur gültig ist oder nicht.

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
