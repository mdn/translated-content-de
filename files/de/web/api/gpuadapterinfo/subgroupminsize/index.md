---
title: "GPUAdapterInfo: Eigenschaft subgroupMinSize"
short-title: subgroupMinSize
slug: Web/API/GPUAdapterInfo/subgroupMinSize
l10n:
  sourceCommit: e4ffa5e4befde66732cad271e39154a80477a33c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`subgroupMinSize`** der Schnittstelle [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo) gibt die kleinste unterstützte Größe einer [subgroup](https://gpuweb.github.io/gpuweb/wgsl/#subgroup) für den [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) zurück. Sie kann zusammen mit den Features [`subgroups`](/de/docs/Web/API/GPUSupportedFeatures#:~:text=subgroups) und [`subgroup-size-control`](/de/docs/Web/API/GPUSupportedFeatures#:~:text=subgroup%2Dsize%2Dcontrol) verwendet werden.

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
