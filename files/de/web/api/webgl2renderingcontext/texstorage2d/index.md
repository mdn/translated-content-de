---
title: "WebGL2RenderingContext: texStorage2D() Methode"
short-title: texStorage2D()
slug: Web/API/WebGL2RenderingContext/texStorage2D
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.texStorage2D()`**-Methode der
[WebGL-API](/de/docs/Web/API/WebGL_API) spezifiziert alle Ebenen des
zweidimensionalen Texturspeichers.

## Syntax

```js-nolint
texStorage2D(target, levels, internalformat, width, height)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindungspunkt (target) der aktiven Textur angibt.
    Mögliche Werte:
    - `gl.TEXTURE_2D`: Eine zweidimensionale Textur.
    - `gl.TEXTURE_CUBE_MAP`: Eine würfelgemappte Textur.

- `levels`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der Texturebenen angibt.
- `internalformat`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das Format des Texturspeichers angibt. Mögliche Werte:

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

    Im Gegensatz zu OpenGL 3.0 unterstützt WebGL 2 **nicht** die folgenden ETC2- und
    EAC-komprimierten Texturformate (siehe [Abschnitt 5.37](https://registry.khronos.org/webgl/specs/latest/2.0/#5.37) in der WebGL 2-Spezifikation). Möglicherweise können Sie sie jedoch über die
    [`WEBGL_compressed_texture_etc`](/de/docs/Web/API/WEBGL_compressed_texture_etc)-Erweiterung aktivieren.

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
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Breite der Textur angibt.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Höhe der Textur angibt.

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

- [`WebGL2RenderingContext.texStorage3D()`](/de/docs/Web/API/WebGL2RenderingContext/texStorage3D)
- [`WEBGL_compressed_texture_etc`](/de/docs/Web/API/WEBGL_compressed_texture_etc)
