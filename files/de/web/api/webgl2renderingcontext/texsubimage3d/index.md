---
title: "WebGL2RenderingContext: texSubImage3D() Methode"
short-title: texSubImage3D()
slug: Web/API/WebGL2RenderingContext/texSubImage3D
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.texSubImage3D()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) legt ein Unterrechteck der aktuellen Textur fest.

## Syntax

```js-nolint
texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels)
texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, offset)
texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, srcData)
texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, srcData, srcOffset)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Bindungspunkt (target) der aktiven Textur angibt. Mögliche Werte:

    - `gl.TEXTURE_3D`: Eine dreidimensionale Textur.
    - `gl.TEXTURE_2D_ARRAY`: Eine zweidimensionale Array-Textur.

- `level`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der das Detaillevel angibt. Level 0 ist das Basisbildniveau und Level _n_ ist das n-te Mipmap-Reduktionsniveau.
- `xoffset`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der den x-Offset innerhalb des Texturbildes angibt.
- `yoffset`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der den y-Offset innerhalb des Texturbildes angibt.
- `zoffset`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der den z-Offset innerhalb des Texturbildes angibt.
- `width`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, der die Breite der Textur angibt.
- `height`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, der die Höhe der Textur angibt.
- `depth`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, der die Tiefe der Textur angibt.
- `format`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der das Format der Texeldaten angibt. Mögliche Werte:

    - `gl.ALPHA`: Die roten, grünen und blauen Komponenten werden verworfen und die
      Alphakomponente wird gelesen.
    - `gl.RGB`: Die Alphakomponenten werden verworfen und die roten, grünen und
      blauen Komponenten werden gelesen.
    - `gl.RGBA`: Rote, grüne, blaue und Alphakomponenten werden aus dem
      Farbbuffer gelesen.
    - `gl.LUMINANCE`: Jede Farbkomponente ist eine Luminanzkomponente, Alpha
      ist 1.0.
    - `gl.LUMINANCE_ALPHA`: Jede Komponente ist eine Luminanz/Alphakomponente.
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

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Datentyp der Texeldaten angibt. Mögliche Werte:

    - `gl.UNSIGNED_BYTE`: 8 Bits pro Kanal für `gl.RGBA`
    - `gl.UNSIGNED_SHORT_5_6_5`: 5 rote Bits, 6 grüne Bits, 5 blaue Bits.
    - `gl.UNSIGNED_SHORT_4_4_4_4`: 4 rote Bits, 4 grüne Bits, 4 blaue Bits, 4
      Alphabits.
    - `gl.UNSIGNED_SHORT_5_5_5_1`: 5 rote Bits, 5 grüne Bits, 5 blaue Bits, 1
      Alphabit.
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
    - `gl.FLOAT_32_UNSIGNED_INT_24_8_REV` (Pixels müssen
      [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein)

- `pixels`

  - : Eines der folgenden Objekte kann als Pixelquelle für die Textur verwendet werden:

    - {{jsxref("Uint8Array")}} (muss verwendet werden, wenn `type` `gl.UNSIGNED_BYTE` ist)
    - {{jsxref("Uint16Array")}} (muss verwendet werden, wenn `type` entweder
      `gl.UNSIGNED_SHORT_5_6_5`, `gl.UNSIGNED_SHORT_4_4_4_4`,
      `gl.UNSIGNED_SHORT_5_5_5_1` oder `ext.HALF_FLOAT_OES` ist)
    - {{jsxref("Float32Array")}} (muss verwendet werden, wenn `type` `gl.FLOAT` ist)
    - {{domxref("ImageBitmap")}}
    - {{domxref("ImageData")}}
    - {{domxref("HTMLImageElement")}}
    - {{domxref("HTMLCanvasElement")}}
    - {{domxref("HTMLVideoElement")}}

- `srcData`

  - : Ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}} Objekt.

- `offset`
  - : Ein {{domxref("WebGL_API/Types", "GLintptr")}} Byte-Offset in den Datenspeicher des {{domxref("WebGLBuffer")}}. Wird verwendet, um Daten von dem aktuell gebundenen {{domxref("WebGLTexture")}} aus dem `WebGLBuffer`, der an das `PIXEL_UNPACK_BUFFER` Ziel gebunden ist, hochzuladen.

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

- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
- {{domxref("WebGLRenderingContext.copyTexImage2D()")}}
- {{domxref("WebGLRenderingContext.getTexParameter()")}}
