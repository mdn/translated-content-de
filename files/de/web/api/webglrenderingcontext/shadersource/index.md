---
title: "WebGLRenderingContext: shaderSource() Methode"
short-title: shaderSource()
slug: Web/API/WebGLRenderingContext/shaderSource
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.shaderSource()`** Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) legt den Quellcode eines
[`WebGLShader`](/de/docs/Web/API/WebGLShader) fest.

## Syntax

```js-nolint
shaderSource(shader, source)
```

### Parameter

- `shader`
  - : Ein [`WebGLShader`](/de/docs/Web/API/WebGLShader)-Objekt, in dem der Quellcode festgelegt wird.
- `source`
  - : Ein String, der den festzulegenden GLSL-Quellcode enthält.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const shader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(shader, originalSource);

const source = gl.getShaderSource(shader);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.createShader()`](/de/docs/Web/API/WebGLRenderingContext/createShader)
- [`WebGLRenderingContext.isShader()`](/de/docs/Web/API/WebGLRenderingContext/isShader)
- [`WebGLRenderingContext.deleteShader()`](/de/docs/Web/API/WebGLRenderingContext/deleteShader)
- [`WebGLRenderingContext.getShaderSource()`](/de/docs/Web/API/WebGLRenderingContext/getShaderSource)
