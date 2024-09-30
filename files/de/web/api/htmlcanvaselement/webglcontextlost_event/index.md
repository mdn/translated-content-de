---
title: "HTMLCanvasElement: webglcontextlost Ereignis"
short-title: webglcontextlost
slug: Web/API/HTMLCanvasElement/webglcontextlost_event
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef}}

Das **`webglcontextlost`** Ereignis der [WebGL API](/de/docs/Web/API/WebGL_API) wird ausgelöst, wenn der Benutzeragent erkennt, dass der Zeichnungspuffer, der mit einem [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) Objekt verbunden ist, verloren gegangen ist.

Dieses Ereignis steigt nicht auf.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("webglcontextlost", (event) => {});

onwebglcontextlost = (event) => {};
```

## Ereignistyp

Ein [`WebGLContextEvent`](/de/docs/Web/API/WebGLContextEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("WebGLContextEvent")}}

## Eigenschaften des Ereignisses

_Dieses Interface erbt Eigenschaften von seinem Eltern-Interface, [`Event`](/de/docs/Web/API/Event)._

- [`WebGLContextEvent.statusMessage`](/de/docs/Web/API/WebGLContextEvent/statusMessage)
  - : Eine schreibgeschützte Eigenschaft, die zusätzliche Informationen über das Ereignis enthält.

## Beispiel

Mit Hilfe der [`WEBGL_lose_context`](/de/docs/Web/API/WEBGL_lose_context) Erweiterung können Sie das `webglcontextlost` Ereignis simulieren:

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
