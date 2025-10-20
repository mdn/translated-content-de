---
title: "GPUAdapter: isFallbackAdapter-Eigenschaft"
short-title: isFallbackAdapter
slug: Web/API/GPUAdapter/isFallbackAdapter
l10n:
  sourceCommit: c03dee2dd8e7e28ba041b899de4db10f002d6645
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}{{deprecated_header}}{{non-standard_header}}

Die schreibgeschützte Eigenschaft **`isFallbackAdapter`** des [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Interfaces gibt `true` zurück, wenn der Adapter ein [Fallback-Adapter](/de/docs/Web/API/GPU/requestAdapter#fallback_adapters) ist, und `false`, wenn nicht.

Diese Eigenschaft wurde aus der Web-Plattform entfernt. Verwenden Sie stattdessen [`GPUAdapterInfo.isFallbackAdapter`](/de/docs/Web/API/GPUAdapterInfo/isFallbackAdapter).

## Wert

Ein boolescher Wert.

## Beispiele

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
  }

  const isFallback = adapter.isFallbackAdapter;
  console.log(isFallback);

  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
