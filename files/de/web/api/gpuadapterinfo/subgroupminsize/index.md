---
title: "GPUAdapterInfo: subgroupMinSize-Eigenschaft"
short-title: subgroupMinSize
slug: Web/API/GPUAdapterInfo/subgroupMinSize
l10n:
  sourceCommit: cb55676aaa55c97d098c26cab84dafa0ac75e0d9
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`subgroupMinSize`**-Eigenschaft des [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)-Interfaces gibt die minimale unterstützte [Subgruppen-Größe](https://gpuweb.github.io/gpuweb/wgsl/#subgroup-size) für den [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) zurück. Dies kann zusammen mit der `subgroups`- [Funktion](/de/docs/Web/API/GPUSupportedFeatures) verwendet werden.

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
