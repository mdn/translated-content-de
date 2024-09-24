---
title: "WebGLContextEvent: statusMessage-Eigenschaft"
short-title: statusMessage
slug: Web/API/WebGLContextEvent/statusMessage
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die schreibgeschützte **`WebGLContextEvent.statusMessage`**-Eigenschaft enthält zusätzliche Statusinformationen zum Event oder ist ein leerer String, wenn keine zusätzlichen Informationen verfügbar sind.

## Beispiele

Die `statusMessage`-Eigenschaft kann eine plattformabhängige Zeichenfolge mit Details zu einem Ereignis enthalten. Dies kann beispielsweise auftreten, wenn das {{domxref("HTMLCanvasElement/webglcontextcreationerror_event", "webglcontextcreationerror")}}-Ereignis ausgelöst wird.

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
