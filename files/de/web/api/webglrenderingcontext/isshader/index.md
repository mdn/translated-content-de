---
title: "WebGLRenderingContext: isShader()-Methode"
short-title: isShader()
slug: Web/API/WebGLRenderingContext/isShader
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.isShader()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn das übergebene [`WebGLShader`](/de/docs/Web/API/WebGLShader) gültig ist, andernfalls `false`.

## Syntax

```js-nolint
isShader(shader)
```

### Parameter

- `shader`
  - : Ein [`WebGLShader`](/de/docs/Web/API/WebGLShader), der überprüft werden soll.

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der anzeigt, ob der Shader gültig ist oder nicht.

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.createShader()`](/de/docs/Web/API/WebGLRenderingContext/createShader)
- [`WebGLRenderingContext.deleteShader()`](/de/docs/Web/API/WebGLRenderingContext/deleteShader)
