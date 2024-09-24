---
title: "WebGLRenderingContext: Methode viewport()"
short-title: viewport()
slug: Web/API/WebGLRenderingContext/viewport
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.viewport()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) legt den Viewport fest, der die affine Transformation von x und y von normalisierten Gerätekoordinaten zu Fensterkoordinaten spezifiziert.

## Syntax

```js-nolint
viewport(x, y, width, height)
```

### Parameter

- `x`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der die horizontale Koordinate für die untere linke Ecke des Viewport-Ursprungs angibt. Standardwert: 0.
- `y`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der die vertikale Koordinate für die untere linke Ecke des Viewport-Ursprungs angibt. Standardwert: 0.
- `width`
  - : Ein nicht-negativer {{domxref("WebGL_API/Types", "GLsizei")}}, der die Breite des Viewports angibt. Standardwert: Breite der Leinwand.
- `height`
  - : Ein nicht-negativer {{domxref("WebGL_API/Types", "GLsizei")}}, der die Höhe des Viewports angibt. Standardwert: Höhe der Leinwand.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Wenn entweder _width_ oder _height_ einen negativen Wert hat, wird ein
`gl.INVALID_VALUE`-Fehler ausgelöst.

## Beispiele

Wenn Sie zuerst einen WebGL-Kontext erstellen, entspricht die Größe des Viewports der Größe der Leinwand. Wenn Sie jedoch die Leinwandgröße ändern, müssen Sie dem WebGL-Kontext eine neue Viewport-Einstellung mitteilen. In diesem Fall können Sie `gl.viewport` verwenden.

```js
gl.viewport(0, 0, canvas.width, canvas.height);
```

Die Breite und Höhe des Viewports sind auf einen bereichsabhängigen Wert beschränkt, welcher implementierungsabhängig ist. Um diesen Bereich zu erhalten, können Sie die Konstante `MAX_VIEWPORT_DIMS` verwenden, die ein {{jsxref("Int32Array")}} zurückgibt.

```js
gl.getParameter(gl.MAX_VIEWPORT_DIMS);
// z.B. Int32Array[16384, 16384]
```

Um den aktuellen Viewport zu erhalten, fragen Sie die Konstante `VIEWPORT`.

```js
gl.getParameter(gl.VIEWPORT);
// z.B. Int32Array[0, 0, 640, 480]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.scissor()")}}
- {{domxref("WebGLRenderingContext.getParameter()")}}
