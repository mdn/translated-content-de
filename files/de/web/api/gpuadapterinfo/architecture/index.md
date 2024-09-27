---
title: "GPUAdapterInfo: Architektur-Eigenschaft"
short-title: architecture
slug: Web/API/GPUAdapterInfo/architecture
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`architecture`** der [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)-Schnittstelle gibt den Namen der Familie oder Klasse von GPUs zurück, zu der der Adapter gehört, oder einen leeren String, wenn diese Information nicht verfügbar ist.

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
  console.log(adapterInfo.architecture);

  // ...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
