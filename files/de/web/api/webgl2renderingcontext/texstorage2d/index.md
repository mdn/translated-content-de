---
title: "WebGL2RenderingContext: Methode texStorage2D()"
short-title: texStorage2D()
slug: Web/API/WebGL2RenderingContext/texStorage2D
l10n:
  sourceCommit: fe3f1f2dfaf44fcbe868b91b6a429270d2055716
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`texStorage2D()`**-Methode des [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) der [WebGL API](/de/docs/Web/API/WebGL_API) legt alle Ebenen der zweidimensionalen Texturspeicherung fest.

## Syntax

```js-nolint
texStorage2D(target, levels, internalformat, width, height)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindepunkt (Ziel) der aktiven Textur angibt. Mögliche Werte:
    - `gl.TEXTURE_2D`: Eine zweidimensionale Textur.
    - `gl.TEXTURE_CUBE_MAP`: Eine Würfelmap-Textur.
- `levels`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der Texturebenen angibt.
- `internalformat`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das Speicherformat der Textur angibt. Mögliche Werte:
    - `gl.R8`
    - `gl.R8_SNORM`
    - `gl.R16F`
    - `gl.R32F`
    - `gl.R8UI`
    - `gl.R8I`
    - `gl.R16UI`
    - `gl.R16I`
    - `gl.R32UI`
    - `gl.R32I`
    - `gl.RG8`
    - `gl.RG8_SNORM`
    - `gl.RG16F`
    - `gl.RG32F`
    - `gl.RG8UI`
    - `gl.RG8I`
    - `gl.RG16UI`
    - `gl.RG16I`
    - `gl.RG32UI`
    - `gl.RG32I`
    - `gl.RGB8`
    - `gl.SRGB8`
    - `gl.RGB565`
    - `gl.RGB8_SNORM`
    - `gl.R11F_G11F_B10F`
    - `gl.RGB9_E5`
    - `gl.RGB16F`
    - `gl.RGB32F`
    - `gl.RGB8UI`
    - `gl.RGB8I`
    - `gl.RGB16UI`
    - `gl.RGB16I`
    - `gl.RGB32UI`
    - `gl.RGB32I`
    - `gl.RGBA8`
    - `gl.SRGB8_ALPHA8`
    - `gl.RGBA8_SNORM`
    - `gl.RGB5_A1`
    - `gl.RGBA4`
    - `gl.RGB10_A2`
    - `gl.RGBA16F`
    - `gl.RGBA32F`
    - `gl.RGBA8UI`
    - `gl.RGBA8I`
    - `gl.RGB10_A2UI`
    - `gl.RGBA16UI`
    - `gl.RGBA16I`
    - `gl.RGBA32UI`
    - `gl.RGBA32I`
    - `gl.DEPTH_COMPONENT16`
    - `gl.DEPTH_COMPONENT24`
    - `gl.DEPTH_COMPONENT32F`
    - `gl.DEPTH24_STENCIL8`
    - `gl.DEPTH32F_STENCIL8`

    Im Gegensatz zu OpenGL 3.0 unterstützt WebGL 2 **nicht** die folgenden ETC2- und EAC-komprimierten Texturformate (siehe [Abschnitt 5.37](https://registry.khronos.org/webgl/specs/latest/2.0/#5.37) in der WebGL 2-Spezifikation). Es könnte jedoch möglich sein, sie über die [`WEBGL_compressed_texture_etc`](/de/docs/Web/API/WEBGL_compressed_texture_etc) Erweiterung zu aktivieren.
    - `gl.COMPRESSED_R11_EAC`
    - `gl.COMPRESSED_SIGNED_R11_EAC`
    - `gl.COMPRESSED_RG11_EAC`
    - `gl.COMPRESSED_SIGNED_RG11_EAC`
    - `gl.COMPRESSED_RGB8_ETC2`
    - `gl.COMPRESSED_SRGB8_ETC2`
    - `gl.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2`
    - `gl.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2`
    - `gl.COMPRESSED_RGBA8_ETC2_EAC`
    - `gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC`

    Für die Beschreibung dieser Formate siehe [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D). Da `texStorage2D` tatsächlich keine Pufferquelle angibt, sind die Parameter `format` und `type` irrelevant und können als beliebige der gültigen Werte bezüglich des `internalformat` betrachtet werden.

- `width`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Breite der Textur in Texeln angibt.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Höhe der Textur in Texeln angibt.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

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
