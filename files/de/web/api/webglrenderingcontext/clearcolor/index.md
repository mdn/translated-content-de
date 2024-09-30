---
title: "WebGLRenderingContext: Methode clearColor()"
short-title: clearColor()
slug: Web/API/WebGLRenderingContext/clearColor
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.clearColor()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt die Farbwerte an, die zum Löschen von Farb-Puffern verwendet werden.

Dies legt fest, welche Farbwerte verwendet werden, wenn die [`clear()`](/de/docs/Web/API/WebGLRenderingContext/clear)-Methode aufgerufen wird. Die Werte werden zwischen 0 und 1 begrenzt.

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
  - : Ein [`GLclampf`](/de/docs/Web/API/WebGL_API/Types), der den Alpha-(Transparenz-)Wert angibt, der verwendet wird, wenn die Farb-Puffer gelöscht werden. Standardwert: 0.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

```js
gl.clearColor(1, 0.5, 0.5, 1);
```

Um die aktuelle Clear-Farbe zu erhalten, fragen Sie die `COLOR_CLEAR_VALUE`-Konstante ab, die einen {{jsxref("Float32Array")}} zurückgibt.

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
