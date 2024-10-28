---
title: "GPUAdapterInfo: architecture-Eigenschaft"
short-title: architecture
slug: Web/API/GPUAdapterInfo/architecture
l10n:
  sourceCommit: 225431159da2ef74dca5984e6f07bd8c5cae4df8
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`architecture`** der [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)-Schnittstelle gibt den Namen der Familie oder Klasse von GPUs zurück, zu der der Adapter gehört, oder einen leeren String, wenn diese nicht verfügbar ist.

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
