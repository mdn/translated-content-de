---
title: "WebGL2RenderingContext: compressedTexImage3D()-Methode"
short-title: compressedTexImage3D()
slug: Web/API/WebGL2RenderingContext/compressedTexImage3D
l10n:
  sourceCommit: 3f53e742b930faab90b9535c0fd4b75911351c81
---

{{APIRef("WebGL")}}

Die **`compressedTexImage3D()`**-Methode der {{domxref("WebGL2RenderingContext")}}-Schnittstelle der [WebGL API](/de/docs/Web/API/WebGL_API) legt ein dreidimensionales Texturbild in einem komprimierten Format fest.

Komprimierte Bildformate müssen durch [WebGL-Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) aktiviert werden, bevor diese Methoden verwendet werden.

## Syntax

```js-nolint
// read from buffer bound to gl.PIXEL_UNPACK_BUFFER
compressedTexImage3D(target, level, internalformat, width, height, depth, border, imageSize, offset)

compressedTexImage3D(target, level, internalformat, width, height, depth, border, srcData)
compressedTexImage3D(target, level, internalformat, width, height, depth, border, srcData, srcOffset)
compressedTexImage3D(target, level, internalformat, width, height, depth, border, srcData, srcOffset, srcLengthOverride)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Bindepunkt (Target) der aktiven Textur angibt.
    Mögliche Werte für `compressedTexImage3D`:

    - `gl.TEXTURE_2D_ARRAY`
    - `gl.TEXTURE_3D`

- `level`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der das Detaillevel angibt. Level 0 ist das Basisbildlevel und Level _n_ ist das n-te Mipmap-Reduktionslevel.
- `internalformat`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der das komprimierte Bildformat angibt. Komprimierte Bildformate müssen durch [WebGL-Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) aktiviert werden, bevor diese Methode verwendet wird. Siehe [komprimierte Texturformate](/de/docs/Web/API/WebGL_API/Compressed_texture_formats) für gültige Formate für `compressedTexImage3D`. Mögliche Werte:

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

    - Bei Verwendung der {{domxref("WEBGL_compressed_texture_etc1")}}-Erweiterung:

      - `ext.COMPRESSED_RGB_ETC1_WEBGL`

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

- `width`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, der die Breite der Textur angibt.
- `height`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, der die Höhe der Textur angibt.
- `depth`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, der die Tiefe der Textur/die Anzahl der Texturen in einem `TEXTURE_2D_ARRAY` angibt.
- `border`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der die Breite des Rands angibt. Muss 0 sein.
- `imageSize`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, der die Anzahl der Bytes angibt, die aus dem Puffer gelesen werden sollen, der an `gl.PIXEL_UNPACK_BUFFER` gebunden ist.
- `offset`
  - : Ein {{domxref("WebGL_API/Types", "GLintptr")}}, der den Versatz in Bytes angibt, ab dem aus dem Puffer gelesen werden soll, der an `gl.PIXEL_UNPACK_BUFFER` gebunden ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebGL-Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions)
- {{domxref("WebGL2RenderingContext.compressedTexSubImage3D()")}}
- {{domxref("WebGLRenderingContext.compressedTexSubImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
- {{domxref("WEBGL_compressed_texture_s3tc")}}
- {{domxref("WEBGL_compressed_texture_s3tc_srgb")}}
- {{domxref("WEBGL_compressed_texture_etc")}}
- {{domxref("WEBGL_compressed_texture_pvrtc")}}
- {{domxref("WEBGL_compressed_texture_etc1")}}
- {{domxref("WEBGL_compressed_texture_astc")}}
- {{domxref("EXT_texture_compression_bptc")}}
- {{domxref("EXT_texture_compression_rgtc")}}
