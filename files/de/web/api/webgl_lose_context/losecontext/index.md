---
title: "WEBGL_lose_context: Methode loseContext()"
short-title: loseContext()
slug: Web/API/WEBGL_lose_context/loseContext
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`loseContext()`** der Erweiterung `WEBGL_lose_context` ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und ermöglicht es Ihnen, den Verlust des Kontexts eines [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) zu simulieren.

Sie löst die [in der WebGL-Spezifikation beschriebenen Schritte](https://registry.khronos.org/webgl/specs/latest/1.0/#5.15.2) zur Behandlung eines Kontextverlusts aus. Der Kontext bleibt verloren, bis [`WEBGL_lose_context.restoreContext()`](/de/docs/Web/API/WEBGL_lose_context/restoreContext) aufgerufen wird. Die Methode zerstört außerdem den zugrunde liegenden Grafikkontext und alle Grafikressourcen. Dies ist der empfohlene Mechanismus, mit dem Anwendungen ihre Nutzung der WebGL-API programmgesteuert beenden können.

## Syntax

```js-nolint
loseContext()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Mit dieser Methode können Sie das Ereignis [`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event) simulieren:

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

canvas.addEventListener("webglcontextlost", (e) => {
  console.log(e);
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
