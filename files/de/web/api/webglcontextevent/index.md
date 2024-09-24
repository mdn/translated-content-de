---
title: WebGLContextEvent
slug: Web/API/WebGLContextEvent
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die **WebGLContextEvent**-Schnittstelle ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und ist eine Schnittstelle für ein Ereignis, das als Reaktion auf eine Statusänderung des WebGL-Rendering-Kontexts generiert wird.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("WebGLContextEvent.WebGLContextEvent", "WebGLContextEvent()")}}
  - : Erstellt ein neues `WebGLContextEvent`-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrer Elternschnittstelle, {{domxref("Event")}}._

- {{domxref("WebGLContextEvent.statusMessage")}}
  - : Eine schreibgeschützte Eigenschaft, die zusätzliche Informationen über das Ereignis enthält.

## Instanz-Methoden

_Diese Schnittstelle definiert keine eigenen Methoden, erbt jedoch Methoden von ihrer Elternschnittstelle, {{domxref("Event")}}._

## Beispiele

Mit Hilfe der {{domxref("WEBGL_lose_context")}}-Erweiterung können Sie die {{domxref("HTMLCanvasElement/webglcontextlost_event", "webglcontextlost")}}- und {{domxref("HTMLCanvasElement/webglcontextrestored_event", "webglcontextrestored")}}-Ereignisse simulieren:

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

// WebGLContextEvent Ereignis mit dem Typ "webglcontextlost" wird protokolliert.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.isContextLost()")}}
- {{domxref("WEBGL_lose_context")}}, {{domxref("WEBGL_lose_context.loseContext()")}}, {{domxref("WEBGL_lose_context.restoreContext()")}}
- Ereignisse: [webglcontextlost](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event), [webglcontextrestored](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event), [webglcontextcreationerror](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
