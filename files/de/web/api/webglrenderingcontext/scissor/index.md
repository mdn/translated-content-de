---
title: "WebGLRenderingContext: scissor() Methode"
short-title: scissor()
slug: Web/API/WebGLRenderingContext/scissor
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.scissor()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) setzt eine Scherbox, die das Zeichnen auf ein angegebenes Rechteck begrenzt.

## Syntax

```js-nolint
scissor(x, y, width, height)
```

### Parameter

- `x`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der die horizontale Koordinate für die untere linke Ecke der Box angibt. Standardwert: 0.
- `y`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der die vertikale Koordinate für die untere linke Ecke der Box angibt. Standardwert: 0.
- `width`
  - : Ein nicht-negativer {{domxref("WebGL_API/Types", "GLsizei")}}, der die Breite der Scherbox angibt. Standardwert: Breite des Canvas.
- `height`
  - : Ein nicht-negativer {{domxref("WebGL_API/Types", "GLsizei")}}, der die Höhe der Scherbox angibt. Standardwert: Höhe des Canvas.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Wenn entweder _width_ oder _height_ einen negativen Wert hat, wird ein
`gl.INVALID_VALUE` Fehler ausgelöst.

## Beispiele

Wenn der Schertest aktiviert ist, können nur Pixel innerhalb der Scherbox durch Zeichenbefehle modifiziert werden.

```js
// Schertest aktivieren
gl.enable(gl.SCISSOR_TEST);

// Schereck setzen
gl.scissor(x, y, width, height);

// Zeichenbefehle innerhalb der Scherbox ausführen (z.B. löschen)

// Schertest wieder deaktivieren
gl.disable(gl.SCISSOR_TEST);
```

Um die aktuellen Dimensionen der Scherbox zu erhalten, fragen Sie die `SCISSOR_BOX` Konstante ab, die ein {{jsxref("Int32Array")}} zurückgibt.

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

- {{domxref("WebGLRenderingContext.viewport()")}}
- {{domxref("WebGLRenderingContext.enable()")}}
- {{domxref("WebGLRenderingContext.disable()")}}
