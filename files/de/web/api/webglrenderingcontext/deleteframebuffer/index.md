---
title: "WebGLRenderingContext: deleteFramebuffer() Methode"
short-title: deleteFramebuffer()
slug: Web/API/WebGLRenderingContext/deleteFramebuffer
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.deleteFramebuffer()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) löscht ein gegebenes [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)-Objekt. Diese Methode hat keine Auswirkung, wenn der Framebuffer bereits gelöscht wurde.

## Syntax

```js-nolint
deleteFramebuffer(framebuffer)
```

### Parameter

- `framebuffer`
  - : Ein zu löschendes [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)-Objekt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Löschen eines Framebuffers

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const framebuffer = gl.createFramebuffer();

// …

gl.deleteFramebuffer(framebuffer);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.bindFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindFramebuffer)
- [`WebGLRenderingContext.createFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/createFramebuffer)
- [`WebGLRenderingContext.isFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/isFramebuffer)
- Andere Buffer: [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
