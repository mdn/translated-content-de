---
title: "WebGL2RenderingContext: copyTexSubImage3D() Methode"
short-title: copyTexSubImage3D()
slug: Web/API/WebGL2RenderingContext/copyTexSubImage3D
l10n:
  sourceCommit: fe3f1f2dfaf44fcbe868b91b6a429270d2055716
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`copyTexSubImage3D()`** Methode des [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) Schnittstelle der [WebGL API](/de/docs/Web/API/WebGL_API) kopiert Pixel vom aktuellen [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer) in ein 3D-Textur-Sub-Image.

## Syntax

```js-nolint
copyTexSubImage3D(target, level, xoffset, yoffset, zoffset, x, y, width, height)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindepunkt (Target) der aktiven Textur angibt. Mögliche Werte:
    - `gl.TEXTURE_3D`: Eine dreidimensionale Textur.
    - `gl.TEXTURE_2D_ARRAY`: Eine zweidimensionale Array-Textur.
- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Detailstufe angibt. Level 0 ist die Basisbildstufe und Level _n_ ist die n-te Mipmap-Reduktionsstufe.
- `xoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den x-Versatz innerhalb des Texturbildes angibt.
- `yoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den y-Versatz innerhalb des Texturbildes angibt.
- `zoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den z-Versatz innerhalb des Texturbildes angibt.
- `x`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die x-Koordinate der unteren linken Ecke angibt, von der das Kopieren begonnen wird.
- `y`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die y-Koordinate der unteren linken Ecke angibt, von der das Kopieren begonnen wird.
- `width`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Breite der Textur in Texeln angibt.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Höhe der Textur in Texeln angibt.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

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
