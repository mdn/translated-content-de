---
title: "WebGLRenderingContext: Methode compressedTexImage2D()"
short-title: compressedTexImage2D()
slug: Web/API/WebGLRenderingContext/compressedTexImage2D
l10n:
  sourceCommit: 3f53e742b930faab90b9535c0fd4b75911351c81
---

{{APIRef("WebGL")}}

Die **`compressedTexImage2D()`** Methode des {{domxref("WebGLRenderingContext")}} Interfaces der [WebGL API](/de/docs/Web/API/WebGL_API) spezifiziert ein zweidimensionales Texturbild in einem komprimierten Format.

Komprimierte Bildformate müssen durch [WebGL-Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) aktiviert werden, bevor diese Methoden verwendet werden.

## Syntax

```js-nolint
// WebGL 1:
compressedTexImage2D(target, level, internalformat, width, height, border)
compressedTexImage2D(target, level, internalformat, width, height, border, pixels)

// Zusätzlich verfügbar in WebGL 2:
// Wird aus einem an gl.PIXEL_UNPACK_BUFFER gebundenen Puffer gelesen
compressedTexImage2D(target, level, internalformat, width, height, border, imageSize, offset)
compressedTexImage2D(target, level, internalformat, width, height, border, srcData)
compressedTexImage2D(target, level, internalformat, width, height, border, srcData, srcOffset)
compressedTexImage2D(target, level, internalformat, width, height, border, srcData, srcOffset, srcLengthOverride)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Bindungspunkt (target) der aktiven Textur spezifiziert. Mögliche Werte für `compressedTexImage2D`:

    - `gl.TEXTURE_2D`: Eine zweidimensionale Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_X`: Positive X-Fläche für eine würfelgemappte Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`: Negative X-Fläche für eine würfelgemappte Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`: Positive Y-Fläche für eine würfelgemappte Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`: Negative Y-Fläche für eine würfelgemappte Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`: Positive Z-Fläche für eine würfelgemappte Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`: Negative Z-Fläche für eine würfelgemappte Textur.

- `level`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der das Detaillierungsniveau angibt. Level 0 ist das Basisbildniveau und Level _n_ ist das n-te Mipmap-Reduktionsniveau.
- `internalformat`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der das komprimierte Bildformat spezifiziert. Komprimierte Bildformate müssen durch [WebGL-Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) aktiviert werden, bevor diese Methode verwendet wird. Alle Werte sind für `compressedTexImage2D` möglich. Mögliche Werte:

    - Beim Verwenden der {{domxref("WEBGL_compressed_texture_s3tc")}} Erweiterung:

      - `ext.COMPRESSED_RGB_S3TC_DXT1_EXT`
      - `ext.COMPRESSED_RGBA_S3TC_DXT1_EXT`
      - `ext.COMPRESSED_RGBA_S3TC_DXT3_EXT`
      - `ext.COMPRESSED_RGBA_S3TC_DXT5_EXT`

    - Beim Verwenden der {{domxref("WEBGL_compressed_texture_s3tc_srgb")}} Erweiterung:

      - `ext.COMPRESSED_SRGB_S3TC_DXT1_EXT`
      - `ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT`
      - `ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT`
      - `ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT`

    - Beim Verwenden der {{domxref("WEBGL_compressed_texture_etc")}} Erweiterung:

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

    - Beim Verwenden der {{domxref("WEBGL_compressed_texture_pvrtc")}} Erweiterung:

      - `ext.COMPRESSED_RGB_PVRTC_4BPPV1_IMG`
      - `ext.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG`
      - `ext.COMPRESSED_RGB_PVRTC_2BPPV1_IMG`
      - `ext.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG`

    - Beim Verwenden der {{domxref("WEBGL_compressed_texture_etc1")}} Erweiterung:

      - `ext.COMPRESSED_RGB_ETC1_WEBGL`

    - Beim Verwenden der {{domxref("WEBGL_compressed_texture_astc")}} Erweiterung:

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

    - Beim Verwenden der {{domxref("EXT_texture_compression_bptc")}} Erweiterung:

      - `ext.COMPRESSED_RGBA_BPTC_UNORM_EXT`
      - `ext.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT`
      - `ext.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT`
      - `ext.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT`

    - Beim Verwenden der {{domxref("EXT_texture_compression_rgtc")}} Erweiterung:

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
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, der die Anzahl der Bytes angibt, die aus dem an `gl.PIXEL_UNPACK_BUFFER` gebundenen Puffer gelesen werden sollen.
- `offset`
  - : Ein {{domxref("WebGL_API/Types", "GLintptr")}}, der den Offset in Bytes angibt, ab dem aus dem an `gl.PIXEL_UNPACK_BUFFER` gebundenen Puffer gelesen werden soll.
- `pixels`
  - : Ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, der als Datenspeicher für die komprimierten Bilddaten im Speicher verwendet wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const ext =
  gl.getExtension("WEBGL_compressed_texture_s3tc") ||
  gl.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
  gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");

const texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);
gl.compressedTexImage2D(
  gl.TEXTURE_2D,
  0,
  ext.COMPRESSED_RGBA_S3TC_DXT5_EXT,
  512,
  512,
  0,
  textureData,
);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebGL-Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions)
- {{domxref("WebGLRenderingContext.compressedTexSubImage2D()")}}
- {{domxref("WebGL2RenderingContext.compressedTexSubImage3D()")}}
- {{domxref("WebGL2RenderingContext.compressedTexImage3D()")}}
- {{domxref("WEBGL_compressed_texture_s3tc")}}
- {{domxref("WEBGL_compressed_texture_s3tc_srgb")}}
- {{domxref("WEBGL_compressed_texture_etc")}}
- {{domxref("WEBGL_compressed_texture_pvrtc")}}
- {{domxref("WEBGL_compressed_texture_etc1")}}
- {{domxref("WEBGL_compressed_texture_astc")}}
- {{domxref("EXT_texture_compression_bptc")}}
- {{domxref("EXT_texture_compression_rgtc")}}
