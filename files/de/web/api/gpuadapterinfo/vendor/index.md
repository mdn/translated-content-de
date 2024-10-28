---
title: "GPUAdapterInfo: vendor-Eigenschaft"
short-title: vendor
slug: Web/API/GPUAdapterInfo/vendor
l10n:
  sourceCommit: 225431159da2ef74dca5984e6f07bd8c5cae4df8
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`vendor`**-Eigenschaft des [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)-Interfaces ist eine schreibgeschützte Eigenschaft. Sie gibt den Namen des Adapterherstellers zurück oder einen leeren String, falls dieser nicht verfügbar ist.

## Wert

Ein String.

## Beispiele

```js
const adapter = await navigator.gpu.requestAdapter();
if (!adapter) {
  throw Error("Couldn't request WebGPU adapter.");
}

const adapterInfo = adapter.info;
console.log(adapterInfo.vendor);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
