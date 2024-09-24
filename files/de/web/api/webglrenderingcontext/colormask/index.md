---
title: "WebGLRenderingContext: Methode colorMask()"
short-title: colorMask()
slug: Web/API/WebGLRenderingContext/colorMask
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.colorMask()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) legt fest, welche Farbkomponenten beim Zeichnen oder Rendern in einen {{domxref("WebGLFramebuffer")}} aktiviert oder deaktiviert werden sollen.

## Syntax

```js-nolint
colorMask(red, green, blue, alpha)
```

### Parameter

- `red`
  - : Ein {{domxref("WebGL_API/Types", "GLboolean")}}, der angibt, ob die rote Farbkomponente in den Framebuffer geschrieben werden kann oder nicht. Standardwert: `true`.
- `green`
  - : Ein {{domxref("WebGL_API/Types", "GLboolean")}}, der angibt, ob die grüne Farbkomponente in den Framebuffer geschrieben werden kann oder nicht. Standardwert: `true`.
- `blue`
  - : Ein {{domxref("WebGL_API/Types", "GLboolean")}}, der angibt, ob die blaue Farbkomponente in den Framebuffer geschrieben werden kann oder nicht. Standardwert: `true`.
- `alpha`
  - : Ein {{domxref("WebGL_API/Types", "GLboolean")}}, der angibt, ob die Alpha- (Transparenz-)Komponente in den Framebuffer geschrieben werden kann oder nicht. Standardwert: `true`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.colorMask(true, true, true, false);
```

Um die aktuelle Farbmaske zu erhalten, fragen Sie die Konstante `COLOR_WRITEMASK` ab, die ein {{jsxref("Array")}} zurückgibt.

```js
gl.getParameter(gl.COLOR_WRITEMASK);
// [true, true, true, false]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.depthMask()")}}
- {{domxref("WebGLRenderingContext.stencilMask()")}}
