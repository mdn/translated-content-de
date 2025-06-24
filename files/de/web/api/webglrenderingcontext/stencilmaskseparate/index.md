---
title: "WebGLRenderingContext: stencilMaskSeparate()-Methode"
short-title: stencilMaskSeparate()
slug: Web/API/WebGLRenderingContext/stencilMaskSeparate
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.stencilMaskSeparate()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) steuert das Ein- und Ausschalten des Schreibens individueller Bits in den Stenzelebenen für die Vorder- und/oder Rückseite.

Die [`WebGLRenderingContext.stencilMask()`](/de/docs/Web/API/WebGLRenderingContext/stencilMask)-Methode kann sowohl die vorderen als auch die hinteren Stenzelebenen auf einen Wert gleichzeitig setzen.

## Syntax

```js-nolint
stencilMaskSeparate(face, mask)
```

### Parameter

- `face`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob die Schreibmaske der vorderen und/oder hinteren Stenzelebenen aktualisiert wird. Die möglichen Werte sind:
    - `gl.FRONT`
    - `gl.BACK`
    - `gl.FRONT_AND_BACK`

- `mask`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der eine Bitmaske angibt, um das Schreiben einzelner Bits in den Stenzelebenen zu aktivieren oder deaktivieren. Standardmäßig ist die Maske auf alle 1 gesetzt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.stencilMaskSeparate(gl.FRONT, 110101);
```

Um die aktuellen Stenzelschreiber-Masken zu erhalten, fragen Sie die `STENCIL_WRITEMASK`,
`STENCIL_BACK_WRITEMASK` oder `STENCIL_BITS` Konstanten ab.

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
