---
title: "HTMLCanvasElement: webglcontextcreationerror Ereignis"
short-title: webglcontextcreationerror
slug: Web/API/HTMLCanvasElement/webglcontextcreationerror_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef}}

Das **`webglcontextcreationerror`** Ereignis der [WebGL API](/de/docs/Web/API/WebGL_API) wird ausgelöst, wenn der Benutzeragent nicht in der Lage ist, einen {{domxref("WebGLRenderingContext")}} Kontext zu erstellen.

Dieses Ereignis verfügt über eine {{domxref("WebGLContextEvent.statusMessage")}} Eigenschaft, die eine plattformabhängige Zeichenkette mit weiteren Informationen über den Fehler enthalten kann.

Dieses Ereignis wird nicht weitergegeben (bubbelt nicht).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("webglcontextcreationerror", (event) => {});

onwebglcontextcreationerror = (event) => {};
```

## Ereignistyp

Ein {{domxref("WebGLContextEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("WebGLContextEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrer übergeordneten Schnittstelle, {{domxref("Event")}}._

- {{domxref("WebGLContextEvent.statusMessage")}}
  - : Eine schreibgeschützte Eigenschaft, die zusätzliche Informationen über das Ereignis enthält.

## Beispiel

```js
const canvas = document.getElementById("canvas");

canvas.addEventListener(
  "webglcontextcreationerror",
  (e) => {
    console.log(e.statusMessage || "Unknown error");
  },
  false,
);

const gl = canvas.getContext("webgl");
// protokolliert statusMessage oder "Unknown error", wenn der WebGL-Kontext nicht erstellt werden kann
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLContextEvent")}}
- {{domxref("WebGLRenderingContext.isContextLost()")}}
- {{domxref("WEBGL_lose_context")}}, {{domxref("WEBGL_lose_context.loseContext()")}}, {{domxref("WEBGL_lose_context.restoreContext()")}}
