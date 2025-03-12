---
title: "GPUAdapter: info-Eigenschaft"
short-title: info
slug: Web/API/GPUAdapter/info
l10n:
  sourceCommit: ec1cb9e541bd5df1e86e17dd4f098781e5b6804b
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`info`**-Eigenschaft der [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Schnittstelle gibt ein [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)-Objekt zurück, das identifizierende Informationen über den Adapter enthält.

## Wert

Eine Instanz des [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)-Objekts.

## Beispiele

### Grundlegende Nutzung der info-Eigenschaft

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
