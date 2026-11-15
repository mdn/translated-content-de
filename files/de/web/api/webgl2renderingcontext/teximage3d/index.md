---
title: "WebGL2RenderingContext: Methode texImage3D()"
short-title: texImage3D()
slug: Web/API/WebGL2RenderingContext/texImage3D
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`texImage3D()`** der Schnittstelle [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) der [WebGL-API](/de/docs/Web/API/WebGL_API) definiert ein dreidimensionales Texturbild.

## Syntax

```js-nolint
texImage3D(target, level, internalformat, width, height, depth, border, format, type, srcData)
texImage3D(target, level, internalformat, width, height, depth, border, format, type, srcData, srcOffset)
texImage3D(target, level, internalformat, width, height, depth, border, format, type, source)
texImage3D(target, level, internalformat, width, height, depth, border, format, type, offset)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (target) der aktiven Textur angibt. Mögliche Werte:
    - `gl.TEXTURE_3D`: Eine dreidimensionale Textur.
    - `gl.TEXTURE_2D_ARRAY`: Eine zweidimensionale Array-Textur.
- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das die Detailstufe angibt. Stufe 0 ist die Stufe des Basisbilds; Stufe _n_ ist die n-te Mipmap-Reduktionsstufe.
- `internalformat`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das angibt, wie die Textur nach dem Laden gespeichert werden soll.
- `width`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Breite der Textur in Texeln angibt.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Höhe der Textur in Texeln angibt.
- `depth`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Tiefe der Textur bzw. die Anzahl der Texturen in einer `TEXTURE_2D_ARRAY` angibt.
- `border`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das die Breite des Randes angibt. Muss 0 sein.
- `format`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das angibt, wie jedes Integer-Element in den rohen Texeldaten als Farbkomponenten interpretiert werden soll.
- `type`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Größe jedes Integer-Elements in den rohen Texeldaten angibt.

    Die Werte für `internalformat`, `format` und `type` müssen miteinander kompatibel sein. Alle gültigen Kombinationen finden Sie unter [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D).

Die Texturquelle kann auf drei Arten bereitgestellt werden: aus einem {{jsxref("ArrayBuffer")}} (gegebenenfalls gemeinsam genutzt) über `srcData` und `srcOffset`, aus einer DOM-Pixelquelle über `source` oder aus `gl.PIXEL_UNPACK_BUFFER` über `offset`.

- `srcData`
  - : Ein {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, das die Bildpixeldaten enthält, oder `null`, um Texturspeicher zuzuweisen, ohne Pixel hochzuladen (die zugewiesene Textur wird mit Nullen initialisiert). Der Typ muss zum Parameter `type` passen; siehe [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D). Wenn `type` den Wert `FLOAT_32_UNSIGNED_INT_24_8_REV` hat, muss `srcData` `null` sein.
- `srcOffset` {{optional_inline}}
  - : Eine Ganzzahl, die den Index in `srcData` angibt, ab dem gelesen werden soll. Der Standardwert ist `0`.
- `source`
  - : Eine DOM-Pixelquelle, aus der gelesen wird. Dies kann eines der folgenden Objekte sein:
    - [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
    - [`ImageData`](/de/docs/Web/API/ImageData)
    - [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)
    - [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
    - [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
    - [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
    - [`VideoFrame`](/de/docs/Web/API/VideoFrame)
- `offset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), das die Startadresse im an `gl.PIXEL_UNPACK_BUFFER` gebundenen Puffer angibt.

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
