---
title: "WebGLContextEvent: statusMessage-Eigenschaft"
short-title: statusMessage
slug: Web/API/WebGLContextEvent/statusMessage
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die schreibgeschützte **`WebGLContextEvent.statusMessage`**-Eigenschaft enthält zusätzliche Informationen zum Ereignisstatus oder ist ein leerer String, falls keine zusätzlichen Informationen verfügbar sind.

## Beispiele

Die `statusMessage`-Eigenschaft kann eine plattformabhängige Zeichenkette mit Details zu einem Ereignis enthalten. Dies kann zum Beispiel geschehen, wenn das [`webglcontextcreationerror`](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)-Ereignis ausgelöst wird.

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
