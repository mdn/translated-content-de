---
title: "WEBGL_lose_context: restoreContext() Methode"
short-title: restoreContext()
slug: Web/API/WEBGL_lose_context/restoreContext
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die **WEBGL_lose_context.restoreContext()** Methode ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und ermöglicht es Ihnen, das Wiederherstellen des Kontextes eines [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) Objekts zu simulieren.

## Syntax

```js-nolint
restoreContext()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Browser melden WebGL-Fehler standardmäßig möglicherweise nicht. Die Fehlerberichterstattung in WebGL funktioniert, indem [`getError()`](/de/docs/Web/API/WEBGLRenderingContext/getError) aufgerufen und auf Fehler überprüft wird. Die folgenden Ausnahmen können ausgelöst werden:

- `INVALID_OPERATION`
  - : Ausgelöst, wenn der Kontext nicht verloren gegangen ist.

## Beispiele

Mit dieser Methode können Sie das
[`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)
Ereignis simulieren:

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

canvas.addEventListener(
  "webglcontextrestored",
  (e) => {
    console.log(e);
  },
  false,
);

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
