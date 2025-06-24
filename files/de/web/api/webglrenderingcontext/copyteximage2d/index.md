---
title: "WebGLRenderingContext: copyTexImage2D() Methode"
short-title: copyTexImage2D()
slug: Web/API/WebGLRenderingContext/copyTexImage2D
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.copyTexImage2D()`** Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) kopiert Pixel vom aktuellen [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer) in ein 2D-Texturbild.

## Syntax

```js-nolint
copyTexImage2D(target, level, internalformat, x, y, width, height, border)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Ziel) der aktiven Textur angibt. Mögliche Werte:
    - `gl.TEXTURE_2D`: Eine zweidimensionale Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_X`: Positive X-Fläche für eine cubemap-Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`: Negative X-Fläche für eine cubemap-Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`: Positive Y-Fläche für eine cubemap-Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`: Negative Y-Fläche für eine cubemap-Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`: Positive Z-Fläche für eine cubemap-Textur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`: Negative Z-Fläche für eine cubemap-Textur.

- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das die Detailebene angibt. Stufe 0 ist die Basisbildstufe und Stufe _n_ ist die n-te Mipmap-Reduktionsstufe.
- `internalformat`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Farbkomponenten in der Textur angibt. Mögliche Werte:
    - `gl.ALPHA`: Verwirft die roten, grünen und blauen Komponenten und liest die Alphakomponente.
    - `gl.RGB`: Verwirft die Alphakomponenten und liest die roten, grünen und blauen Komponenten.
    - `gl.RGBA`: Rote, grüne, blaue und Alphakomponenten werden aus dem Farbpuffer gelesen.
    - `gl.LUMINANCE`: Jede Farbkomponente ist eine Luminanzkomponente, Alpha ist 1.0.
    - `gl.LUMINANCE_ALPHA`: Jede Komponente ist eine Luminanz/Alpha-Komponente.

- `x`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das die x-Koordinate der unteren linken Ecke angibt, von der aus das Kopieren beginnt.
- `y`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das die y-Koordinate der unteren linken Ecke angibt, von der aus das Kopieren beginnt.
- `width`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Breite der Textur angibt.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Höhe der Textur angibt.
- `border`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das die Breite des Rands angibt. Muss 0 sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.copyTexImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 0, 0, 512, 512, 0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.createTexture()`](/de/docs/Web/API/WebGLRenderingContext/createTexture)
- [`WebGLRenderingContext.bindTexture()`](/de/docs/Web/API/WebGLRenderingContext/bindTexture)
- [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D)
- [`WebGLRenderingContext.texSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texSubImage2D)
- [`WebGLRenderingContext.compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D)
