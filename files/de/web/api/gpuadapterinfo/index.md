---
title: GPUAdapterInfo
slug: Web/API/GPUAdapterInfo
l10n:
  sourceCommit: e4ffa5e4befde66732cad271e39154a80477a33c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das Interface **`GPUAdapterInfo`** der [WebGPU API](/de/docs/Web/API/WebGPU_API) enthält Informationen zur Identifizierung eines [`GPUAdapter`](/de/docs/Web/API/GPUAdapter).

Die `GPUAdapterInfo` eines Adapters kann über die Eigenschaft [`GPUAdapter.info`](/de/docs/Web/API/GPUAdapter/info) des Adapters selbst oder über die Eigenschaft [`GPUDevice.adapterInfo`](/de/docs/Web/API/GPUDevice/adapterInfo) eines Geräts abgerufen werden, das von diesem Adapter stammt.

Dieses Objekt ermöglicht Entwicklern den Zugriff auf bestimmte Details zur GPU der Benutzerin oder des Benutzers. So können sie vorsorglich Umgehungslösungen für GPU-spezifische Fehler anwenden oder unterschiedliche Codepfade bereitstellen, die besser zu den jeweiligen GPU-Architekturen passen. Die Bereitstellung solcher Informationen birgt jedoch ein Sicherheitsrisiko — sie könnten für Fingerprinting verwendet werden. Deshalb werden möglichst wenige Informationen weitergegeben, und verschiedene Browseranbieter stellen wahrscheinlich unterschiedliche Arten von Informationen mit unterschiedlichem Detaillierungsgrad bereit.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`architecture`](/de/docs/Web/API/GPUAdapterInfo/architecture) {{ReadOnlyInline}}
  - : Der Name der GPU-Familie oder -Klasse, zu der der Adapter gehört. Gibt einen leeren String zurück, wenn diese Information nicht verfügbar ist.
- [`description`](/de/docs/Web/API/GPUAdapterInfo/description) {{ReadOnlyInline}}
  - : Ein für Menschen lesbarer String, der den Adapter beschreibt. Gibt einen leeren String zurück, wenn diese Information nicht verfügbar ist.
- [`device`](/de/docs/Web/API/GPUAdapterInfo/device) {{ReadOnlyInline}}
  - : Eine herstellerspezifische Kennung für den Adapter. Gibt einen leeren String zurück, wenn diese Information nicht verfügbar ist.
- [`isFallbackAdapter`](/de/docs/Web/API/GPUAdapterInfo/isFallbackAdapter) {{ReadOnlyInline}}
  - : Ein boolescher Wert. Gibt `true` zurück, wenn der Adapter ein [Fallback-Adapter](/de/docs/Web/API/GPU/requestAdapter#fallback_adapters) ist, andernfalls `false`.
- [`subgroupMaxSize`](/de/docs/Web/API/GPUAdapterInfo/subgroupMaxSize) {{ReadOnlyInline}}
  - : Die maximal unterstützte Untergruppengröße für den [`GPUAdapter`](/de/docs/Web/API/GPUAdapter).
- [`subgroupMinSize`](/de/docs/Web/API/GPUAdapterInfo/subgroupMinSize) {{ReadOnlyInline}}
  - : Die minimal unterstützte Untergruppengröße für den [`GPUAdapter`](/de/docs/Web/API/GPUAdapter).
- [`vendor`](/de/docs/Web/API/GPUAdapterInfo/vendor) {{ReadOnlyInline}}
  - : Der Name des Adapterherstellers. Gibt einen leeren String zurück, wenn diese Information nicht verfügbar ist.

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
