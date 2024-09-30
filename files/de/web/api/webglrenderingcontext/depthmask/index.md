---
title: "WebGLRenderingContext: depthMask() Methode"
short-title: depthMask()
slug: Web/API/WebGLRenderingContext/depthMask
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.depthMask()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) legt fest, ob das Schreiben in den Tiefenpuffer aktiviert oder deaktiviert ist.

## Syntax

```js-nolint
depthMask(flag)
```

### Parameter

- `flag`
  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob das Schreiben in den Tiefenpuffer aktiviert ist oder nicht. Standardwert: `true`, was bedeutet, dass das Schreiben aktiviert ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.depthMask(false);
```

Um die aktuelle Tiefenmaske zu ermitteln, fragen Sie die Konstante `DEPTH_WRITEMASK` ab, die einen booleschen Wert zurückgibt.

```js
gl.getParameter(gl.DEPTH_WRITEMASK);
// false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.colorMask()`](/de/docs/Web/API/WebGLRenderingContext/colorMask)
- [`WebGLRenderingContext.stencilMask()`](/de/docs/Web/API/WebGLRenderingContext/stencilMask)
