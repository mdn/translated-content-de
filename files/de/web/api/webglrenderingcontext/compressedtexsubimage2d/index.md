---
title: "WebGLRenderingContext: compressedTexSubImage2D() Methode"
short-title: compressedTexSubImage2D()
slug: Web/API/WebGLRenderingContext/compressedTexSubImage2D
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.compressedTexSubImage2D()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) legt ein zweidimensionales Unterrechteck für ein Texturbild in einem komprimierten Format fest.

Komprimierte Bildformate müssen durch [WebGL Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) aktiviert werden, bevor diese Methode verwendet wird, oder es muss ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) verwendet werden.

## Syntax

```js-nolint
// WebGL 1:
compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, srcData)

// Additionally available in WebGL 2:
compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, imageSize, offset)
compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, srcData)
compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, srcData, srcOffset)
compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, srcData, srcOffset, srcLengthOverride)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Ziel) der aktiven komprimierten Textur angibt. Mögliche Werte:

    - `gl.TEXTURE_2D`: Eine zweidimensionale Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_X`: Positive X-Seite für eine würfelgemappte Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`: Negative X-Seite für eine würfelgemappte Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`: Positive Y-Seite für eine würfelgemappte Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`: Negative Y-Seite für eine würfelgemappte Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`: Positive Z-Seite für eine würfelgemappte Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`: Negative Z-Seite für eine würfelgemappte Textur.

- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der das Detailniveau angibt. Level 0 ist das Basisebenenbild und Level _n_ ist das n-te Mipmap-Reduktionslevel.
- `xoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das den horizontalen Versatz innerhalb des komprimierten Texturbildes angibt.
- `yoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das den vertikalen Versatz innerhalb des komprimierten Texturbildes angibt.
- `width`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Breite der komprimierten Textur angibt.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Höhe der komprimierten Textur angibt.
- `format`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das komprimierte Bildformat angibt. Komprimierte Bildformate müssen durch [WebGL Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) aktiviert werden, bevor diese Methode verwendet wird. Mögliche Werte:

    - Bei Verwendung der [`WEBGL_compressed_texture_s3tc`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc)-Erweiterung:

      - `ext.COMPRESSED_RGB_S3TC_DXT1_EXT`
      - `ext.COMPRESSED_RGBA_S3TC_DXT1_EXT`
      - `ext.COMPRESSED_RGBA_S3TC_DXT3_EXT`
      - `ext.COMPRESSED_RGBA_S3TC_DXT5_EXT`

    - Bei Verwendung der [`WEBGL_compressed_texture_s3tc_srgb`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb)-Erweiterung:

      - `ext.COMPRESSED_SRGB_S3TC_DXT1_EXT`
      - `ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT`
      - `ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT`
      - `ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT`

    - Bei Verwendung der [`WEBGL_compressed_texture_etc`](/de/docs/Web/API/WEBGL_compressed_texture_etc)-Erweiterung:

      - `ext.COMPRESSED_R11_EAC`
      - `ext.COMPRESSED_SIGNED_R11_EAC`
      - `ext.COMPRESSED_RG11_EAC`
      - `ext.COMPRESSED_SIGNED_RG11_EAC`
      - `ext.COMPRESSED_RGB8_ETC2`
      - `ext.COMPRESSED_RGBA8_ETC2_EAC`
      - `ext.COMPRESSED_SRGB8_ETC2`
      - `ext.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC`
      - `ext.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2`
      - `ext.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2`

    - Bei Verwendung der [`WEBGL_compressed_texture_pvrtc`](/de/docs/Web/API/WEBGL_compressed_texture_pvrtc)-Erweiterung:

      - `ext.COMPRESSED_RGB_PVRTC_4BPPV1_IMG`
      - `ext.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG`
      - `ext.COMPRESSED_RGB_PVRTC_2BPPV1_IMG`
      - `ext.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG`

    - Bei Verwendung der [`WEBGL_compressed_texture_astc`](/de/docs/Web/API/WEBGL_compressed_texture_astc)-Erweiterung:

      - `ext.COMPRESSED_RGBA_ASTC_4x4_KHR ext.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_5x4_KHR ext.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_5x5_KHR ext.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_6x5_KHR ext.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_6x6_KHR ext.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_8x5_KHR ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_8x6_KHR ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_8x8_KHR ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_10x5_KHR ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_10x6_KHR ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_10x6_KHR ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_10x10_KHR ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_12x10_KHR ext.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_12x12_KHR ext.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR`

    - Bei Verwendung der [`EXT_texture_compression_bptc`](/de/docs/Web/API/EXT_texture_compression_bptc)-Erweiterung:

      - `ext.COMPRESSED_RGBA_BPTC_UNORM_EXT`
      - `ext.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT`
      - `ext.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT`
      - `ext.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT`

    - Bei Verwendung der [`EXT_texture_compression_rgtc`](/de/docs/Web/API/EXT_texture_compression_rgtc)-Erweiterung:

      - `ext.COMPRESSED_RED_RGTC1_EXT`
      - `ext.COMPRESSED_SIGNED_RED_RGTC1_EXT`
      - `ext.COMPRESSED_RED_GREEN_RGTC2_EXT`
      - `ext.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT`

- `imageSize`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der Bytes angibt, die aus dem an `gl.PIXEL_UNPACK_BUFFER` gebundenen Puffer gelesen werden sollen.
- `offset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), der den Offset in Bytes angibt, ab dem aus dem an `gl.PIXEL_UNPACK_BUFFER` gebundenen Puffer gelesen werden soll.
- `srcData`
  - : Ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, der als Datenspeicher für die komprimierten Bilddaten im Speicher verwendet wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const ext =
  gl.getExtension("WEBGL_compressed_texture_s3tc") ||
  gl.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
  gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
gl.compressedTexSubImage2D(
  gl.TEXTURE_2D,
  0,
  256,
  256,
  512,
  512,
  ext.COMPRESSED_RGBA_S3TC_DXT5_EXT,
  textureData,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebGL-Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions)
- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLRenderingContext.compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D)
- [`WEBGL_compressed_texture_s3tc`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc)
- [`WEBGL_compressed_texture_s3tc_srgb`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb)
- [`WEBGL_compressed_texture_etc`](/de/docs/Web/API/WEBGL_compressed_texture_etc)
- [`WEBGL_compressed_texture_pvrtc`](/de/docs/Web/API/WEBGL_compressed_texture_pvrtc)
- [`WEBGL_compressed_texture_astc`](/de/docs/Web/API/WEBGL_compressed_texture_astc)
- [`EXT_texture_compression_bptc`](/de/docs/Web/API/EXT_texture_compression_bptc)
- [`EXT_texture_compression_rgtc`](/de/docs/Web/API/EXT_texture_compression_rgtc)
