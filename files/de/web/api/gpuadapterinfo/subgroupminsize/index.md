---
title: "GPUAdapterInfo: subgroupMinSize-Eigenschaft"
short-title: subgroupMinSize
slug: Web/API/GPUAdapterInfo/subgroupMinSize
l10n:
  sourceCommit: bec7ef59277e752985de0ee963c86f6e8e4b3400
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`subgroupMinSize`**-Eigenschaft des [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)-Interfaces gibt die minimal unterstützte [Subgruppen-Größe](https://gpuweb.github.io/gpuweb/wgsl/#subgroup-size) für den [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) zurück. Diese kann zusammen mit dem `subgroups`-[Feature](/de/docs/Web/API/GPUSupportedFeatures) verwendet werden.

## Wert

Eine Zahl.

## Beispiele

```js
const adapter = await navigator.gpu.requestAdapter();
if (!adapter) {
  throw Error("Couldn't request WebGPU adapter.");
}

const adapterInfo = adapter.info;
console.log(adapterInfo.subgroupMinSize);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
