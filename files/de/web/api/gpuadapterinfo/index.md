---
title: GPUAdapterInfo
slug: Web/API/GPUAdapterInfo
l10n:
  sourceCommit: ec1cb9e541bd5df1e86e17dd4f098781e5b6804b
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUAdapterInfo`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) enthält identifizierende Informationen über einen [`GPUAdapter`](/de/docs/Web/API/GPUAdapter).

Die `GPUAdapterInfo` eines Adapters kann über die [`GPUAdapter.info`](/de/docs/Web/API/GPUAdapter/info)-Eigenschaft des Adapters selbst oder die [`GPUDevice.adapterInfo`](/de/docs/Web/API/GPUDevice/adapterInfo)-Eigenschaft eines Geräts, das vom Adapter stammt, abgerufen werden.

Dieses Objekt ermöglicht es Entwicklern, auf spezifische Details über die GPU des Benutzers zuzugreifen, damit sie proaktiv Workarounds für GPU-spezifische Fehler anwenden oder unterschiedliche Codepfade bereitstellen können, um verschiedenen GPU-Architekturen besser gerecht zu werden. Die Bereitstellung solcher Informationen birgt ein Sicherheitsrisiko — sie könnte für Fingerprinting genutzt werden — daher werden die geteilten Informationen auf ein Minimum beschränkt, und verschiedene Browseranbieter teilen wahrscheinlich unterschiedliche Informationstypen und -granularität.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`architecture`](/de/docs/Web/API/GPUAdapterInfo/architecture) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Der Name der Familie oder Klasse von GPUs, zu der der Adapter gehört. Gibt einen leeren String zurück, wenn keine Informationen verfügbar sind.
- [`description`](/de/docs/Web/API/GPUAdapterInfo/description) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein menschenlesbarer String, der den Adapter beschreibt. Gibt einen leeren String zurück, wenn keine Informationen verfügbar sind.
- [`device`](/de/docs/Web/API/GPUAdapterInfo/device) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine herstellerspezifische Kennung für den Adapter. Gibt einen leeren String zurück, wenn keine Informationen verfügbar sind.
- [`vendor`](/de/docs/Web/API/GPUAdapterInfo/vendor) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Der Name des Adapter-Herstellers. Gibt einen leeren String zurück, wenn keine Informationen verfügbar sind.

## Beispiele

### Zugriff auf GPUAdapterInfo über GPUAdapter.info

```js
const adapter = await navigator.gpu.requestAdapter();
if (!adapter) {
  throw Error("Couldn't request WebGPU adapter.");
}

const adapterInfo = adapter.info;
console.log(adapterInfo.vendor);
console.log(adapterInfo.architecture);
```

### Zugriff auf GPUAdapterInfo über GPUDevice.adapterInfo

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

- [`GPUAdapter.info`](/de/docs/Web/API/GPUAdapter/info)
- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
