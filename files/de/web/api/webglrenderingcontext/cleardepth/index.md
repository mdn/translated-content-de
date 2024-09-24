---
title: "WebGLRenderingContext: clearDepth()-Methode"
short-title: clearDepth()
slug: Web/API/WebGLRenderingContext/clearDepth
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.clearDepth()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) legt den Löschwert für den Tiefenpuffer fest.

Dies gibt an, welcher Tiefenwert beim Aufrufen der {{domxref("WebGLRenderingContext.clear", "clear()")}}-Methode verwendet werden soll. Der Wert wird zwischen 0 und 1 geklammert.

## Syntax

```js-nolint
clearDepth(depth)
```

### Parameter

- `depth`
  - : Ein {{domxref("WebGL_API/Types", "GLclampf")}}, der den Tiefenwert angibt, der beim Löschen des Tiefenpuffers verwendet wird. Standardwert: 1.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.clearDepth(0.5);
```

Um den aktuellen Löschwert der Tiefe zu erhalten, fragen Sie die `DEPTH_CLEAR_VALUE`-Konstante ab.

```js
gl.getParameter(gl.DEPTH_CLEAR_VALUE);
// 0.5
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.clear()")}}
- {{domxref("WebGLRenderingContext.clearColor()")}}
- {{domxref("WebGLRenderingContext.clearStencil()")}}
