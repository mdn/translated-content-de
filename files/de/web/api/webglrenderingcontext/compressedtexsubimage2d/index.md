---
title: "WebGLRenderingContext: compressedTexSubImage2D() Methode"
short-title: compressedTexSubImage2D()
slug: Web/API/WebGLRenderingContext/compressedTexSubImage2D
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.compressedTexSubImage2D()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) legt ein zweidimensionales Unterrechteck für ein Texturbild in einem komprimierten Format fest.

Komprimierte Bildformate müssen durch [WebGL-Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) aktiviert werden, bevor diese Methode verwendet wird, oder es muss ein {{domxref("WebGL2RenderingContext")}} verwendet werden.

## Syntax

```js-nolint
// WebGL 1:
compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, srcData)

// Zusätzlich verfügbar im WebGL 2:
compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, imageSize, offset)
compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, srcData)
compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, srcData, srcOffset)
compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, srcData, srcOffset, srcLengthOverride)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das den Bindungspunkt (Target) der aktiven komprimierten Textur angibt. Mögliche Werte:

    - `gl.TEXTURE_2D`: Eine zweidimensionale Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_X`: Positive X-Fläche für eine würfelgemappte Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`: Negative X-Fläche für eine würfelgemappte Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`: Positive Y-Fläche für eine würfelgemappte Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`: Negative Y-Fläche für eine würfelgemappte Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`: Positive Z-Fläche für eine würfelgemappte Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`: Negative Z-Fläche für eine würfelgemappte Textur.

- `level`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, das das Detaillierungslevel angibt. Level 0 ist das Basisbildlevel und Level _n_ ist das n-te Mipmap-Reduktionslevel.
- `xoffset`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, das den horizontalen Versatz innerhalb des komprimierten Texturbilds angibt.
- `yoffset`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, das den vertikalen Versatz innerhalb des komprimierten Texturbilds angibt.
- `width`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, das die Breite der komprimierten Textur angibt.
- `height`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, das die Höhe der komprimierten Textur angibt.
- `format`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das das komprimierte Bildformat angibt. Komprimierte Bildformate müssen durch [WebGL-Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) aktiviert werden, bevor diese Methode verwendet wird. Mögliche Werte:

    - Bei Verwendung der {{domxref("WEBGL_compressed_texture_s3tc")}}-Erweiterung:

      - `ext.COMPRESSED_RGB_S3TC_DXT1_EXT`
      - `ext.COMPRESSED_RGBA_S3TC_DXT1_EXT`
      - `ext.COMPRESSED_RGBA_S3TC_DXT3_EXT`
      - `ext.COMPRESSED_RGBA_S3TC_DXT5_EXT`

    - Bei Verwendung der {{domxref("WEBGL_compressed_texture_s3tc_srgb")}}-Erweiterung:

      - `ext.COMPRESSED_SRGB_S3TC_DXT1_EXT`
      - `ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT`
      - `ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT`
      - `ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT`

    - Bei Verwendung der {{domxref("WEBGL_compressed_texture_etc")}}-Erweiterung:

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

    - Bei Verwendung der {{domxref("WEBGL_compressed_texture_pvrtc")}}-Erweiterung:

      - `ext.COMPRESSED_RGB_PVRTC_4BPPV1_IMG`
      - `ext.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG`
      - `ext.COMPRESSED_RGB_PVRTC_2BPPV1_IMG`
      - `ext.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG`

    - Bei Verwendung der {{domxref("WEBGL_compressed_texture_astc")}}-Erweiterung:

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

    - Bei Verwendung der {{domxref("EXT_texture_compression_bptc")}}-Erweiterung:

      - `ext.COMPRESSED_RGBA_BPTC_UNORM_EXT`
      - `ext.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT`
      - `ext.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT`
      - `ext.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT`

    - Bei Verwendung der {{domxref("EXT_texture_compression_rgtc")}}-Erweiterung:

      - `ext.COMPRESSED_RED_RGTC1_EXT`
      - `ext.COMPRESSED_SIGNED_RED_RGTC1_EXT`
      - `ext.COMPRESSED_RED_GREEN_RGTC2_EXT`
      - `ext.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT`

- `imageSize`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, das die Anzahl der Bytes angibt, die aus dem an `gl.PIXEL_UNPACK_BUFFER` gebundenen Puffer gelesen werden sollen.
- `offset`
  - : Ein {{domxref("WebGL_API/Types", "GLintptr")}}, das den Versatz in Bytes angibt, ab dem aus dem an `gl.PIXEL_UNPACK_BUFFER` gebundenen Puffer gelesen wird.
- `srcData`
  - : Ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, das als Datenspeicher für die komprimierten Bilddaten im Speicher dient.

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
- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
- {{domxref("WEBGL_compressed_texture_s3tc")}}
- {{domxref("WEBGL_compressed_texture_s3tc_srgb")}}
- {{domxref("WEBGL_compressed_texture_etc")}}
- {{domxref("WEBGL_compressed_texture_pvrtc")}}
- {{domxref("WEBGL_compressed_texture_astc")}}
- {{domxref("EXT_texture_compression_bptc")}}
- {{domxref("EXT_texture_compression_rgtc")}}
