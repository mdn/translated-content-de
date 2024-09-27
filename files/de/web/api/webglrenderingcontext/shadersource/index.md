---
title: "WebGLRenderingContext: Methode shaderSource()"
short-title: shaderSource()
slug: Web/API/WebGLRenderingContext/shaderSource
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.shaderSource()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) setzt den Quellcode eines
[`WebGLShader`](/de/docs/Web/API/WebGLShader).

## Syntax

```js-nolint
shaderSource(shader, source)
```

### Parameter

- `shader`
  - : Ein [`WebGLShader`](/de/docs/Web/API/WebGLShader)-Objekt, in welches der Quellcode gesetzt wird.
- `source`
  - : Ein String, der den zu setzenden GLSL-Quellcode enthält.

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
