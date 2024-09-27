---
title: "WebGLRenderingContext: Methode linkProgram()"
short-title: linkProgram()
slug: Web/API/WebGLRenderingContext/linkProgram
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die Methode **`linkProgram()`** der Schnittstelle [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) verknüpft ein angegebenes [`WebGLProgram`](/de/docs/Web/API/WebGLProgram), um den Prozess der Vorbereitung des GPU-Codes für die Fragment- und Vertex-Shader des Programms abzuschließen.

## Syntax

```js-nolint
linkProgram(program)
```

### Parameter

- `program`
  - : Das zu verknüpfende [`WebGLProgram`](/de/docs/Web/API/WebGLProgram).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const program = gl.createProgram();

// Attach pre-existing shaders
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  const info = gl.getProgramInfoLog(program);
  throw new Error(`Could not compile WebGL program. \n\n${info}`);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.createProgram()`](/de/docs/Web/API/WebGLRenderingContext/createProgram)
- [`WebGLRenderingContext.deleteProgram()`](/de/docs/Web/API/WebGLRenderingContext/deleteProgram)
- [`WebGLRenderingContext.isProgram()`](/de/docs/Web/API/WebGLRenderingContext/isProgram)
- [`WebGLRenderingContext.useProgram()`](/de/docs/Web/API/WebGLRenderingContext/useProgram)
- [`WebGLRenderingContext.validateProgram()`](/de/docs/Web/API/WebGLRenderingContext/validateProgram)
- [`WebGLRenderingContext.getProgramParameter()`](/de/docs/Web/API/WebGLRenderingContext/getProgramParameter)
- [`WebGLRenderingContext.getProgramInfoLog()`](/de/docs/Web/API/WebGLRenderingContext/getProgramInfoLog)
