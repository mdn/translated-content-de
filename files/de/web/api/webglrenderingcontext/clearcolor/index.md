---
title: "WebGLRenderingContext: clearColor()-Methode"
short-title: clearColor()
slug: Web/API/WebGLRenderingContext/clearColor
l10n:
  sourceCommit: 77fdcfe19d02980986142ae61ab8d4eacd713ffc
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.clearColor()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) legt die Farbwerte fest, die beim Löschen von Farb-Puffern verwendet werden.

Dies gibt an, welche Farbwerte verwendet werden, wenn die {{domxref("WebGLRenderingContext.clear", "clear()")}}-Methode aufgerufen wird. Die Werte werden zwischen 0 und 1 begrenzt.

## Syntax

```js-nolint
clearColor(red, green, blue, alpha)
```

### Parameter

- `red`
  - : Ein {{domxref("WebGL_API/Types", "GLclampf")}}, der den roten Farbwert angibt, der verwendet wird, wenn die Farb-Puffer gelöscht werden. Standardwert: 0.
- `green`
  - : Ein {{domxref("WebGL_API/Types", "GLclampf")}}, der den grünen Farbwert angibt, der verwendet wird, wenn die Farb-Puffer gelöscht werden. Standardwert: 0.
- `blue`
  - : Ein {{domxref("WebGL_API/Types", "GLclampf")}}, der den blauen Farbwert angibt, der verwendet wird, wenn die Farb-Puffer gelöscht werden. Standardwert: 0.
- `alpha`
  - : Ein {{domxref("WebGL_API/Types", "GLclampf")}}, der den Alpha-(Transparenz-)Wert angibt, der verwendet wird, wenn die Farb-Puffer gelöscht werden. Standardwert: 0.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.clearColor(1, 0.5, 0.5, 1);
```

Um die aktuelle Löschfarbe zu erhalten, fragen Sie die `COLOR_CLEAR_VALUE`-Konstante ab, die ein {{jsxref("Float32Array")}} zurückgibt.

```js
gl.getParameter(gl.COLOR_CLEAR_VALUE);
// Float32Array[1, 0.5, 0.5, 1]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.clear()")}}
- {{domxref("WebGLRenderingContext.clearDepth()")}}
- {{domxref("WebGLRenderingContext.clearStencil()")}}
