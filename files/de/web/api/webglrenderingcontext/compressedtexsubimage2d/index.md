---
title: "WebGLRenderingContext: Methode compressedTexSubImage2D()"
short-title: compressedTexSubImage2D()
slug: Web/API/WebGLRenderingContext/compressedTexSubImage2D
l10n:
  sourceCommit: fe3f1f2dfaf44fcbe868b91b6a429270d2055716
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`compressedTexSubImage2D()`**-Methode des [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)-Interfaces der [WebGL API](/de/docs/Web/API/WebGL_API) legt ein zweidimensionales Sub-Rechteck für ein Texturbild in einem komprimierten Format fest.

Komprimierte Bildformate sind nur über den [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) oder einige [WebGL-Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) verfügbar.

## Syntax

```js-nolint
// WebGL 1:
compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, srcData)

// Additionally available in WebGL 2:
compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, srcData, srcOffset)
compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, srcData, srcOffset, srcLengthOverride)
compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, imageSize, offset)
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
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das das Detailniveau angibt. Stufe 0 ist das Basisbildniveau und Stufe _n_ ist die n-te Mipmap-Reduktionsstufe.
- `xoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das den horizontalen Versatz innerhalb des komprimierten Texturbilds angibt.
- `yoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das den vertikalen Versatz innerhalb des komprimierten Texturbilds angibt.
- `width`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Breite der komprimierten Textur angibt.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Höhe der komprimierten Textur angibt.
- `format`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das komprimierte Bildformat angibt. Eine Liste möglicher Werte finden Sie unter [`WebGLRenderingContext.compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D).

Die Texturquelle kann auf zwei Arten bereitgestellt werden: aus einem {{jsxref("ArrayBuffer")}} (möglicherweise gemeinsam genutzt) unter Verwendung von `srcData`, `srcOffset` und `srcLengthOverride`; oder, in WebGL 2, aus `gl.PIXEL_UNPACK_BUFFER` unter Verwendung von `imageSize` und `offset`.

- `srcData`
  - : Ein {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, das die komprimierten Texturdaten enthält.
- `srcOffset` {{optional_inline}}
  - : (Nur WebGL 2) Ein Integer, der den Index von `srcData` angibt, ab dem gelesen werden soll. Standardwert ist `0`.
- `srcLengthOverride` {{optional_inline}}
  - : (Nur WebGL 2) Ein Integer, der die Anzahl der in `srcData` zu lesenden Elemente angibt. Standardwert ist `srcData.length - srcOffset`.
- `imageSize`
  - : (Nur WebGL 2) Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Größe der Bilddaten in Bytes angibt.
- `offset`
  - : (Nur WebGL 2) Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), der die Startadresse im Puffer angibt, der an `gl.PIXEL_UNPACK_BUFFER` gebunden ist.

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
- [`WebGL2RenderingContext.compressedTexSubImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/compressedTexSubImage3D)
- [`WebGL2RenderingContext.compressedTexImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/compressedTexImage3D)
- [`WEBGL_compressed_texture_s3tc`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc)
- [`WEBGL_compressed_texture_s3tc_srgb`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb)
- [`WEBGL_compressed_texture_etc`](/de/docs/Web/API/WEBGL_compressed_texture_etc)
- [`WEBGL_compressed_texture_pvrtc`](/de/docs/Web/API/WEBGL_compressed_texture_pvrtc)
- [`WEBGL_compressed_texture_astc`](/de/docs/Web/API/WEBGL_compressed_texture_astc)
- [`EXT_texture_compression_bptc`](/de/docs/Web/API/EXT_texture_compression_bptc)
- [`EXT_texture_compression_rgtc`](/de/docs/Web/API/EXT_texture_compression_rgtc)
