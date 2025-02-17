---
title: "WebGLRenderingContext: shaderSource()-Methode"
short-title: shaderSource()
slug: Web/API/WebGLRenderingContext/shaderSource
l10n:
  sourceCommit: bcff6fc367dc53ce8f11a059d545e8ca813923e1
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.shaderSource()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) setzt den Quellcode eines
[`WebGLShader`](/de/docs/Web/API/WebGLShader).

## Syntax

```js-nolint
shaderSource(shader, source)
```

### Parameter

- `shader`
  - : Ein [`WebGLShader`](/de/docs/Web/API/WebGLShader)-Objekt, in das der Quellcode gesetzt wird.
- `source`
  - : Ein String, der den zu setzenden GLSL-Quellcode enthält.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der angegebene `shader` nicht vom Typ `WebGLShader` ist.

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
