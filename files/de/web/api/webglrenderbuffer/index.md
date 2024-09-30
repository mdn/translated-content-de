---
title: WebGLRenderbuffer
slug: Web/API/WebGLRenderbuffer
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Das **WebGLRenderbuffer**-Interface ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und repräsentiert einen Puffer, der ein Bild enthalten kann oder Quelle oder Ziel einer Renderoperation sein kann.

{{InheritanceDiagram}}

## Beschreibung

Das `WebGLRenderbuffer`-Objekt definiert keine eigenen Methoden oder Eigenschaften, und sein Inhalt ist nicht direkt zugänglich. Bei der Arbeit mit `WebGLRenderbuffer`-Objekten sind die folgenden Methoden nützlich:

- [`WebGLRenderingContext.bindRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindRenderbuffer)
- [`WebGLRenderingContext.createRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/createRenderbuffer)
- [`WebGLRenderingContext.deleteRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteRenderbuffer)
- [`WebGLRenderingContext.framebufferRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/framebufferRenderbuffer)
- [`WebGLRenderingContext.getRenderbufferParameter()`](/de/docs/Web/API/WebGLRenderingContext/getRenderbufferParameter)
- [`WebGLRenderingContext.isRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/isRenderbuffer)
- [`WebGLRenderingContext.renderbufferStorage()`](/de/docs/Web/API/WebGLRenderingContext/renderbufferStorage)
- [`WebGL2RenderingContext.renderbufferStorageMultisample()`](/de/docs/Web/API/WebGL2RenderingContext/renderbufferStorageMultisample)

## Beispiele

### Erstellen eines Renderpuffers

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createRenderbuffer();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.bindRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindRenderbuffer)
- [`WebGLRenderingContext.createRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/createRenderbuffer)
- [`WebGLRenderingContext.deleteRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteRenderbuffer)
- [`WebGLRenderingContext.framebufferRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/framebufferRenderbuffer)
- [`WebGLRenderingContext.getRenderbufferParameter()`](/de/docs/Web/API/WebGLRenderingContext/getRenderbufferParameter)
- [`WebGLRenderingContext.isRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/isRenderbuffer)
- [`WebGLRenderingContext.renderbufferStorage()`](/de/docs/Web/API/WebGLRenderingContext/renderbufferStorage)
- Andere Puffer: [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)
