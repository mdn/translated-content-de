---
title: "WebGLRenderingContext: blendEquationSeparate() Methode"
short-title: blendEquationSeparate()
slug: Web/API/WebGLRenderingContext/blendEquationSeparate
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGLRenderingContext.blendEquationSeparate()`** des [WebGL API](/de/docs/Web/API/WebGL_API) wird verwendet, um die RGB-Blendgleichung und die Alpha-Blendgleichung getrennt festzulegen.

Die Blendgleichung bestimmt, wie ein neues Pixel mit einem bereits im [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer) vorhandenen Pixel kombiniert wird.

## Syntax

```js-nolint
blendEquationSeparate(modeRGB, modeAlpha)
```

### Parameter

- `modeRGB`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der angibt, wie die Rot-, Grün- und Blaukomponenten der Quell- und Ziel-Farben kombiniert werden. Muss eine der folgenden sein:

    - `gl.FUNC_ADD`: Quelle + Ziel (Standardwert),
    - `gl.FUNC_SUBTRACT`: Quelle - Ziel,
    - `gl.FUNC_REVERSE_SUBTRACT`: Ziel - Quelle,
    - Bei Verwendung der [`EXT_blend_minmax`](/de/docs/Web/API/EXT_blend_minmax) Erweiterung:

      - `ext.MIN_EXT`: Minimum von Quelle und Ziel,
      - `ext.MAX_EXT`: Maximum von Quelle und Ziel.

    - Bei Verwendung eines [WebGL 2 Kontextes](/de/docs/Web/API/WebGL2RenderingContext)
      sind zusätzlich die folgenden Werte verfügbar:
      - `gl.MIN`: Minimum von Quelle und Ziel,
      - `gl.MAX`: Maximum von Quelle und Ziel.

- `modeAlpha`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der angibt, wie die Alphakomponente (Transparenz) der Quell- und Zielfarben kombiniert wird. Muss eine der folgenden sein:

    - `gl.FUNC_ADD`: Quelle + Ziel (Standardwert),
    - `gl.FUNC_SUBTRACT`: Quelle - Ziel,
    - `gl.FUNC_REVERSE_SUBTRACT`: Ziel - Quelle,
    - Bei Verwendung der [`EXT_blend_minmax`](/de/docs/Web/API/EXT_blend_minmax) Erweiterung:

      - `ext.MIN_EXT`: Minimum von Quelle und Ziel,
      - `ext.MAX_EXT`: Maximum von Quelle und Ziel.

    - Bei Verwendung eines [WebGL 2 Kontextes](/de/docs/Web/API/WebGL2RenderingContext)
      sind zusätzlich die folgenden Werte verfügbar:
      - `gl.MIN`: Minimum von Quelle und Ziel,
      - `gl.MAX`: Maximum von Quelle und Ziel.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Wenn _mode_ nicht einer der drei möglichen Werte ist, wird ein `gl.INVALID_ENUM` Fehler ausgelöst.

## Beispiele

Um die Blendgleichungen festzulegen, verwenden Sie:

```js
gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_SUBTRACT);
```

Um die aktuellen Blendgleichungen abzurufen, fragen Sie die Konstanten `BLEND_EQUATION`, `BLEND_EQUATION_RGB` und `BLEND_EQUATION_ALPHA` ab, die `gl.FUNC_ADD`, `gl.FUNC_SUBTRACT`, `gl.FUNC_REVERSE_SUBTRACT` oder, wenn die [`EXT_blend_minmax`](/de/docs/Web/API/EXT_blend_minmax) aktiviert ist: `ext.MIN_EXT` oder `ext.MAX_EXT` zurückgeben.

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
