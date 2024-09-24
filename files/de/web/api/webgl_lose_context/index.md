---
title: WEBGL_lose_context Erweiterung
short-title: WEBGL_lose_context
slug: Web/API/WEBGL_lose_context
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **WEBGL_lose_context** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und stellt Funktionen bereit, um das Verlieren und Wiederherstellen eines {{domxref("WebGLRenderingContext")}} zu simulieren.

WebGL-Erweiterungen sind über die Methode {{domxref("WebGLRenderingContext.getExtension()")}} verfügbar. Weitere Informationen finden Sie unter [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist sowohl für {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} als auch für {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} Kontexte verfügbar.

## Instanzmethoden

- {{domxref("WEBGL_lose_context.loseContext()")}}
  - : Simuliert das Verlieren des Kontextes.
- {{domxref("WEBGL_lose_context.restoreContext()")}}
  - : Simuliert das Wiederherstellen des Kontextes.

## Beispiele

Mit dieser Erweiterung können Sie die Ereignisse [`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event) und [`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event) simulieren:

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

canvas.addEventListener("webglcontextlost", (event) => {
  console.log(event);
});

gl.getExtension("WEBGL_lose_context").loseContext();

// Ein WebGLContextEvent-Ereignis mit dem Typ "webglcontextlost" wird protokolliert.
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.isContextLost()")}}
- Ereignisse: [`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event), [`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event), [`webglcontextcreationerror`](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
