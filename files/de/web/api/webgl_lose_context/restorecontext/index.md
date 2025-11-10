---
title: "WEBGL_lose_context: Methode restoreContext()"
short-title: restoreContext()
slug: Web/API/WEBGL_lose_context/restoreContext
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{APIRef("WebGL")}}

Die Methode **WEBGL_lose_context.restoreContext()** ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und ermöglicht es Ihnen, das Wiederherstellen des Kontextes eines [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)-Objekts zu simulieren.

## Syntax

```js-nolint
restoreContext()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Browser melden WebGL-Fehler möglicherweise standardmäßig nicht. Die Fehlerberichterstattung von WebGL funktioniert, indem [`getError()`](/de/docs/Web/API/WebGLRenderingContext/getError) aufgerufen und auf Fehler überprüft wird. Folgende Ausnahmen können ausgelöst werden:

- `INVALID_OPERATION`
  - : Wird ausgelöst, wenn der Kontext nicht verloren gegangen ist.

## Beispiele

Mit dieser Methode können Sie das
[`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)
Ereignis simulieren:

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
- Ereignisse:
  [`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event),
  [`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event),
  [`webglcontextcreationerror`](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
