---
title: "GPUAdapter: isFallbackAdapter-Eigenschaft"
short-title: isFallbackAdapter
slug: Web/API/GPUAdapter/isFallbackAdapter
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`isFallbackAdapter`**-Eigenschaft des [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Interfaces gibt `true` zurück, wenn der Adapter ein [Fallback-Adapter](/de/docs/Web/API/GPU/requestAdapter#fallback_adapters) ist, und `false`, wenn nicht.

## Wert

Ein boolescher Wert.

## Beispiele

```js
async function init() {
  if (!navigator.gpu) {
    throw Error('WebGPU not supported.');
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error('Couldn\'t request WebGPU adapter.');
  }

  const fallback = adapter.isFallbackAdapter;
  console.log(fallback);

  // ...

```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
