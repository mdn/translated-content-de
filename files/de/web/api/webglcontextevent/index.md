---
title: WebGLContextEvent
slug: Web/API/WebGLContextEvent
l10n:
  sourceCommit: 5b8d7c22883325e4abffcce235520c4a8b840bf3
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Das **WebGLContextEvent**-Interface ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API). Es beschreibt ein Ereignis, das bei einer Statusänderung des WebGL-Rendering-Kontexts ausgelöst wird.

{{InheritanceDiagram}}

## Konstruktor

- [`WebGLContextEvent()`](/de/docs/Web/API/WebGLContextEvent/WebGLContextEvent)
  - : Erstellt ein neues `WebGLContextEvent`-Objekt.

## Instanzeigenschaften

_Dieses Interface erbt Eigenschaften von seinem übergeordneten Interface [`Event`](/de/docs/Web/API/Event)._

- [`WebGLContextEvent.statusMessage`](/de/docs/Web/API/WebGLContextEvent/statusMessage) {{ReadOnlyInline}}
  - : Eine Eigenschaft, die zusätzliche Informationen über das Ereignis enthält.

## Instanzmethoden

_Dieses Interface definiert keine eigenen Methoden, sondern erbt Methoden von seinem übergeordneten Interface [`Event`](/de/docs/Web/API/Event)._

## Beispiele

Mithilfe der Erweiterung [`WEBGL_lose_context`](/de/docs/Web/API/WEBGL_lose_context) können Sie die Ereignisse [`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event) und [`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event) simulieren:

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

canvas.addEventListener("webglcontextlost", (e) => {
  console.log(e);
});

gl.getExtension("WEBGL_lose_context").loseContext();

// WebGLContextEvent event with type "webglcontextlost" is logged.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.isContextLost()`](/de/docs/Web/API/WebGLRenderingContext/isContextLost)
- [`WEBGL_lose_context`](/de/docs/Web/API/WEBGL_lose_context), [`WEBGL_lose_context.loseContext()`](/de/docs/Web/API/WEBGL_lose_context/loseContext), [`WEBGL_lose_context.restoreContext()`](/de/docs/Web/API/WEBGL_lose_context/restoreContext)
- Ereignisse: [webglcontextlost](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event), [webglcontextrestored](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event), [webglcontextcreationerror](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
