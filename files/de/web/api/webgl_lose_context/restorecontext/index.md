---
title: "WEBGL_lose_context: Methode restoreContext()"
short-title: restoreContext()
slug: Web/API/WEBGL_lose_context/restoreContext
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`restoreContext()`** der Erweiterung `WEBGL_lose_context` ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und ermöglicht es Ihnen, die Wiederherstellung des Kontexts eines [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) zu simulieren.

Sie löst die [in der WebGL-Spezifikation beschriebenen Schritte](https://registry.khronos.org/webgl/specs/latest/1.0/#5.15.3) zur Handhabung eines wiederhergestellten Kontexts aus. Der Kontext kann erst verwendet werden, nachdem das Ereignis [`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event) ausgelöst wurde.

## Syntax

```js-nolint
restoreContext()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Browser melden WebGL-Fehler möglicherweise nicht standardmäßig. Um WebGL-Fehler zu prüfen, rufen Sie [`getError()`](/de/docs/Web/API/WebGLRenderingContext/getError) auf. Der folgende Fehler kann auftreten:

- `INVALID_OPERATION`
  - : Tritt auf, wenn der Kontext nicht verloren gegangen war.

## Beispiele

Mit dieser Methode können Sie das Ereignis [`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event) simulieren:

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

canvas.addEventListener("webglcontextrestored", (e) => {
  console.log(e);
});

gl.getExtension("WEBGL_lose_context").restoreContext();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.isContextLost()`](/de/docs/Web/API/WebGLRenderingContext/isContextLost)
- Ereignisse: [`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event), [`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event), [`webglcontextcreationerror`](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
