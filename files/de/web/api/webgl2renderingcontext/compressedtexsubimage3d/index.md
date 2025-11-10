---
title: "WebGL2RenderingContext: compressedTexSubImage3D() Methode"
short-title: compressedTexSubImage3D()
slug: Web/API/WebGL2RenderingContext/compressedTexSubImage3D
l10n:
  sourceCommit: fe3f1f2dfaf44fcbe868b91b6a429270d2055716
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`compressedTexSubImage3D()`** Methode des [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) Interfaces der [WebGL API](/de/docs/Web/API/WebGL_API) spezifiziert ein dreidimensionales Unterrechteck für ein Texturbild in einem komprimierten Format.

Komprimierte Bildformate sind nur über einige [WebGL-Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) verfügbar.

## Syntax

```js-nolint
compressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, offset)

compressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, srcData)
compressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, srcData, srcOffset)
compressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, srcData, srcOffset, srcLengthOverride)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindungspunkt (das Ziel) der aktiven komprimierten Textur angibt. Mögliche Werte:
    - `gl.TEXTURE_3D`: Eine dreidimensionale Textur.
    - `gl.TEXTURE_2D_ARRAY`: Eine zweidimensionale Array-Textur.
- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Detailstufe angibt. Stufe 0 ist die Basisebene des Bildes und Stufe _n_ ist die n-te Mipmap-Reduktionsstufe.
- `xoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den x-Offset innerhalb des komprimierten Texturbildes angibt.
- `yoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den y-Offset innerhalb des komprimierten Texturbildes angibt.
- `zoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den z-Offset innerhalb des komprimierten Texturbildes angibt.
- `width`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Breite der komprimierten Textur in Texeln angibt.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Höhe der komprimierten Textur in Texeln angibt.
- `depth`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Tiefe der Textur/der Anzahl der Texturen in einem `TEXTURE_2D_ARRAY` angibt.
- `format`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das Format des komprimierten Bildes angibt. Eine Liste möglicher Werte finden Sie unter [`WebGLRenderingContext.compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D).

Die Texturquelle kann auf zwei Arten bereitgestellt werden: aus einem {{jsxref("ArrayBuffer")}} (möglicherweise geteilt) mit `srcData`, `srcOffset` und `srcLengthOverride`; oder, in WebGL 2, aus `gl.PIXEL_UNPACK_BUFFER` mit `imageSize` und `offset`.

- `srcData`
  - : Ein {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, das die komprimierten Texturdaten enthält.
- `srcOffset` {{optional_inline}}
  - : Ein Integer, der den Index von `srcData` angibt, ab dem gelesen werden soll. Standard ist `0`.
- `srcLengthOverride` {{optional_inline}}
  - : Ein Integer, der die Anzahl der zu lesenden Elemente in `srcData` angibt. Standard ist `srcData.length - srcOffset`.
- `imageSize`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Größe der Bilddaten in Bytes angibt.
- `offset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), der die Startadresse im Puffer angibt, der an `gl.PIXEL_UNPACK_BUFFER` gebunden ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.compressedTexSubImage3D(
  gl.TEXTURE_3D,
  0,
  0,
  0,
  512,
  512,
  512,
  gl.COMPRESSED_R11_EAC,
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
- [`WebGLRenderingContext.compressedTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D)
- [`WebGL2RenderingContext.compressedTexImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/compressedTexImage3D)
- [`WEBGL_compressed_texture_s3tc`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc)
- [`WEBGL_compressed_texture_s3tc_srgb`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb)
- [`WEBGL_compressed_texture_etc`](/de/docs/Web/API/WEBGL_compressed_texture_etc)
- [`WEBGL_compressed_texture_pvrtc`](/de/docs/Web/API/WEBGL_compressed_texture_pvrtc)
- [`WEBGL_compressed_texture_astc`](/de/docs/Web/API/WEBGL_compressed_texture_astc)
- [`EXT_texture_compression_bptc`](/de/docs/Web/API/EXT_texture_compression_bptc)
- [`EXT_texture_compression_rgtc`](/de/docs/Web/API/EXT_texture_compression_rgtc)
