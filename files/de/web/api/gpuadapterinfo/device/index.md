---
title: "GPUAdapterInfo: Geräte-Eigenschaft"
short-title: Gerät
slug: Web/API/GPUAdapterInfo/device
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`device`**-Eigenschaft der [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)-Schnittstelle gibt eine herstellerspezifische Kennung für den Adapter zurück oder einen leeren String, falls sie nicht verfügbar ist.

## Wert

Ein String.

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

  const adapterInfo = await adapter.requestAdapterInfo();
  console.log(adapterInfo.device);

  // ...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
