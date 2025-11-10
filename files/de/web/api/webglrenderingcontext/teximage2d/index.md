---
title: "WebGLRenderingContext: texImage2D()-Methode"
short-title: texImage2D()
slug: Web/API/WebGLRenderingContext/texImage2D
l10n:
  sourceCommit: fe3f1f2dfaf44fcbe868b91b6a429270d2055716
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`texImage2D()`**-Methode der [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)-Schnittstelle der [WebGL API](/de/docs/Web/API/WebGL_API) spezifiziert ein zweidimensionales Texturbild.

## Syntax

```js-nolint
// WebGL 1:
texImage2D(target, level, internalformat, width, height, border, format, type, srcData)
texImage2D(target, level, internalformat, format, type, source)

// Additionally available in WebGL 2:
texImage2D(target, level, internalformat, width, height, border, format, type, srcData, srcOffset)
texImage2D(target, level, internalformat, width, height, border, format, type, source)
texImage2D(target, level, internalformat, width, height, border, format, type, offset)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindungspunkt (Ziel) der aktiven Textur angibt. Mögliche Werte:
    - `gl.TEXTURE_2D`: Eine zweidimensionale Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_X`: Positive X-Seite für eine Würfelkarten-Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`: Negative X-Seite für eine Würfelkarten-Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`: Positive Y-Seite für eine Würfelkarten-Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`: Negative Y-Seite für eine Würfelkarten-Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`: Positive Z-Seite für eine Würfelkarten-Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`: Negative Z-Seite für eine Würfelkarten-Textur.
- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den Detaillierungsgrad angibt. Level 0 ist das Basisbildebene und Level _n_ ist die n-te Mipmap-Reduktionsstufe.
- `internalformat`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der angibt, wie die Textur gespeichert werden soll, nachdem sie geladen wurde. Siehe unten für verfügbare Werte.
- `width`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Breite der Textur in Texeln angibt.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Höhe der Textur in Texeln angibt.
- `border`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Breite des Rahmens angibt. Muss 0 sein.
- `format`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der angibt, wie jedes ganzzahlige Element in den rohen Texeldaten als Farbkomponente interpretiert werden soll. In WebGL 1 muss dies dieselbe wie `internalformat` sein. Siehe unten für verfügbare Werte.
- `type`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der die Größe jedes ganzzahligen Elements in den rohen Texeldaten angibt.

    Die Werte für `internalformat`, `format` und `type` müssen kompatibel sein. Mögliche Kombinationen in beiden WebGL 1 und WebGL 2 (diese internen Formate sind _ungenormt_, da Sie nicht festlegen können, wie viele Bytes jedes Pixel intern benötigt):

    | `internalformat`  | `format`          | `type`                   | Eingabebytes pro Pixel | Eingabepixellayout (Bits pro Kanal) |
    | ----------------- | ----------------- | ------------------------ | ---------------------- | ----------------------------------- |
    | `RGB`             | `RGB`             | `UNSIGNED_BYTE`          | 3                      | (R, G, B) = (8, 8, 8)               |
    | `RGB`             | `RGB`             | `UNSIGNED_SHORT_5_6_5`   | 2                      | (R, G, B) = (5, 6, 5)               |
    | `RGBA`            | `RGBA`            | `UNSIGNED_BYTE`          | 4                      | (R, G, B, A) = (8, 8, 8, 8)         |
    | `RGBA`            | `RGBA`            | `UNSIGNED_SHORT_4_4_4_4` | 2                      | (R, G, B, A) = (4, 4, 4, 4)         |
    | `RGBA`            | `RGBA`            | `UNSIGNED_SHORT_5_5_5_1` | 2                      | (R, G, B, A) = (5, 5, 5, 1)         |
    | `LUMINANCE_ALPHA` | `LUMINANCE_ALPHA` | `UNSIGNED_BYTE`          | 2                      | (L, A) = (8, 8)                     |
    | `LUMINANCE`       | `LUMINANCE`       | `UNSIGNED_BYTE`          | 1                      | (L) = (8)                           |
    | `ALPHA`           | `ALPHA`           | `UNSIGNED_BYTE`          | 1                      | (A) = (8)                           |

    Wenn die [`OES_texture_float`](/de/docs/Web/API/OES_texture_float)-Erweiterung aktiviert ist, kann `type` zusätzlich `FLOAT` sein. Wenn die [`OES_texture_half_float`](/de/docs/Web/API/OES_texture_half_float)-Erweiterung aktiviert ist, kann `type` zusätzlich `ext.HALF_FLOAT_OES` (Konstante, die durch die Erweiterung bereitgestellt wird) sein.

    Wenn die [`EXT_sRGB`](/de/docs/Web/API/EXT_sRGB)-Erweiterung aktiviert ist, kann `internalformat` zusätzlich `ext.SRGB_EXT` oder `ext.SRGB_ALPHA_EXT` sein.

    In WebGL 2, wenn die Quelle als `srcData` oder `offset` angegeben wird, sind die folgenden Kombinationen zusätzlich verfügbar (diese internen Formate sind _genormt_, da das interne Pixellayout genau festgelegt ist; wir lassen das Eingabelayout hier weg, da es ähnlich wie das oben funktioniert):

    | `internalformat` | `format`       | `type`                                                                   | Internes Pixellayout                        | Farblich renderbar | Texture filterbar |
    | ---------------- | -------------- | ------------------------------------------------------------------------ | ------------------------------------------- | ------------------ | ----------------- |
    | `R8`             | `RED`          | `UNSIGNED_BYTE`                                                          | (R) = (8)                                   | Y                  | Y                 |
    | `R8_SNORM`       | `RED`          | `BYTE`                                                                   | (R) = (s8)                                  |                    | Y                 |
    | `R16F`           | `RED`          | `HALF_FLOAT`, `FLOAT`                                                    | (R) = (f16)                                 |                    | Y                 |
    | `R32F`           | `RED`          | `FLOAT`                                                                  | (R) = (f32)                                 |                    |                   |
    | `R8UI`           | `RED_INTEGER`  | `UNSIGNED_BYTE`                                                          | (R) = (ui8)                                 | Y                  |                   |
    | `R8I`            | `RED_INTEGER`  | `BYTE`                                                                   | (R) = (i8)                                  | Y                  |                   |
    | `R16UI`          | `RED_INTEGER`  | `UNSIGNED_SHORT`                                                         | (R) = (ui16)                                | Y                  |                   |
    | `R16I`           | `RED_INTEGER`  | `SHORT`                                                                  | (R) = (i16)                                 | Y                  |                   |
    | `R32UI`          | `RED_INTEGER`  | `UNSIGNED_INT`                                                           | (R) = (ui32)                                | Y                  |                   |
    | `R32I`           | `RED_INTEGER`  | `INT`                                                                    | (R) = (i32)                                 | Y                  |                   |
    | `RG8`            | `RG`           | `UNSIGNED_BYTE`                                                          | (R, G) = (8, 8)                             | Y                  | Y                 |
    | `RG8_SNORM`      | `RG`           | `BYTE`                                                                   | (R, G) = (s8, s8)                           |                    | Y                 |
    | `RG16F`          | `RG`           | `HALF_FLOAT`, `FLOAT`                                                    | (R, G) = (f16, f16)                         |                    | Y                 |
    | `RG32F`          | `RG`           | `FLOAT`                                                                  | (R, G) = (f32, f32)                         |                    |                   |
    | `RG8UI`          | `RG_INTEGER`   | `UNSIGNED_BYTE`                                                          | (R, G) = (ui8, ui8)                         | Y                  |                   |
    | `RG8I`           | `RG_INTEGER`   | `BYTE`                                                                   | (R, G) = (i8, i8)                           | Y                  |                   |
    | `RG16UI`         | `RG_INTEGER`   | `UNSIGNED_SHORT`                                                         | (R, G) = (ui16, ui16)                       | Y                  |                   |
    | `RG16I`          | `RG_INTEGER`   | `SHORT`                                                                  | (R, G) = (i16, i16)                         | Y                  |                   |
    | `RG32UI`         | `RG_INTEGER`   | `UNSIGNED_INT`                                                           | (R, G) = (ui32, ui32)                       | Y                  |                   |
    | `RG32I`          | `RG_INTEGER`   | `INT`                                                                    | (R, G) = (i32, i32)                         | Y                  |                   |
    | `RGB8`           | `RGB`          | `UNSIGNED_BYTE`                                                          | (R, G, B) = (8, 8, 8)                       | Y                  | Y                 |
    | `SRGB8`          | `RGB`          | `UNSIGNED_BYTE`                                                          | (R, G, B) = (8, 8, 8)                       |                    | Y                 |
    | `RGB565`         | `RGB`          | `UNSIGNED_BYTE`, `UNSIGNED_SHORT_5_6_5`                                  | (R, G, B) = (5, 6, 5)                       | Y                  | Y                 |
    | `RGB8_SNORM`     | `RGB`          | `BYTE`                                                                   | (R, G, B) = (s8, s8, s8)                    |                    | Y                 |
    | `R11F_G11F_B10F` | `RGB`          | `UNSIGNED_INT_10F_11F_11F_REV`, `HALF_FLOAT`, `FLOAT`                    | (R, G, B) = (f11, f11, f10)                 |                    | Y                 |
    | `RGB9_E5`        | `RGB`          | `UNSIGNED_INT_5_9_9_9_REV`, `HALF_FLOAT`, `FLOAT`                        | (R, G, B) = (f9, f9, f9), 5 gemeinsame Bits |                    | Y                 |
    | `RGB16F`         | `RGB`          | `HALF_FLOAT`, `FLOAT`                                                    | (R, G, B) = (f16, f16, f16)                 |                    | Y                 |
    | `RGB32F`         | `RGB`          | `FLOAT`                                                                  | (R, G, B) = (f32, f32, f32)                 |                    |                   |
    | `RGB8UI`         | `RGB_INTEGER`  | `UNSIGNED_BYTE`                                                          | (R, G, B) = (ui8, ui8, ui8)                 | Y                  |                   |
    | `RGB8I`          | `RGB_INTEGER`  | `BYTE`                                                                   | (R, G, B) = (i8, i8, i8)                    | Y                  |                   |
    | `RGB16UI`        | `RGB_INTEGER`  | `UNSIGNED_SHORT`                                                         | (R, G, B) = (ui16, ui16, ui16)              | Y                  |                   |
    | `RGB16I`         | `RGB_INTEGER`  | `SHORT`                                                                  | (R, G, B) = (i16, i16, i16)                 | Y                  |                   |
    | `RGB32UI`        | `RGB_INTEGER`  | `UNSIGNED_INT`                                                           | (R, G, B) = (ui32, ui32, ui32)              | Y                  |                   |
    | `RGB32I`         | `RGB_INTEGER`  | `INT`                                                                    | (R, G, B) = (i32, i32, i32)                 | Y                  |                   |
    | `RGBA8`          | `RGBA`         | `UNSIGNED_BYTE`                                                          | (R, G, B, A) = (8, 8, 8, 8)                 | Y                  | Y                 |
    | `SRGB8_ALPHA8`   | `RGBA`         | `UNSIGNED_BYTE`                                                          | (R, G, B, A) = (8, 8, 8, 8)                 | Y                  | Y                 |
    | `RGBA8_SNORM`    | `RGBA`         | `BYTE`                                                                   | (R, G, B, A) = (s8, s8, s8, s8)             |                    | Y                 |
    | `RGB5_A1`        | `RGBA`         | `UNSIGNED_BYTE`, `UNSIGNED_SHORT_5_5_5_1`, `UNSIGNED_INT_2_10_10_10_REV` | (R, G, B, A) = (5, 5, 5, 1)                 | Y                  | Y                 |
    | `RGBA4`          | `RGBA`         | `UNSIGNED_BYTE`, `UNSIGNED_SHORT_4_4_4_4`                                | (R, G, B, A) = (4, 4, 4, 4)                 | Y                  | Y                 |
    | `RGB10_A2`       | `RGBA`         | `UNSIGNED_INT_2_10_10_10_REV`                                            | (R, G, B, A) = (10, 10, 10, 2)              | Y                  | Y                 |
    | `RGBA16F`        | `RGBA`         | `HALF_FLOAT`, `FLOAT`                                                    | (R, G, B, A) = (f16, f16, f16, f16)         |                    | Y                 |
    | `RGBA32F`        | `RGBA`         | `FLOAT`                                                                  | (R, G, B, A) = (f32, f32, f32, f32)         |                    |                   |
    | `RGBA8UI`        | `RGBA_INTEGER` | `UNSIGNED_BYTE`                                                          | (R, G, B, A) = (ui8, ui8, ui8, ui8)         | Y                  |                   |
    | `RGBA8I`         | `RGBA_INTEGER` | `BYTE`                                                                   | (R, G, B, A) = (i8, i8, i8, i8)             | Y                  |                   |
    | `RGBA10_A2UI`    | `RGBA_INTEGER` | `UNSIGNED_INT_2_10_10_10_REV`                                            | (R, G, B, A) = (ui10, ui10, ui10, ui2)      | Y                  |                   |
    | `RGBA16UI`       | `RGBA_INTEGER` | `UNSIGNED_SHORT`                                                         | (R, G, B, A) = (ui16, ui16, ui16, ui16)     | Y                  |                   |
    | `RGBA16I`        | `RGBA_INTEGER` | `SHORT`                                                                  | (R, G, B, A) = (i16, i16, i16, i16)         | Y                  |                   |
    | `RGBA32UI`       | `RGBA_INTEGER` | `UNSIGNED_INT`                                                           | (R, G, B, A) = (ui32, ui32, ui32, ui32)     | Y                  |                   |
    | `RGBA32I`        | `RGBA_INTEGER` | `INT`                                                                    | (R, G, B, A) = (i32, i32, i32, i32)         | Y                  |                   |

    In WebGL 2, bei der Angabe der Quelle als `srcData` oder `offset` sind die folgenden Kombinationen zusätzlich verfügbar. Sie können in WebGL 1 über die [`WEBGL_depth_texture`](/de/docs/Web/API/WEBGL_depth_texture)-Erweiterung aktiviert werden:

    | `internalformat`     | `format`          | `type`                                              | Internes Pixelformat |
    | -------------------- | ----------------- | --------------------------------------------------- | -------------------- |
    | `DEPTH_COMPONENT16`  | `DEPTH_COMPONENT` | `UNSIGNED_SHORT`, `UNSIGNED_INT`                    | (D) = (16)           |
    | `DEPTH_COMPONENT24`  | `DEPTH_COMPONENT` | `UNSIGNED_INT`                                      | (D) = (24)           |
    | `DEPTH_COMPONENT32F` | `DEPTH_COMPONENT` | `FLOAT`                                             | (D) = (f32)          |
    | `DEPTH24_STENCIL8`   | `DEPTH_STENCIL`   | `UNSIGNED_INT_24_8` (`ext.UNSIGNED_INT_24_8_WEBGL`) | (D, S) = (24, 8)     |
    | `DEPTH32F_STENCIL8`  | `DEPTH_STENCIL`   | `FLOAT_32_UNSIGNED_INT_24_8_REV`                    | (D, S) = (f32, 8)    |

    Wenn die Datenquelle ein DOM-Pixel-Quelle ist, ist die Darstellung jedes Kanals in der Regel ein vorzeichenloser Ganzzahltyp mit mindestens 8 Bits. Die Umwandlung einer solchen Darstellung in vorzeichenbehaftete Ganzzahlen oder vorzeichenlose Ganzzahlen mit mehr Bits ist nicht klar definiert. Zum Beispiel ist es unklar, ob beim Konvertieren von `RGBA8` zu `RGBA16UI` die Absicht besteht, Werte auf den vollen Bereich einer 16-Bit vorzeichenlosen Ganzzahl zu skalieren. Daher ist nur die Umwandlung in vorzeichenlosen Ganzzahlen von höchstens 8 Bits, Halbfloats oder Floats erlaubt.

Die Texturquelle kann auf drei Arten bereitgestellt werden: aus einem {{jsxref("ArrayBuffer")}} (möglicherweise gemeinsam genutzt) unter Verwendung von `srcData` und `srcOffset`; von einer DOM-Pixel-`source`; oder in WebGL 2 von `gl.PIXEL_UNPACK_BUFFER` unter Verwendung von `offset`.

- `srcData`
  - : Ein {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, der die komprimierten Texturdaten enthält. Der Typ muss dem `type`-Parameter entsprechen:

    | `srcData`-Typ                                             | `type`-Wert                                                                                                                    |
    | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
    | {{jsxref("Int8Array")}}                                   | `BYTE`                                                                                                                         |
    | {{jsxref("Uint8Array")}}, {{jsxref("Uint8ClampedArray")}} | `UNSIGNED_BYTE`                                                                                                                |
    | {{jsxref("Int16Array")}}                                  | `SHORT`                                                                                                                        |
    | {{jsxref("Uint16Array")}}                                 | `UNSIGNED_SHORT`, `UNSIGNED_SHORT_5_6_5`, `UNSIGNED_SHORT_5_5_5_1`, `UNSIGNED_SHORT_4_4_4_4`, `HALF_FLOAT`                     |
    | {{jsxref("Int32Array")}}                                  | `INT`                                                                                                                          |
    | {{jsxref("Uint32Array")}}                                 | `UNSIGNED_INT`, `UNSIGNED_INT_5_9_9_9_REV`, `UNSIGNED_INT_2_10_10_10_REV`, `UNSIGNED_INT_10F_11F_11F_REV`, `UNSIGNED_INT_24_8` |
    | {{jsxref("Float32Array")}}                                | `FLOAT`                                                                                                                        |

    Wenn `type` `FLOAT_32_UNSIGNED_INT_24_8_REV` ist, muss `srcData` `null` sein.

- `srcOffset` {{optional_inline}}
  - : (Nur WebGL 2) Eine Ganzzahl, die den Index von `srcData` angibt, ab dem gelesen werden soll. Standardwert ist `0`.
- `source`
  - : Von einer DOM-Pixelquelle gelesen, die eine der folgenden sein kann:
    - [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
    - [`ImageData`](/de/docs/Web/API/ImageData)
    - [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)
    - [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
    - [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
    - [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
    - [`VideoFrame`](/de/docs/Web/API/VideoFrame)

    In WebGL 1 werden die `width` und `height` immer aus der Quelle abgeleitet. In WebGL 2 können sie auch explizit angegeben werden.

- `offset`
  - : (Nur WebGL 2) Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), der die Startadresse im Pufferspeicher angibt, der an `gl.PIXEL_UNPACK_BUFFER` gebunden ist.

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
