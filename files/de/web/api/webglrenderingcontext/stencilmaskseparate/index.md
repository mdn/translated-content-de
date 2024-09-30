---
title: "WebGLRenderingContext: stencilMaskSeparate() Methode"
short-title: stencilMaskSeparate()
slug: Web/API/WebGLRenderingContext/stencilMaskSeparate
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.stencilMaskSeparate()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) steuert das Ein- und Ausschalten des Schreibens einzelner Bits in den Stencil-Ebenen für die Vorder- und/oder Rückseite.

Die Methode [`WebGLRenderingContext.stencilMask()`](/de/docs/Web/API/WebGLRenderingContext/stencilMask) kann gleichzeitig sowohl die Vorder- als auch Rückseiten-Stencil-Schreibmasken auf einen Wert setzen.

## Syntax

```js-nolint
stencilMaskSeparate(face, mask)
```

### Parameter

- `face`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob die Vorder- und/oder Rückseiten-Stencil-Schreibmaske
    aktualisiert wird. Die möglichen Werte sind:

    - `gl.FRONT`
    - `gl.BACK`
    - `gl.FRONT_AND_BACK`

- `mask`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), das eine Bitmaske angibt, um das Schreiben einzelner Bits in den Stencil-Ebenen zu aktivieren oder zu deaktivieren. Standardmäßig ist die Maske auf alle 1 gesetzt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.stencilMaskSeparate(gl.FRONT, 110101);
```

Um die aktuellen Stencil-Masken zu ermitteln, fragen Sie die Konstanten `STENCIL_WRITEMASK`,
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

- [`WebGLRenderingContext.colorMask()`](/de/docs/Web/API/WebGLRenderingContext/colorMask)
- [`WebGLRenderingContext.depthMask()`](/de/docs/Web/API/WebGLRenderingContext/depthMask)
- [`WebGLRenderingContext.stencilMask()`](/de/docs/Web/API/WebGLRenderingContext/stencilMask)
