---
title: "WebGL2RenderingContext: texSubImage3D() Methode"
short-title: texSubImage3D()
slug: Web/API/WebGL2RenderingContext/texSubImage3D
l10n:
  sourceCommit: fe3f1f2dfaf44fcbe868b91b6a429270d2055716
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`texSubImage3D()`**-Methode der [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)-Schnittstelle der [WebGL API](/de/docs/Web/API/WebGL_API) spezifiziert ein dreidimensionales Unterrechteck für ein Texturbild.

## Syntax

```js-nolint
texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, srcData)
texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, srcData, srcOffset)
texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, source)
texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, offset)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindepunkt (Ziel) der aktiven Textur spezifiziert. Mögliche Werte:
    - `gl.TEXTURE_3D`: Eine dreidimensionale Textur.
    - `gl.TEXTURE_2D_ARRAY`: Eine zweidimensionale Array-Textur.
- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der das Detaillevel angibt. Level 0 ist das Basisbild-Level und Level _n_ ist das n-te Mipmap-Reduktionslevel.
- `xoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den x-Versatz innerhalb des Texturbildes angibt.
- `yoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den y-Versatz innerhalb des Texturbildes angibt.
- `zoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den z-Versatz innerhalb des Texturbildes angibt.
- `width`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Breite der Textur in Texeln angibt.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Höhe der Textur in Texeln angibt.
- `depth`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Tiefe der Textur/die Anzahl der Texturen in einem `TEXTURE_2D_ARRAY` angibt.
- `format`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der angibt, wie jedes Integer-Element in den rohen Texeldaten als Farbkomponenten interpretiert werden soll.
- `type`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der die Größe jedes Integer-Elements in den rohen Texeldaten spezifiziert. Für die verfügbaren Kombinationen von `format` und `type` siehe [`WebGLRenderingContext.texSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texSubImage2D).

Die Texturquelle kann auf eine von drei Arten bereitgestellt werden: aus einem {{jsxref("ArrayBuffer")}} (möglicherweise gemeinsam genutzt) unter Verwendung von `srcData` und `srcOffset`; aus einer DOM-Pixelquelle; oder von `gl.PIXEL_UNPACK_BUFFER` unter Verwendung von `offset`.

- `srcData`
  - : Ein {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, das die komprimierten Texturdaten enthält. Sein Typ muss mit dem `type`-Parameter übereinstimmen; siehe [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D).
- `srcOffset` {{optional_inline}}
  - : Ein Integer, der den Index von `srcData` angibt, ab dem gelesen werden soll. Standard ist `0`.
- `source`
  - : Gelesen von einer DOM-Pixelquelle, die eine der folgenden sein kann:
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
