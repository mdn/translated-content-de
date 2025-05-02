---
title: "HTMLCanvasElement: webglcontextrestored-Ereignis"
short-title: webglcontextrestored
slug: Web/API/HTMLCanvasElement/webglcontextrestored_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`webglcontextrestored`**-Ereignis der [WebGL-API](/de/docs/Web/API/WebGL_API) wird ausgelöst, wenn der Benutzeragent den Zeichenpuffer für ein [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)-Objekt wiederherstellt.

Sobald der Kontext wiederhergestellt ist, sind WebGL-Ressourcen wie Texturen und Puffer, die vor dem Verlust des Kontexts erstellt wurden, nicht mehr gültig. Sie müssen den Zustand Ihrer WebGL-Anwendung neu initialisieren und Ressourcen neu erstellen.

Dieses Ereignis wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("webglcontextrestored", (event) => { })

onwebglcontextrestored = (event) => { }
```

## Ereignistyp

Ein [`WebGLContextEvent`](/de/docs/Web/API/WebGLContextEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("WebGLContextEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrer Elternschnittstelle, [`Event`](/de/docs/Web/API/Event)._

- [`WebGLContextEvent.statusMessage`](/de/docs/Web/API/WebGLContextEvent/statusMessage)
  - : Eine schreibgeschützte Eigenschaft, die zusätzliche Informationen über das Ereignis enthält.

## Beispiel

Mit Hilfe der [`WEBGL_lose_context`](/de/docs/Web/API/WEBGL_lose_context)-Erweiterung können Sie das `webglcontextrestored`-Ereignis simulieren:

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

canvas.addEventListener(
  "webglcontextrestored",
  (e) => {
    console.log(e);
  },
  false,
);

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
