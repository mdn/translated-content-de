---
title: "HTMLCanvasElement: webglcontextlost-Ereignis"
short-title: webglcontextlost
slug: Web/API/HTMLCanvasElement/webglcontextlost_event
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef}}

Das **`webglcontextlost`**-Ereignis der [WebGL API](/de/docs/Web/API/WebGL_API) wird ausgelöst, wenn der User-Agent erkennt, dass der mit einem {{domxref("WebGLRenderingContext")}}-Objekt verbundene Zeichnungspuffer verloren gegangen ist.

Dieses Ereignis wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder legen Sie eine Ereignis-Handler-Eigenschaft fest.

```js
addEventListener("webglcontextlost", (event) => {});

onwebglcontextlost = (event) => {};
```

## Ereignistyp

Ein {{domxref("WebGLContextEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("WebGLContextEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrer übergeordneten Schnittstelle, {{domxref("Event")}}._

- {{domxref("WebGLContextEvent.statusMessage")}}
  - : Eine schreibgeschützte Eigenschaft, die zusätzliche Informationen über das Ereignis enthält.

## Beispiel

Mit Hilfe der {{domxref("WEBGL_lose_context")}}-Erweiterung können Sie das `webglcontextlost`-Ereignis simulieren:

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

canvas.addEventListener("webglcontextlost", (event) => {
  console.log(event);
});

gl.getExtension("WEBGL_lose_context").loseContext();

// "webglcontextlost"-Ereignis wird protokolliert.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLContextEvent")}}
- {{domxref("WebGLRenderingContext.isContextLost()")}}
- {{domxref("WEBGL_lose_context")}}, {{domxref("WEBGL_lose_context.loseContext()")}}, {{domxref("WEBGL_lose_context.restoreContext()")}}
