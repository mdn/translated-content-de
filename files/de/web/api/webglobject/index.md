---
title: WebGLObject
slug: Web/API/WebGLObject
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("WebGL")}}{{SeeCompatTable}}

Das **`WebGLObject`** ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und die Elternschnittstelle für alle WebGL-Objekte.

Dieses Objekt hat keine öffentlichen Eigenschaften oder Methoden für sich.

Falls der WebGL-Kontext verloren geht, wird das interne _invalidated_ Flag aller `WebGLObject` Instanzen auf `true` gesetzt.

## Von `WebGLObject` abgeleitete Objekte

WebGL 1:

- [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer)
- [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)
- [`WebGLProgram`](/de/docs/Web/API/WebGLProgram)
- [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
- [`WebGLShader`](/de/docs/Web/API/WebGLShader)
- [`WebGLTexture`](/de/docs/Web/API/WebGLTexture)

WebGL 2:

- [`WebGLQuery`](/de/docs/Web/API/WebGLQuery) (und `WebGLTimerQueryEXT`)
- [`WebGLSampler`](/de/docs/Web/API/WebGLSampler)
- [`WebGLSync`](/de/docs/Web/API/WebGLSync)
- [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)
- [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject) (und `WebGLVertexArrayObjectOES`)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.isContextLost()`](/de/docs/Web/API/WebGLRenderingContext/isContextLost)
- [`WEBGL_lose_context`](/de/docs/Web/API/WEBGL_lose_context)
- [`webglcontextlost` Ereignis](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
