---
title: "HTMLCanvasElement: webglcontextrestored-Ereignis"
short-title: webglcontextrestored
slug: Web/API/HTMLCanvasElement/webglcontextrestored_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("WebGL API")}}

Das **`webglcontextrestored`**-Ereignis der [WebGL API](/de/docs/Web/API/WebGL_API) wird ausgelöst, wenn der User Agent den Zeichenpuffer für ein [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)-Objekt wiederherstellt.

Nach der Wiederherstellung des Kontexts sind WebGL-Ressourcen wie Texturen und Puffer, die vor dem Verlust des Kontexts erstellt wurden, nicht mehr gültig. Sie müssen den Zustand Ihrer WebGL-Anwendung neu initialisieren und die Ressourcen erneut erstellen.

Dieses Ereignis wird nicht nach oben weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("webglcontextrestored", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onwebglcontextrestored = (event) => { }
```

## Ereignistyp

Ein [`WebGLContextEvent`](/de/docs/Web/API/WebGLContextEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("WebGLContextEvent")}}

## Beispiel

Mithilfe der Erweiterung [`WEBGL_lose_context`](/de/docs/Web/API/WEBGL_lose_context) können Sie das `webglcontextrestored`-Ereignis simulieren:

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

canvas.addEventListener("webglcontextrestored", (e) => {
  console.log(e);
});

gl.getExtension("WEBGL_lose_context").restoreContext();

// "webglcontextrestored" event is logged.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLContextEvent`](/de/docs/Web/API/WebGLContextEvent)
- [`WebGLRenderingContext.isContextLost()`](/de/docs/Web/API/WebGLRenderingContext/isContextLost)
- [`WEBGL_lose_context`](/de/docs/Web/API/WEBGL_lose_context), [`WEBGL_lose_context.loseContext()`](/de/docs/Web/API/WEBGL_lose_context/loseContext), [`WEBGL_lose_context.restoreContext()`](/de/docs/Web/API/WEBGL_lose_context/restoreContext)
