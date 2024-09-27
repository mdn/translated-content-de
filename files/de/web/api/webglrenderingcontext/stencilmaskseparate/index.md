---
title: "WebGLRenderingContext: stencilMaskSeparate() Methode"
short-title: stencilMaskSeparate()
slug: Web/API/WebGLRenderingContext/stencilMaskSeparate
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.stencilMaskSeparate()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) steuert das Aktivieren und Deaktivieren des Schreibens einzelner Bits in den Stencil-Ebenen für Vorder- und/oder Rückseite.

Die [`WebGLRenderingContext.stencilMask()`](/de/docs/Web/API/WebGLRenderingContext/stencilMask)-Methode kann sowohl die Vorder- als auch die Rückseiten-Stencil-Schreibmasken gleichzeitig auf einen Wert setzen.

## Syntax

```js-nolint
stencilMaskSeparate(face, mask)
```

### Parameter

- `face`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das angibt, ob die Vorder- und/oder Rückseiten-Stencil-Schreibmaske aktualisiert wird. Die möglichen Werte sind:

    - `gl.FRONT`
    - `gl.BACK`
    - `gl.FRONT_AND_BACK`

- `mask`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), das eine Bitmaske angibt, die das Schreiben einzelner Bits in den Stencil-Ebenen aktiviert oder deaktiviert. Standardmäßig ist die Maske auf alle 1 gesetzt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.stencilMaskSeparate(gl.FRONT, 110101);
```

Um die aktuellen Stencil-Masken abzurufen, fragen Sie die Konstanten `STENCIL_WRITEMASK`, `STENCIL_BACK_WRITEMASK` oder `STENCIL_BITS` ab.

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
- [`WebGLRenderingContext.stencilMask()`](/de/docs/Web/API/WebGLRenderingContext/stencilMask)
