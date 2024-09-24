---
title: "WebGLRenderingContext: stencilMask()-Methode"
short-title: stencilMask()
slug: Web/API/WebGLRenderingContext/stencilMask
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.stencilMask()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) steuert das Ein- und Ausschalten sowohl der Vorder- als auch der Rückseite des Schreibens einzelner Bits in den Stencil-Ebenen.

Die {{domxref("WebGLRenderingContext.stencilMaskSeparate()")}}-Methode kann Vorder- und Rückseitenstencil-Schreibmasken auf unterschiedliche Werte setzen.

## Syntax

```js-nolint
stencilMask(mask)
```

### Parameter

- `mask`
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, der eine Bitmaske angibt, um das Schreiben einzelner Bits in den Stencil-Ebenen zu aktivieren oder zu deaktivieren. Standardmäßig ist die Maske alles 1.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.stencilMask(110101);
```

Um die aktuellen Stencil-Masken zu erhalten, fragen Sie die Konstanten `STENCIL_WRITEMASK`,
`STENCIL_BACK_WRITEMASK` oder `STENCIL_BITS` ab.

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

- {{domxref("WebGLRenderingContext.colorMask()")}}
- {{domxref("WebGLRenderingContext.depthMask()")}}
- {{domxref("WebGLRenderingContext.stencilMaskSeparate()")}}
