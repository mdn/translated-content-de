---
title: "GPUAdapter: isFallbackAdapter-Eigenschaft"
short-title: isFallbackAdapter
slug: Web/API/GPUAdapter/isFallbackAdapter
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}{{non-standard_header}}

Die **`isFallbackAdapter`**-Schreibgeschützte Eigenschaft der [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Schnittstelle gibt `true` zurück, wenn der Adapter ein [Fallback-Adapter](/de/docs/Web/API/GPU/requestAdapter#fallback_adapters) ist, und `false`, wenn nicht.

Diese Eigenschaft wurde von der Webplattform entfernt. Verwenden Sie stattdessen [`GPUAdapterInfo.isFallbackAdapter`](/de/docs/Web/API/GPUAdapterInfo/isFallbackAdapter).

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
