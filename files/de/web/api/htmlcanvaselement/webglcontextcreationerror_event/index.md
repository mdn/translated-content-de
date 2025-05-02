---
title: "HTMLCanvasElement: webglcontextcreationerror Ereignis"
short-title: webglcontextcreationerror
slug: Web/API/HTMLCanvasElement/webglcontextcreationerror_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`webglcontextcreationerror`** Ereignis der [WebGL API](/de/docs/Web/API/WebGL_API) wird ausgelöst, wenn der User-Agent nicht in der Lage ist, einen [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) Kontext zu erstellen.

Dieses Ereignis besitzt eine [`WebGLContextEvent.statusMessage`](/de/docs/Web/API/WebGLContextEvent/statusMessage) Eigenschaft, die einen plattformspezifischen String mit weiteren Informationen über den Fehler enthalten kann.

Dieses Ereignis blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignisbehandlungs-Eigenschaft.

```js-nolint
addEventListener("webglcontextcreationerror", (event) => { })

onwebglcontextcreationerror = (event) => { }
```

## Ereignistyp

Ein [`WebGLContextEvent`](/de/docs/Web/API/WebGLContextEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("WebGLContextEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrer übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event)._

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
