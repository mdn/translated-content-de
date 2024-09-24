---
title: "WebGLRenderingContext: Methode isTexture()"
short-title: isTexture()
slug: Web/API/WebGLRenderingContext/isTexture
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.isTexture()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn die übergebene {{domxref("WebGLTexture")}} gültig ist, und `false` andernfalls.

## Syntax

```js-nolint
isTexture(texture)
```

### Parameter

- `texture`
  - : Eine {{domxref("WebGLTexture")}}, die überprüft werden soll.

### Rückgabewert

Ein {{domxref("WebGL_API/Types", "GLboolean")}}, der angibt, ob die Textur gültig ist oder nicht.

## Beispiele

### Eine Textur überprüfen

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const texture = gl.createTexture();

gl.isTexture(texture);
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.deleteTexture()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
