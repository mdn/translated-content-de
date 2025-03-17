---
title: GPUAdapterInfo
slug: Web/API/GPUAdapterInfo
l10n:
  sourceCommit: cb55676aaa55c97d098c26cab84dafa0ac75e0d9
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUAdapterInfo`** Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) enthält identifizierende Informationen über einen [`GPUAdapter`](/de/docs/Web/API/GPUAdapter).

Die `GPUAdapterInfo` eines Adapters kann über die [`GPUAdapter.info`](/de/docs/Web/API/GPUAdapter/info) Eigenschaft des Adapters selbst oder die [`GPUDevice.adapterInfo`](/de/docs/Web/API/GPUDevice/adapterInfo) Eigenschaft eines Geräts, das vom Adapter stammt, abgerufen werden.

Dieses Objekt ermöglicht es Entwicklern, auf spezifische Details über die GPU des Benutzers zuzugreifen, um proaktiv Workarounds für GPU-spezifische Fehler anzuwenden oder unterschiedliche Codepfade bereitzustellen, die besser zu verschiedenen GPU-Architekturen passen. Die Bereitstellung solcher Informationen stellt ein Sicherheitsrisiko dar – sie könnte für das Fingerprinting verwendet werden – daher werden die freigegebenen Informationen auf ein Minimum beschränkt, und verschiedene Browseranbieter teilen wahrscheinlich unterschiedliche Informationstypen und Granularitäten.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`architecture`](/de/docs/Web/API/GPUAdapterInfo/architecture) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Der Name der Familie oder Klasse von GPUs, zu der der Adapter gehört. Gibt einen leeren String zurück, wenn sie nicht verfügbar ist.
- [`description`](/de/docs/Web/API/GPUAdapterInfo/description) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein menschenlesbarer String, der den Adapter beschreibt. Gibt einen leeren String zurück, wenn er nicht verfügbar ist.
- [`device`](/de/docs/Web/API/GPUAdapterInfo/device) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine herstellerspezifische Kennung für den Adapter. Gibt einen leeren String zurück, wenn sie nicht verfügbar ist.
- [`vendor`](/de/docs/Web/API/GPUAdapterInfo/vendor) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Der Name des Adapter-Herstellers. Gibt einen leeren String zurück, wenn er nicht verfügbar ist.
- [`subgroupMaxSize`](/de/docs/Web/API/GPUAdapterInfo/subgroupMaxSize) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Die maximal unterstützte [Subgruppen-Größe](https://gpuweb.github.io/gpuweb/wgsl/#subgroup-size) für den [`GPUAdapter`](/de/docs/Web/API/GPUAdapter).
- [`subgroupMinSize`](/de/docs/Web/API/GPUAdapterInfo/subgroupMinSize) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Die minimal unterstützte [Subgruppen-Größe](https://gpuweb.github.io/gpuweb/wgsl/#subgroup-size) für den [`GPUAdapter`](/de/docs/Web/API/GPUAdapter).

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
