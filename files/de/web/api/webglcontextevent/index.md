---
title: WebGLContextEvent
slug: Web/API/WebGLContextEvent
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **WebGLContextEvent**-Schnittstelle ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und stellt eine Schnittstelle für ein Ereignis dar, das als Reaktion auf eine Statusänderung des WebGL-Rendering-Kontextes erzeugt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`WebGLContextEvent()`](/de/docs/Web/API/WebGLContextEvent/WebGLContextEvent)
  - : Erstellt ein neues `WebGLContextEvent`-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrer Elternschnittstelle, [`Event`](/de/docs/Web/API/Event)._

- [`WebGLContextEvent.statusMessage`](/de/docs/Web/API/WebGLContextEvent/statusMessage)
  - : Eine schreibgeschützte Eigenschaft, die zusätzliche Informationen über das Ereignis enthält.

## Instanz-Methoden

_Diese Schnittstelle definiert keine eigenen Methoden, erbt jedoch Methoden von ihrer Elternschnittstelle, [`Event`](/de/docs/Web/API/Event)._

## Beispiele

Mit Hilfe der [`WEBGL_lose_context`](/de/docs/Web/API/WEBGL_lose_context)-Erweiterung können Sie die Ereignisse [`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event) und [`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event) simulieren:

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
