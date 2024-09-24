---
title: "GPUAdapterInfo: Geräte-Eigenschaft"
short-title: Gerät
slug: Web/API/GPUAdapterInfo/device
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`device`** der {{domxref("GPUAdapterInfo")}} Schnittstelle gibt eine herstellerspezifische Kennung für den Adapter zurück oder einen leeren String, wenn diese nicht verfügbar ist.

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
