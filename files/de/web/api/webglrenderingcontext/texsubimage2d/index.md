---
title: "WebGLRenderingContext: Methode texSubImage2D()"
short-title: texSubImage2D()
slug: Web/API/WebGLRenderingContext/texSubImage2D
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.texSubImage2D()`** Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) spezifiziert ein Unterrechteck der
aktuellen Textur.

## Syntax

```js-nolint
// WebGL1
texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels) // pixels ist ein TypedArray oder ein DataView
texSubImage2D(target, level, xoffset, yoffset, format, type, pixels)

// WebGL2
texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, offset)
texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, source)
texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels, srcOffset)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das den Bindungspunkt (Ziel) der aktiven Textur spezifiziert.
    Mögliche Werte:

    - `gl.TEXTURE_2D`: Eine zweidimensionale Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_X`: Positive X-Seite für eine Würfel-Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`: Negative X-Seite für eine Würfel-Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`: Positive Y-Seite für eine Würfel-Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`: Negative Y-Seite für eine Würfel-Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`: Positive Z-Seite für eine Würfel-Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`: Negative Z-Seite für eine Würfel-Textur.

- `level`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, das die Detailstufe angibt. Stufe 0 ist die Basisbildstufe und Stufe _n_ ist die n-te Mipmap-Reduktionsstufe.
- `xoffset`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, das die x-Koordinate des unteren linken Texels einer rechteckigen Subregion der Textur mit der Breite von width und der Höhe von height angibt.
- `yoffset`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, das die y-Koordinate des unteren linken Texels einer rechteckigen Subregion der Textur mit der Breite von width und der Höhe von height angibt.
- `width`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, das die Breite der Textur in Texeln angibt.
- `height`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, das die Höhe der Textur in Texeln angibt.
- `format`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das das Format der Texeldaten spezifiziert. Mögliche Werte:

    - `gl.ALPHA`: Verworfen werden die roten, grünen und blauen Komponenten und die Alphakomponente wird gelesen.
    - `gl.RGB`: Verworfene Alphakomponenten; die roten, grünen und blauen Komponenten werden gelesen.
    - `gl.RGBA`: Rote, grüne, blaue und Alphakomponenten werden aus dem Farbbuffer gelesen.
    - `gl.LUMINANCE`: Jede Farbkomponente ist eine Luminanzkomponente, der Alpha ist 1.0.
    - `gl.LUMINANCE_ALPHA`: Jede Komponente ist eine Luminanz-/Alphakomponente.

    Bei Verwendung der {{domxref("EXT_sRGB")}} Erweiterung:

    - `ext.SRGB_EXT`
    - `ext.SRGB_ALPHA_EXT`

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontext", "", 1)}},
    sind zusätzlich die folgenden Werte verfügbar:

    - `gl.RED`
    - `gl.RG`
    - `gl.RED_INTEGER`
    - `gl.RG_INTEGER`
    - `gl.RGB_INTEGER`
    - `gl.RGBA_INTEGER`

- `type`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das den Datentyp der Texeldaten spezifiziert. Mögliche Werte:

    - `gl.UNSIGNED_BYTE`: 8 Bits pro Kanal für `gl.RGBA`
    - `gl.UNSIGNED_SHORT_5_6_5`: 5 rote Bits, 6 grüne Bits, 5 blaue Bits.
    - `gl.UNSIGNED_SHORT_4_4_4_4`: 4 rote Bits, 4 grüne Bits, 4 blaue Bits, 4 Alphabits.
    - `gl.UNSIGNED_SHORT_5_5_5_1`: 5 rote Bits, 5 grüne Bits, 5 blaue Bits, 1 Alphabit.

    Bei Verwendung der {{domxref("OES_texture_float")}} Erweiterung:

    - `gl.FLOAT`

    Bei Verwendung der {{domxref("OES_texture_half_float")}} Erweiterung:

    - `gl.HALF_FLOAT_OES`

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontext", "", 1)}},
    sind zusätzlich die folgenden Werte verfügbar:

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
    - `gl.FLOAT_32_UNSIGNED_INT_24_8_REV` (pixels muss
      [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein)

- `pixels`

  - : Als Pixelquelle für die Textur kann eines der folgenden Objekte verwendet werden:

    - {{jsxref("Uint8Array")}} (Muss verwendet werden, wenn `type` `gl.UNSIGNED_BYTE` ist)
    - {{jsxref("Uint16Array")}} (Muss verwendet werden, wenn `type` entweder
      `gl.UNSIGNED_SHORT_5_6_5`, `gl.UNSIGNED_SHORT_4_4_4_4`,
      `gl.UNSIGNED_SHORT_5_5_5_1`, oder `ext.HALF_FLOAT_OES` ist)
    - {{jsxref("Float32Array")}} (Muss verwendet werden, wenn `type` `gl.FLOAT` ist)
    - {{domxref("ImageData")}},
    - {{domxref("HTMLImageElement")}},
    - {{domxref("HTMLCanvasElement")}},
    - {{domxref("HTMLVideoElement")}},
    - {{domxref("ImageBitmap")}}.

- `offset`
  - : (Nur WebGL 2) Ein {{domxref("WebGL_API/Types", "GLintptr")}} Byte-Offset in den
    {{domxref("WebGLBuffer")}}'s Datenspeicher. Wird verwendet, um Daten von dem aktuell gebundenen
    {{domxref("WebGLTexture")}} aus dem `WebGLBuffer`, das an das
    `PIXEL_UNPACK_BUFFER` Ziel gebunden ist, hochzuladen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, image);
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
- {{domxref("OES_texture_float")}}
- {{domxref("OES_texture_half_float")}}
- {{domxref("EXT_sRGB")}}
- {{domxref("EXT_texture_norm16")}}
