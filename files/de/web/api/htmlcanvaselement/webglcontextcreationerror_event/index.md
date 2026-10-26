---
title: "HTMLCanvasElement: webglcontextcreationerror-Ereignis"
short-title: webglcontextcreationerror
slug: Web/API/HTMLCanvasElement/webglcontextcreationerror_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("WebGL API")}}

Das **`webglcontextcreationerror`**-Ereignis der [WebGL-API](/de/docs/Web/API/WebGL_API) wird ausgelöst, wenn der User Agent keinen [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)-Kontext erstellen kann.

Dieses Ereignis besitzt eine [`WebGLContextEvent.statusMessage`](/de/docs/Web/API/WebGLContextEvent/statusMessage)-Eigenschaft, die eine plattformabhängige Zeichenfolge mit weiteren Informationen zum Fehler enthalten kann.

Dieses Ereignis wird nicht weitergereicht (Bubbling).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("webglcontextcreationerror", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onwebglcontextcreationerror = (event) => { }
```

## Ereignistyp

Ein [`WebGLContextEvent`](/de/docs/Web/API/WebGLContextEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("WebGLContextEvent")}}

## Beispiel

```js
const canvas = document.getElementById("canvas");

canvas.addEventListener("webglcontextcreationerror", (e) => {
  console.log(e.statusMessage || "Unknown error");
});

const gl = canvas.getContext("webgl");
// logs statusMessage or "Unknown error" if unable to create WebGL context
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLContextEvent`](/de/docs/Web/API/WebGLContextEvent)
- [`WebGLRenderingContext.isContextLost()`](/de/docs/Web/API/WebGLRenderingContext/isContextLost)
- [`WEBGL_lose_context`](/de/docs/Web/API/WEBGL_lose_context), [`WEBGL_lose_context.loseContext()`](/de/docs/Web/API/WEBGL_lose_context/loseContext), [`WEBGL_lose_context.restoreContext()`](/de/docs/Web/API/WEBGL_lose_context/restoreContext)
