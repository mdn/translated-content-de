---
title: "WebGLRenderingContext: texImage2D()-Methode"
short-title: texImage2D()
slug: Web/API/WebGLRenderingContext/texImage2D
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.texImage2D()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) spezifiziert ein zweidimensionales Texturbild.

## Syntax

```js-nolint
// WebGL1
texImage2D(target, level, internalformat, width, height, border, format, type, pixels)
texImage2D(target, level, internalformat, format, type, pixels)


// WebGL2
texImage2D(target, level, internalformat, width, height, border, format, type, offset)
texImage2D(target, level, internalformat, width, height, border, format, type, source)
texImage2D(target, level, internalformat, width, height, border, format, type, srcData, srcOffset)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Ziel) der aktiven Textur spezifiziert. Mögliche Werte:

    - `gl.TEXTURE_2D`: Eine zweidimensionale Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_X`: Positive X-Fläche einer Cube-Map-Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`: Negative X-Fläche einer Cube-Map-Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`: Positive Y-Fläche einer Cube-Map-Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`: Negative Y-Fläche einer Cube-Map-Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`: Positive Z-Fläche einer Cube-Map-Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`: Negative Z-Fläche einer Cube-Map-Textur.

- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das den Detaillierungsgrad angibt. Stufe 0 ist die Basisbildstufe und Stufe _n_ ist die n-te Mipmap-Reduktionsstufe.
- `internalformat`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Farbkomponenten in der Textur spezifiziert.

    Mögliche Werte in WebGL1 und WebGL2

    <table>
      <thead>
        <tr>
          <td>Format</td>
          <td>Typ</td>
          <td>Kanäle</td>
          <td>Bytes pro Pixel</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>RGBA</td>
          <td>UNSIGNED_BYTE</td>
          <td>4</td>
          <td>4</td>
        </tr>
        <tr>
          <td>RGB</td>
          <td>UNSIGNED_BYTE</td>
          <td>3</td>
          <td>3</td>
        </tr>
        <tr>
          <td>RGBA</td>
          <td>UNSIGNED_SHORT_4_4_4_4</td>
          <td>4</td>
          <td>2</td>
        </tr>
        <tr>
          <td>RGBA</td>
          <td>UNSIGNED_SHORT_5_5_5_1</td>
          <td>4</td>
          <td>2</td>
        </tr>
        <tr>
          <td>RGB</td>
          <td>UNSIGNED_SHORT_5_6_5</td>
          <td>3</td>
          <td>2</td>
        </tr>
        <tr>
          <td>LUMINANCE_ALPHA</td>
          <td>UNSIGNED_BYTE</td>
          <td>2</td>
          <td>2</td>
        </tr>
        <tr>
          <td>LUMINANCE</td>
          <td>UNSIGNED_BYTE</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>ALPHA</td>
          <td>UNSIGNED_BYTE</td>
          <td>1</td>
          <td>1</td>
        </tr>
      </tbody>
    </table>

    Andere mögliche Werte in WebGL2 für die Versionen von `texImage2D`, die eine {{jsxref("TypedArray")}} oder einen {{jsxref("DataView")}}, oder einen `GLintptr offset` verwenden:

    <table>
      <thead>
        <tr>
          <td>
            <strong>Größenformat</strong>
          </td>
          <td>
            <strong>Basisformat</strong>
          </td>
          <td>
            <strong>R-Bits</strong>
          </td>
          <td>
            <strong>G-Bits</strong>
          </td>
          <td>
            <strong>B-Bits</strong>
          </td>
          <td>
            <strong>A-Bits</strong>
          </td>
          <td>
            <strong>Geteilte Bits</strong>
          </td>
          <td>
            <strong>Farbendarstellbar</strong>
          </td>
          <td>
            <strong>Filterbar</strong>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>R8</td>
          <td>RED</td>
          <td>8</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
          <td>●</td>
        </tr>
        <!-- ... other rows omitted for brevity -->
      </tbody>
    </table>

    Mögliche Werte in WebGL2 für die Versionen von `texImage2D`, die eine Textur von einem `HTMLImageElement`, `HTMLCanvasElement`, `HTMLVideoElement`, `ImageBitmap` oder `ImageData` verwenden:

    - `gl.ALPHA`: Verwirft die roten, grünen und blauen Komponenten und liest die Alpha-Komponente.
    - `gl.RGB`: Verwirft die Alpha-Komponenten und liest die roten, grünen und blauen Komponenten.
    - `gl.RGBA`: Rote, grüne, blaue und alpha Komponenten werden aus dem Farbbuffer gelesen.
    - `gl.LUMINANCE`: Jede Farbkomponente ist eine Luminanzkomponente, Alpha ist 1.0.
    - `gl.LUMINANCE_ALPHA`: Jede Komponente ist eine Luminanz/Alpha-Komponente.

    Bei Verwendung der [`WEBGL_depth_texture`](/de/docs/Web/API/WEBGL_depth_texture) Erweiterung:

    - `gl.DEPTH_COMPONENT`
    - `gl.DEPTH_STENCIL`

    Bei Verwendung der [`EXT_sRGB`](/de/docs/Web/API/EXT_sRGB) Erweiterung:

    - `ext.SRGB_EXT`
    - `ext.SRGB_ALPHA_EXT`

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Kontexts", "", 1)}} sind zusätzlich die folgenden Werte verfügbar:

    - `gl.R8`
    - `gl.R16F`
    - `gl.R32F`
    - `gl.R8UI`
    - `gl.RG8`
    - `gl.RG16F`
    - `gl.RG32F`
    - `gl.RG8UI`
    - `gl.RG16UI`
    - `gl.RG32UI`
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
    - `gl.RGB10_A2`
    - `gl.RGBA4`
    - `gl.RGBA16F`
    - `gl.RGBA32F`
    - `gl.RGBA8UI`

- `width`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Breite der Textur spezifiziert.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Höhe der Textur spezifiziert.
- `border`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das die Breite des Randes angibt. Muss 0 sein.
- `format`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das Format der Texeldaten spezifiziert. In WebGL 1 muss dies das gleiche wie `internalformat` sein (siehe oben). In WebGL 2 sind die Kombinationen in [dieser Tabelle](https://registry.khronos.org/webgl/specs/latest/2.0/#TEXTURE_TYPES_FORMATS_FROM_DOM_ELEMENTS_TABLE) aufgeführt.
- `type`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Datentyp der Texeldaten spezifiziert. Mögliche Werte:

    - `gl.UNSIGNED_BYTE`: 8 bits pro Kanal für `gl.RGBA`
    - `gl.UNSIGNED_SHORT_5_6_5`: 5 rote Bits, 6 grüne Bits, 5 blaue Bits.
    - `gl.UNSIGNED_SHORT_4_4_4_4`: 4 rote Bits, 4 grüne Bits, 4 blaue Bits, 4 Alpha-Bits.
    - `gl.UNSIGNED_SHORT_5_5_5_1`: 5 rote Bits, 5 grüne Bits, 5 blaue Bits, 1 Alpha-Bit.

    Bei Verwendung der [`WEBGL_depth_texture`](/de/docs/Web/API/WEBGL_depth_texture) Erweiterung:

    - `gl.UNSIGNED_SHORT`
    - `gl.UNSIGNED_INT`
    - `ext.UNSIGNED_INT_24_8_WEBGL` (Konstante, die von der Erweiterung bereitgestellt wird)

    Bei Verwendung der [`OES_texture_float`](/de/docs/Web/API/OES_texture_float) Erweiterung:

    - `gl.FLOAT`

    Bei Verwendung der [`OES_texture_half_float`](/de/docs/Web/API/OES_texture_half_float) Erweiterung:

    - `ext.HALF_FLOAT_OES` (Konstante, die von der Erweiterung bereitgestellt wird)

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Kontexts", "", 1)}},
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
    - `gl.FLOAT_32_UNSIGNED_INT_24_8_REV` (Pixel müssen [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein)

- `pixels`

  - : Die folgenden Typen können immer als Pixelquelle für die Textur verwendet werden:

    - [`ImageData`](/de/docs/Web/API/ImageData),
    - [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement),
    - [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement),
    - [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement),
    - [`ImageBitmap`](/de/docs/Web/API/ImageBitmap).

    Die folgenden Typen können nur dann als Pixelquelle verwendet werden, wenn `width`, `height` und `border` angegeben sind:

    - {{jsxref("Uint8Array")}} (muss verwendet werden, wenn `type` `gl.UNSIGNED_BYTE` ist)
    - {{jsxref("Uint16Array")}} (muss verwendet werden, wenn `type` entweder `gl.UNSIGNED_SHORT_5_6_5`, `gl.UNSIGNED_SHORT_4_4_4_4`, `gl.UNSIGNED_SHORT_5_5_5_1`, `gl.UNSIGNED_SHORT` oder `ext.HALF_FLOAT_OES` ist)
    - {{jsxref("Uint32Array")}} (muss verwendet werden, wenn `type` `gl.UNSIGNED_INT` oder `ext.UNSIGNED_INT_24_8_WEBGL` ist)
    - {{jsxref("Float32Array")}} (muss verwendet werden, wenn `type` `gl.FLOAT` ist)

- `offset`
  - : (Nur WebGL 2) Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types) Byte-Offset in den
    Datenbereich des [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer). Wird verwendet, um Daten zur aktuell gebundenen
    [`WebGLTexture`](/de/docs/Web/API/WebGLTexture) aus dem `WebGLBuffer`, der an das Ziel `PIXEL_UNPACK_BUFFER` gebunden ist, hochzuladen.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

```js
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
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
- [`WEBGL_depth_texture`](/de/docs/Web/API/WEBGL_depth_texture)
- [`OES_texture_float`](/de/docs/Web/API/OES_texture_float)
- [`OES_texture_half_float`](/de/docs/Web/API/OES_texture_half_float)
- [`EXT_texture_norm16`](/de/docs/Web/API/EXT_texture_norm16)
- [`EXT_sRGB`](/de/docs/Web/API/EXT_sRGB)
