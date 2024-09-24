---
title: "WebGLRenderingContext: Methode deleteFramebuffer()"
short-title: deleteFramebuffer()
slug: Web/API/WebGLRenderingContext/deleteFramebuffer
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die Methode **`WebGLRenderingContext.deleteFramebuffer()`** der [WebGL API](/de/docs/Web/API/WebGL_API) löscht ein gegebenes {{domxref("WebGLFramebuffer")}}-Objekt. Diese Methode hat keine Auswirkung, wenn der Framebuffer bereits gelöscht wurde.

## Syntax

```js-nolint
deleteFramebuffer(framebuffer)
```

### Parameter

- `framebuffer`
  - : Ein {{domxref("WebGLFramebuffer")}}-Objekt, das gelöscht werden soll.

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

- {{domxref("WebGLRenderingContext.bindFramebuffer()")}}
- {{domxref("WebGLRenderingContext.createFramebuffer()")}}
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}
- Andere Buffer: {{domxref("WebGLBuffer")}}, {{domxref("WebGLRenderbuffer")}}
