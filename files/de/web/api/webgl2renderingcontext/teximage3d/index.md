---
title: "WebGL2RenderingContext: Methode texImage3D()"
short-title: texImage3D()
slug: Web/API/WebGL2RenderingContext/texImage3D
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.texImage3D()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) legt ein dreidimensionales Texturbild fest.

## Syntax

```js-nolint
texImage3D(target, level, internalformat, width, height, depth, border, format, type, offset)
texImage3D(target, level, internalformat, width, height, depth, border, format, type, source)
texImage3D(target, level, internalformat, width, height, depth, border, format, type, srcData)
texImage3D(target, level, internalformat, width, height, depth, border, format, type, srcData, srcOffset)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das den Bindungspunkt (Ziel) der aktiven Textur angibt. Mögliche Werte:

    - `gl.TEXTURE_3D`: Eine dreidimensionale Textur.
    - `gl.TEXTURE_2D_ARRAY`: Eine zweidimensionale Array-Textur.

- `level`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der die Detailsstufe angibt. Stufe 0 ist die Basisbildstufe und Stufe _n_ ist die n-te Mipmap-Reduktionsstufe.
- `internalformat`

  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der die Farbkomponenten in der Textur angibt. Mögliche Werte:

    - `gl.ALPHA`: Verwift die roten, grünen und blauen Komponenten und liest die Alphakomponente.
    - `gl.RGB`: Verwift die Alphakomponenten und liest die roten, grünen und blauen Komponenten.
    - `gl.RGBA`: Rot-, Grün-, Blau- und Alphakomponenten werden aus dem Farbpuffer gelesen.
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
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, der die Breite der Textur angibt.
- `height`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, der die Höhe der Textur angibt.
- `depth`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, der die Tiefe der Textur angibt.
- `border`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der die Breite des Rands angibt. Muss 0 sein.
- `format`
  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der das Format der Texeldaten angibt. Die korrekten Kombinationen mit `internalformat` sind in [dieser Tabelle](https://registry.khronos.org/webgl/specs/latest/2.0/#TEXTURE_TYPES_FORMATS_FROM_DOM_ELEMENTS_TABLE) aufgeführt.
- `type`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Datentyp der Texeldaten angibt. Mögliche Werte:

    - `gl.UNSIGNED_BYTE`: 8 Bit pro Kanal für `gl.RGBA`
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
    - `gl.FLOAT_32_UNSIGNED_INT_24_8_REV` (Pixel müssen
      [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein)

- `source`

  - : Eines der folgenden Objekte kann als Pixelquelle für die Textur verwendet werden:

    - {{domxref("ImageBitmap")}},
    - {{domxref("ImageData")}},
    - {{domxref("HTMLImageElement")}},
    - {{domxref("HTMLCanvasElement")}},
    - {{domxref("HTMLVideoElement")}}.

- `srcData`

  - : Ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}-Objekt.

- `offset`
  - : Ein {{domxref("WebGL_API/Types", "GLintptr")}} Byte-Offset in den Datenspeicher des {{domxref("WebGLBuffer")}}. Wird verwendet, um Daten in die derzeit gebundene {{domxref("WebGLTexture")}} vom `WebGLBuffer` hochzuladen, das an das `PIXEL_UNPACK_BUFFER`-Ziel gebunden ist.

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

- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.texSubImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
- {{domxref("WebGLRenderingContext.copyTexImage2D()")}}
- {{domxref("WebGLRenderingContext.getTexParameter()")}}
