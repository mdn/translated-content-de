---
title: "WebGLRenderingContext: blendEquation()-Methode"
short-title: blendEquation()
slug: Web/API/WebGLRenderingContext/blendEquation
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.blendEquation()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) wird verwendet, um sowohl die RGB-Blendgleichung als auch die Alpha-Blendgleichung auf eine einzelne Gleichung einzustellen.

Die Blendgleichung bestimmt, wie ein neuer Pixel mit einem bereits im [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer) vorhandenen Pixel kombiniert wird.

## Syntax

```js-nolint
blendEquation(mode)
```

### Parameter

- `mode`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das angibt, wie Quell- und Ziel-Farben kombiniert werden. Muss einer der folgenden sein:

    - `gl.FUNC_ADD`: Quelle + Ziel (Standardwert)
    - `gl.FUNC_SUBTRACT`: Quelle - Ziel
    - `gl.FUNC_REVERSE_SUBTRACT`: Ziel - Quelle

    Beim Verwenden der [`EXT_blend_minmax`](/de/docs/Web/API/EXT_blend_minmax)-Erweiterung:

    - `ext.MIN_EXT`: Minimum von Quelle und Ziel
    - `ext.MAX_EXT`: Maximum von Quelle und Ziel

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontext", "", 1)}} sind zusätzlich folgende Werte verfügbar:

    - `gl.MIN`: Minimum von Quelle und Ziel
    - `gl.MAX`: Maximum von Quelle und Ziel

### Ausnahmen

Wenn _mode_ nicht einer der drei möglichen Werte ist, wird ein `gl.INVALID_ENUM` Fehler ausgelöst.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Um die Blendgleichung festzulegen, verwenden Sie:

```js
gl.blendEquation(gl.FUNC_ADD);
gl.blendEquation(gl.FUNC_SUBTRACT);
gl.blendEquation(gl.FUNC_REVERSE_SUBTRACT);
```

Um die Blendgleichungen abzurufen, fragen Sie die Konstanten `BLEND_EQUATION`, `BLEND_EQUATION_RGB` und `BLEND_EQUATION_ALPHA` ab, die `gl.FUNC_ADD`, `gl.FUNC_SUBTRACT`, `gl.FUNC_REVERSE_SUBTRACT` oder, wenn das [`EXT_blend_minmax`](/de/docs/Web/API/EXT_blend_minmax) aktiviert ist, `ext.MIN_EXT` oder `ext.MAX_EXT` zurückgeben.

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

- [`WebGLRenderingContext.blendColor()`](/de/docs/Web/API/WebGLRenderingContext/blendColor)
- [`WebGLRenderingContext.blendFunc()`](/de/docs/Web/API/WebGLRenderingContext/blendFunc)
- [`EXT_blend_minmax`](/de/docs/Web/API/EXT_blend_minmax)
