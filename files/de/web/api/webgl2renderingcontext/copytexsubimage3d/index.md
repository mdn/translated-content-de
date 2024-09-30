---
title: "WebGL2RenderingContext: copyTexSubImage3D() Methode"
short-title: copyTexSubImage3D()
slug: Web/API/WebGL2RenderingContext/copyTexSubImage3D
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.copyTexSubImage3D()`** Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) kopiert Pixel vom aktuellen
[`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer) in ein bestehendes 3D-Textur-Unterbild.

## Syntax

```js-nolint
copyTexSubImage3D(target, level, xoffset, yoffset, zoffset, x, y, width, height)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindepunkt (Ziel) der aktiven Textur spezifiziert.
    Mögliche Werte:

    - `gl.TEXTURE_3D`: Eine dreidimensionale Textur.
    - `gl.TEXTURE_2D_ARRAY`: Eine zweidimensionale Array-Textur.

- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das das Detaillevel angibt. Level 0 ist das Basisbildlevel und Level _n_ ist das n-te Mipmap-Reduktionslevel.
- `xoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das den x-Offset innerhalb des Texturbildes spezifiziert.
- `yoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das den y-Offset innerhalb des Texturbildes spezifiziert.
- `zoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das den z-Offset innerhalb des Texturbildes spezifiziert.
- `x`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das die x-Koordinate der unteren linken Ecke angibt, an der mit dem Kopieren begonnen wird.
- `y`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das die y-Koordinate der unteren linken Ecke angibt, an der mit dem Kopieren begonnen wird.
- `width`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Breite der Textur spezifiziert.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Höhe der Textur spezifiziert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.copyTexSubImage3D(gl.TEXTURE_3D, 0, 0, 0, 0, 0, 0, 16, 16);
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
