---
title: "WebGLRenderingContext: Methode isProgram()"
short-title: isProgram()
slug: Web/API/WebGLRenderingContext/isProgram
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGLRenderingContext.isProgram()`** der [WebGL-API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn das übergebene [`WebGLProgram`](/de/docs/Web/API/WebGLProgram) gültig ist, andernfalls `false`.

## Syntax

```js-nolint
isProgram(program)
```

### Parameter

- `program`
  - : Ein zu prüfendes [`WebGLProgram`](/de/docs/Web/API/WebGLProgram). Bei Übergabe von `null` wird `false` zurückgegeben.

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob das Programm gültig ist.

## Beispiele

### Ein Programm prüfen

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
