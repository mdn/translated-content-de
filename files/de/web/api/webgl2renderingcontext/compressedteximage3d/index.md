---
title: "WebGL2RenderingContext: compressedTexImage3D()-Methode"
short-title: compressedTexImage3D()
slug: Web/API/WebGL2RenderingContext/compressedTexImage3D
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`compressedTexImage3D()`**-Methode des [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)-Interfaces der [WebGL API](/de/docs/Web/API/WebGL_API) spezifiziert ein dreidimensionales Texturbild in einem komprimierten Format.

Komprimierte Bildformate müssen durch [WebGL-Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) aktiviert werden, bevor diese Methoden verwendet werden können.

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

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Ziel) der aktiven Textur angibt.
    Mögliche Werte für `compressedTexImage3D`:
    - `gl.TEXTURE_2D_ARRAY`
    - `gl.TEXTURE_3D`

- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das das Detaillierungsgradniveau angibt. Level 0 ist das Basisbildniveau und Level _n_ ist die n-te Mipmap-Reduktionsstufe.
- `internalformat`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das komprimierte Bildformat angibt. Komprimierte Bildformate müssen durch [WebGL-Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) aktiviert werden, bevor diese Methode verwendet werden kann. Siehe [komprimierte Texturformate](/de/docs/Web/API/WebGL_API/Compressed_texture_formats) für gültige Formate für `compressedTexImage3D`. Mögliche Werte:

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

    - Bei Verwendung der [`WEBGL_compressed_texture_etc1`](/de/docs/Web/API/WEBGL_compressed_texture_etc1)-Erweiterung:

      - `ext.COMPRESSED_RGB_ETC1_WEBGL`

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

- `width`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Breite der Textur angibt.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Höhe der Textur angibt.
- `depth`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Tiefe der Textur bzw. die Anzahl der Texturen in einem `TEXTURE_2D_ARRAY` angibt.
- `border`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das die Breite des Randes angibt. Muss 0 sein.
- `imageSize`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der Bytes angibt, die aus dem an `gl.PIXEL_UNPACK_BUFFER` gebundenen Puffer gelesen werden sollen.
- `offset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), der den Offset in Bytes angibt, von dem aus aus dem an `gl.PIXEL_UNPACK_BUFFER` gebundenen Puffer gelesen werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebGL-Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions)
- [`WebGL2RenderingContext.compressedTexSubImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/compressedTexSubImage3D)
- [`WebGLRenderingContext.compressedTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D)
- [`WebGLRenderingContext.compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D)
- [`WEBGL_compressed_texture_s3tc`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc)
- [`WEBGL_compressed_texture_s3tc_srgb`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb)
- [`WEBGL_compressed_texture_etc`](/de/docs/Web/API/WEBGL_compressed_texture_etc)
- [`WEBGL_compressed_texture_pvrtc`](/de/docs/Web/API/WEBGL_compressed_texture_pvrtc)
- [`WEBGL_compressed_texture_etc1`](/de/docs/Web/API/WEBGL_compressed_texture_etc1)
- [`WEBGL_compressed_texture_astc`](/de/docs/Web/API/WEBGL_compressed_texture_astc)
- [`EXT_texture_compression_bptc`](/de/docs/Web/API/EXT_texture_compression_bptc)
- [`EXT_texture_compression_rgtc`](/de/docs/Web/API/EXT_texture_compression_rgtc)
