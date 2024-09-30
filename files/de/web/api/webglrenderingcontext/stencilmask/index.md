---
title: "WebGLRenderingContext: stencilMask() Methode"
short-title: stencilMask()
slug: Web/API/WebGLRenderingContext/stencilMask
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.stencilMask()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) steuert das Aktivieren und Deaktivieren des Schreibens einzelner Bits in den Stencil-Ebenen, sowohl für die Vorder- als auch die Rückseite.

Die Methode [`WebGLRenderingContext.stencilMaskSeparate()`](/de/docs/Web/API/WebGLRenderingContext/stencilMaskSeparate) kann vordere und hintere Stencil-Writemasks auf unterschiedliche Werte setzen.

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

Um die aktuellen Stencil-Masken abzufragen, verwenden Sie die Konstanten `STENCIL_WRITEMASK`,
`STENCIL_BACK_WRITEMASK` oder `STENCIL_BITS`.

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
