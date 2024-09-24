---
title: WebGLRenderbuffer
slug: Web/API/WebGLRenderbuffer
l10n:
  sourceCommit: db3325720c44ca35eeeb4c87f253d1d55fe00fa3
---

{{APIRef("WebGL")}}

Das **WebGLRenderbuffer** Interface ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und repräsentiert einen Puffer, der ein Bild enthalten kann oder als Quelle oder Ziel einer Renderoperation dienen kann.

{{InheritanceDiagram}}

## Beschreibung

Das `WebGLRenderbuffer`-Objekt definiert keine eigenen Methoden oder Eigenschaften und sein Inhalt ist nicht direkt zugänglich. Beim Arbeiten mit `WebGLRenderbuffer`-Objekten sind die folgenden Methoden nützlich:

- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.createRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.deleteRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.framebufferRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.getRenderbufferParameter()")}}
- {{domxref("WebGLRenderingContext.isRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.renderbufferStorage()")}}
- {{domxref("WebGL2RenderingContext.renderbufferStorageMultisample()")}}

## Beispiele

### Erstellen eines Renderbuffers

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

- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.createRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.deleteRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.framebufferRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.getRenderbufferParameter()")}}
- {{domxref("WebGLRenderingContext.isRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.renderbufferStorage()")}}
- Andere Puffer: {{domxref("WebGLBuffer")}}, {{domxref("WebGLFramebuffer")}}
