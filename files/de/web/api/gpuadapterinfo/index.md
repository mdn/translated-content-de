---
title: GPUAdapterInfo
slug: Web/API/GPUAdapterInfo
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUAdapterInfo`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) enthält identifizierende Informationen über einen [`GPUAdapter`](/de/docs/Web/API/GPUAdapter).

Die `GPUAdapterInfo` eines Adapters kann über die [`GPUAdapter.info`](/de/docs/Web/API/GPUAdapter/info)-Eigenschaft des Adapters selbst oder über die [`GPUDevice.adapterInfo`](/de/docs/Web/API/GPUDevice/adapterInfo)-Eigenschaft eines Geräts, das von diesem Adapter stammt, abgerufen werden.

Dieses Objekt ermöglicht es Entwicklern, spezifische Details über die GPU des Nutzers zuzugreifen, damit sie proaktiv Umgehungen für GPU-spezifische Fehler anwenden oder unterschiedliche Codepfade bereitstellen können, um besser auf verschiedene GPU-Architekturen abgestimmt zu sein. Das Bereitstellen solcher Informationen stellt ein Sicherheitsrisiko dar — es könnte für das Fingerprinting genutzt werden — daher werden die geteilten Informationen auf ein Minimum beschränkt, und verschiedene Browser-Anbieter teilen wahrscheinlich unterschiedliche Informationstypen und Granularitäten.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`architecture`](/de/docs/Web/API/GPUAdapterInfo/architecture) {{ReadOnlyInline}}
  - : Der Name der Familie oder Klasse von GPUs, zu der der Adapter gehört. Gibt einen leeren String zurück, wenn es nicht verfügbar ist.
- [`description`](/de/docs/Web/API/GPUAdapterInfo/description) {{ReadOnlyInline}}
  - : Ein menschenlesbarer String, der den Adapter beschreibt. Gibt einen leeren String zurück, wenn es nicht verfügbar ist.
- [`device`](/de/docs/Web/API/GPUAdapterInfo/device) {{ReadOnlyInline}}
  - : Eine herstellerspezifische Kennung für den Adapter. Gibt einen leeren String zurück, wenn es nicht verfügbar ist.
- [`vendor`](/de/docs/Web/API/GPUAdapterInfo/vendor) {{ReadOnlyInline}}
  - : Der Name des Adapterherstellers. Gibt einen leeren String zurück, wenn es nicht verfügbar ist.
- [`subgroupMaxSize`](/de/docs/Web/API/GPUAdapterInfo/subgroupMaxSize) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Die maximale unterstützte [Untergruppengröße](https://gpuweb.github.io/gpuweb/wgsl/#subgroup-size) für den [`GPUAdapter`](/de/docs/Web/API/GPUAdapter).
- [`subgroupMinSize`](/de/docs/Web/API/GPUAdapterInfo/subgroupMinSize) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Die minimale unterstützte [Untergruppengröße](https://gpuweb.github.io/gpuweb/wgsl/#subgroup-size) für den [`GPUAdapter`](/de/docs/Web/API/GPUAdapter).

## Beispiele

### Zugang zu GPUAdapterInfo über GPUAdapter.info

```js
const adapter = await navigator.gpu.requestAdapter();
if (!adapter) {
  throw Error("Couldn't request WebGPU adapter.");
}

const adapterInfo = adapter.info;
console.log(adapterInfo.vendor);
console.log(adapterInfo.architecture);
```

### Zugang zu GPUAdapterInfo über GPUDevice.adapterInfo

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
