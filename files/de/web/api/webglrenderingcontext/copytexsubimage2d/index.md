---
title: "WebGLRenderingContext: Methode copyTexSubImage2D()"
short-title: copyTexSubImage2D()
slug: Web/API/WebGLRenderingContext/copyTexSubImage2D
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.copyTexSubImage2D()`**-Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) kopiert Pixel vom aktuellen
{{domxref("WebGLFramebuffer")}} in ein vorhandenes 2D-Textur-Unterbild.

## Syntax

```js-nolint
copyTexSubImage2D(target, level, xoffset, yoffset, x, y, width, height)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das den Bindungspunkt (Ziel) der aktiven Textur angibt.
    Mögliche Werte:

    - `gl.TEXTURE_2D`: Eine zweidimensionale Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_X`: Positive X-Seite für eine kübisch abgebildete Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`: Negative X-Seite für eine kübisch abgebildete Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`: Positive Y-Seite für eine kübisch abgebildete Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`: Negative Y-Seite für eine kübisch abgebildete Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`: Positive Z-Seite für eine kübisch abgebildete Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`: Negative Z-Seite für eine kübisch abgebildete Textur.

- `level`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, das die Detailstufe angibt. Stufe 0 ist die Basisbildstufe und Stufe _n_ ist die n-te MipMap-Reduktionsstufe.
- `xoffset`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, das den horizontalen Versatz innerhalb des Texturbilds angibt.
- `yoffset`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, das den vertikalen Versatz innerhalb des Texturbilds angibt.
- `x`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, das die x-Koordinate der unteren linken Ecke angibt, an der mit dem Kopieren begonnen wird.
- `y`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, das die y-Koordinate der unteren linken Ecke angibt, an der mit dem Kopieren begonnen wird.
- `width`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, das die Breite der Textur angibt.
- `height`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, das die Höhe der Textur angibt.

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

- {{domxref("WebGLRenderingContext.copyTexImage2D()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("WebGLRenderingContext.texSubImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
