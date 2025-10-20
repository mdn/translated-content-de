---
title: "GPUAdapterInfo: isFallbackAdapter-Eigenschaft"
short-title: isFallbackAdapter
slug: Web/API/GPUAdapterInfo/isFallbackAdapter
l10n:
  sourceCommit: c03dee2dd8e7e28ba041b899de4db10f002d6645
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`isFallbackAdapter`**-Eigenschaft des [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)-Interfaces gibt `true` zurück, wenn der Adapter ein [Ausweichadapter](/de/docs/Web/API/GPU/requestAdapter#fallback_adapters) ist, und `false`, wenn nicht.

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

  const isFallback = adapter.info.isFallbackAdapter;
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
