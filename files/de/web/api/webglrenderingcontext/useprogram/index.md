---
title: "WebGLRenderingContext: useProgram()-Methode"
short-title: useProgram()
slug: Web/API/WebGLRenderingContext/useProgram
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.useProgram()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) setzt das angegebene
{{domxref("WebGLProgram")}} als Teil des aktuellen Rendering-Zustands.

## Syntax

```js-nolint
useProgram(program)
```

### Parameter

- `program`
  - : Ein {{domxref("WebGLProgram")}}, das verwendet werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const program = gl.createProgram();

// Vorhandene Shader anhängen
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

- {{domxref("WebGLRenderingContext.createProgram()")}}
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.linkProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
