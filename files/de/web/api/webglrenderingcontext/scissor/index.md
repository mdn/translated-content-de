---
title: "WebGLRenderingContext: scissor()-Methode"
short-title: scissor()
slug: Web/API/WebGLRenderingContext/scissor
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.scissor()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) setzt eine "Scissor Box", die das Zeichnen auf ein angegebenes Rechteck begrenzt.

## Syntax

```js-nolint
scissor(x, y, width, height)
```

### Parameter

- `x`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die horizontale Koordinate für die linke untere Ecke der Box angibt. Standardwert: 0.
- `y`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die vertikale Koordinate für die linke untere Ecke der Box angibt. Standardwert: 0.
- `width`
  - : Ein nicht-negativer [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Breite der "Scissor Box" angibt. Standardwert: Breite der Leinwand.
- `height`
  - : Ein nicht-negativer [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Höhe der "Scissor Box" angibt. Standardwert: Höhe der Leinwand.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Wenn entweder _width_ oder _height_ ein negativer Wert ist, wird ein `gl.INVALID_VALUE`-Fehler ausgelöst.

## Beispiele

Wenn der "Scissor Test" aktiviert ist, können nur Pixel innerhalb der "Scissor Box" durch Zeichenbefehle verändert werden.

```js
// turn on scissor test
gl.enable(gl.SCISSOR_TEST);

// set the scissor rectangle
gl.scissor(x, y, width, height);

// execute drawing commands in the scissor box (e.g. clear)

// turn off scissor test again
gl.disable(gl.SCISSOR_TEST);
```

Um die aktuellen Abmessungen der "Scissor Box" zu erhalten, fragen Sie die `SCISSOR_BOX`-Konstante ab, die ein {{jsxref("Int32Array")}} zurückgibt.

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
