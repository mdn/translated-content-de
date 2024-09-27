---
title: "WebGLRenderingContext: colorMask() Methode"
short-title: colorMask()
slug: Web/API/WebGLRenderingContext/colorMask
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.colorMask()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) legt fest, welche Farbkomponenten aktiviert oder deaktiviert werden sollen, wenn zu einem [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer) gezeichnet oder gerendert wird.

## Syntax

```js-nolint
colorMask(red, green, blue, alpha)
```

### Parameter

- `red`
  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob die rote Farbkomponente in den Frame-Buffer geschrieben werden kann oder nicht. Standardwert: `true`.
- `green`
  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob die grüne Farbkomponente in den Frame-Buffer geschrieben werden kann. Standardwert: `true`.
- `blue`
  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob die blaue Farbkomponente in den Frame-Buffer geschrieben werden kann. Standardwert: `true`.
- `alpha`
  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob die Alpha- (Transparenz) Komponente in den Frame-Buffer geschrieben werden kann. Standardwert: `true`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.colorMask(true, true, true, false);
```

Um die aktuelle Farbmaske zu erhalten, fragen Sie die `COLOR_WRITEMASK` Konstante ab, die ein {{jsxref("Array")}} zurückgibt.

```js
gl.getParameter(gl.COLOR_WRITEMASK);
// [true, true, true, false]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.depthMask()`](/de/docs/Web/API/WebGLRenderingContext/depthMask)
- [`WebGLRenderingContext.stencilMask()`](/de/docs/Web/API/WebGLRenderingContext/stencilMask)
