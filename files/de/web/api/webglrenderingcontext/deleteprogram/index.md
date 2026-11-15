---
title: "WebGLRenderingContext: Methode deleteProgram()"
short-title: deleteProgram()
slug: Web/API/WebGLRenderingContext/deleteProgram
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGLRenderingContext.deleteProgram()`** der [WebGL API](/de/docs/Web/API/WebGL_API) löscht ein angegebenes [`WebGLProgram`](/de/docs/Web/API/WebGLProgram)-Objekt. Wenn das Programm bereits gelöscht wurde, hat diese Methode keine Wirkung.

## Syntax

```js-nolint
deleteProgram(program)
```

### Parameter

- `program`
  - : Ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram)-Objekt, das gelöscht werden soll. Die Übergabe von `null` hat keine Wirkung.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Ein Programm löschen

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
