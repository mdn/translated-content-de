---
title: "WebGLRenderingContext: texImage2D() Methode"
short-title: texImage2D()
slug: Web/API/WebGLRenderingContext/texImage2D
l10n:
  sourceCommit: d4ea77f1c9e15e472e484d9561319597c5cce716
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

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

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindungspunkt (Target) der aktiven Textur angibt.
    Mögliche Werte:

    - `gl.TEXTURE_2D`: Eine zweidimensionale Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_X`: Positive X-Seite für eine Würfel-Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`: Negative X-Seite für eine Würfel-Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`: Positive Y-Seite für eine Würfel-Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`: Negative Y-Seite für eine Würfel-Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`: Positive Z-Seite für eine Würfel-Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`: Negative Z-Seite für eine Würfel-Textur.

- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der das Detailniveau angibt. Niveau 0 ist das Basisbildniveau und Niveau _n_ ist das n-te Mipmap-Reduktionsniveau.
- `internalformat`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Farbkomponenten in der Textur angibt.

    Mögliche Werte sowohl in WebGL1 als auch in WebGL2

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

    Andere mögliche Werte in WebGL2 für die Versionen von `texImage2D`, die eine {{jsxref("TypedArray")}}, eine {{jsxref("DataView")}} oder einen `GLintptr offset` als Parameter akzeptieren

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
            <strong>R<br />Bits</strong>
          </td>
          <td>
            <strong>G<br />Bits</strong>
          </td>
          <td>
            <strong>B<br />Bits</strong>
          </td>
          <td>
            <strong>A<br />Bits</strong>
          </td>
          <td>
            <strong>Geteilte<br />Bits</strong>
          </td>
          <td>
            <strong>Farbrenderbar</strong>
          </td>
          <td>
            <strong>Texturfilterbar</strong>
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
        <tr>
          <td>R8_SNORM</td>
          <td>RED</td>
          <td>s8</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
        </tr>
        <tr>
          <td>RG8</td>
          <td>RG</td>
          <td>8</td>
          <td>8</td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
          <td>●</td>
        </tr>
        <tr>
          <td>RG8_SNORM</td>
          <td>RG</td>
          <td>s8</td>
          <td>s8</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
        </tr>
        <tr>
          <td>RGB8</td>
          <td>RGB</td>
          <td>8</td>
          <td>8</td>
          <td>8</td>
          <td></td>
          <td></td>
          <td>●</td>
          <td>●</td>
        </tr>
        <tr>
          <td>RGB8_SNORM</td>
          <td>RGB</td>
          <td>s8</td>
          <td>s8</td>
          <td>s8</td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
        </tr>
        <tr>
          <td>RGB565</td>
          <td>RGB</td>
          <td>5</td>
          <td>6</td>
          <td>5</td>
          <td></td>
          <td></td>
          <td>●</td>
          <td>●</td>
        </tr>
        <tr>
          <td>RGBA4</td>
          <td>RGBA</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td></td>
          <td>●</td>
          <td>●</td>
        </tr>
        <tr>
          <td>RGB5_A1</td>
          <td>RGBA</td>
          <td>5</td>
          <td>5</td>
          <td>5</td>
          <td>1</td>
          <td></td>
          <td>●</td>
          <td>●</td>
        </tr>
        <tr>
          <td>RGBA8</td>
          <td>RGBA</td>
          <td>8</td>
          <td>8</td>
          <td>8</td>
          <td>8</td>
          <td></td>
          <td>●</td>
          <td>●</td>
        </tr>
        <tr>
          <td>RGBA8_SNORM</td>
          <td>RGBA</td>
          <td>s8</td>
          <td>s8</td>
          <td>s8</td>
          <td>s8</td>
          <td></td>
          <td></td>
          <td>●</td>
        </tr>
        <tr>
          <td>RGB10_A2</td>
          <td>RGBA</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>2</td>
          <td></td>
          <td>●</td>
          <td>●</td>
        </tr>
        <tr>
          <td>RGB10_A2UI</td>
          <td>RGBA</td>
          <td>ui10</td>
          <td>ui10</td>
          <td>ui10</td>
          <td>ui2</td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>SRGB8</td>
          <td>RGB</td>
          <td>8</td>
          <td>8</td>
          <td>8</td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
        </tr>
        <tr>
          <td>SRGB8_ALPHA8</td>
          <td>RGBA</td>
          <td>8</td>
          <td>8</td>
          <td>8</td>
          <td>8</td>
          <td></td>
          <td>●</td>
          <td>●</td>
        </tr>
        <tr>
          <td>R16F</td>
          <td>RED</td>
          <td>f16</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
        </tr>
        <tr>
          <td>RG16F</td>
          <td>RG</td>
          <td>f16</td>
          <td>f16</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
        </tr>
        <tr>
          <td>RGB16F</td>
          <td>RGB</td>
          <td>f16</td>
          <td>f16</td>
          <td>f16</td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
        </tr>
        <tr>
          <td>RGBA16F</td>
          <td>RGBA</td>
          <td>f16</td>
          <td>f16</td>
          <td>f16</td>
          <td>f16</td>
          <td></td>
          <td></td>
          <td>●</td>
        </tr>
        <tr>
          <td>R32F</td>
          <td>RED</td>
          <td>f32</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>RG32F</td>
          <td>RG</td>
          <td>f32</td>
          <td>f32</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>RGB32F</td>
          <td>RGB</td>
          <td>f32</td>
          <td>f32</td>
          <td>f32</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>RGBA32F</td>
          <td>RGBA</td>
          <td>f32</td>
          <td>f32</td>
          <td>f32</td>
          <td>f32</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>R11F_G11F_B10F</td>
          <td>RGB</td>
          <td>f11</td>
          <td>f11</td>
          <td>f10</td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
        </tr>
        <tr>
          <td>RGB9_E5</td>
          <td>RGB</td>
          <td>9</td>
          <td>9</td>
          <td>9</td>
          <td></td>
          <td>5</td>
          <td></td>
          <td>●</td>
        </tr>
        <tr>
          <td>R8I</td>
          <td>RED</td>
          <td>i8</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>R8UI</td>
          <td>RED</td>
          <td>ui8</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>R16I</td>
          <td>RED</td>
          <td>i16</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>R16UI</td>
          <td>RED</td>
          <td>ui16</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>R32I</td>
          <td>RED</td>
          <td>i32</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>R32UI</td>
          <td>RED</td>
          <td>ui32</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>RG8I</td>
          <td>RG</td>
          <td>i8</td>
          <td>i8</td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>RG8UI</td>
          <td>RG</td>
          <td>ui8</td>
          <td>ui8</td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>RG16I</td>
          <td>RG</td>
          <td>i16</td>
          <td>i16</td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>RG16UI</td>
          <td>RG</td>
          <td>ui16</td>
          <td>ui16</td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>RG32I</td>
          <td>RG</td>
          <td>i32</td>
          <td>i32</td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>RG32UI</td>
          <td>RG</td>
          <td>ui32</td>
          <td>ui32</td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>RGB8I</td>
          <td>RGB</td>
          <td>i8</td>
          <td>i8</td>
          <td>i8</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>RGB8UI</td>
          <td>RGB</td>
          <td>ui8</td>
          <td>ui8</td>
          <td>ui8</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>RGB16I</td>
          <td>RGB</td>
          <td>i16</td>
          <td>i16</td>
          <td>i16</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>RGB16UI</td>
          <td>RGB</td>
          <td>ui16</td>
          <td>ui16</td>
          <td>ui16</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>RGB32I</td>
          <td>RGB</td>
          <td>i32</td>
          <td>i32</td>
          <td>i32</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>RGB32UI</td>
          <td>RGB</td>
          <td>ui32</td>
          <td>ui32</td>
          <td>ui32</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>RGBA8I</td>
          <td>RGBA</td>
          <td>i8</td>
          <td>i8</td>
          <td>i8</td>
          <td>i8</td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>RGBA8UI</td>
          <td>RGBA</td>
          <td>ui8</td>
          <td>ui8</td>
          <td>ui8</td>
          <td>ui8</td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>RGBA16I</td>
          <td>RGBA</td>
          <td>i16</td>
          <td>i16</td>
          <td>i16</td>
          <td>i16</td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>RGBA16UI</td>
          <td>RGBA</td>
          <td>ui16</td>
          <td>ui16</td>
          <td>ui16</td>
          <td>ui16</td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>RGBA32I</td>
          <td>RGBA</td>
          <td>i32</td>
          <td>i32</td>
          <td>i32</td>
          <td>i32</td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>RGBA32UI</td>
          <td>RGBA</td>
          <td>ui32</td>
          <td>ui32</td>
          <td>ui32</td>
          <td>ui32</td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
      </tbody>
    </table>

    Mögliche Werte in WebGL2 für die Versionen von `texImage2D`, die eine Textur eines `HTMLImageElement`, `HTMLCanvasElement`, `HTMLVideoElement`, `ImageBitmap` oder `ImageData` verwenden

    - `gl.ALPHA`: Verwift die roten, grünen und blauen Komponenten und liest die Alphakomponente.
    - `gl.RGB`: Verwift die Alphakomponenten und liest die roten, grünen und blauen Komponenten.
    - `gl.RGBA`: Rot-, Grün-, Blau- und Alphakomponenten werden aus dem Farbpuffer gelesen.
    - `gl.LUMINANCE`: Jede Farbkomponente ist eine Luminanzkomponente, Alpha ist 1.0.
    - `gl.LUMINANCE_ALPHA`: Jede Komponente ist eine Luminanz-/Alphakomponente.

    Bei Verwendung der [`WEBGL_depth_texture`](/de/docs/Web/API/WEBGL_depth_texture) Erweiterung:

    - `gl.DEPTH_COMPONENT`
    - `gl.DEPTH_STENCIL`

    Bei Verwendung der [`EXT_sRGB`](/de/docs/Web/API/EXT_sRGB) Erweiterung:

    - `ext.SRGB_EXT`
    - `ext.SRGB_ALPHA_EXT`

    Bei Verwendung eines [WebGL 2 Kontexts](/de/docs/Web/API/WebGL2RenderingContext) sind zusätzlich die folgenden Werte verfügbar:

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
  - : Eine [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), die die Breite der Textur angibt.
