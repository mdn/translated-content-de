---
title: "WebGLRenderingContext: blendColor()-Methode"
short-title: blendColor()
slug: Web/API/WebGLRenderingContext/blendColor
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.blendColor()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) wird verwendet, um die Quell- und Zielmischfaktoren festzulegen.

## Syntax

```js-nolint
blendColor(red, green, blue, alpha)
```

### Parameter

- `red`
  - : Ein {{domxref("WebGL_API/Types", "GLclampf")}} für die rote Komponente im Bereich von 0 bis 1. Standardwert ist 0.
- `green`
  - : Ein {{domxref("WebGL_API/Types", "GLclampf")}} für die grüne Komponente im Bereich von 0 bis 1. Standardwert ist 0.
- `blue`
  - : Ein {{domxref("WebGL_API/Types", "GLclampf")}} für die blaue Komponente im Bereich von 0 bis 1. Standardwert ist 0.
- `alpha`
  - : Ein {{domxref("WebGL_API/Types", "GLclampf")}} für die Alphakomponente (Transparenz) im Bereich von 0 bis 1. Standardwert ist 0.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Um die Mischfarbe festzulegen, verwenden Sie:

```js
gl.blendColor(0, 0.5, 1, 1);
```

Um die Mischfarbe abzurufen, fragen Sie die `BLEND_COLOR`-Konstante ab, die ein
{{jsxref("Float32Array")}} zurückgibt.

```js
gl.getParameter(gl.BLEND_COLOR);
// Float32Array[0, 0.5, 1, 1]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.blendEquation()")}}
- {{domxref("WebGLRenderingContext.blendFunc()")}}
