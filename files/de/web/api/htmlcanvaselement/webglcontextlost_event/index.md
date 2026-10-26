---
title: "HTMLCanvasElement: webglcontextlost-Ereignis"
short-title: webglcontextlost
slug: Web/API/HTMLCanvasElement/webglcontextlost_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("WebGL API")}}

Das **`webglcontextlost`**-Ereignis der [WebGL API](/de/docs/Web/API/WebGL_API) wird ausgelöst, wenn der User Agent erkennt, dass der einem [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)-Objekt zugeordnete Zeichenpuffer verloren gegangen ist.

Dieses Ereignis wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("webglcontextlost", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onwebglcontextlost = (event) => { }
```

## Ereignistyp

Ein [`WebGLContextEvent`](/de/docs/Web/API/WebGLContextEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("WebGLContextEvent")}}

## Beispiel

Mithilfe der Erweiterung [`WEBGL_lose_context`](/de/docs/Web/API/WEBGL_lose_context) können Sie das `webglcontextlost`-Ereignis simulieren:

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
