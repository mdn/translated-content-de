---
title: "WebGLRenderingContext: Methode blendEquation()"
short-title: blendEquation()
slug: Web/API/WebGLRenderingContext/blendEquation
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.blendEquation()`**-Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) wird verwendet, um sowohl die RGB-Blendgleichung als auch die Alpha-Blendgleichung auf eine einzelne Gleichung festzulegen.

Die Blendgleichung bestimmt, wie ein neues Pixel mit einem bereits im
{{domxref("WebGLFramebuffer")}} vorhandenen Pixel kombiniert wird.

## Syntax

```js-nolint
blendEquation(mode)
```

### Parameter

- `mode`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das angibt, wie Quell- und Ziel-Farben kombiniert werden.
    Muss entweder sein:

    - `gl.FUNC_ADD`: Quelle + Ziel (Standardwert)
    - `gl.FUNC_SUBTRACT`: Quelle - Ziel
    - `gl.FUNC_REVERSE_SUBTRACT`: Ziel - Quelle

    Bei Verwendung der {{domxref("EXT_blend_minmax")}}-Erweiterung:

    - `ext.MIN_EXT`: Minimum von Quelle und Ziel
    - `ext.MAX_EXT`: Maximum von Quelle und Ziel

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Context", "", 1)}}
    stehen zusätzlich folgende Werte zur Verfügung:

    - `gl.MIN`: Minimum von Quelle und Ziel
    - `gl.MAX`: Maximum von Quelle und Ziel

### Ausnahmen

Wenn _mode_ nicht einer der drei möglichen Werte ist, wird ein
`gl.INVALID_ENUM` Fehler ausgelöst.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Um die Blendgleichung festzulegen, verwenden Sie:

```js
gl.blendEquation(gl.FUNC_ADD);
gl.blendEquation(gl.FUNC_SUBTRACT);
gl.blendEquation(gl.FUNC_REVERSE_SUBTRACT);
```

Um die Blendgleichungen abzurufen, fragen Sie die Konstanten `BLEND_EQUATION`,
`BLEND_EQUATION_RGB` und `BLEND_EQUATION_ALPHA` ab, die
`gl.FUNC_ADD`, `gl.FUNC_SUBTRACT`,
`gl.FUNC_REVERSE_SUBTRACT` zurückgeben. Wenn {{domxref("EXT_blend_minmax")}} aktiviert ist: `ext.MIN_EXT` oder `ext.MAX_EXT`.

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

- {{domxref("WebGLRenderingContext.blendColor()")}}
- {{domxref("WebGLRenderingContext.blendFunc()")}}
- {{domxref("EXT_blend_minmax")}}
