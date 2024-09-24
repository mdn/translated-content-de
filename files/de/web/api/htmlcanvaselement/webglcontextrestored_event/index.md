---
title: "HTMLCanvasElement: webglcontextrestored-Ereignis"
short-title: webglcontextrestored
slug: Web/API/HTMLCanvasElement/webglcontextrestored_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef}}

Das **`webglcontextrestored`**-Ereignis der [WebGL API](/de/docs/Web/API/WebGL_API) wird ausgelöst, wenn der User-Agent den Zeichenpuffer für ein {{domxref("WebGLRenderingContext")}}-Objekt wiederherstellt.

Sobald der Kontext wiederhergestellt ist, sind WebGL-Ressourcen wie Texturen und Puffer, die vor dem Verlust des Kontextes erstellt wurden, nicht mehr gültig. Sie müssen den Zustand Ihrer WebGL-Anwendung neu initialisieren und die Ressourcen neu erstellen.

Dieses Ereignis wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("webglcontextrestored", (event) => {});

onwebglcontextrestored = (event) => {};
```

## Ereignistyp

Ein {{domxref("WebGLContextEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("WebGLContextEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrer Elternschnittstelle, {{domxref("Event")}}._

- {{domxref("WebGLContextEvent.statusMessage")}}
  - : Eine schreibgeschützte Eigenschaft, die zusätzliche Informationen über das Ereignis enthält.

## Beispiel

Mit Hilfe der {{domxref("WEBGL_lose_context")}}-Erweiterung können Sie das `webglcontextrestored`-Ereignis simulieren:

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

// "webglcontextrestored" Ereignis wird protokolliert.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLContextEvent")}}
- {{domxref("WebGLRenderingContext.isContextLost()")}}
- {{domxref("WEBGL_lose_context")}}, {{domxref("WEBGL_lose_context.loseContext()")}}, {{domxref("WEBGL_lose_context.restoreContext()")}}
