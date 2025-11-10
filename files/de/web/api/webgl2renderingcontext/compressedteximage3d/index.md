---
title: "WebGL2RenderingContext: Methode compressedTexImage3D()"
short-title: compressedTexImage3D()
slug: Web/API/WebGL2RenderingContext/compressedTexImage3D
l10n:
  sourceCommit: fe3f1f2dfaf44fcbe868b91b6a429270d2055716
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`compressedTexImage3D()`**-Methode des [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)-Interfaces der [WebGL API](/de/docs/Web/API/WebGL_API) spezifiziert ein dreidimensionales Texturbild in einem komprimierten Format.

## Syntax

```js-nolint
compressedTexImage3D(target, level, internalformat, width, height, depth, border, imageSize, offset)

compressedTexImage3D(target, level, internalformat, width, height, depth, border, srcData)
compressedTexImage3D(target, level, internalformat, width, height, depth, border, srcData, srcOffset)
compressedTexImage3D(target, level, internalformat, width, height, depth, border, srcData, srcOffset, srcLengthOverride)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindungspunkt (target) der aktiven komprimierten Textur spezifiziert. Mögliche Werte:
    - `gl.TEXTURE_3D`: Eine dreidimensionale Textur.
    - `gl.TEXTURE_2D_ARRAY`: Eine zweidimensionale Array-Textur.
- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der das Detaillierungsniveau angibt. Level 0 ist das Basisbildniveau und Level _n_ ist das n-te Mipmap-Reduktionsniveau.
- `internalformat`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das komprimierte Bildformat angibt. Eine Liste der möglichen Werte finden Sie unter [`WebGLRenderingContext.compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D).
- `width`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Breite der Textur in Texeln angibt.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Höhe der Textur in Texeln angibt.
- `depth`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Tiefe der Textur/ die Anzahl der Texturen in einem `TEXTURE_2D_ARRAY` angibt.
- `border`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Breite des Randes angibt. Muss 0 sein.

Die Texturquelle kann auf zwei Arten bereitgestellt werden: aus einem {{jsxref("ArrayBuffer")}} (möglicherweise gemeinsam genutzt) unter Verwendung von `srcData`, `srcOffset` und `srcLengthOverride`; oder aus `gl.PIXEL_UNPACK_BUFFER` unter Verwendung von `imageSize` und `offset`.

- `srcData`
  - : Ein {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, das die komprimierten Texturdaten enthält.
- `srcOffset` {{optional_inline}}
  - : Ein Integer, der den Index von `srcData` angibt, ab dem gelesen werden soll. Standardmäßig `0`.
- `srcLengthOverride` {{optional_inline}}
  - : Ein Integer, der die Anzahl der in `srcData` zu lesenden Elemente angibt. Standardmäßig `srcData.length - srcOffset`.
- `imageSize`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Größe der Bilddaten in Bytes angibt.
- `offset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), der die Anfangsadresse im Puffer angibt, der an `gl.PIXEL_UNPACK_BUFFER` gebunden ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebGL-Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions)
- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
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
