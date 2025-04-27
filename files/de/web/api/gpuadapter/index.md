---
title: GPUAdapter
slug: Web/API/GPUAdapter
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUAdapter`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert einen GPU-Adapter. Von hier aus können Sie ein [`GPUDevice`](/de/docs/Web/API/GPUDevice), Adapterinformationen, Features und Limits anfordern.

Ein `GPUAdapter`-Objekt wird mit der Methode [`GPU.requestAdapter()`](/de/docs/Web/API/GPU/requestAdapter) angefordert.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`features`](/de/docs/Web/API/GPUAdapter/features) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)-Objekt, das zusätzliche Funktionalitäten beschreibt, die vom Adapter unterstützt werden.
- [`isFallbackAdapter`](/de/docs/Web/API/GPUAdapter/isFallbackAdapter) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein boolescher Wert. Gibt `true` zurück, wenn es sich bei dem Adapter um einen [Fallback-Adapter](/de/docs/Web/API/GPU/requestAdapter#fallback_adapters) handelt, und `false`, wenn nicht.
- [`info`](/de/docs/Web/API/GPUAdapter/info) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)-Objekt, das identifizierende Informationen über den Adapter enthält.
- [`limits`](/de/docs/Web/API/GPUAdapter/limits) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)-Objekt, das die vom Adapter unterstützten Limits beschreibt.

## Instanzmethoden

- [`requestAdapterInfo()`](/de/docs/Web/API/GPUAdapter/requestAdapterInfo) {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)-Objekt erfüllt wird, welches identifizierende Informationen über den Adapter enthält.
- [`requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Objekt erfüllt wird, welches das primäre Interface für die Kommunikation mit der GPU ist.

## Beispiele

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
  }

  const device = await adapter.requestDevice();

  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
