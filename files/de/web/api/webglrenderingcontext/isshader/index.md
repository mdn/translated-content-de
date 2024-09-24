---
title: "WebGLRenderingContext: isShader()-Methode"
short-title: isShader()
slug: Web/API/WebGLRenderingContext/isShader
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.isShader()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn der übergebene {{domxref("WebGLShader")}} gültig ist, andernfalls `false`.

## Syntax

```js-nolint
isShader(shader)
```

### Parameter

- `shader`
  - : Ein {{domxref("WebGLShader")}}, der überprüft werden soll.

### Rückgabewert

Ein {{domxref("WebGL_API/Types", "GLboolean")}}, der angibt, ob der Shader gültig ist oder nicht.

## Beispiele

### Überprüfung eines Shaders

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const shader = gl.createShader(gl.VERTEX_SHADER);

// …

gl.isShader(shader);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.deleteShader()")}}
