---
title: "WebGLRenderingContext: Methode blendColor()"
short-title: blendColor()
slug: Web/API/WebGLRenderingContext/blendColor
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.blendColor()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) wird verwendet, um die Blendfaktoren von Quelle und Ziel festzulegen.

## Syntax

```js-nolint
blendColor(red, green, blue, alpha)
```

### Parameter

- `red`
  - : Ein [`GLclampf`](/de/docs/Web/API/WebGL_API/Types) für die rote Komponente im Bereich von 0 bis 1. Der Standardwert ist 0.
- `green`
  - : Ein [`GLclampf`](/de/docs/Web/API/WebGL_API/Types) für die grüne Komponente im Bereich von 0 bis 1. Der Standardwert ist 0.
- `blue`
  - : Ein [`GLclampf`](/de/docs/Web/API/WebGL_API/Types) für die blaue Komponente im Bereich von 0 bis 1. Der Standardwert ist 0.
- `alpha`
  - : Ein [`GLclampf`](/de/docs/Web/API/WebGL_API/Types) für die Alphakomponente (Transparenz) im Bereich von 0 bis 1. Der Standardwert ist 0.

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

- [`WebGLRenderingContext.blendEquation()`](/de/docs/Web/API/WebGLRenderingContext/blendEquation)
- [`WebGLRenderingContext.blendFunc()`](/de/docs/Web/API/WebGLRenderingContext/blendFunc)
