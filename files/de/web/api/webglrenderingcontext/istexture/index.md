---
title: "WebGLRenderingContext: isTexture()-Methode"
short-title: isTexture()
slug: Web/API/WebGLRenderingContext/isTexture
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGLRenderingContext.isTexture()`** der [WebGL-API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn das übergebene [`WebGLTexture`](/de/docs/Web/API/WebGLTexture) gültig ist, andernfalls `false`.

## Syntax

```js-nolint
isTexture(texture)
```

### Parameter

- `texture`
  - : Ein [`WebGLTexture`](/de/docs/Web/API/WebGLTexture), das überprüft werden soll. Bei Übergabe von `null` wird `false` zurückgegeben.

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob die Textur gültig ist.

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.bindTexture()`](/de/docs/Web/API/WebGLRenderingContext/bindTexture)
- [`WebGLRenderingContext.createTexture()`](/de/docs/Web/API/WebGLRenderingContext/createTexture)
- [`WebGLRenderingContext.deleteTexture()`](/de/docs/Web/API/WebGLRenderingContext/deleteTexture)
- [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D)
