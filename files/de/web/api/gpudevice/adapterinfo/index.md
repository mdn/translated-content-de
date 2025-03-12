---
title: "GPUDevice: adapterInfo-Eigenschaft"
short-title: adapterInfo
slug: Web/API/GPUDevice/adapterInfo
l10n:
  sourceCommit: ec1cb9e541bd5df1e86e17dd4f098781e5b6804b
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`adapterInfo`**-Eigenschaft des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces gibt ein [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)-Objekt zurück, das Identifikationsinformationen über den Ursprungsadapter des Geräts enthält.

## Wert

Eine Instanz eines [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)-Objekts.

## Beispiele

### Grundlegende Verwendung von adapterInfo

```js
const adapter = await navigator.gpu.requestAdapter();
if (!adapter) {
  throw Error("Couldn't request WebGPU adapter.");
}

const myDevice = await adapter.requestDevice();

function optimizeForGpuDevice(device) {
  if (device.adapterInfo.vendor === "amd") {
    // Use AMD-specific optimizations
  } else if (device.adapterInfo.architecture.includes("turing")) {
    // Optimize for NVIDIA Turing architecture
  }
}

optimizeForGpuDevice(myDevice);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
