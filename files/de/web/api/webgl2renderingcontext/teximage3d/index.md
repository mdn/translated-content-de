---
title: "WebGL2RenderingContext: texImage3D()-Methode"
short-title: texImage3D()
slug: Web/API/WebGL2RenderingContext/texImage3D
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.texImage3D()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) legt ein dreidimensionales Texturbild fest.

## Syntax

```js-nolint
texImage3D(target, level, internalformat, width, height, depth, border, format, type, offset)
texImage3D(target, level, internalformat, width, height, depth, border, format, type, source)
texImage3D(target, level, internalformat, width, height, depth, border, format, type, srcData)
texImage3D(target, level, internalformat, width, height, depth, border, format, type, srcData, srcOffset)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindepunkt (Ziel) der aktiven Textur angibt. Mögliche Werte:

    - `gl.TEXTURE_3D`: Eine dreidimensionale Textur.
    - `gl.TEXTURE_2D_ARRAY`: Eine zweidimensionale Array-Textur.

- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der das Detaillevel angibt. Level 0 ist das Basisbildlevel und Level _n_ ist das n-te Mipmap-Reduktionslevel.
- `internalformat`

  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Farbkomponenten in der Textur angibt. Mögliche Werte:

    - `gl.ALPHA`: Verwirft die roten, grünen und blauen Komponenten und liest die Alphakomponente.
    - `gl.RGB`: Verwirft die Alphakomponenten und liest die roten, grünen und blauen Komponenten.
    - `gl.RGBA`: Rote, grüne, blaue und Alphakomponenten werden aus dem Farb-Puffer gelesen.
    - `gl.LUMINANCE`: Jede Farbkomponente ist eine Luminanzkomponente, Alpha ist 1.0.
    - `gl.LUMINANCE_ALPHA`: Jede Komponente ist eine Luminanz/Alpha-Komponente.
    - `gl.R8`
    - `gl.R16F`
    - `gl.R32F`
    - `gl.R8UI`
    - `gl.RG8`
    - `gl.RG16F`
    - `gl.RG32F`
    - `gl.RGUI`
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
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Breite der Textur angibt.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Höhe der Textur angibt.
- `depth`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Tiefe der Textur angibt.
- `border`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Breite des Rands angibt. Muss 0 sein.
- `format`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das Format der Texeldaten angibt. Die korrekten Kombinationen mit `internalformat` sind in [dieser Tabelle](https://registry.khronos.org/webgl/specs/latest/2.0/#TEXTURE_TYPES_FORMATS_FROM_DOM_ELEMENTS_TABLE) aufgelistet.
- `type`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Datentyp der Texeldaten angibt. Mögliche Werte:

    - `gl.UNSIGNED_BYTE`: 8 Bit pro Kanal für `gl.RGBA`
    - `gl.UNSIGNED_SHORT_5_6_5`: 5 rote Bits, 6 grüne Bits, 5 blaue Bits.
    - `gl.UNSIGNED_SHORT_4_4_4_4`: 4 rote Bits, 4 grüne Bits, 4 blaue Bits, 4 Alpha-Bits.
    - `gl.UNSIGNED_SHORT_5_5_5_1`: 5 rote Bits, 5 grüne Bits, 5 blaue Bits, 1 Alpha-Bit.
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

  - : Ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}-Objekt.

- `offset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types)-Byte-Offset in den Datenspeicher des [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer). Wird verwendet, um Daten von dem an das `PIXEL_UNPACK_BUFFER` Ziel gebundenen `WebGLBuffer` in die aktuell gebundene [`WebGLTexture`](/de/docs/Web/API/WebGLTexture) hochzuladen.

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
