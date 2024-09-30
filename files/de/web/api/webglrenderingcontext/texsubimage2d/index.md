---
title: "WebGLRenderingContext: texSubImage2D() Methode"
short-title: texSubImage2D()
slug: Web/API/WebGLRenderingContext/texSubImage2D
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.texSubImage2D()`**-Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) legt ein Subrechteck der
aktuellen Textur fest.

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

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindungspunkt (Ziel) der aktiven Textur angibt.
    Mögliche Werte:

    - `gl.TEXTURE_2D`: Eine zweidimensionale Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_X`: Positive X-Seite für eine cube-gemappte
      Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`: Negative X-Seite für eine cube-gemappte
      Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`: Positive Y-Seite für eine cube-gemappte
      Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`: Negative Y-Seite für eine cube-gemappte
      Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`: Positive Z-Seite für eine cube-gemappte
      Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`: Negative Z-Seite für eine cube-gemappte
      Textur.

- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Detailstufe angibt. Stufe 0 ist die Basisbildstufe und Stufe _n_ ist die n-te Mipmap-Reduktionsstufe.
- `xoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die untere linke Texel-x-Koordinate einer rechteckigen Subregion der Texturmatrix mit `width` Breite und `height` Höhe angibt.
- `yoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die untere linke Texel-y-Koordinate einer rechteckigen Subregion der Texturmatrix mit `width` Breite und `height` Höhe angibt.
- `width`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Breite der Textur in Texeln angibt.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Höhe der Textur in Texeln angibt.
- `format`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das Format der Texeldaten angibt. Mögliche Werte:

    - `gl.ALPHA`: Verwirft die roten, grünen und blauen Komponenten und liest die
      Alpha-Komponente.
    - `gl.RGB`: Verwirft die Alpha-Komponenten und liest die roten, grünen und
      blauen Komponenten.
    - `gl.RGBA`: Rote, grüne, blaue und Alpha-Komponenten werden aus dem
      Farb-Buffer gelesen.
    - `gl.LUMINANCE`: Jede Farbkomponente ist eine Luminanzkomponente, Alpha
      ist 1.0.
    - `gl.LUMINANCE_ALPHA`: Jede Komponente ist eine Luminanz-/Alpha-Komponente.

    Bei Verwendung der [`EXT_sRGB`](/de/docs/Web/API/EXT_sRGB) Erweiterung:

    - `ext.SRGB_EXT`
    - `ext.SRGB_ALPHA_EXT`

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Kontext", "", 1)}},
    sind zusätzlich die folgenden Werte verfügbar:

    - `gl.RED`
    - `gl.RG`
    - `gl.RED_INTEGER`
    - `gl.RG_INTEGER`
    - `gl.RGB_INTEGER`
    - `gl.RGBA_INTEGER`

- `type`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Datentyp der Texeldaten angibt. Mögliche Werte:

    - `gl.UNSIGNED_BYTE`: 8 Bits pro Kanal für `gl.RGBA`
    - `gl.UNSIGNED_SHORT_5_6_5`: 5 rote Bits, 6 grüne Bits, 5 blaue Bits.
    - `gl.UNSIGNED_SHORT_4_4_4_4`: 4 rote Bits, 4 grüne Bits, 4 blaue Bits, 4
      Alpha-Bits.
    - `gl.UNSIGNED_SHORT_5_5_5_1`: 5 rote Bits, 5 grüne Bits, 5 blaue Bits, 1
      Alpha-Bit.

    Bei Verwendung der [`OES_texture_float`](/de/docs/Web/API/OES_texture_float) Erweiterung:

    - `gl.FLOAT`

    Bei Verwendung der [`OES_texture_half_float`](/de/docs/Web/API/OES_texture_half_float) Erweiterung:

    - `gl.HALF_FLOAT_OES`

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Kontext", "", 1)}},
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
    - `gl.FLOAT_32_UNSIGNED_INT_24_8_REV` (Pixel müssen
      [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein)

- `pixels`

  - : Eines der folgenden Objekte kann als Pixelquelle für die Textur verwendet werden:

    - {{jsxref("Uint8Array")}} (Muss verwendet werden, wenn `type` `gl.UNSIGNED_BYTE` ist)
    - {{jsxref("Uint16Array")}} (Muss verwendet werden, wenn `type` entweder
      `gl.UNSIGNED_SHORT_5_6_5`, `gl.UNSIGNED_SHORT_4_4_4_4`,
      `gl.UNSIGNED_SHORT_5_5_5_1` oder `ext.HALF_FLOAT_OES` ist)
    - {{jsxref("Float32Array")}} (Muss verwendet werden, wenn `type` `gl.FLOAT` ist)
    - [`ImageData`](/de/docs/Web/API/ImageData),
    - [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement),
    - [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement),
    - [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement),
    - [`ImageBitmap`](/de/docs/Web/API/ImageBitmap).

- `offset`
  - : (Nur WebGL 2) Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types) Byte-Offset in den
    [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer)'s Datenspeicher. Wird verwendet, um Daten auf die aktuell gebundene
    [`WebGLTexture`](/de/docs/Web/API/WebGLTexture) vom an
    `PIXEL_UNPACK_BUFFER` gebundenen `WebGLBuffer` hochzuladen.

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
