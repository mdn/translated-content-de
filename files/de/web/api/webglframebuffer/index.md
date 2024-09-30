---
title: WebGLFramebuffer
slug: Web/API/WebGLFramebuffer
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **WebGLFramebuffer**-Schnittstelle ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und repräsentiert eine Sammlung von Puffern, die als Rendering-Ziel dienen.

{{InheritanceDiagram}}

## Beschreibung

Das `WebGLFramebuffer`-Objekt definiert keine eigenen Methoden oder Eigenschaften, und sein Inhalt ist nicht direkt zugänglich. Beim Arbeiten mit `WebGLFramebuffer`-Objekten sind folgende Methoden des [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) nützlich:

- [`WebGLRenderingContext.bindFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindFramebuffer)
- [`WebGLRenderingContext.createFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/createFramebuffer)
- [`WebGLRenderingContext.deleteFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteFramebuffer)
- [`WebGLRenderingContext.isFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/isFramebuffer)
- [`WebGLRenderingContext.framebufferRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/framebufferRenderbuffer)
- [`WebGLRenderingContext.framebufferTexture2D()`](/de/docs/Web/API/WebGLRenderingContext/framebufferTexture2D)

## Beispiele

### Erstellen eines Framebuffers

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createFramebuffer();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.bindFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindFramebuffer)
- [`WebGLRenderingContext.createFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/createFramebuffer)
- [`WebGLRenderingContext.deleteFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteFramebuffer)
- [`WebGLRenderingContext.isFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/isFramebuffer)
- [`WebGLRenderingContext.framebufferRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/framebufferRenderbuffer)
- [`WebGLRenderingContext.framebufferTexture2D()`](/de/docs/Web/API/WebGLRenderingContext/framebufferTexture2D)
- Weitere Puffer: [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
