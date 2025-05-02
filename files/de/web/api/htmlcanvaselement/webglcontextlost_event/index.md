---
title: "HTMLCanvasElement: webglcontextlost-Ereignis"
short-title: webglcontextlost
slug: Web/API/HTMLCanvasElement/webglcontextlost_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`webglcontextlost`**-Ereignis der [WebGL-API](/de/docs/Web/API/WebGL_API) wird ausgelöst, wenn der Benutzeragent erkennt, dass der mit einem [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) Objekt verbundene Zeichenpuffer verloren gegangen ist.

Dieses Ereignis wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("webglcontextlost", (event) => { })

onwebglcontextlost = (event) => { }
```

## Ereignistyp

Ein [`WebGLContextEvent`](/de/docs/Web/API/WebGLContextEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("WebGLContextEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrer übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event)._

- [`WebGLContextEvent.statusMessage`](/de/docs/Web/API/WebGLContextEvent/statusMessage)
  - : Eine schreibgeschützte Eigenschaft, die zusätzliche Informationen über das Ereignis enthält.

## Beispiel

Mithilfe der [`WEBGL_lose_context`](/de/docs/Web/API/WEBGL_lose_context)-Erweiterung können Sie das `webglcontextlost`-Ereignis simulieren:

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

canvas.addEventListener("webglcontextlost", (event) => {
  console.log(event);
});

gl.getExtension("WEBGL_lose_context").loseContext();

// "webglcontextlost" event is logged.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLContextEvent`](/de/docs/Web/API/WebGLContextEvent)
- [`WebGLRenderingContext.isContextLost()`](/de/docs/Web/API/WebGLRenderingContext/isContextLost)
- [`WEBGL_lose_context`](/de/docs/Web/API/WEBGL_lose_context), [`WEBGL_lose_context.loseContext()`](/de/docs/Web/API/WEBGL_lose_context/loseContext), [`WEBGL_lose_context.restoreContext()`](/de/docs/Web/API/WEBGL_lose_context/restoreContext)
