---
title: "WebGLRenderingContext: colorMask()-Methode"
short-title: colorMask()
slug: Web/API/WebGLRenderingContext/colorMask
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.colorMask()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) legt fest, welche Farbkomponenten beim Zeichnen oder Rendern zu einem [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer) aktiviert oder deaktiviert werden sollen.

## Syntax

```js-nolint
colorMask(red, green, blue, alpha)
```

### Parameter

- `red`
  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob die rote Farbkomponente in den Framebuffer geschrieben werden kann. Standardwert: `true`.
- `green`
  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob die grüne Farbkomponente in den Framebuffer geschrieben werden kann. Standardwert: `true`.
- `blue`
  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob die blaue Farbkomponente in den Framebuffer geschrieben werden kann. Standardwert: `true`.
- `alpha`
  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob die Alpha- (Transparenz-)Komponente in den Framebuffer geschrieben werden kann. Standardwert: `true`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.colorMask(true, true, true, false);
```

Um die aktuelle Farbmaske zu erhalten, fragen Sie die `COLOR_WRITEMASK`-Konstante ab, die ein {{jsxref("Array")}} zurückgibt.

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
