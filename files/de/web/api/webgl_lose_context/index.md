---
title: WEBGL_lose_context-Erweiterung
short-title: WEBGL_lose_context
slug: Web/API/WEBGL_lose_context
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **WEBGL_lose_context**-Erweiterung ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und stellt Funktionen bereit, mit denen sich der Verlust und die Wiederherstellung eines [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) simulieren lassen.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar.
Weitere Informationen finden Sie unter [WebGL-Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions).

> [!NOTE]
> Diese Erweiterung ist sowohl für [WebGL1-](/de/docs/Web/API/WebGLRenderingContext) als auch für [WebGL2-Kontexte](/de/docs/Web/API/WebGL2RenderingContext) verfügbar.

## Instanzmethoden

- [`WEBGL_lose_context.loseContext()`](/de/docs/Web/API/WEBGL_lose_context/loseContext)
  - : Simuliert den Verlust des Kontexts.
- [`WEBGL_lose_context.restoreContext()`](/de/docs/Web/API/WEBGL_lose_context/restoreContext)
  - : Simuliert die Wiederherstellung des Kontexts.

## Beispiele

Mit dieser Erweiterung können Sie die Ereignisse [`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event) und [`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event) simulieren:

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

canvas.addEventListener("webglcontextlost", (event) => {
  console.log(event);
});

gl.getExtension("WEBGL_lose_context").loseContext();

// WebGLContextEvent event with type "webglcontextlost" is logged.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.isContextLost()`](/de/docs/Web/API/WebGLRenderingContext/isContextLost)
- Ereignisse: [`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event), [`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event), [`webglcontextcreationerror`](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
