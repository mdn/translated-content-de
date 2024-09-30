---
title: "WebGLRenderingContext: viewport() Methode"
short-title: viewport()
slug: Web/API/WebGLRenderingContext/viewport
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.viewport()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) legt den Viewport fest, der die affine Transformation von x und y von normalisierten Gerätekoordinaten zu Fensterkoordinaten spezifiziert.

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

Kein ({{jsxref("undefined")}}).

### Ausnahmen

Falls entweder _width_ oder _height_ einen negativen Wert hat, wird ein
`gl.INVALID_VALUE`-Fehler geworfen.

## Beispiele

Wenn Sie zuerst einen WebGL-Kontext erstellen, entspricht die Größe des Viewports der Größe des Canvas. Wenn Sie jedoch die Größe des Canvas ändern, müssen Sie dem WebGL-Kontext eine neue Viewport-Einstellung mitteilen. In dieser Situation können Sie `gl.viewport` verwenden.

```js
gl.viewport(0, 0, canvas.width, canvas.height);
```

Die Breite und Höhe des Viewports werden auf einen bereichsabhängigen Wert begrenzt, der von der Implementierung abhängt. Um diesen Bereich zu erhalten, können Sie die Konstante `MAX_VIEWPORT_DIMS` verwenden, die ein {{jsxref("Int32Array")}} zurückgibt.

```js
gl.getParameter(gl.MAX_VIEWPORT_DIMS);
// e.g. Int32Array[16384, 16384]
```

Um den aktuellen Viewport zu erhalten, fragen Sie die Konstante `VIEWPORT` ab.

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
