---
title: "WorkerNavigator: gpu-Eigenschaft"
short-title: gpu
slug: Web/API/WorkerNavigator/gpu
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("Web Workers API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("worker")}}

Die **`gpu`** schreibgeschützte Eigenschaft der [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Schnittstelle gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Worker-Kontext zurück, das der Einstiegspunkt für die [WebGPU-API](/de/docs/Web/API/WebGPU_API) ist.

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

  // ...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebGPU API](/de/docs/Web/API/WebGPU_API)
