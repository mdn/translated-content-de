---
title: "WebGLRenderingContext: getAttachedShaders() Methode"
short-title: getAttachedShaders()
slug: Web/API/WebGLRenderingContext/getAttachedShaders
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.getAttachedShaders()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt eine Liste von
[`WebGLShader`](/de/docs/Web/API/WebGLShader)-Objekten zurück, die an ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram) angehängt sind.

## Syntax

```js-nolint
getAttachedShaders(program)
```

### Parameter

- `program`
  - : Ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram)-Objekt, um die angehängten Shader zu erhalten.

### Rückgabewert

Ein {{jsxref("Array")}} von [`WebGLShader`](/de/docs/Web/API/WebGLShader)-Objekten, die an das
angegebene `WebGLProgram` angehängt sind.

## Beispiele

```js
const program = gl.createProgram();

// Attach pre-existing shaders
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

gl.getAttachedShaders(program);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.createShader()`](/de/docs/Web/API/WebGLRenderingContext/createShader)
- [`WebGLRenderingContext.isShader()`](/de/docs/Web/API/WebGLRenderingContext/isShader)
- [`WebGLRenderingContext.deleteShader()`](/de/docs/Web/API/WebGLRenderingContext/deleteShader)
