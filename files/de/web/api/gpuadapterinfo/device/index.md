---
title: "GPUAdapterInfo: device-Eigenschaft"
short-title: device
slug: Web/API/GPUAdapterInfo/device
l10n:
  sourceCommit: 225431159da2ef74dca5984e6f07bd8c5cae4df8
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`device`**-Schreibgeschützte Eigenschaft der [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)-Schnittstelle gibt eine herstellerspezifische Kennung für den Adapter zurück oder einen leeren String, wenn sie nicht verfügbar ist.

## Wert

Ein String.

## Beispiele

```js
const adapter = await navigator.gpu.requestAdapter();
if (!adapter) {
  throw Error("Couldn't request WebGPU adapter.");
}

const adapterInfo = adapter.info;
console.log(adapterInfo.device);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
