---
title: "GPUDevice: uncapturederror Ereignis"
short-title: uncapturederror
slug: Web/API/GPUDevice/uncapturederror_event
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`uncapturederror`**-Ereignis des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces wird ausgelöst, wenn ein Fehler auftritt, der nicht von einem GPU-Fehlerbereich erfasst wurde, um eine Möglichkeit zur Meldung unerwarteter Fehler bereitzustellen.

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

Sie könnten etwas Ähnliches wie das folgende als globalen Mechanismus verwenden, um alle Fehler zu erfassen, die nicht von Fehlerbereichen behandelt werden.

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

Weitere Beispiele und Informationen finden Sie in den [WebGPU-Best Practices zur Fehlerbehandlung](https://toji.dev/webgpu-best-practices/error-handling).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
