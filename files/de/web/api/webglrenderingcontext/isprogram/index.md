---
title: "WebGLRenderingContext: isProgram()-Methode"
short-title: isProgram()
slug: Web/API/WebGLRenderingContext/isProgram
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.isProgram()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn das übergebene [`WebGLProgram`](/de/docs/Web/API/WebGLProgram) gültig ist, andernfalls `false`.

## Syntax

```js-nolint
isProgram(program)
```

### Parameter

- `program`
  - : Ein zu überprüfendes [`WebGLProgram`](/de/docs/Web/API/WebGLProgram).

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob das Programm gültig ist oder nicht.

## Beispiele

### Überprüfung eines Programms

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const program = gl.createProgram();

// …

gl.isProgram(program);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.createProgram()`](/de/docs/Web/API/WebGLRenderingContext/createProgram)
- [`WebGLRenderingContext.deleteProgram()`](/de/docs/Web/API/WebGLRenderingContext/deleteProgram)
- [`WebGLRenderingContext.linkProgram()`](/de/docs/Web/API/WebGLRenderingContext/linkProgram)
- [`WebGLRenderingContext.useProgram()`](/de/docs/Web/API/WebGLRenderingContext/useProgram)
- [`WebGLRenderingContext.validateProgram()`](/de/docs/Web/API/WebGLRenderingContext/validateProgram)
- [`WebGLRenderingContext.getProgramParameter()`](/de/docs/Web/API/WebGLRenderingContext/getProgramParameter)
- [`WebGLRenderingContext.getProgramInfoLog()`](/de/docs/Web/API/WebGLRenderingContext/getProgramInfoLog)
