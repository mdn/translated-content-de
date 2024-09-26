---
title: "WebGL2RenderingContext: texStorage2D()-Methode"
short-title: texStorage2D()
slug: Web/API/WebGL2RenderingContext/texStorage2D
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.texStorage2D()`** Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) spezifiziert alle Ebenen der
zweidimensionalen Texturspeicherung.

## Syntax

```js-nolint
texStorage2D(target, levels, internalformat, width, height)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Bindungspunkt (Ziel) der aktiven Textur angibt. Mögliche Werte:

    - `gl.TEXTURE_2D`: Eine zweidimensionale Textur.
    - `gl.TEXTURE_CUBE_MAP`: Eine würfelförmige Textur.

- `levels`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der die Anzahl der Texturebenen angibt.
- `internalformat`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der das Speicherformat der Textur angibt. Mögliche Werte:

    - `gl.R8`
    - `gl.R16F`
    - `gl.R32F`
    - `gl.R8UI`
    - `gl.RG8`
    - `gl.RG16F`
    - `gl.RG32F`
    - `gl.RG8UI`
    - `gl.RGB8`
    - `gl.SRGB8`
    - `gl.RGB565`
    - `gl.R11F_G11F_B10F`
    - `gl.RGB9_E5`
    - `gl.RGB16F`
    - `gl.RGB32F`
    - `gl.RGB8UI`
    - `gl.RGBA8`
    - `gl.SRGB8_ALPHA8`
    - `gl.RGB5_A1`
    - `gl.RGBA4`
    - `gl.RGBA16F`
    - `gl.RGBA32F`
    - `gl.RGBA8UI`

    Im Gegensatz zu OpenGL 3.0 unterstützt WebGL 2 **nicht** die folgenden ETC2- und EAC-komprimierten Texturformate (siehe [Abschnitt 5.37](https://registry.khronos.org/webgl/specs/latest/2.0/#5.37) in der WebGL 2-Spezifikation). Sie könnten jedoch möglicherweise über die {{domxref("WEBGL_compressed_texture_etc")}}-Erweiterung aktiviert werden.

    - `gl.COMPRESSED_R11_EAC`
    - `gl.COMPRESSED_SIGNED_R11_EAC`
    - `gl.COMPRESSED_RG11_EAC`
    - `gl.COMPRESSED_SIGNED_RG11_EAC`
    - `gl.COMPRESSED_RGB8_ETC2`
    - `gl.COMPRESSED_RGBA8_ETC2_EAC`
    - `gl.COMPRESSED_SRGB8_ETC2`
    - `gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC`
    - `gl.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2`
    - `gl.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2`

- `width`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, der die Breite der Textur angibt.
- `height`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, der die Höhe der Textur angibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.texStorage2D(gl.TEXTURE_2D, 1, gl.RGB8, 256, 256);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGL2RenderingContext.texStorage3D()")}}
- {{domxref("WEBGL_compressed_texture_etc")}}