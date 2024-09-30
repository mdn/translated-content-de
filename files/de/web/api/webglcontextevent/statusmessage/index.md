---
title: "WebGLContextEvent: statusMessage-Eigenschaft"
short-title: statusMessage
slug: Web/API/WebGLContextEvent/statusMessage
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die schreibgeschützte **`WebGLContextEvent.statusMessage`**-Eigenschaft enthält zusätzliche Statusinformationen zu einem Ereignis oder ist ein leerer String, wenn keine zusätzlichen Informationen verfügbar sind.

## Beispiele

Die `statusMessage`-Eigenschaft kann einen plattformabhängigen String mit Details zu einem Ereignis enthalten. Dies kann beispielsweise auftreten, wenn das [`webglcontextcreationerror`](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)-Ereignis ausgelöst wird.

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

canvas.addEventListener(
  "webglcontextcreationerror",
  (e) => {
    console.log(
      `WebGL context creation failed: ${e.statusMessage || "Unknown error"}`,
    );
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [webglcontextcreationerror](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
