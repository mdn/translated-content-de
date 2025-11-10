---
title: GPUAdapterInfo
slug: Web/API/GPUAdapterInfo
l10n:
  sourceCommit: c03dee2dd8e7e28ba041b899de4db10f002d6645
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUAdapterInfo`** Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) enthält identifizierende Informationen über einen [`GPUAdapter`](/de/docs/Web/API/GPUAdapter).

Die `GPUAdapterInfo` eines Adapters kann über die [`GPUAdapter.info`](/de/docs/Web/API/GPUAdapter/info) Eigenschaft des Adapters selbst oder die [`GPUDevice.adapterInfo`](/de/docs/Web/API/GPUDevice/adapterInfo) Eigenschaft eines Geräts, das vom Adapter stammt, abgerufen werden.

Dieses Objekt ermöglicht Entwicklern den Zugriff auf spezielle Details über die GPU eines Benutzers, damit sie vorab Workarounds für GPU-spezifische Bugs anwenden oder unterschiedliche Codepfade bereitstellen können, die besser zu verschiedenen GPU-Architekturen passen. Das Bereitstellen solcher Informationen stellt ein Sicherheitsrisiko dar — es könnte zum Fingerprinting verwendet werden — daher werden die gemeinsam genutzten Informationen auf ein Minimum beschränkt, und verschiedene Browseranbieter teilen wahrscheinlich unterschiedliche Informationstypen und -granularitäten.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`architecture`](/de/docs/Web/API/GPUAdapterInfo/architecture) {{ReadOnlyInline}}
  - : Der Name der Familie oder Klasse von GPUs, zu der der Adapter gehört. Gibt einen leeren String zurück, wenn diese nicht verfügbar ist.
- [`description`](/de/docs/Web/API/GPUAdapterInfo/description) {{ReadOnlyInline}}
  - : Eine menschenlesbare Zeichenkette, die den Adapter beschreibt. Gibt einen leeren String zurück, wenn diese nicht verfügbar ist.
- [`device`](/de/docs/Web/API/GPUAdapterInfo/device) {{ReadOnlyInline}}
  - : Eine herstellerspezifische Kennung für den Adapter. Gibt einen leeren String zurück, wenn diese nicht verfügbar ist.
- [`isFallbackAdapter`](/de/docs/Web/API/GPUAdapterInfo/isFallbackAdapter) {{ReadOnlyInline}}
  - : Ein boolescher Wert. Gibt `true` zurück, wenn der Adapter ein [Fallback-Adapter](/de/docs/Web/API/GPU/requestAdapter#fallback_adapters) ist, und `false`, wenn nicht.
- [`subgroupMaxSize`](/de/docs/Web/API/GPUAdapterInfo/subgroupMaxSize) {{ReadOnlyInline}}
  - : Die maximal unterstützte [Subgroup-Größe](https://gpuweb.github.io/gpuweb/wgsl/#subgroup-size) für den [`GPUAdapter`](/de/docs/Web/API/GPUAdapter).
- [`subgroupMinSize`](/de/docs/Web/API/GPUAdapterInfo/subgroupMinSize) {{ReadOnlyInline}}
  - : Die minimal unterstützte [Subgroup-Größe](https://gpuweb.github.io/gpuweb/wgsl/#subgroup-size) für den [`GPUAdapter`](/de/docs/Web/API/GPUAdapter).
- [`vendor`](/de/docs/Web/API/GPUAdapterInfo/vendor) {{ReadOnlyInline}}
  - : Der Name des Adapterherstellers. Gibt einen leeren String zurück, wenn dieser nicht verfügbar ist.

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
