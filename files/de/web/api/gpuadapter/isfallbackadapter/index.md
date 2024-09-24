---
title: "GPUAdapter: isFallbackAdapter-Eigenschaft"
short-title: isFallbackAdapter
slug: Web/API/GPUAdapter/isFallbackAdapter
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`isFallbackAdapter`** der
{{domxref("GPUAdapter")}}-Schnittstelle gibt `true` zurück, wenn der Adapter ein [Fallback-Adapter](/de/docs/Web/API/GPU/requestAdapter#fallback_adapters) ist, und `false`, wenn nicht.

## Wert

Ein boolean.

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
