---
title: "WebGLRenderingContext: clearDepth() Methode"
short-title: clearDepth()
slug: Web/API/WebGLRenderingContext/clearDepth
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.clearDepth()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) legt den Löschwert für den Tiefenpuffer fest.

Dies gibt an, welcher Tiefenwert verwendet werden soll, wenn die
[`clear()`](/de/docs/Web/API/WebGLRenderingContext/clear)-Methode aufgerufen wird. Der Wert wird zwischen 0 und 1 begrenzt.

## Syntax

```js-nolint
clearDepth(depth)
```

### Parameter

- `depth`
  - : Ein [`GLclampf`](/de/docs/Web/API/WebGL_API/Types), der den zu verwendenden Tiefenwert angibt, wenn der Tiefenpuffer
    gelöscht wird. Standardwert: 1.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.clearDepth(0.5);
```

Um den aktuellen Tiefenlöschwert zu erhalten, fragen Sie die `DEPTH_CLEAR_VALUE`
Konstante ab.

```js
gl.getParameter(gl.DEPTH_CLEAR_VALUE);
// 0.5
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.clear()`](/de/docs/Web/API/WebGLRenderingContext/clear)
- [`WebGLRenderingContext.clearColor()`](/de/docs/Web/API/WebGLRenderingContext/clearColor)
- [`WebGLRenderingContext.clearStencil()`](/de/docs/Web/API/WebGLRenderingContext/clearStencil)
