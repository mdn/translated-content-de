---
title: "GPUDevice: adapterInfo-Eigenschaft"
short-title: adapterInfo
slug: Web/API/GPUDevice/adapterInfo
l10n:
  sourceCommit: 66f1ba7918610f1145cde4a1d2d7ecb3baea5f65
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`adapterInfo`** Nur-Lese-Eigenschaft des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces gibt ein [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)-Objekt zurück, das identifizierende Informationen über den Adapter des Geräts enthält.

## Wert

Eine Instanz des [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)-Objekts.

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
