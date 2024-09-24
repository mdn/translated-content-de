---
title: "WebGLRenderingContext: blendEquationSeparate() Methode"
short-title: blendEquationSeparate()
slug: Web/API/WebGLRenderingContext/blendEquationSeparate
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.blendEquationSeparate()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) wird verwendet, um die RGB-Bildmischgleichung und die Alpha-Bildmischgleichung getrennt festzulegen.

Die Bildmischgleichung bestimmt, wie ein neues Pixel mit einem bereits im {{domxref("WebGLFramebuffer")}} vorhandenen Pixel kombiniert wird.

## Syntax

```js-nolint
blendEquationSeparate(modeRGB, modeAlpha)
```

### Parameter

- `modeRGB`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der angibt, wie die roten, grünen und blauen Komponenten der Quell- und Ziel-Farben kombiniert werden. Muss einer der folgenden Werte sein:

    - `gl.FUNC_ADD`: Quelle + Ziel (Standardwert),
    - `gl.FUNC_SUBTRACT`: Quelle - Ziel,
    - `gl.FUNC_REVERSE_SUBTRACT`: Ziel - Quelle,
    - Bei Verwendung der {{domxref("EXT_blend_minmax")}}-Erweiterung:

      - `ext.MIN_EXT`: Minimum von Quelle und Ziel,
      - `ext.MAX_EXT`: Maximum von Quelle und Ziel.

    - Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Kontext", "", 1)}} sind zusätzlich folgende Werte verfügbar:

      - `gl.MIN`: Minimum von Quelle und Ziel,
      - `gl.MAX`: Maximum von Quelle und Ziel.

- `modeAlpha`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der angibt, wie die Alphakomponente (Transparenz) der Quell- und Ziel-Farben kombiniert werden. Muss einer der folgenden Werte sein:

    - `gl.FUNC_ADD`: Quelle + Ziel (Standardwert),
    - `gl.FUNC_SUBTRACT`: Quelle - Ziel,
    - `gl.FUNC_REVERSE_SUBTRACT`: Ziel - Quelle,
    - Bei Verwendung der {{domxref("EXT_blend_minmax")}}-Erweiterung:

      - `ext.MIN_EXT`: Minimum von Quelle und Ziel,
      - `ext.MAX_EXT`: Maximum von Quelle und Ziel.

    - Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Kontext", "", 1)}} sind zusätzlich folgende Werte verfügbar:

      - `gl.MIN`: Minimum von Quelle und Ziel,
      - `gl.MAX`: Maximum von Quelle und Ziel.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Wenn _mode_ nicht einer der drei möglichen Werte ist, wird ein `gl.INVALID_ENUM` Fehler ausgelöst.

## Beispiele

Um die Bildmischgleichungen festzulegen, verwenden Sie:

```js
gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_SUBTRACT);
```

Um die aktuellen Bildmischgleichungen zu erhalten, fragen Sie die Konstanten `BLEND_EQUATION`, `BLEND_EQUATION_RGB` und `BLEND_EQUATION_ALPHA` ab, die `gl.FUNC_ADD`, `gl.FUNC_SUBTRACT`, `gl.FUNC_REVERSE_SUBTRACT` oder, wenn die {{domxref("EXT_blend_minmax")}} aktiviert ist, `ext.MIN_EXT` oder `ext.MAX_EXT` zurückgeben.

```js
gl.getParameter(gl.BLEND_EQUATION_RGB) === gl.FUNC_ADD;
// true

gl.getParameter(gl.BLEND_EQUATION_ALPHA) === gl.FUNC_ADD;
// true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.blendEquation()")}}
- {{domxref("WebGLRenderingContext.blendColor()")}}
- {{domxref("WebGLRenderingContext.blendFunc()")}}
- {{domxref("EXT_blend_minmax")}}
