---
title: "WebGL2RenderingContext: Methode texImage3D()"
short-title: texImage3D()
slug: Web/API/WebGL2RenderingContext/texImage3D
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGLRenderingContext.texImage3D()`** der [WebGL API](/de/docs/Web/API/WebGL_API) spezifiziert ein dreidimensionales Texturbild.

## Syntax

```js-nolint
texImage3D(target, level, internalformat, width, height, depth, border, format, type, offset)
texImage3D(target, level, internalformat, width, height, depth, border, format, type, source)
texImage3D(target, level, internalformat, width, height, depth, border, format, type, srcData)
texImage3D(target, level, internalformat, width, height, depth, border, format, type, srcData, srcOffset)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Ziel) der aktiven Textur spezifiziert. Mögliche Werte:
    - `gl.TEXTURE_3D`: Eine dreidimensionale Textur.
    - `gl.TEXTURE_2D_ARRAY`: Eine zweidimensionale Array-Textur.

- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den Detailgrad spezifiziert. Level 0 ist das Basisbildlevel und Level _n_ ist das n-te Mipmap-Reduktionslevel.
- `internalformat`

  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Farbkomponenten in der Textur spezifiziert. Mögliche Werte:
    - `gl.ALPHA`: Verwirft die roten, grünen und blauen Komponenten und liest die Alphakomponente.
    - `gl.RGB`: Verwirft die Alphakomponenten und liest die roten, grünen und blauen Komponenten.
    - `gl.RGBA`: Rot, grün, blau und Alphakomponenten werden aus dem Farbpuffer gelesen.
    - `gl.LUMINANCE`: Jede Farbkomponente ist eine Luminanzkomponente, Alpha ist 1.0.
    - `gl.LUMINANCE_ALPHA`: Jede Komponente ist eine Luminanz-/Alphakomponente.
    - `gl.R8`
    - `gl.R16F`
    - `gl.R32F`
    - `gl.R8UI`
    - `gl.RG8`
    - `gl.RG16F`
    - `gl.RG32F`
    - `gl.RG8UI`
    - `gl.RGB8`
    - `gl.SRGB8`
    - `gl.RGB565`
    - `gl.R11F_G11F_B10F`
    - `gl.RGB9_E5`
    - `gl.RGB16F`
    - `gl.RGB32F`
    - `gl.RGB8UI`
    - `gl.RGBA8`
    - `gl.SRGB8_ALPHA8`
    - `gl.RGB5_A1`
    - `gl.RGBA4444`
    - `gl.RGBA16F`
    - `gl.RGBA32F`
    - `gl.RGBA8UI`

- `width`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Breite der Textur spezifiziert.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Höhe der Textur spezifiziert.
- `depth`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Tiefe der Textur spezifiziert.
- `border`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Breite des Rands spezifiziert. Muss 0 sein.
- `format`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das Format der Texeldaten angibt. Die korrekten Kombinationen mit `internalformat` sind in [dieser Tabelle](https://registry.khronos.org/webgl/specs/latest/2.0/#TEXTURE_TYPES_FORMATS_FROM_DOM_ELEMENTS_TABLE) aufgelistet.
- `type`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Datentyp der Texeldaten angibt. Mögliche Werte:
    - `gl.UNSIGNED_BYTE`: 8 Bits pro Kanal für `gl.RGBA`
    - `gl.UNSIGNED_SHORT_5_6_5`: 5 rote Bits, 6 grüne Bits, 5 blaue Bits.
    - `gl.UNSIGNED_SHORT_4_4_4_4`: 4 rote Bits, 4 grüne Bits, 4 blaue Bits, 4 Alphabits.
    - `gl.UNSIGNED_SHORT_5_5_5_1`: 5 rote Bits, 5 grüne Bits, 5 blaue Bits, 1 Alphabit.
    - `gl.BYTE`
    - `gl.UNSIGNED_SHORT`
    - `gl.SHORT`
    - `gl.UNSIGNED_INT`
    - `gl.INT`
    - `gl.HALF_FLOAT`
    - `gl.FLOAT`
    - `gl.UNSIGNED_INT_2_10_10_10_REV`
    - `gl.UNSIGNED_INT_10F_11F_11F_REV`
    - `gl.UNSIGNED_INT_5_9_9_9_REV`
    - `gl.UNSIGNED_INT_24_8`
    - `gl.FLOAT_32_UNSIGNED_INT_24_8_REV` (Pixel müssen [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein)

- `source`

  - : Eines der folgenden Objekte kann als Pixelquelle für die Textur verwendet werden:
    - [`ImageBitmap`](/de/docs/Web/API/ImageBitmap),
    - [`ImageData`](/de/docs/Web/API/ImageData),
    - [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement),
    - [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement),
    - [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement).

- `srcData`

  - : Ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}} Objekt.

- `offset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types) Byte-Offset in den Datenstore des [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer). Wird verwendet, um Daten von dem aktuell gebundenen [`WebGLTexture`](/de/docs/Web/API/WebGLTexture) aus dem `WebGLBuffer`, der an das Ziel `PIXEL_UNPACK_BUFFER` gebunden ist, hochzuladen.

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
- [`WebGLRenderingContext.texSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texSubImage2D)
- [`WebGLRenderingContext.compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D)
- [`WebGLRenderingContext.copyTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/copyTexImage2D)
- [`WebGLRenderingContext.getTexParameter()`](/de/docs/Web/API/WebGLRenderingContext/getTexParameter)
