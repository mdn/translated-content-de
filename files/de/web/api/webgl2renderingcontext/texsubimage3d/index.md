---
title: "WebGL2RenderingContext: texSubImage3D()-Methode"
short-title: texSubImage3D()
slug: Web/API/WebGL2RenderingContext/texSubImage3D
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.texSubImage3D()`**-Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) gibt ein Teilrechteck der
aktuellen Textur an.

## Syntax

```js-nolint
texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels)
texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, offset)
texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, srcData)
texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, srcData, srcOffset)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Ziel) der aktiven Textur angibt.
    Mögliche Werte:

    - `gl.TEXTURE_3D`: Eine dreidimensionale Textur.
    - `gl.TEXTURE_2D_ARRAY`: Eine zweidimensionale Array-Textur.

- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das die Detailstufe angibt. Stufe 0 ist die Basisebene
    des Bildes und Stufe _n_ ist die n-te Mipmap-Reduktionsstufe.
- `xoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das den x-Versatz innerhalb des Texturbildes angibt.
- `yoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das den y-Versatz innerhalb des Texturbildes angibt.
- `zoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das den z-Versatz innerhalb des Texturbildes angibt.
- `width`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Breite der Textur angibt.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Höhe der Textur angibt.
- `depth`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Tiefe der Textur angibt.
- `format`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das Format der Texeldaten angibt. Mögliche Werte:

    - `gl.ALPHA`: Verwift die roten, grünen und blauen Komponenten und liest die
      Alphakomponente.
    - `gl.RGB`: Verwift die Alphakomponenten und liest die roten, grünen und
      blauen Komponenten.
    - `gl.RGBA`: Rot, Grün, Blau und Alphakomponenten werden aus dem
      Farb-Puffer gelesen.
    - `gl.LUMINANCE`: Jede Farbkomponente ist eine Luminanzkomponente, Alpha
      ist 1,0.
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
    - `gl.SRGB_ALPHA8`
    - `gl.RGB5_A1`
    - `gl.RGBA4444`
    - `gl.RGBA16F`
    - `gl.RGBA32F`
    - `gl.RGBA8UI`

- `type`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Datentyp der Texeldaten angibt. Mögliche Werte:

    - `gl.UNSIGNED_BYTE`: 8 Bits pro Kanal für `gl.RGBA`
    - `gl.UNSIGNED_SHORT_5_6_5`: 5 rote Bits, 6 grüne Bits, 5 blaue Bits.
    - `gl.UNSIGNED_SHORT_4_4_4_4`: 4 rote Bits, 4 grüne Bits, 4 blaue Bits, 4
      Alpha-Bits.
    - `gl.UNSIGNED_SHORT_5_5_5_1`: 5 rote Bits, 5 grüne Bits, 5 blaue Bits, 1
      Alpha-Bit.
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

- `pixels`

  - : Eines der folgenden Objekte kann als Pixelquelle für die Textur verwendet werden:

    - {{jsxref("Uint8Array")}} (muss verwendet werden, wenn der `type` `gl.UNSIGNED_BYTE` ist)
    - {{jsxref("Uint16Array")}} (muss verwendet werden, wenn der `type` entweder
      `gl.UNSIGNED_SHORT_5_6_5`, `gl.UNSIGNED_SHORT_4_4_4_4`,
      `gl.UNSIGNED_SHORT_5_5_5_1` oder `ext.HALF_FLOAT_OES` ist)
    - {{jsxref("Float32Array")}} (muss verwendet werden, wenn der `type` `gl.FLOAT` ist)
    - [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
    - [`ImageData`](/de/docs/Web/API/ImageData)
    - [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)
    - [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
    - [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)

- `srcData`

  - : Ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}-Objekt.

- `offset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types)-Byte-Versatz in den Datenspeicher des [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer). Wird verwendet, um Daten in die aktuell gebundene [`WebGLTexture`](/de/docs/WebGLTexture) vom
    `WebGLBuffer`, das an das Ziel `PIXEL_UNPACK_BUFFER` gebunden ist, hochzuladen.

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
- [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D)
- [`WebGLRenderingContext.compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D)
- [`WebGLRenderingContext.copyTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/copyTexImage2D)
- [`WebGLRenderingContext.getTexParameter()`](/de/docs/Web/API/WebGLRenderingContext/getTexParameter)
