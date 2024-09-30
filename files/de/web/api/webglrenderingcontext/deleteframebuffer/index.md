---
title: "WebGLRenderingContext: deleteFramebuffer() Methode"
short-title: deleteFramebuffer()
slug: Web/API/WebGLRenderingContext/deleteFramebuffer
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.deleteFramebuffer()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) löscht ein angegebenes [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)-Objekt. Diese Methode hat keine Wirkung, wenn der Framebuffer bereits gelöscht wurde.

## Syntax

```js-nolint
deleteFramebuffer(framebuffer)
```

### Parameter

- `framebuffer`
  - : Ein [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)-Objekt, das gelöscht werden soll.

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
- Andere Buffers: [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
