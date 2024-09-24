---
title: "WebGLRenderingContext: deleteProgram() Methode"
short-title: deleteProgram()
slug: Web/API/WebGLRenderingContext/deleteProgram
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.deleteProgram()`** Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) löscht ein gegebenes
{{domxref("WebGLProgram")}} Objekt. Diese Methode hat keine Wirkung, wenn das Programm bereits gelöscht wurde.

## Syntax

```js-nolint
deleteProgram(program)
```

### Parameter

- `program`
  - : Ein {{domxref("WebGLProgram")}} Objekt, das gelöscht werden soll.

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.createProgram()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.linkProgram()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
