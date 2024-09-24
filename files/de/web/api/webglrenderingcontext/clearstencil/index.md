---
title: "WebGLRenderingContext: clearStencil()-Methode"
short-title: clearStencil()
slug: Web/API/WebGLRenderingContext/clearStencil
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.clearStencil()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) legt den Löschwert für den Stencil-Puffer fest.

Dies bestimmt, welchen Stencil-Wert verwendet wird, wenn die {{domxref("WebGLRenderingContext.clear", "clear()")}}-Methode aufgerufen wird.

## Syntax

```js-nolint
clearStencil(s)
```

### Parameter

- `s`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der den Index angibt, der verwendet wird, wenn der Stencil-Puffer gelöscht wird. Standardwert: 0.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.clearStencil(1);
```

Um den aktuellen Stencil-Löschwert zu erhalten, fragen Sie die `STENCIL_CLEAR_VALUE`-Konstante ab.

```js
gl.getParameter(gl.STENCIL_CLEAR_VALUE);
// 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.clear()")}}
- {{domxref("WebGLRenderingContext.clearColor()")}}
- {{domxref("WebGLRenderingContext.clearDepth()")}}
