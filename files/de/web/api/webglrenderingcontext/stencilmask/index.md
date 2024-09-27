---
title: "WebGLRenderingContext: stencilMask() Methode"
short-title: stencilMask()
slug: Web/API/WebGLRenderingContext/stencilMask
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.stencilMask()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) steuert das Aktivieren und Deaktivieren des Schreibens einzelner Bits in den Stencil-Ebenen sowohl für die Vorder- als auch die Rückseite.

Die [`WebGLRenderingContext.stencilMaskSeparate()`](/de/docs/Web/API/WebGLRenderingContext/stencilMaskSeparate)-Methode kann unterschiedliche Werte für die Schreibmasken der Vorder- und Rückseite festlegen.

## Syntax

```js-nolint
stencilMask(mask)
```

### Parameter

- `mask`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der eine Bitmaske angibt, um das Schreiben einzelner Bits in den Stencil-Ebenen zu aktivieren oder zu deaktivieren. Standardmäßig ist die Maske auf alle 1 gesetzt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.stencilMask(110101);
```

Um die aktuellen Stencil-Masken zu erhalten, fragen Sie die Konstanten `STENCIL_WRITEMASK`, `STENCIL_BACK_WRITEMASK` oder `STENCIL_BITS` ab.

```js
gl.getParameter(gl.STENCIL_WRITEMASK);
// 110101
gl.getParameter(gl.STENCIL_BACK_WRITEMASK);
// 110101
gl.getParameter(gl.STENCIL_BITS);
// 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.colorMask()`](/de/docs/Web/API/WebGLRenderingContext/colorMask)
- [`WebGLRenderingContext.depthMask()`](/de/docs/Web/API/WebGLRenderingContext/depthMask)
- [`WebGLRenderingContext.stencilMaskSeparate()`](/de/docs/Web/API/WebGLRenderingContext/stencilMaskSeparate)
