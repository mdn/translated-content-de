---
title: "WebGLRenderingContext: stencilMaskSeparate()-Methode"
short-title: stencilMaskSeparate()
slug: Web/API/WebGLRenderingContext/stencilMaskSeparate
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.stencilMaskSeparate()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) steuert das Aktivieren und Deaktivieren des Schreibens von einzelnen Bits in den Stencil-Ebenen für die Vorder- und/oder Rückseite.

Die {{domxref("WebGLRenderingContext.stencilMask()")}}-Methode kann sowohl die Vorder- als auch die Rückseiten-Stencil-Schreibmasken gleichzeitig auf einen Wert setzen.

## Syntax

```js-nolint
stencilMaskSeparate(face, mask)
```

### Parameter

- `face`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der angibt, ob die Schreibmaske für die Vorder- und/oder Rückseite des Stencils aktualisiert wird. Die möglichen Werte sind:

    - `gl.FRONT`
    - `gl.BACK`
    - `gl.FRONT_AND_BACK`

- `mask`
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, der eine Bitmaske angibt, um das Schreiben einzelner Bits in den Stencil-Ebenen zu aktivieren oder zu deaktivieren. Standardmäßig ist die Maske vollständig auf 1 gesetzt.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

## Beispiele

```js
gl.stencilMaskSeparate(gl.FRONT, 110101);
```

Um die aktuellen Stencil-Masken zu erhalten, können die Konstanten `STENCIL_WRITEMASK`,
`STENCIL_BACK_WRITEMASK` oder `STENCIL_BITS` abgefragt werden.

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
- {{domxref("WebGLRenderingContext.stencilMask()")}}
