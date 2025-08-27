---
title: "WebGLRenderingContext: Methode compressedTexImage2D()"
short-title: compressedTexImage2D()
slug: Web/API/WebGLRenderingContext/compressedTexImage2D
l10n:
  sourceCommit: fe3f1f2dfaf44fcbe868b91b6a429270d2055716
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`compressedTexImage2D()`** Methode des [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)-Interfaces der [WebGL API](/de/docs/Web/API/WebGL_API) legt ein zweidimensionales Texturbild in einem komprimierten Format fest.

Komprimierte Bildformate sind nur über den [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) oder einige [WebGL-Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) verfügbar.

## Syntax

```js-nolint
// WebGL 1:
compressedTexImage2D(target, level, internalformat, width, height, border, srcData)

// Additionally available in WebGL 2:
compressedTexImage2D(target, level, internalformat, width, height, border, srcData, srcOffset)
compressedTexImage2D(target, level, internalformat, width, height, border, srcData, srcOffset, srcLengthOverride)
compressedTexImage2D(target, level, internalformat, width, height, border, imageSize, offset)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindungspunkt (Ziel) der aktiven komprimierten Textur angibt. Mögliche Werte:
    - `gl.TEXTURE_2D`: Eine zweidimensionale Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_X`: Positive X-Fläche für eine würfelgemappte Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`: Negative X-Fläche für eine würfelgemappte Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`: Positive Y-Fläche für eine würfelgemappte Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`: Negative Y-Fläche für eine würfelgemappte Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`: Positive Z-Fläche für eine würfelgemappte Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`: Negative Z-Fläche für eine würfelgemappte Textur.
- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Detailstufe angibt. Stufe 0 ist die Basisbildstufe und Stufe _n_ ist die n-te Mipmap-Reduktionsstufe.
- `internalformat`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das komprimierte Bildformat angibt. Komprimierte Bildformate sind nur über den [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) oder einige [WebGL-Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) verfügbar. Mögliche Werte:
    - Bei Verwendung von [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext):
      - `gl.GL_COMPRESSED_R11_EAC`
      - `gl.GL_COMPRESSED_SIGNED_R11_EAC`
      - `gl.GL_COMPRESSED_RG11_EAC`
      - `gl.GL_COMPRESSED_SIGNED_RG11_EAC`
      - `gl.GL_COMPRESSED_RGB8_ETC2`
      - `gl.GL_COMPRESSED_SRGB8_ETC2`
      - `gl.GL_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2`
      - `gl.GL_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2`
      - `gl.GL_COMPRESSED_RGBA8_ETC2_EAC`
      - `gl.GL_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC`

    - Bei Verwendung der [`WEBGL_compressed_texture_s3tc`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc) Erweiterung:
      - `ext.COMPRESSED_RGB_S3TC_DXT1_EXT`
      - `ext.COMPRESSED_RGBA_S3TC_DXT1_EXT`
      - `ext.COMPRESSED_RGBA_S3TC_DXT3_EXT`
      - `ext.COMPRESSED_RGBA_S3TC_DXT5_EXT`

    - Bei Verwendung der [`WEBGL_compressed_texture_s3tc_srgb`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb) Erweiterung:
      - `ext.COMPRESSED_SRGB_S3TC_DXT1_EXT`
      - `ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT`
      - `ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT`
      - `ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT`

    - Bei Verwendung der [`WEBGL_compressed_texture_etc`](/de/docs/Web/API/WEBGL_compressed_texture_etc) Erweiterung:
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

    - Bei Verwendung der [`WEBGL_compressed_texture_pvrtc`](/de/docs/Web/API/WEBGL_compressed_texture_pvrtc) Erweiterung:
      - `ext.COMPRESSED_RGB_PVRTC_4BPPV1_IMG`
      - `ext.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG`
      - `ext.COMPRESSED_RGB_PVRTC_2BPPV1_IMG`
      - `ext.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG`

    - Bei Verwendung der [`WEBGL_compressed_texture_etc1`](/de/docs/Web/API/WEBGL_compressed_texture_etc1) Erweiterung:
      - `ext.COMPRESSED_RGB_ETC1_WEBGL`

    - Bei Verwendung der [`WEBGL_compressed_texture_astc`](/de/docs/Web/API/WEBGL_compressed_texture_astc) Erweiterung:
      - `ext.COMPRESSED_RGBA_ASTC_4x4_KHR`, `ext.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_5x4_KHR`, `ext.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_5x5_KHR`, `ext.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_6x5_KHR`, `ext.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_6x6_KHR`, `ext.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_8x5_KHR`, `ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_8x6_KHR`, `ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_8x8_KHR`, `ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_10x5_KHR`, `ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_10x6_KHR`, `ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_10x6_KHR`, `ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_10x10_KHR`, `ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_12x10_KHR`, `ext.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_12x12_KHR`, `ext.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR`

    - Bei Verwendung der [`EXT_texture_compression_bptc`](/de/docs/Web/API/EXT_texture_compression_bptc) Erweiterung:
      - `ext.COMPRESSED_RGBA_BPTC_UNORM_EXT`
      - `ext.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT`
      - `ext.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT`
      - `ext.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT`

    - Bei Verwendung der [`EXT_texture_compression_rgtc`](/de/docs/Web/API/EXT_texture_compression_rgtc) Erweiterung:
      - `ext.COMPRESSED_RED_RGTC1_EXT`
      - `ext.COMPRESSED_SIGNED_RED_RGTC1_EXT`
      - `ext.COMPRESSED_RED_GREEN_RGTC2_EXT`
      - `ext.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT`

- `width`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Breite der Textur in Texeln angibt.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Höhe der Textur in Texeln angibt.
- `depth`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Tiefe der Textur/die Anzahl der Texturen in einem `TEXTURE_2D_ARRAY` angibt.
- `border`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Breite des Rands angibt. Muss 0 sein.

Die Texturquelle kann auf zwei Arten bereitgestellt werden: von einem {{jsxref("ArrayBuffer")}} (möglicherweise geteilt) unter Verwendung von `srcData`, `srcOffset` und `srcLengthOverride`; oder in WebGL 2, von `gl.PIXEL_UNPACK_BUFFER` unter Verwendung von `imageSize` und `offset`.

- `srcData`
  - : Ein {{jsxref("TypedArray")}} oder {{jsxref("DataView")}} mit den komprimierten Texturdaten.
- `srcOffset` {{optional_inline}}
  - : (Nur WebGL 2) Ein ganzzahliger Wert, der den Index von `srcData` angibt, ab dem gelesen werden soll. Standardwert ist `0`.
- `srcLengthOverride` {{optional_inline}}
  - : (Nur WebGL 2) Ein ganzzahliger Wert, der die Anzahl der Elemente in `srcData` angibt, die gelesen werden sollen. Standardwert ist `srcData.length - srcOffset`.
- `imageSize`
  - : (Nur WebGL 2) Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Größe der Bilddaten in Bytes angibt.
- `offset`
  - : (Nur WebGL 2) Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), der die Startadresse im an `gl.PIXEL_UNPACK_BUFFER` gebundenen Puffer angibt.

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
- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLRenderingContext.compressedTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D)
- [`WebGL2RenderingContext.compressedTexSubImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/compressedTexSubImage3D)
- [`WebGL2RenderingContext.compressedTexImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/compressedTexImage3D)
- [`WEBGL_compressed_texture_s3tc`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc)
- [`WEBGL_compressed_texture_s3tc_srgb`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb)
- [`WEBGL_compressed_texture_etc`](/de/docs/Web/API/WEBGL_compressed_texture_etc)
- [`WEBGL_compressed_texture_pvrtc`](/de/docs/Web/API/WEBGL_compressed_texture_pvrtc)
- [`WEBGL_compressed_texture_etc1`](/de/docs/Web/API/WEBGL_compressed_texture_etc1)
- [`WEBGL_compressed_texture_astc`](/de/docs/Web/API/WEBGL_compressed_texture_astc)
- [`EXT_texture_compression_bptc`](/de/docs/Web/API/EXT_texture_compression_bptc)
- [`EXT_texture_compression_rgtc`](/de/docs/Web/API/EXT_texture_compression_rgtc)
