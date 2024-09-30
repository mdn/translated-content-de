---
title: "WEBGL_lose_context: restoreContext()-Methode"
short-title: restoreContext()
slug: Web/API/WEBGL_lose_context/restoreContext
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die **WEBGL_lose_context.restoreContext()**-Methode ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und ermöglicht es Ihnen, das Wiederherstellen des Kontexts eines [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)-Objekts zu simulieren.

## Syntax

```js-nolint
restoreContext()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

Browser melden WebGL-Fehler möglicherweise nicht standardmäßig. Die Fehlerberichterstattung von WebGL funktioniert durch Aufruf von [`getError()`](/de/docs/Web/API/WEBGLRenderingContext/getError) und Überprüfung auf Fehler. Die folgenden Ausnahmen können ausgelöst werden:

- `INVALID_OPERATION`
  - : Wird ausgelöst, wenn der Kontext nicht verloren war.

## Beispiele

Mit dieser Methode können Sie das
[`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)
-Ereignis simulieren:

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
