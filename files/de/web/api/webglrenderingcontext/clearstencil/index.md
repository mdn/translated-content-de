---
title: "WebGLRenderingContext: clearStencil() Methode"
short-title: clearStencil()
slug: Web/API/WebGLRenderingContext/clearStencil
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.clearStencil()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) legt den Löschwert für den Stencil-Buffer fest.

Dieser Wert gibt an, welcher Stencil-Wert verwendet werden soll, wenn die [`clear()`](/de/docs/Web/API/WebGLRenderingContext/clear)-Methode aufgerufen wird.

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

Um den aktuellen Löschwert für den Stencil-Wert zu erhalten, fragen Sie die `STENCIL_CLEAR_VALUE`-Konstante ab.

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
