---
title: "WebGL2RenderingContext: texImage3D()-Methode"
short-title: texImage3D()
slug: Web/API/WebGL2RenderingContext/texImage3D
l10n:
  sourceCommit: fe3f1f2dfaf44fcbe868b91b6a429270d2055716
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`texImage3D()`**-Methode der Schnittstelle [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) des [WebGL-API](/de/docs/Web/API/WebGL_API) legt ein dreidimensionales Texturbild fest.

## Syntax

```js-nolint
texImage3D(target, level, internalformat, width, height, depth, border, format, type, srcData)
texImage3D(target, level, internalformat, width, height, depth, border, format, type, srcData, srcOffset)
texImage3D(target, level, internalformat, width, height, depth, border, format, type, source)
texImage3D(target, level, internalformat, width, height, depth, border, format, type, offset)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Target) der aktiven Textur spezifiziert. Mögliche Werte:
    - `gl.TEXTURE_3D`: Eine dreidimensionale Textur.
    - `gl.TEXTURE_2D_ARRAY`: Eine zweidimensionale Array-Textur.
- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den Detailgrad spezifiziert. Level 0 ist das Basisbild und Level _n_ ist das n-te Mipmap-Reduktionslevel.
- `internalformat`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das festlegt, wie die Textur nach dem Laden gespeichert werden soll.
- `width`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Breite der Textur in Texeln angibt.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Höhe der Textur in Texeln angibt.
- `depth`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Tiefe der Textur/die Anzahl der Texturen in einem `TEXTURE_2D_ARRAY` angibt.
- `border`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Breite des Randes angibt. Muss 0 sein.
- `format`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das festlegt, wie jedes ganzzahlige Element in den Roh-Texeldaten als Farbkomponenten interpretiert werden soll.
- `type`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der die Größe jedes ganzzahligen Elements in den Roh-Texeldaten angibt.

    Die Werte `internalformat`, `format` und `type` müssen miteinander kompatibel sein. Für alle gültigen Kombinationen siehe [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D).

Die Texturquelle kann auf eine von drei Arten bereitgestellt werden: aus einem {{jsxref("ArrayBuffer")}} (möglicherweise geteilt) unter Verwendung von `srcData` und `srcOffset`; von einer DOM-Pixelquelle `source`; oder von `gl.PIXEL_UNPACK_BUFFER` unter Verwendung von `offset`.

- `srcData`
  - : Ein {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, das die komprimierten Texturdaten enthält. Der Typ muss mit dem `type`-Parameter übereinstimmen; siehe [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D). Wenn `type` `FLOAT_32_UNSIGNED_INT_24_8_REV` ist, muss `srcData` `null` sein.
- `srcOffset` {{optional_inline}}
  - : Ein ganzzahliger Wert, der den Index von `srcData` angibt, ab dem das Lesen beginnt. Standardwert ist `0`.
- `source`
  - : Wird von einer DOM-Pixelquelle gelesen, die eines der folgenden sein kann:
    - [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
    - [`ImageData`](/de/docs/Web/API/ImageData)
    - [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)
    - [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
    - [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
    - [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
    - [`VideoFrame`](/de/docs/Web/API/VideoFrame)
- `offset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), der die Startadresse im Puffer angibt, der an `gl.PIXEL_UNPACK_BUFFER` gebunden ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.texImage3D(
  gl.TEXTURE_3D,
  0, // level
  gl.RGBA, // internalFormat
  1, // width
  1, // height
  1, // depth
  0, // border
  gl.RGBA, // format
  gl.UNSIGNED_BYTE, // type
  new Uint8Array([0xff, 0x00, 0x00, 0x00]),
); // data
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.createTexture()`](/de/docs/Web/API/WebGLRenderingContext/createTexture)
- [`WebGLRenderingContext.bindTexture()`](/de/docs/Web/API/WebGLRenderingContext/bindTexture)
- [`WebGL2RenderingContext.texSubImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/texSubImage3D)
- [`WebGL2RenderingContext.compressedTexImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/compressedTexImage3D)
- [`WebGL2RenderingContext.copyTexSubImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/copyTexSubImage3D)
- [`WebGLRenderingContext.getTexParameter()`](/de/docs/Web/API/WebGLRenderingContext/getTexParameter)
- [`WEBGL_depth_texture`](/de/docs/Web/API/WEBGL_depth_texture)
- [`OES_texture_float`](/de/docs/Web/API/OES_texture_float)
- [`OES_texture_half_float`](/de/docs/Web/API/OES_texture_half_float)
- [`EXT_texture_norm16`](/de/docs/Web/API/EXT_texture_norm16)
- [`EXT_sRGB`](/de/docs/Web/API/EXT_sRGB)
