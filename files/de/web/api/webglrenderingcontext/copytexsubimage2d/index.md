---
title: "WebGLRenderingContext: copyTexSubImage2D() Methode"
short-title: copyTexSubImage2D()
slug: Web/API/WebGLRenderingContext/copyTexSubImage2D
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.copyTexSubImage2D()`** Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) kopiert Pixel vom aktuellen
[`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer) in ein bestehendes 2D-Textur-Sub-Image.

## Syntax

```js-nolint
copyTexSubImage2D(target, level, xoffset, yoffset, x, y, width, height)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Ziel) der aktiven Textur angibt.
    Mögliche Werte:
    - `gl.TEXTURE_2D`: Eine zweidimensionale Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_X`: Positive X-Fläche für eine Würfel-Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`: Negative X-Fläche für eine Würfel-Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`: Positive Y-Fläche für eine Würfel-Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`: Negative Y-Fläche für eine Würfel-Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`: Positive Z-Fläche für eine Würfel-Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`: Negative Z-Fläche für eine Würfel-Textur.

- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Detailstufe angibt. Stufe 0 ist das Basisbildniveau und Stufe _n_ ist das n-te Mipmap-Reduktionsniveau.
- `xoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den horizontalen Offset innerhalb des Texturbilds angibt.
- `yoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den vertikalen Offset innerhalb des Texturbilds angibt.
- `x`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die x-Koordinate der unteren linken Ecke angibt, ab der kopiert werden soll.
- `y`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die y-Koordinate der unteren linken Ecke angibt, ab der kopiert werden soll.
- `width`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Breite der Textur angibt.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Höhe der Textur angibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.copyTexSubImage2D(gl.TEXTURE_2D, 0, 0, 0, 0, 0, 16, 16);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.copyTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/copyTexImage2D)
- [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D)
- [`WebGLRenderingContext.texSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texSubImage2D)
- [`WebGLRenderingContext.compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D)
