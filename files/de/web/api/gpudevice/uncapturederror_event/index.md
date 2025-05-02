---
title: "GPUDevice: uncapturederror Ereignis"
short-title: uncapturederror
slug: Web/API/GPUDevice/uncapturederror_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`uncapturederror`** Ereignis der [`GPUDevice`](/de/docs/Web/API/GPUDevice) Schnittstelle wird ausgelöst, wenn ein Fehler auftritt, der nicht von einem GPU-Fehlerbereich beobachtet wurde, um eine Möglichkeit zur Meldung unerwarteter Fehler bereitzustellen.

Bekannte Fehlerfälle sollten mit [`pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) und [`popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) behandelt werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("uncapturederror", (event) => { })

onuncapturederror = (event) => { }
```

## Ereignistyp

Ein [`GPUUncapturedErrorEvent`](/de/docs/Web/API/GPUUncapturedErrorEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("GPUUncapturedErrorEvent")}}

## Beispiele

Sie könnten etwas wie das folgende als globalen Mechanismus verwenden, um alle Fehler aufzunehmen, die nicht von Fehlerbereichen behandelt werden, und diese zu erfassen.

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

Siehe [WebGPU Error Handling Best Practices](https://toji.dev/webgpu-best-practices/error-handling) für weitere Beispiele und Informationen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
