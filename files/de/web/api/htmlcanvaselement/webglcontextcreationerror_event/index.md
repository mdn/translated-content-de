---
title: "HTMLCanvasElement: webglcontextcreationerror Ereignis"
short-title: webglcontextcreationerror
slug: Web/API/HTMLCanvasElement/webglcontextcreationerror_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef}}

Das **`webglcontextcreationerror`** Ereignis der [WebGL API](/de/docs/Web/API/WebGL_API) wird ausgelöst, wenn der User-Agent nicht in der Lage ist, einen [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) Kontext zu erstellen.

Dieses Ereignis verfügt über eine [`WebGLContextEvent.statusMessage`](/de/docs/Web/API/WebGLContextEvent/statusMessage) Eigenschaft, die eine plattformabhängige Zeichenkette mit weiteren Informationen über das Scheitern enthalten kann.

Dieses Ereignis wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("webglcontextcreationerror", (event) => {});

onwebglcontextcreationerror = (event) => {};
```

## Ereignistyp

Ein [`WebGLContextEvent`](/de/docs/Web/API/WebGLContextEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("WebGLContextEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrer Elternschnittstelle, [`Event`](/de/docs/Web/API/Event)._

- [`WebGLContextEvent.statusMessage`](/de/docs/Web/API/WebGLContextEvent/statusMessage)
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
