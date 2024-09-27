---
title: "WebGLRenderingContext: blendEquationSeparate() Methode"
short-title: blendEquationSeparate()
slug: Web/API/WebGLRenderingContext/blendEquationSeparate
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.blendEquationSeparate()`**-Methode
der [WebGL API](/de/docs/Web/API/WebGL_API) wird verwendet, um die RGB-Blend-Gleichung und die Alpha-Blend-Gleichung separat festzulegen.

Die Blend-Gleichung bestimmt, wie ein neuer Pixel mit einem bereits im
[`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer) enthaltenen Pixel kombiniert wird.

## Syntax

```js-nolint
blendEquationSeparate(modeRGB, modeAlpha)
```

### Parameter

- `modeRGB`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das angibt, wie die Rot-, Grün- und Blaukomponenten der Quell- und Ziel-Farbe kombiniert werden. Muss einer der folgenden sein:

    - `gl.FUNC_ADD`: Quelle + Ziel (Standardwert),
    - `gl.FUNC_SUBTRACT`: Quelle - Ziel,
    - `gl.FUNC_REVERSE_SUBTRACT`: Ziel - Quelle,
    - Bei Verwendung der [`EXT_blend_minmax`](/de/docs/Web/API/EXT_blend_minmax)-Erweiterung:

      - `ext.MIN_EXT`: Minimum von Quelle und Ziel,
      - `ext.MAX_EXT`: Maximum von Quelle und Ziel.

    - Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontexts", "", 1)}},
      stehen zusätzlich die folgenden Werte zur Verfügung:

      - `gl.MIN`: Minimum von Quelle und Ziel,
      - `gl.MAX`: Maximum von Quelle und Ziel.

- `modeAlpha`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das angibt, wie die Alphakomponente (Transparenz) der Quelle und der Ziel-Farbe kombiniert werden. Muss einer der folgenden sein:

    - `gl.FUNC_ADD`: Quelle + Ziel (Standardwert),
    - `gl.FUNC_SUBTRACT`: Quelle - Ziel,
    - `gl.FUNC_REVERSE_SUBTRACT`: Ziel - Quelle,
    - Bei Verwendung der [`EXT_blend_minmax`](/de/docs/Web/API/EXT_blend_minmax)-Erweiterung:

      - `ext.MIN_EXT`: Minimum von Quelle und Ziel,
      - `ext.MAX_EXT`: Maximum von Quelle und Ziel.

    - Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontexts", "", 1)}},
      stehen zusätzlich die folgenden Werte zur Verfügung:

      - `gl.MIN`: Minimum von Quelle und Ziel,
      - `gl.MAX`: Maximum von Quelle und Ziel.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Wenn _mode_ nicht einer der drei möglichen Werte ist, wird ein
`gl.INVALID_ENUM` Fehler ausgelöst.

## Beispiele

Um die Blend-Gleichungen festzulegen, verwenden Sie:

```js
gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_SUBTRACT);
```

Um die aktuellen Blend-Gleichungen abzufragen, verwenden Sie die Konstanten `BLEND_EQUATION`, `BLEND_EQUATION_RGB` und `BLEND_EQUATION_ALPHA`, die `gl.FUNC_ADD`, `gl.FUNC_SUBTRACT`,
`gl.FUNC_REVERSE_SUBTRACT` zurückgeben oder, wenn die [`EXT_blend_minmax`](/de/docs/Web/API/EXT_blend_minmax) aktiviert ist: `ext.MIN_EXT` oder `ext.MAX_EXT`.

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
