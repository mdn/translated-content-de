---
title: "WorkerNavigator: gpu-Eigenschaft"
short-title: gpu
slug: Web/API/WorkerNavigator/gpu
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("Web Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("worker")}}

Die **`gpu`**-Schreibgeschützte Eigenschaft der [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Schnittstelle gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Worker-Kontext zurück, welches den Einstiegspunkt für die [WebGPU-API](/de/docs/Web/API/WebGPU_API) darstellt.

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

  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebGPU-API](/de/docs/Web/API/WebGPU_API)
