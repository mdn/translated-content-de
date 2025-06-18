---
title: "GPUAdapterInfo: architecture-Eigenschaft"
short-title: architecture
slug: Web/API/GPUAdapterInfo/architecture
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`architecture`** des [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)-Interfaces gibt den Namen der Familie oder Klasse der GPUs zurück, zu der der Adapter gehört oder einen leeren String, falls diese nicht verfügbar ist.

## Wert

Ein String.

## Beispiele

```js
const adapter = await navigator.gpu.requestAdapter();
if (!adapter) {
  throw Error("Couldn't request WebGPU adapter.");
}

const adapterInfo = adapter.info;
console.log(adapterInfo.architecture);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
