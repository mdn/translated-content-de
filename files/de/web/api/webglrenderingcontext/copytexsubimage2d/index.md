---
title: "WebGLRenderingContext: copyTexSubImage2D() Methode"
short-title: copyTexSubImage2D()
slug: Web/API/WebGLRenderingContext/copyTexSubImage2D
l10n:
  sourceCommit: fe3f1f2dfaf44fcbe868b91b6a429270d2055716
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`copyTexSubImage2D()`** Methode der Schnittstelle [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) der [WebGL API](/de/docs/Web/API/WebGL_API) kopiert Pixel vom aktuellen [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer) in ein 2D-Textur-Subimage.

## Syntax

```js-nolint
copyTexSubImage2D(target, level, xoffset, yoffset, x, y, width, height)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindungspunkt (target) der aktiven Textur spezifiziert. Mögliche Werte:
    - `gl.TEXTURE_2D`: Eine zweidimensionale Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_X`: Positive X-Seite für eine würfelkartierte Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`: Negative X-Seite für eine würfelkartierte Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`: Positive Y-Seite für eine würfelkartierte Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`: Negative Y-Seite für eine würfelkartierte Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`: Positive Z-Seite für eine würfelkartierte Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`: Negative Z-Seite für eine würfelkartierte Textur.
- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das die Detailstufe angibt. Stufe 0 ist die Basisbildstufe und Stufe _n_ ist die n-te Mipmap-Reduktionsstufe.
- `xoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das den horizontalen Versatz innerhalb des Texturbildes angibt.
- `yoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das den vertikalen Versatz innerhalb des Texturbildes angibt.
- `x`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das die x-Koordinate der unteren linken Ecke angibt, an der das Kopieren beginnen soll.
- `y`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das die y-Koordinate der unteren linken Ecke angibt, an der das Kopieren beginnen soll.
- `width`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Breite der Textur in Texels angibt.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Höhe der Textur in Texels angibt.

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
