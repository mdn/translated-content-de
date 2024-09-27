---
title: "WebGLRenderingContext: clearStencil() Methode"
short-title: clearStencil()
slug: Web/API/WebGLRenderingContext/clearStencil
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.clearStencil()`** Methode des [WebGL API](/de/docs/Web/API/WebGL_API) legt den Löschwert für den Stencil-Buffer fest.

Diese Methode gibt an, welcher Stencil-Wert verwendet werden soll, wenn die [`clear()`](/de/docs/Web/API/WebGLRenderingContext/clear) Methode aufgerufen wird.

## Syntax

```js-nolint
clearStencil(s)
```

### Parameter

- `s`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den Index angibt, der verwendet wird, wenn der Stencil-Buffer gelöscht wird.
    Standardwert: 0.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.clearStencil(1);
```

Um den aktuellen Löschwert des Stencils zu erhalten, fragen Sie die Konstante `STENCIL_CLEAR_VALUE` ab.

```js
gl.getParameter(gl.STENCIL_CLEAR_VALUE);
// 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.clear()`](/de/docs/Web/API/WebGLRenderingContext/clear)
- [`WebGLRenderingContext.clearColor()`](/de/docs/Web/API/WebGLRenderingContext/clearColor)
- [`WebGLRenderingContext.clearDepth()`](/de/docs/Web/API/WebGLRenderingContext/clearDepth)
