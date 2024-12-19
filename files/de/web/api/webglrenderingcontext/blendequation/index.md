---
title: "WebGLRenderingContext: blendEquation()-Methode"
short-title: blendEquation()
slug: Web/API/WebGLRenderingContext/blendEquation
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.blendEquation()`**-Methode der
[WebGL-API](/de/docs/Web/API/WebGL_API) wird verwendet, um sowohl die RGB- als auch die Alphablendgleichung auf eine einzelne Gleichung festzulegen.

Die Blendgleichung bestimmt, wie ein neuer Pixel mit einem bereits im
[`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer) vorhandenen Pixel kombiniert wird.

## Syntax

```js-nolint
blendEquation(mode)
```

### Parameter

- `mode`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der angibt, wie Quell- und Ziel-Farben kombiniert werden.
    Muss entweder sein:

    - `gl.FUNC_ADD`: Quelle + Ziel (Standardwert)
    - `gl.FUNC_SUBTRACT`: Quelle - Ziel
    - `gl.FUNC_REVERSE_SUBTRACT`: Ziel - Quelle

    Bei Verwendung der [`EXT_blend_minmax`](/de/docs/Web/API/EXT_blend_minmax)-Erweiterung:

    - `ext.MIN_EXT`: Minimum von Quelle und Ziel
    - `ext.MAX_EXT`: Maximum von Quelle und Ziel

    Bei Verwendung eines [WebGL-2-Kontext](/de/docs/Web/API/WebGL2RenderingContext)
    sind zusätzlich folgende Werte verfügbar:

    - `gl.MIN`: Minimum von Quelle und Ziel
    - `gl.MAX`: Maximum von Quelle und Ziel

### Ausnahmen

Wenn _mode_ nicht einer der drei möglichen Werte ist, wird ein
`gl.INVALID_ENUM`-Fehler ausgelöst.

### Rückgabewert

None ({{jsxref("undefined")}}).

## Beispiele

Um die Blendgleichung festzulegen, verwenden Sie:

```js
gl.blendEquation(gl.FUNC_ADD);
gl.blendEquation(gl.FUNC_SUBTRACT);
gl.blendEquation(gl.FUNC_REVERSE_SUBTRACT);
```

Um die Blendgleichungen zu erhalten, fragen Sie die Konstanten `BLEND_EQUATION`,
`BLEND_EQUATION_RGB` und `BLEND_EQUATION_ALPHA` ab, die
`gl.FUNC_ADD`, `gl.FUNC_SUBTRACT`,
`gl.FUNC_REVERSE_SUBTRACT` zurückgeben, oder falls die [`EXT_blend_minmax`](/de/docs/Web/API/EXT_blend_minmax) aktiviert ist: `ext.MIN_EXT` oder `ext.MAX_EXT`.

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
