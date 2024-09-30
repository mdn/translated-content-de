---
title: "WebGLRenderingContext: depthRange() Methode"
short-title: depthRange()
slug: Web/API/WebGLRenderingContext/depthRange
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.depthRange()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt den Tiefenbereich von normalisierten Gerätkoordinaten zu Fenster- oder Viewport-Koordinaten an.

## Syntax

```js-nolint
depthRange(zNear, zFar)
```

### Parameter

- `zNear`
  - : Ein [`GLclampf`](/de/docs/Web/API/WebGL_API/Types), der die Zuordnung der nahen Clipping-Ebene zu Fenster- oder Viewport-Koordinaten angibt. Wird in den Bereich von 0 bis 1 begrenzt und muss kleiner oder gleich `zFar` sein. Der Standardwert ist 0.
- `zFar`
  - : Ein [`GLclampf`](/de/docs/Web/API/WebGL_API/Types), der die Zuordnung der fernen Clipping-Ebene zu Fenster- oder Viewport-Koordinaten angibt. Wird in den Bereich von 0 bis 1 begrenzt. Der Standardwert ist 1.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.depthRange(0.2, 0.6);
```

Um den aktuellen Tiefenbereich zu überprüfen, können Sie die Konstante `DEPTH_RANGE` abfragen, die ein {{jsxref("Float32Array")}} zurückgibt.

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
