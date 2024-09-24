---
title: "GPUAdapterInfo: Architektur-Eigenschaft"
short-title: Architektur
slug: Web/API/GPUAdapterInfo/architecture
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`architecture`** schreibgeschützte Eigenschaft der {{domxref("GPUAdapterInfo")}}-Schnittstelle gibt den Namen der Familie oder Klasse von GPUs zurück, zu der der Adapter gehört, oder einen leeren String, wenn sie nicht verfügbar ist.

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
