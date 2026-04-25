---
title: "WEBGL_lose_context: loseContext() Methode"
short-title: loseContext()
slug: Web/API/WEBGL_lose_context/loseContext
l10n:
  sourceCommit: cedeb457a35e8cc06f5760495caa3ecc2571db25
---

{{APIRef("WebGL")}}

Die **`loseContext()`**-Methode der `WEBGL_lose_context`-Erweiterung ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und ermöglicht es Ihnen, das Verlieren des Kontexts eines [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) zu simulieren.

Sie initiiert die [im WebGL-Standard beschriebenen Schritte](https://registry.khronos.org/webgl/specs/latest/1.0/#5.15.2) zum Umgang mit einem verlorenen Kontext. Der Kontext bleibt verloren, bis [`WEBGL_lose_context.restoreContext()`](/de/docs/Web/API/WEBGL_lose_context/restoreContext) aufgerufen wird. Es zerstört auch den zugrunde liegenden Grafik-Kontext und alle Grafik-Ressourcen. Dies ist der empfohlene Mechanismus, mit dem Anwendungen die Nutzung der WebGL-API programmatisch stoppen können.

## Syntax

```js-nolint
loseContext()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Mit dieser Methode können Sie das [`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)-Ereignis simulieren:

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
