---
title: "GPUAdapter: info-Eigenschaft"
short-title: info
slug: Web/API/GPUAdapter/info
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`info`** schreibgeschützte Eigenschaft der [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Schnittstelle gibt ein [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)-Objekt zurück, das identifizierende Informationen über den Adapter enthält.

## Wert

Eine Instanz des [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)-Objekts.

## Beispiele

### Grundlegende Nutzungsinformationen

```js
const adapter = await navigator.gpu.requestAdapter();
if (!adapter) {
  throw Error("Couldn't request WebGPU adapter.");
}

const adapterInfo = adapter.info;
console.log(adapterInfo.vendor);
console.log(adapterInfo.architecture);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
