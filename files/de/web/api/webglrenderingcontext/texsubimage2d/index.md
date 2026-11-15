---
title: "WebGLRenderingContext: Methode texSubImage2D()"
short-title: texSubImage2D()
slug: Web/API/WebGLRenderingContext/texSubImage2D
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`texSubImage2D()`** des Interfaces [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) der [WebGL-API](/de/docs/Web/API/WebGL_API) legt einen zweidimensionalen rechteckigen Teilbereich eines Texturbildes fest.

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
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (das Ziel) der aktiven Textur angibt. Mögliche Werte:
    - `gl.TEXTURE_2D`: Eine zweidimensionale Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_X`: Die positive X-Seite einer Cube-Map-Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`: Die negative X-Seite einer Cube-Map-Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`: Die positive Y-Seite einer Cube-Map-Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`: Die negative Y-Seite einer Cube-Map-Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`: Die positive Z-Seite einer Cube-Map-Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`: Die negative Z-Seite einer Cube-Map-Textur.

- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das die Detailstufe angibt. Stufe 0 ist die Stufe des Basisbildes, und Stufe _n_ ist die n-te Mipmap-Reduktionsstufe.
- `xoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das die x-Koordinate des linken unteren Texels eines rechteckigen Teilbereichs des Texturarrays mit der Breite `width` und der Höhe `height` angibt.
- `yoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das die y-Koordinate des linken unteren Texels eines rechteckigen Teilbereichs des Texturarrays mit der Breite `width` und der Höhe `height` angibt.
- `width`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Breite der Textur in Texeln angibt.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Höhe der Textur in Texeln angibt.
- `format`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das angibt, wie jedes Ganzzahlelement der rohen Texeldaten als Farbkomponente zu interpretieren ist. Mögliche Werte:
    - `gl.ALPHA`: Verwirft die roten, grünen und blauen Komponenten und liest die Alphakomponente.
    - `gl.RGB`: Verwirft die Alphakomponenten und liest die roten, grünen und blauen Komponenten.
    - `gl.RGBA`: Liest die roten, grünen, blauen und Alpha-Komponenten aus dem Farbpuffer.
    - `gl.LUMINANCE`: Jede Farbkomponente ist eine Luminanzkomponente; Alpha beträgt 1,0.
    - `gl.LUMINANCE_ALPHA`: Jede Komponente ist eine Luminanz-/Alpha-Komponente.

    Bei Verwendung der Erweiterung [`EXT_sRGB`](/de/docs/Web/API/EXT_sRGB):
    - `ext.SRGB_EXT`
    - `ext.SRGB_ALPHA_EXT`

    Bei Verwendung eines [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) stehen zusätzlich folgende Werte zur Verfügung:
    - `gl.RED`
    - `gl.RED_INTEGER`
    - `gl.RG`
    - `gl.RG_INTEGER`
    - `gl.RGB_INTEGER`
    - `gl.RGBA_INTEGER`
    - `gl.DEPTH_COMPONENT`
    - `gl.DEPTH_STENCIL`

- `type`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Größe jedes Ganzzahlelements in den rohen Texeldaten angibt. Informationen zu den verfügbaren Kombinationen von `format` und `type` finden Sie unter [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D).

Die Texturquelle kann auf drei Arten bereitgestellt werden: aus einem {{jsxref("ArrayBuffer")}} (möglicherweise gemeinsam genutzt) mit `srcData` und `srcOffset`, aus einer DOM-Pixelquelle mit `source` oder in WebGL 2 aus `gl.PIXEL_UNPACK_BUFFER` mit `offset`.

- `srcData`
  - : Ein {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, das die Pixeldaten des Bildes enthält. Sein Typ muss zum Parameter `type` passen; siehe [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D).
- `srcOffset` {{optional_inline}}
  - : (Nur WebGL 2) Eine Ganzzahl, die den Index in `srcData` angibt, ab dem gelesen wird. Der Standardwert ist `0`.
- `source`
  - : Liest Daten aus einer DOM-Pixelquelle. Dies kann einer der folgenden Typen sein:
    - [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
    - [`ImageData`](/de/docs/Web/API/ImageData)
    - [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)
    - [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
    - [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
    - [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
    - [`VideoFrame`](/de/docs/Web/API/VideoFrame)

    In WebGL 1 werden `width` und `height` immer aus der Quelle abgeleitet. In WebGL 2 können sie auch ausdrücklich angegeben werden.

- `offset`
  - : (Nur WebGL 2) Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), das die Startadresse im an `gl.PIXEL_UNPACK_BUFFER` gebundenen Puffer angibt.

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
