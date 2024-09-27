---
title: "WebGLRenderingContext: clearColor() Methode"
short-title: clearColor()
slug: Web/API/WebGLRenderingContext/clearColor
l10n:
  sourceCommit: 77fdcfe19d02980986142ae61ab8d4eacd713ffc
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.clearColor()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt die Farbwerte an, die beim Löschen von Farb-Puffern verwendet werden.

Diese Methode spezifiziert, welche Farbwerte bei dem Aufruf der [`clear()`](/de/docs/Web/API/WebGLRenderingContext/clear) Methode verwendet werden. Die Werte werden zwischen 0 und 1 begrenzt.

## Syntax

```js-nolint
clearColor(red, green, blue, alpha)
```

### Parameter

- `red`
  - : Ein [`GLclampf`](/de/docs/Web/API/WebGL_API/Types), der den roten Farbwert angibt, der verwendet wird, wenn die Farb-Puffer gelöscht werden. Standardwert: 0.
- `green`
  - : Ein [`GLclampf`](/de/docs/Web/API/WebGL_API/Types), der den grünen Farbwert angibt, der verwendet wird, wenn die Farb-Puffer gelöscht werden. Standardwert: 0.
- `blue`
  - : Ein [`GLclampf`](/de/docs/Web/API/WebGL_API/Types), der den blauen Farbwert angibt, der verwendet wird, wenn die Farb-Puffer gelöscht werden. Standardwert: 0.
- `alpha`
  - : Ein [`GLclampf`](/de/docs/Web/API/WebGL_API/Types), der den Alpha- (Transparenz-) Wert angibt, der verwendet wird, wenn die Farb-Puffer gelöscht werden. Standardwert: 0.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

```js
gl.clearColor(1, 0.5, 0.5, 1);
```

Um die aktuelle Löschfarbe zu ermitteln, fragen Sie die `COLOR_CLEAR_VALUE` Konstante ab, die eine {{jsxref("Float32Array")}} zurückgibt.

```js
gl.getParameter(gl.COLOR_CLEAR_VALUE);
// Float32Array[1, 0.5, 0.5, 1]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.clear()`](/de/docs/Web/API/WebGLRenderingContext/clear)
- [`WebGLRenderingContext.clearDepth()`](/de/docs/Web/API/WebGLRenderingContext/clearDepth)
- [`WebGLRenderingContext.clearStencil()`](/de/docs/Web/API/WebGLRenderingContext/clearStencil)
