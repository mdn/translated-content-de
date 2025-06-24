---
title: "WebGL2RenderingContext: copyTexSubImage3D()-Methode"
short-title: copyTexSubImage3D()
slug: Web/API/WebGL2RenderingContext/copyTexSubImage3D
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.copyTexSubImage3D()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) kopiert Pixel vom aktuellen [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer) in ein bestehendes 3D-Textur-Subimage.

## Syntax

```js-nolint
copyTexSubImage3D(target, level, xoffset, yoffset, zoffset, x, y, width, height)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindungspunkt (Ziel) der aktiven Textur angibt.
    Mögliche Werte:
    - `gl.TEXTURE_3D`: Eine dreidimensionale Textur.
    - `gl.TEXTURE_2D_ARRAY`: Eine zweidimensionale Array-Textur.

- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Detailstufe angibt. Stufe 0 ist das Basisbildniveau und Stufe _n_ ist das n-te Mipmap-Reduktionsniveau.
- `xoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den x-Versatz innerhalb des Texturbildes angibt.
- `yoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den y-Versatz innerhalb des Texturbildes angibt.
- `zoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den z-Versatz innerhalb des Texturbildes angibt.
- `x`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die x-Koordinate der unteren linken Ecke angibt, von wo das Kopieren beginnt.
- `y`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die y-Koordinate der unteren linken Ecke angibt, von wo das Kopieren beginnt.
- `width`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Breite der Textur angibt.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Höhe der Textur angibt.

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
