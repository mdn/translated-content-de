---
title: "WebGL2RenderingContext: copyTexSubImage3D()-Methode"
short-title: copyTexSubImage3D()
slug: Web/API/WebGL2RenderingContext/copyTexSubImage3D
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.copyTexSubImage3D()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) kopiert Pixel vom aktuellen {{domxref("WebGLFramebuffer")}} in ein bestehendes 3D-Textur-Sub-Bild.

## Syntax

```js-nolint
copyTexSubImage3D(target, level, xoffset, yoffset, zoffset, x, y, width, height)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Anknüpfungspunkt (Ziel) der aktiven Textur angibt.
    Mögliche Werte:

    - `gl.TEXTURE_3D`: Eine dreidimensionale Textur.
    - `gl.TEXTURE_2D_ARRAY`: Eine zweidimensionale Array-Textur.

- `level`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der das Detailniveau angibt. Level 0 ist die Basisbildebene und Level _n_ ist das n-te Mipmap-Reduktionsniveau.
- `xoffset`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der den x-Versatz innerhalb des Texturbildes angibt.
- `yoffset`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der den y-Versatz innerhalb des Texturbildes angibt.
- `zoffset`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der den z-Versatz innerhalb des Texturbildes angibt.
- `x`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der die x-Koordinate der linken unteren Ecke angibt, an der das Kopieren begonnen wird.
- `y`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der die y-Koordinate der linken unteren Ecke angibt, an der das Kopieren begonnen wird.
- `width`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, der die Breite der Textur angibt.
- `height`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, der die Höhe der Textur angibt.

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

- {{domxref("WebGLRenderingContext.copyTexImage2D()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("WebGLRenderingContext.texSubImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
