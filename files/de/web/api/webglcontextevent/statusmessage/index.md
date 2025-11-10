---
title: "WebGLContextEvent: statusMessage-Eigenschaft"
short-title: statusMessage
slug: Web/API/WebGLContextEvent/statusMessage
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`WebGLContextEvent.statusMessage`** enthält zusätzliche Informationen zum Ereignisstatus oder ist ein leerer String, wenn keine zusätzlichen Informationen verfügbar sind.

## Beispiele

Die `statusMessage`-Eigenschaft kann einen plattformabhängigen String mit Details zu einem Ereignis enthalten. Dies kann beispielsweise auftreten, wenn das [`webglcontextcreationerror`](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)-Ereignis ausgelöst wird.

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

canvas.addEventListener("webglcontextcreationerror", (e) => {
  console.log(
    `WebGL context creation failed: ${e.statusMessage || "Unknown error"}`,
  );
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [webglcontextcreationerror](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
