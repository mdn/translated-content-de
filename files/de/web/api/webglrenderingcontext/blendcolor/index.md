---
title: "WebGLRenderingContext: blendColor()-Methode"
short-title: blendColor()
slug: Web/API/WebGLRenderingContext/blendColor
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.blendColor()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) dient dazu, die Quell- und Ziel-Mischfaktoren festzulegen.

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
  - : Ein [`GLclampf`](/de/docs/Web/API/WebGL_API/Types) für die Alpha-Komponente (Transparenz) im Bereich von 0 bis 1. Der Standardwert ist 0.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Um die Mischfarbe einzustellen, verwenden Sie:

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
