---
title: "WebGLRenderingContext: viewport() Methode"
short-title: viewport()
slug: Web/API/WebGLRenderingContext/viewport
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.viewport()`** Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) legt den Viewport fest, der die affine Transformation von x und y von normalisierten Gerätekoordinaten zu Fensterkoordinaten spezifiziert.

## Syntax

```js-nolint
viewport(x, y, width, height)
```

### Parameter

- `x`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die horizontale Koordinate für die linke untere Ecke des Viewport-Ursprungs angibt. Standardwert: 0.
- `y`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die vertikale Koordinate für die linke untere Ecke des Viewport-Ursprungs angibt. Standardwert: 0.
- `width`
  - : Ein nicht-negativer [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Breite des Viewports angibt. Standardwert: Breite des Canvas.
- `height`
  - : Ein nicht-negativer [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Höhe des Viewports angibt. Standardwert: Höhe des Canvas.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Wenn entweder _width_ oder _height_ einen negativen Wert hat, wird ein `gl.INVALID_VALUE` Fehler geworfen.

## Beispiele

Wenn Sie zunächst einen WebGL-Kontext erstellen, entspricht die Größe des Viewports der Größe des Canvas. Falls Sie das Canvas jedoch skalieren, müssen Sie dem WebGL-Kontext eine neue Viewport-Einstellung mitteilen. In diesem Fall können Sie `gl.viewport` verwenden.

```js
gl.viewport(0, 0, canvas.width, canvas.height);
```

Die Viewport-Breite und -Höhe werden auf einen Bereich begrenzt, der implementierungsabhängig ist. Um diesen Bereich zu erhalten, können Sie die Konstante `MAX_VIEWPORT_DIMS` verwenden, die ein {{jsxref("Int32Array")}} zurückgibt.

```js
gl.getParameter(gl.MAX_VIEWPORT_DIMS);
// e.g. Int32Array[16384, 16384]
```

Um den aktuellen Viewport zu erhalten, fragen Sie die `VIEWPORT` Konstante ab.

```js
gl.getParameter(gl.VIEWPORT);
// e.g. Int32Array[0, 0, 640, 480]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor)
- [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter)
