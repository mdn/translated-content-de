---
title: "WebGLRenderingContext: blendEquationSeparate() Methode"
short-title: blendEquationSeparate()
slug: Web/API/WebGLRenderingContext/blendEquationSeparate
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.blendEquationSeparate()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) wird verwendet, um die RGB-Blend-Gleichung und die Alpha-Blend-Gleichung separat festzulegen.

Die Blend-Gleichung bestimmt, wie ein neues Pixel mit einem Pixel, das bereits im [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer) enthalten ist, kombiniert wird.

## Syntax

```js-nolint
blendEquationSeparate(modeRGB, modeAlpha)
```

### Parameter

- `modeRGB`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das angibt, wie die roten, grünen und blauen Komponenten von Quell- und Ziel-Farben kombiniert werden. Muss entweder sein:

    - `gl.FUNC_ADD`: Quelle + Ziel (Standardwert),
    - `gl.FUNC_SUBTRACT`: Quelle - Ziel,
    - `gl.FUNC_REVERSE_SUBTRACT`: Ziel - Quelle,
    - Bei Verwendung der [`EXT_blend_minmax`](/de/docs/Web/API/EXT_blend_minmax)-Erweiterung:

      - `ext.MIN_EXT`: Minimum von Quelle und Ziel,
      - `ext.MAX_EXT`: Maximum von Quelle und Ziel.

    - Bei Verwendung eines [WebGL 2-Kontext](/de/docs/Web/API/WebGL2RenderingContext) stehen zusätzlich folgende Werte zur Verfügung:

      - `gl.MIN`: Minimum von Quelle und Ziel,
      - `gl.MAX`: Maximum von Quelle und Ziel.

- `modeAlpha`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das angibt, wie die Alphakomponente (Transparenz) von Quell- und Ziel-Farben kombiniert wird. Muss entweder sein:

    - `gl.FUNC_ADD`: Quelle + Ziel (Standardwert),
    - `gl.FUNC_SUBTRACT`: Quelle - Ziel,
    - `gl.FUNC_REVERSE_SUBTRACT`: Ziel - Quelle,
    - Bei Verwendung der [`EXT_blend_minmax`](/de/docs/Web/API/EXT_blend_minmax)-Erweiterung:

      - `ext.MIN_EXT`: Minimum von Quelle und Ziel,
      - `ext.MAX_EXT`: Maximum von Quelle und Ziel.

    - Bei Verwendung eines [WebGL 2-Kontext](/de/docs/Web/API/WebGL2RenderingContext) stehen zusätzlich folgende Werte zur Verfügung:

      - `gl.MIN`: Minimum von Quelle und Ziel,
      - `gl.MAX`: Maximum von Quelle und Ziel.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Wenn _mode_ nicht einer der drei möglichen Werte ist, wird ein `gl.INVALID_ENUM`-Fehler geworfen.

## Beispiele

Um die Blend-Gleichungen festzulegen, verwenden Sie:

```js
gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_SUBTRACT);
```

Um die aktuellen Blend-Gleichungen zu erhalten, fragen Sie die `BLEND_EQUATION`, `BLEND_EQUATION_RGB` und `BLEND_EQUATION_ALPHA`-Konstanten ab, die `gl.FUNC_ADD`, `gl.FUNC_SUBTRACT`, `gl.FUNC_REVERSE_SUBTRACT` oder, falls die [`EXT_blend_minmax`](/de/docs/Web/API/EXT_blend_minmax) aktiviert ist, `ext.MIN_EXT` oder `ext.MAX_EXT` zurückgeben.

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

- [`WebGLRenderingContext.blendEquation()`](/de/docs/Web/API/WebGLRenderingContext/blendEquation)
- [`WebGLRenderingContext.blendColor()`](/de/docs/Web/API/WebGLRenderingContext/blendColor)
- [`WebGLRenderingContext.blendFunc()`](/de/docs/Web/API/WebGLRenderingContext/blendFunc)
- [`EXT_blend_minmax`](/de/docs/Web/API/EXT_blend_minmax)
