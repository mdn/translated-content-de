---
title: "WebGLRenderingContext: isProgram()-Methode"
short-title: isProgram()
slug: Web/API/WebGLRenderingContext/isProgram
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.isProgram()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn das übergebene [`WebGLProgram`](/de/docs/Web/API/WebGLProgram) gültig ist, andernfalls `false`.

## Syntax

```js-nolint
isProgram(program)
```

### Parameter

- `program`
  - : Ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram), das überprüft werden soll.

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), das anzeigt, ob das Programm gültig ist oder nicht.

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
