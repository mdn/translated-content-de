---
title: "WebGLRenderingContext: texSubImage2D() Methode"
short-title: texSubImage2D()
slug: Web/API/WebGLRenderingContext/texSubImage2D
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.texSubImage2D()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt ein Unterrechteck der aktuellen Textur an.

## Syntax

```js-nolint
// WebGL1
texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels) // pixels is a TypedArray or a DataView
texSubImage2D(target, level, xoffset, yoffset, format, type, pixels)

// WebGL2
texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, offset)
texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, source)
texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels, srcOffset)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Ziel) der aktiven Textur angibt. Mögliche Werte:
    - `gl.TEXTURE_2D`: Eine zweidimensionale Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_X`: Positive X-Seite für eine Würfelkartierungstextur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`: Negative X-Seite für eine Würfelkartierungstextur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`: Positive Y-Seite für eine Würfelkartierungstextur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`: Negative Y-Seite für eine Würfelkartierungstextur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`: Positive Z-Seite für eine Würfelkartierungstextur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`: Negative Z-Seite für eine Würfelkartierungstextur.

- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das das Detailniveau angibt. Level 0 ist das Basisbildniveau und Level _n_ ist das n-te Mipmap-Reduktionsniveau.
- `xoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das die x-Koordinate des unteren linken Texels einer Breite-weiten und Höhe-weiten rechteckigen Unterregion des Textur-Arrays angibt.
- `yoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das die y-Koordinate des unteren linken Texels einer Breite-weiten und Höhe-weiten rechteckigen Unterregion des Textur-Arrays angibt.
- `width`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Breite der Textur in Texeln angibt.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Höhe der Textur in Texeln angibt.
- `format`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das Format der Texeldaten angibt. Mögliche Werte:

    - `gl.ALPHA`: Verwirft die roten, grünen und blauen Komponenten und liest die Alphakomponente.
    - `gl.RGB`: Verwirft die Alphakomponenten und liest die roten, grünen und blauen Komponenten.
    - `gl.RGBA`: Rote, grüne, blaue und Alphakomponenten werden aus dem Farb-Puffer gelesen.
    - `gl.LUMINANCE`: Jede Farbkomponente ist eine Luminanzkomponente, Alpha ist 1.0.
    - `gl.LUMINANCE_ALPHA`: Jede Komponente ist eine Luminanz-/Alphakomponente.

    Bei Verwendung der [`EXT_sRGB`](/de/docs/Web/API/EXT_sRGB) Erweiterung:

    - `ext.SRGB_EXT`
    - `ext.SRGB_ALPHA_EXT`

    Bei Verwendung eines [WebGL 2 Kontextes](/de/docs/Web/API/WebGL2RenderingContext) sind zusätzlich folgende Werte verfügbar:

    - `gl.RED`
    - `gl.RG`
    - `gl.RED_INTEGER`
    - `gl.RG_INTEGER`
    - `gl.RGB_INTEGER`
    - `gl.RGBA_INTEGER`

- `type`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Datentyp der Texeldaten angibt. Mögliche Werte:

    - `gl.UNSIGNED_BYTE`: 8 Bits pro Kanal für `gl.RGBA`
    - `gl.UNSIGNED_SHORT_5_6_5`: 5 rote Bits, 6 grüne Bits, 5 blaue Bits.
    - `gl.UNSIGNED_SHORT_4_4_4_4`: 4 rote Bits, 4 grüne Bits, 4 blaue Bits, 4 Alphabits.
    - `gl.UNSIGNED_SHORT_5_5_5_1`: 5 rote Bits, 5 grüne Bits, 5 blaue Bits, 1 Alphabit.

    Bei Verwendung der [`OES_texture_float`](/de/docs/Web/API/OES_texture_float) Erweiterung:

    - `gl.FLOAT`

    Bei Verwendung der [`OES_texture_half_float`](/de/docs/Web/API/OES_texture_half_float) Erweiterung:

    - `gl.HALF_FLOAT_OES`

    Bei Verwendung eines [WebGL 2 Kontextes](/de/docs/Web/API/WebGL2RenderingContext) sind zusätzlich folgende Werte verfügbar:

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
    - `gl.FLOAT_32_UNSIGNED_INT_24_8_REV` (Pixels müssen [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein)

- `pixels`

  - : Eines der folgenden Objekte kann als Pixelquelle für die Textur verwendet werden:
    - {{jsxref("Uint8Array")}} (Muss verwendet werden, wenn `type` `gl.UNSIGNED_BYTE` ist)
    - {{jsxref("Uint16Array")}} (Muss verwendet werden, wenn `type` entweder `gl.UNSIGNED_SHORT_5_6_5`, `gl.UNSIGNED_SHORT_4_4_4_4`, `gl.UNSIGNED_SHORT_5_5_5_1` oder `ext.HALF_FLOAT_OES` ist)
    - {{jsxref("Float32Array")}} (Muss verwendet werden, wenn `type` `gl.FLOAT` ist)
    - [`ImageData`](/de/docs/Web/API/ImageData),
    - [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement),
    - [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement),
    - [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement),
    - [`ImageBitmap`](/de/docs/Web/API/ImageBitmap).

- `offset`
  - : (Nur WebGL 2) Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types) Byte-Offset in den Datenbereich des [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer). Wird verwendet, um Daten an die derzeit gebundene [`WebGLTexture`](/de/docs/Web/API/WebGLTexture) vom gebundenen `WebGLBuffer` zum `PIXEL_UNPACK_BUFFER` Ziel hochzuladen.

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

- [`WebGLRenderingContext.createTexture()`](/de/docs/Web/API/WebGLRenderingContext/createTexture)
- [`WebGLRenderingContext.bindTexture()`](/de/docs/Web/API/WebGLRenderingContext/bindTexture)
- [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D)
- [`WebGLRenderingContext.compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D)
- [`WebGLRenderingContext.copyTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/copyTexImage2D)
- [`WebGLRenderingContext.getTexParameter()`](/de/docs/Web/API/WebGLRenderingContext/getTexParameter)
- [`OES_texture_float`](/de/docs/Web/API/OES_texture_float)
- [`OES_texture_half_float`](/de/docs/Web/API/OES_texture_half_float)
- [`EXT_sRGB`](/de/docs/Web/API/EXT_sRGB)
- [`EXT_texture_norm16`](/de/docs/Web/API/EXT_texture_norm16)
