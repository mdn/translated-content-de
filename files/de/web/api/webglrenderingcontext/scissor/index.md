---
title: "WebGLRenderingContext: scissor()-Methode"
short-title: scissor()
slug: Web/API/WebGLRenderingContext/scissor
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.scissor()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) setzt einen Schereneffektbereich, der das Zeichnen auf ein bestimmtes Rechteck beschränkt.

## Syntax

```js-nolint
scissor(x, y, width, height)
```

### Parameter

- `x`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die horizontale Koordinate für die untere linke Ecke des Bereichs spezifiziert. Standardwert: 0.
- `y`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die vertikale Koordinate für die untere linke Ecke des Bereichs spezifiziert. Standardwert: 0.
- `width`
  - : Ein nicht-negativer [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Breite des Schereneffektbereichs spezifiziert. Standardwert: Breite der Leinwand.
- `height`
  - : Ein nicht-negativer [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Höhe des Schereneffektbereichs spezifiziert. Standardwert: Höhe der Leinwand.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Wenn entweder _width_ oder _height_ ein negativer Wert ist, wird ein Fehler `gl.INVALID_VALUE` ausgelöst.

## Beispiele

Wenn der Scherentest aktiviert ist, können nur die Pixel innerhalb des Schereneffektbereichs durch Zeichenbefehle modifiziert werden.

```js
// turn on scissor test
gl.enable(gl.SCISSOR_TEST);

// set the scissor rectangle
gl.scissor(x, y, width, height);

// execute drawing commands in the scissor box (e.g. clear)

// turn off scissor test again
gl.disable(gl.SCISSOR_TEST);
```

Um die aktuellen Dimensionen des Schereneffektbereichs zu erhalten, fragen Sie die Konstante `SCISSOR_BOX` ab, die einen {{jsxref("Int32Array")}} zurückgibt.

```js
gl.scissor(0, 0, 200, 200);
gl.getParameter(gl.SCISSOR_BOX);
// Int32Array[0, 0, 200, 200]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.viewport()`](/de/docs/Web/API/WebGLRenderingContext/viewport)
- [`WebGLRenderingContext.enable()`](/de/docs/Web/API/WebGLRenderingContext/enable)
- [`WebGLRenderingContext.disable()`](/de/docs/Web/API/WebGLRenderingContext/disable)
