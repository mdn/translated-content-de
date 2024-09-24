---
title: WebGLFramebuffer
slug: Web/API/WebGLFramebuffer
l10n:
  sourceCommit: c9cb9a898105ed0fc5286cfdd552ad71ce345777
---

{{APIRef("WebGL")}}

Die **WebGLFramebuffer**-Schnittstelle ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und repräsentiert eine Sammlung von Puffern, die als Rendierziel dienen.

{{InheritanceDiagram}}

## Beschreibung

Das `WebGLFramebuffer`-Objekt definiert keine eigenen Methoden oder Eigenschaften, und sein Inhalt ist nicht direkt zugänglich. Beim Arbeiten mit `WebGLFramebuffer`-Objekten sind die folgenden Methoden des {{domxref("WebGLRenderingContext")}} nützlich:

- {{domxref("WebGLRenderingContext.bindFramebuffer()")}}
- {{domxref("WebGLRenderingContext.createFramebuffer()")}}
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}
- {{domxref("WebGLRenderingContext.framebufferRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.framebufferTexture2D()")}}

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

- {{domxref("WebGLRenderingContext.bindFramebuffer()")}}
- {{domxref("WebGLRenderingContext.createFramebuffer()")}}
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}
- {{domxref("WebGLRenderingContext.framebufferRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.framebufferTexture2D()")}}
- Andere Puffer: {{domxref("WebGLBuffer")}}, {{domxref("WebGLRenderbuffer")}}
