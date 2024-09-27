---
title: WebGLContextEvent
slug: Web/API/WebGLContextEvent
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die **WebGLContextEvent**-Schnittstelle ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und stellt eine Schnittstelle für ein Ereignis dar, das als Reaktion auf einen Statuswechsel des WebGL-Rendering-Kontexts erzeugt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`WebGLContextEvent()`](/de/docs/Web/API/WebGLContextEvent/WebGLContextEvent)
  - : Erstellt ein neues `WebGLContextEvent`-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrer übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event)._

- [`WebGLContextEvent.statusMessage`](/de/docs/Web/API/WebGLContextEvent/statusMessage)
  - : Eine schreibgeschützte Eigenschaft, die zusätzliche Informationen über das Ereignis enthält.

## Instanz-Methoden

_Diese Schnittstelle definiert keine eigenen Methoden, erbt aber Methoden von ihrer übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event)._

## Beispiele

Mithilfe der [`WEBGL_lose_context`](/de/docs/Web/API/WEBGL_lose_context)-Erweiterung können Sie die Ereignisse [`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event) und [`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event) simulieren:

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

canvas.addEventListener(
  "webglcontextlost",
  (e) => {
    console.log(e);
  },
  false,
);

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
