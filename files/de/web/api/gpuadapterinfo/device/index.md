---
title: "GPUAdapterInfo: device-Eigenschaft"
short-title: device
slug: Web/API/GPUAdapterInfo/device
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`device`**-Eigenschaft der
[`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)-Schnittstelle gibt einen herstellerspezifischen Identifikator für den Adapter zurück oder einen leeren String, wenn dieser nicht verfügbar ist.

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
