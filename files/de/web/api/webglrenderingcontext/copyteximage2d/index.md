---
title: "WebGLRenderingContext: copyTexImage2D() Methode"
short-title: copyTexImage2D()
slug: Web/API/WebGLRenderingContext/copyTexImage2D
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.copyTexImage2D()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) kopiert Pixel vom aktuellen {{domxref("WebGLFramebuffer")}} in ein 2D-Texturbild.

## Syntax

```js-nolint
copyTexImage2D(target, level, internalformat, x, y, width, height, border)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Bindepunkt (Ziel) der aktiven Textur angibt. Mögliche Werte:

    - `gl.TEXTURE_2D`: Eine zweidimensionale Textur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_X`: Positive X-Seite für eine Würfelkartentextur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`: Negative X-Seite für eine Würfelkartentextur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`: Positive Y-Seite für eine Würfelkartentextur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`: Negative Y-Seite für eine Würfelkartentextur.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`: Positive Z-Seite für eine Würfelkartentextur.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`: Negative Z-Seite für eine Würfelkartentextur.

- `level`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der die Detailstufe angibt. Stufe 0 ist die Basisbildstufe und Stufe _n_ ist die n-te Mipmap-Reduktionsstufe.
- `internalformat`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der die Farbkomponenten in der Textur angibt. Mögliche Werte:

    - `gl.ALPHA`: Verwirft die roten, grünen und blauen Komponenten und liest die Alphakomponente.
    - `gl.RGB`: Verwirft die Alphakomponenten und liest die roten, grünen und blauen Komponenten.
    - `gl.RGBA`: Rote, grüne, blaue und Alphakomponenten werden aus dem Farb-Puffer gelesen.
    - `gl.LUMINANCE`: Jede Farbkomponente ist eine Luminanzkomponente, Alpha ist 1.0.
    - `gl.LUMINANCE_ALPHA`: Jede Komponente ist eine Luminanz/Alpha-Komponente.

- `x`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der die x-Koordinate der unteren linken Ecke angibt, wo das Kopieren beginnt.
- `y`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der die y-Koordinate der unteren linken Ecke angibt, wo das Kopieren beginnt.
- `width`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, der die Breite der Textur angibt.
- `height`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, der die Höhe der Textur angibt.
- `border`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der die Breite des Randes angibt. Muss 0 sein.

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

- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("WebGLRenderingContext.texSubImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
