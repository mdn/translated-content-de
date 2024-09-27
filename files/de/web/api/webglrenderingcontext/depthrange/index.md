---
title: "WebGLRenderingContext: depthRange()-Methode"
short-title: depthRange()
slug: Web/API/WebGLRenderingContext/depthRange
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.depthRange()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) legt die Tiefenbereichsabbildung von normalisierten Gerätekoordinaten zu Fenster- oder Viewport-Koordinaten fest.

## Syntax

```js-nolint
depthRange(zNear, zFar)
```

### Parameter

- `zNear`
  - : Ein [`GLclampf`](/de/docs/Web/API/WebGL_API/Types), der die Abbildung der nahen Clipping-Ebene auf Fenster- oder Viewport-Koordinaten angibt. Durch den Bereich 0 bis 1 begrenzt und muss kleiner oder gleich `zFar` sein. Der Standardwert ist 0.
- `zFar`
  - : Ein [`GLclampf`](/de/docs/Web/API/WebGL_API/Types), der die Abbildung der fernen Clipping-Ebene auf Fenster- oder Viewport-Koordinaten angibt. Durch den Bereich 0 bis 1 begrenzt. Der Standardwert ist 1.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.depthRange(0.2, 0.6);
```

Um den aktuellen Tiefenbereich zu überprüfen, fragen Sie die Konstante `DEPTH_RANGE` ab, die ein {{jsxref("Float32Array")}} zurückgibt.

```js
gl.getParameter(gl.DEPTH_RANGE);
// Float32Array[0.2, 0.6]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.viewport()`](/de/docs/Web/API/WebGLRenderingContext/viewport)
- [`WebGLRenderingContext.depthFunc()`](/de/docs/Web/API/WebGLRenderingContext/depthFunc)
