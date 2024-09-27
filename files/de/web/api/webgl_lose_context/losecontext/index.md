---
title: "WEBGL_lose_context: loseContext()-Methode"
short-title: loseContext()
slug: Web/API/WEBGL_lose_context/loseContext
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die **WEBGL_lose_context.loseContext()**-Methode ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und ermöglicht es Ihnen, den Verlust des Kontextes eines [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) Kontexts zu simulieren.

Sie löst die im WebGL-Standard beschriebenen Schritte zur Handhabung eines verloren gegangenen Kontextes aus. Der Kontext bleibt verloren, bis [`WEBGL_lose_context.restoreContext()`](/de/docs/Web/API/WEBGL_lose_context/restoreContext) aufgerufen wird.

## Syntax

```js-nolint
loseContext()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Mit dieser Methode können Sie das
[`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
Ereignis simulieren:

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

canvas.addEventListener(
  "webglcontextlost",
  (e) => {
    console.log(e);
  },
  false,
);

gl.getExtension("WEBGL_lose_context").loseContext();

// WebGLContextEvent event with type "webglcontextlost" is logged.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.isContextLost()`](/de/docs/Web/API/WebGLRenderingContext/isContextLost)
- Ereignisse:
  [`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event),
  [`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event),
  [`webglcontextcreationerror`](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
