---
title: "WebGLRenderingContext: texSubImage2D() Methode"
short-title: texSubImage2D()
slug: Web/API/WebGLRenderingContext/texSubImage2D
l10n:
  sourceCommit: fe3f1f2dfaf44fcbe868b91b6a429270d2055716
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`texSubImage2D()`** Methode des [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)-Interfaces der [WebGL API](/de/docs/Web/API/WebGL_API) spezifiziert ein zweidimensionales Teilrechteck für ein Texturbild.

## Syntax

```js-nolint
// WebGL 1:
texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, srcData)
texSubImage2D(target, level, xoffset, yoffset, format, type, source)

// Additionally available in WebGL 2:
texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, srcData, srcOffset)
texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, source)
texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, offset)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Target) der aktiven Textur angibt. Mögliche Werte:
    - `gl.TEXTURE_2D`: Eine zweidimensionale Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_X`: Positive X-Fläche für eine Würfelkartentextur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`: Negative X-Fläche für eine Würfelkartentextur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`: Positive Y-Fläche für eine Würfelkartentextur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`: Negative Y-Fläche für eine Würfelkartentextur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`: Positive Z-Fläche für eine Würfelkartentextur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`: Negative Z-Fläche für eine Würfelkartentextur.

- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das das Detailniveau angibt. Level 0 ist das Basisbildniveau und Level _n_ ist das n-te Mipmap-Reduktionsniveau.
- `xoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das die x-Koordinate des unteren linken Texels einer rechteckigen Unterregion der Textur mit einer bestimmten Breite und Höhe angibt.
- `yoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das die y-Koordinate des unteren linken Texels einer rechteckigen Unterregion der Textur mit einer bestimmten Breite und Höhe angibt.
- `width`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Breite der Textur in Texeln angibt.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Höhe der Textur in Texeln angibt.
- `format`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das angibt, wie jedes ganzzahlige Element in den Rohtexturdaten als Farbkomponenten interpretiert werden soll. Mögliche Werte:
    - `gl.ALPHA`: Verwirft die roten, grünen und blauen Komponenten und liest die Alphakomponente.
    - `gl.RGB`: Verwirft die Alphakomponenten und liest die roten, grünen und blauen Komponenten.
    - `gl.RGBA`: Rote, grüne, blaue und alpha-Komponenten werden aus dem Farb-Puffer gelesen.
    - `gl.LUMINANCE`: Jede Farbkomponente ist eine Luminanz-Komponente, alpha ist 1.0.
    - `gl.LUMINANCE_ALPHA`: Jede Komponente ist eine Luminanz/Alpha-Komponente.

    Bei Verwendung der [`EXT_sRGB`](/de/docs/Web/API/EXT_sRGB) Erweiterung:
    - `ext.SRGB_EXT`
    - `ext.SRGB_ALPHA_EXT`

    Bei Verwendung eines [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) sind zusätzlich folgende Werte verfügbar:
    - `gl.RED`
    - `gl.RED_INTEGER`
    - `gl.RG`
    - `gl.RG_INTEGER`
    - `gl.RGB_INTEGER`
    - `gl.RGBA_INTEGER`
    - `gl.DEPTH_COMPONENT`
    - `gl.DEPTH_STENCIL`

- `type`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Größe jedes ganzzahligen Elements in den Rohtexturdaten angibt. Für die Kombinationen von `format` und `type` siehe [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D).

Die Texturquelle kann auf drei Arten bereitgestellt werden: aus einem {{jsxref("ArrayBuffer")}} (möglicherweise geteilt) unter Verwendung von `srcData` und `srcOffset`; von einer DOM-Pixel-`source`; oder im WebGL 2 von `gl.PIXEL_UNPACK_BUFFER` unter Verwendung von `offset`.

- `srcData`
  - : Ein {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, das die komprimierten Texturdaten enthält. Sein Typ muss dem `type`-Parameter entsprechen; siehe [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D).
- `srcOffset` {{optional_inline}}
  - : (Nur WebGL 2) Ein ganzzahliger Wert, der den Index von `srcData` angibt, ab dem gelesen werden soll. Standardmäßig `0`.
- `source`
  - : Wird aus einer DOM-Pixelquelle gelesen, die eine der folgenden sein kann:
    - [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
    - [`ImageData`](/de/docs/Web/API/ImageData)
    - [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)
    - [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
    - [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
    - [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
    - [`VideoFrame`](/de/docs/Web/API/VideoFrame)

    Im WebGL 1 werden `width` und `height` immer aus der Quelle abgeleitet. Im WebGL 2 können sie auch explizit angegeben werden.

- `offset`
  - : (Nur WebGL 2) Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), der die Startadresse im Puffer angibt, der an `gl.PIXEL_UNPACK_BUFFER` gebunden ist.

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
