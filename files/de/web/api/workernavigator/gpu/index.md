---
title: "WorkerNavigator: gpu-Eigenschaft"
short-title: gpu
slug: Web/API/WorkerNavigator/gpu
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Web Workers API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("worker")}}

Die **`gpu`**-Schreibgeschützte Eigenschaft des {{domxref("WorkerNavigator")}}-Interfaces gibt das {{domxref("GPU")}}-Objekt für den aktuellen Worker-Kontext zurück. Dies ist der Einstiegspunkt für die {{domxref("WebGPU_API", "WebGPU API", "", "nocode")}}.

## Wert

Ein {{domxref("GPU")}}-Objekt.

## Beispiele

```js
// Kann innerhalb eines Web Workers ausgeführt werden
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

- {{domxref("WebGPU_API", "WebGPU API", "", "nocode")}}
