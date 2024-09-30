---
title: "WebGLRenderingContext: copyTexSubImage2D() Methode"
short-title: copyTexSubImage2D()
slug: Web/API/WebGLRenderingContext/copyTexSubImage2D
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
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

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (target) der aktiven Textur angibt.
    Mögliche Werte:

    - `gl.TEXTURE_2D`: Eine zweidimensionale Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_X`: Positive X-Seite für eine Cube-Map-Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`: Negative X-Seite für eine Cube-Map-Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`: Positive Y-Seite für eine Cube-Map-Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`: Negative Y-Seite für eine Cube-Map-Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`: Positive Z-Seite für eine Cube-Map-Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`: Negative Z-Seite für eine Cube-Map-Textur.

- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der das Detaillevel angibt. Level 0 ist das Basisbild-Level und Level _n_ ist das n-te Mipmap-Reduktionslevel.
- `xoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den horizontalen Offset innerhalb des Texturbildes angibt.
- `yoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den vertikalen Offset innerhalb des Texturbildes angibt.
- `x`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die x-Koordinate der unteren linken Ecke angibt, wo das Kopieren beginnt.
- `y`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die y-Koordinate der unteren linken Ecke angibt, wo das Kopieren beginnt.
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
