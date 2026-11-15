---
title: "WebGL2RenderingContext: Methode texSubImage3D()"
short-title: texSubImage3D()
slug: Web/API/WebGL2RenderingContext/texSubImage3D
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`texSubImage3D()`** der Schnittstelle [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) der [WebGL-API](/de/docs/Web/API/WebGL_API) legt einen dreidimensionalen Teilbereich eines Texturbilds fest.

## Syntax

```js-nolint
texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, srcData)
texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, srcData, srcOffset)
texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, source)
texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, offset)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (das Ziel) der aktiven Textur angibt. Mögliche Werte:
    - `gl.TEXTURE_3D`: Eine dreidimensionale Textur.
    - `gl.TEXTURE_2D_ARRAY`: Eine zweidimensionale Array-Textur.
- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das die Detailstufe angibt. Stufe 0 ist die Stufe des Basisbilds; Stufe _n_ ist die n-te Mipmap-Reduktionsstufe.
- `xoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das den x-Versatz innerhalb des Texturbilds angibt.
- `yoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das den y-Versatz innerhalb des Texturbilds angibt.
- `zoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das den z-Versatz innerhalb des Texturbilds angibt.
- `width`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Breite der Textur in Texeln angibt.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Höhe der Textur in Texeln angibt.
- `depth`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Tiefe der Textur bzw. die Anzahl der Texturen in einem `TEXTURE_2D_ARRAY` angibt.
- `format`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das angibt, wie jedes Ganzzahlelement in den unverarbeiteten Texeldaten als Farbkomponente interpretiert werden soll.
- `type`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Größe jedes Ganzzahlelements in den unverarbeiteten Texeldaten angibt. Informationen zu den verfügbaren Kombinationen aus `format` und `type` finden Sie unter [`WebGLRenderingContext.texSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texSubImage2D).

Die Texturquelle kann auf drei Arten bereitgestellt werden: aus einem {{jsxref("ArrayBuffer")}} (der möglicherweise gemeinsam genutzt wird) über `srcData` und `srcOffset`, aus einer DOM-Pixelquelle über `source` oder aus `gl.PIXEL_UNPACK_BUFFER` über `offset`.

- `srcData`
  - : Ein {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, das die Bildpixeldaten enthält. Sein Typ muss dem Parameter `type` entsprechen; siehe [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D).
- `srcOffset` {{optional_inline}}
  - : Eine Ganzzahl, die den Index in `srcData` angibt, ab dem gelesen wird. Der Standardwert ist `0`.
- `source`
  - : Eine DOM-Pixelquelle, aus der gelesen wird. Sie kann eines der folgenden Objekte sein:
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
gl.texSubImage3D(
  gl.TEXTURE_3D,
  0,
  0,
  0,
  0,
  image.width,
  image.height,
  1,
  gl.RGBA,
  gl.UNSIGNED_BYTE,
  image,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.createTexture()`](/de/docs/Web/API/WebGLRenderingContext/createTexture)
- [`WebGLRenderingContext.bindTexture()`](/de/docs/Web/API/WebGLRenderingContext/bindTexture)
- [`WebGL2RenderingContext.texImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/texImage3D)
- [`WebGL2RenderingContext.compressedTexImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/compressedTexImage3D)
- [`WebGL2RenderingContext.copyTexSubImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/copyTexSubImage3D)
- [`WebGLRenderingContext.getTexParameter()`](/de/docs/Web/API/WebGLRenderingContext/getTexParameter)
- [`OES_texture_float`](/de/docs/Web/API/OES_texture_float)
- [`OES_texture_half_float`](/de/docs/Web/API/OES_texture_half_float)
- [`EXT_sRGB`](/de/docs/Web/API/EXT_sRGB)
- [`EXT_texture_norm16`](/de/docs/Web/API/EXT_texture_norm16)
