---
title: "GPUAdapter: isFallbackAdapter-Eigenschaft"
short-title: isFallbackAdapter
slug: Web/API/GPUAdapter/isFallbackAdapter
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`isFallbackAdapter`** schreibgeschützte Eigenschaft des [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Interfaces gibt `true` zurück, wenn der Adapter ein [Fallback-Adapter](/de/docs/Web/API/GPU/requestAdapter#fallback_adapters) ist, und `false`, wenn nicht.

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

  const fallback = adapter.isFallbackAdapter;
  console.log(fallback);

  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
