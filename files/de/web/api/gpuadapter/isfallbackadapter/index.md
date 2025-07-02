---
title: "GPUAdapter: isFallbackAdapter Eigenschaft"
short-title: isFallbackAdapter
slug: Web/API/GPUAdapter/isFallbackAdapter
l10n:
  sourceCommit: 3b1efe57f3b22a97acb9db335f2848c90cdfe40e
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}{{deprecated_header}}{{non-standard_header}}

Die schreibgeschützte Eigenschaft **`isFallbackAdapter`** der [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Schnittstelle gibt `true` zurück, wenn der Adapter ein [Fallback-Adapter](/de/docs/Web/API/GPU/requestAdapter#fallback_adapters) ist, und `false`, wenn nicht.

## Wert

Ein Boolean.

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
