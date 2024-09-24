---
title: "GPUAdapterInfo: vendor-Eigenschaft"
short-title: vendor
slug: Web/API/GPUAdapterInfo/vendor
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`vendor`** schreibgeschützte Eigenschaft des {{domxref("GPUAdapterInfo")}}-Interfaces gibt den Namen des Adapterherstellers zurück oder einen leeren String, wenn er nicht verfügbar ist.

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
  console.log(adapterInfo.vendor);

  // ...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
