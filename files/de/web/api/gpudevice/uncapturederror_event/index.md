---
title: "GPUDevice: uncapturederror-Ereignis"
short-title: uncapturederror
slug: Web/API/GPUDevice/uncapturederror_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`uncapturederror`**-Ereignis der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle wird ausgelöst, wenn ein Fehler auftritt, der von keinem GPU-Fehlerbereich erfasst wurde. Es bietet eine Möglichkeit, unerwartete Fehler zu melden.

Bekannte Fehlerfälle sollten mit [`pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) und [`popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) behandelt werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("uncapturederror", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onuncapturederror = (event) => { }
```

## Ereignistyp

Ein [`GPUUncapturedErrorEvent`](/de/docs/Web/API/GPUUncapturedErrorEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("GPUUncapturedErrorEvent")}}

## Beispiele

Sie können beispielsweise Folgendes als globalen Mechanismus verwenden, um Fehler zu erfassen, die nicht durch Fehlerbereiche behandelt werden:

```js
device.addEventListener("uncapturederror", (event) => {
  // Re-surface the error.
  console.error("A WebGPU error was not captured:", event.error);

  reportErrorToServer({
    type: event.error.constructor.name,
    message: event.error.message,
  });
});
```

Weitere Beispiele und Informationen finden Sie unter [Best Practices für die Fehlerbehandlung in WebGPU](https://toji.dev/webgpu-best-practices/error-handling).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
