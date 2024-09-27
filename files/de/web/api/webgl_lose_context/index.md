---
title: WEBGL_lose_context Erweiterung
short-title: WEBGL_lose_context
slug: Web/API/WEBGL_lose_context
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **WEBGL_lose_context** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und bietet Funktionen, um das Verlieren und Wiederherstellen eines [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) zu simulieren.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Weitere Informationen finden Sie auch unter [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Leitfaden](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist in sowohl {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} als auch {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} Kontexten verfügbar.

## Instanzmethoden

- [`WEBGL_lose_context.loseContext()`](/de/docs/Web/API/WEBGL_lose_context/loseContext)
  - : Simuliert das Verlieren des Kontexts.
- [`WEBGL_lose_context.restoreContext()`](/de/docs/Web/API/WEBGL_lose_context/restoreContext)
  - : Simuliert das Wiederherstellen des Kontexts.

## Beispiele

Mit dieser Erweiterung können Sie die [`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event) und [`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event) Ereignisse simulieren:

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
