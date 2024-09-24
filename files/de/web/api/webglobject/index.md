---
title: WebGLObjekt
slug: Web/API/WebGLObject
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("WebGL")}}{{SeeCompatTable}}

Das **`WebGLObject`** ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und die übergeordnete Schnittstelle für alle WebGL-Objekte.

Dieses Objekt hat keine eigenen öffentlichen Eigenschaften oder Methoden.

Wenn der WebGL-Kontext verloren geht, wird das interne _ungültige_ Flag aller `WebGLObject`-Instanzen auf `true` gesetzt.

## Objekte, die von `WebGLObject` erben

WebGL 1:

- {{domxref("WebGLBuffer")}}
- {{domxref("WebGLFramebuffer")}}
- {{domxref("WebGLProgram")}}
- {{domxref("WebGLRenderbuffer")}}
- {{domxref("WebGLShader")}}
- {{domxref("WebGLTexture")}}

WebGL 2:

- {{domxref("WebGLQuery")}} (und `WebGLTimerQueryEXT`)
- {{domxref("WebGLSampler")}}
- {{domxref("WebGLSync")}}
- {{domxref("WebGLTransformFeedback")}}
- {{domxref("WebGLVertexArrayObject")}} (und `WebGLVertexArrayObjectOES`)

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.isContextLost()`](/de/docs/Web/API/WebGLRenderingContext/isContextLost)
- [`WEBGL_lose_context`](/de/docs/Web/API/WEBGL_lose_context)
- [`webglcontextlost` Ereignis](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