- `height`
  - : Eine [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), die die Höhe der Textur angibt.
- `border`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Breite des Randes angibt. Muss 0 sein.
- `format`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das Format der Texeldaten angibt. In WebGL 1 muss dies dasselbe sein wie `internalformat` (siehe oben). In WebGL 2 sind die Kombinationen in [dieser Tabelle](https://registry.khronos.org/webgl/specs/latest/2.0/#TEXTURE_TYPES_FORMATS_FROM_DOM_ELEMENTS_TABLE) aufgeführt.
- `type`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Datentyp der Texeldaten angibt. Mögliche Werte:

    - `gl.UNSIGNED_BYTE`: 8 Bits pro Kanal für `gl.RGBA`
    - `gl.UNSIGNED_SHORT_5_6_5`: 5 rote Bits, 6 grüne Bits, 5 blaue Bits.
    - `gl.UNSIGNED_SHORT_4_4_4_4`: 4 rote Bits, 4 grüne Bits, 4 blaue Bits, 4 Alphabits.
    - `gl.UNSIGNED_SHORT_5_5_5_1`: 5 rote Bits, 5 grüne Bits, 5 blaue Bits, 1 Alphabit.

    Bei Verwendung der [`WEBGL_depth_texture`](/de/docs/Web/API/WEBGL_depth_texture) Erweiterung:

    - `gl.UNSIGNED_SHORT`
    - `gl.UNSIGNED_INT`
    - `ext.UNSIGNED_INT_24_8_WEBGL` (Konstante, die von der Erweiterung bereitgestellt wird)

    Bei Verwendung der [`OES_texture_float`](/de/docs/Web/API/OES_texture_float) Erweiterung:

    - `gl.FLOAT`

    Bei Verwendung der [`OES_texture_half_float`](/de/docs/Web/API/OES_texture_half_float) Erweiterung:

    - `ext.HALF_FLOAT_OES` (Konstante, die von der Erweiterung bereitgestellt wird)

    Bei Verwendung eines [WebGL 2 Kontexts](/de/docs/Web/API/WebGL2RenderingContext) sind zusätzlich die folgenden Werte verfügbar:

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

    Die folgenden Typen können nur als Pixelquelle verwendet werden, wenn `width`, `height` und `border` angegeben sind:

    - {{jsxref("Uint8Array")}} (muss verwendet werden, wenn `type` `gl.UNSIGNED_BYTE` ist)
    - {{jsxref("Uint16Array")}} (muss verwendet werden, wenn `type` entweder `gl.UNSIGNED_SHORT_5_6_5`, `gl.UNSIGNED_SHORT_4_4_4_4`, `gl.UNSIGNED_SHORT_5_5_5_1`, `gl.UNSIGNED_SHORT` oder `ext.HALF_FLOAT_OES` ist)
    - {{jsxref("Uint32Array")}} (muss verwendet werden, wenn `type` `gl.UNSIGNED_INT` oder `ext.UNSIGNED_INT_24_8_WEBGL` ist)
    - {{jsxref("Float32Array")}} (muss verwendet werden, wenn `type` `gl.FLOAT` ist)

- `offset`
  - : (Nur WebGL 2) Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types) Byte-Offset in den Datenspeicher des [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer). Wird verwendet, um Daten in die derzeit gebundene [`WebGLTexture`](/de/docs/Web/API/WebGLTexture) aus dem an `PIXEL_UNPACK_BUFFER` gebundenen `WebGLBuffer` hochzuladen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

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
