---
title: "WebGLRenderingContext: deleteProgram() Methode"
short-title: deleteProgram()
slug: Web/API/WebGLRenderingContext/deleteProgram
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.deleteProgram()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) löscht ein angegebenes [`WebGLProgram`](/de/docs/Web/API/WebGLProgram)-Objekt. Diese Methode hat keine Wirkung, wenn das Programm bereits gelöscht wurde.

## Syntax

```js-nolint
deleteProgram(program)
```

### Parameter

- `program`
  - : Ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram)-Objekt, das gelöscht werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Löschen eines Programms

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const program = gl.createProgram();

// …

gl.deleteProgram(program);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.createProgram()`](/de/docs/Web/API/WebGLRenderingContext/createProgram)
- [`WebGLRenderingContext.isProgram()`](/de/docs/Web/API/WebGLRenderingContext/isProgram)
- [`WebGLRenderingContext.linkProgram()`](/de/docs/Web/API/WebGLRenderingContext/linkProgram)
- [`WebGLRenderingContext.useProgram()`](/de/docs/Web/API/WebGLRenderingContext/useProgram)
- [`WebGLRenderingContext.validateProgram()`](/de/docs/Web/API/WebGLRenderingContext/validateProgram)
- [`WebGLRenderingContext.getProgramParameter()`](/de/docs/Web/API/WebGLRenderingContext/getProgramParameter)
- [`WebGLRenderingContext.getProgramInfoLog()`](/de/docs/Web/API/WebGLRenderingContext/getProgramInfoLog)
