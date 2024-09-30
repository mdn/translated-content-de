---
title: "WebGLRenderingContext: linkProgram()-Methode"
short-title: linkProgram()
slug: Web/API/WebGLRenderingContext/linkProgram
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`linkProgram()`**-Methode des [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)-Interfaces verknüpft ein gegebenes [`WebGLProgram`](/de/docs/Web/API/WebGLProgram) und vervollständigt den Prozess der Vorbereitung des GPU-Codes für die Fragment- und Vertex-Shader des Programms.

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
