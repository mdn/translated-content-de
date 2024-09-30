---
title: "WorkerNavigator: gpu-Eigenschaft"
short-title: gpu
slug: Web/API/WorkerNavigator/gpu
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Web Workers API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte **`gpu`**-Eigenschaft des [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Interfaces gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Worker-Kontext zurück, welches der Einstiegspunkt für die [WebGPU API](/de/docs/Web/API/WebGPU_API) ist.

## Wert

Ein [`GPU`](/de/docs/Web/API/GPU)-Objekt.

## Beispiele

```js
// Can be run inside a web worker
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
  }

  const device = await adapter.requestDevice();

  //...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebGPU API](/de/docs/Web/API/WebGPU_API)
