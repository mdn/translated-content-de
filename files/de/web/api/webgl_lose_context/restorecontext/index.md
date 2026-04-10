---
title: "WEBGL_lose_context: restoreContext() Methode"
short-title: restoreContext()
slug: Web/API/WEBGL_lose_context/restoreContext
l10n:
  sourceCommit: cedeb457a35e8cc06f5760495caa3ecc2571db25
---

{{APIRef("WebGL")}}

Die **`restoreContext()`** Methode der `WEBGL_lose_context` Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und ermöglicht es Ihnen, das Wiederherstellen des Kontextes eines [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) zu simulieren.

Sie löst die [im WebGL-Spezifikation beschriebenen Schritte](https://registry.khronos.org/webgl/specs/latest/1.0/#5.15.3) zum Umgang mit wiederhergestellten Kontexten aus. Der Kontext ist erst nach dem Auslösen des [`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event) Ereignisses verwendbar.

## Syntax

```js-nolint
restoreContext()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Browser melden WebGL-Fehler möglicherweise nicht standardmäßig. WebGLs Fehlerberichterstattung funktioniert durch Aufrufen von [`getError()`](/de/docs/Web/API/WebGLRenderingContext/getError) und Überprüfen auf Fehler. Die folgenden Ausnahmen können geworfen werden:

- `INVALID_OPERATION`
  - : Wird ausgelöst, wenn der Kontext nicht verloren ging.

## Beispiele

Mit dieser Methode können Sie das [`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event) Ereignis simulieren:

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
