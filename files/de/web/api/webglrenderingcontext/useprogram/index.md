---
title: "WebGLRenderingContext: useProgram() Methode"
short-title: useProgram()
slug: Web/API/WebGLRenderingContext/useProgram
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.useProgram()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) setzt das angegebene
[`WebGLProgram`](/de/docs/Web/API/WebGLProgram) als Teil des aktuellen Rendering-Zustands.

## Syntax

```js-nolint
useProgram(program)
```

### Parameter

- `program`
  - : Ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram), das verwendet werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const program = gl.createProgram();

// Attach pre-existing shaders
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);
gl.useProgram(program);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.createProgram()`](/de/docs/Web/API/WebGLRenderingContext/createProgram)
- [`WebGLRenderingContext.deleteProgram()`](/de/docs/Web/API/WebGLRenderingContext/deleteProgram)
- [`WebGLRenderingContext.isProgram()`](/de/docs/Web/API/WebGLRenderingContext/isProgram)
- [`WebGLRenderingContext.linkProgram()`](/de/docs/Web/API/WebGLRenderingContext/linkProgram)
- [`WebGLRenderingContext.validateProgram()`](/de/docs/Web/API/WebGLRenderingContext/validateProgram)
- [`WebGLRenderingContext.getProgramParameter()`](/de/docs/Web/API/WebGLRenderingContext/getProgramParameter)
- [`WebGLRenderingContext.getProgramInfoLog()`](/de/docs/Web/API/WebGLRenderingContext/getProgramInfoLog)
