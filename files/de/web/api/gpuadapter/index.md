---
title: GPUAdapter
slug: Web/API/GPUAdapter
l10n:
  sourceCommit: 707183bfb6cffe53650c03e7e7c369ad089f55ae
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUAdapter`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert einen GPU-Adapter. Von diesem können Sie ein [`GPUDevice`](/de/docs/Web/API/GPUDevice), Adapterinformationen, Funktionen und Grenzen anfordern.

Ein `GPUAdapter`-Objekt wird mit der Methode [`GPU.requestAdapter()`](/de/docs/Web/API/GPU/requestAdapter) angefordert.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`features`](/de/docs/Web/API/GPUAdapter/features) {{ReadOnlyInline}}
  - : Ein [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)-Objekt, das zusätzliche Funktionalitäten beschreibt, die vom Adapter unterstützt werden.
- [`isFallbackAdapter`](/de/docs/Web/API/GPUAdapter/isFallbackAdapter) {{ReadOnlyInline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Ein boolescher Wert. Gibt `true` zurück, wenn der Adapter ein [Fallback-Adapter](/de/docs/Web/API/GPU/requestAdapter#fallback_adapters) ist, und `false`, wenn nicht.
- [`info`](/de/docs/Web/API/GPUAdapter/info) {{ReadOnlyInline}}
  - : Ein [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)-Objekt, das Identifikationsinformationen über den Adapter enthält.
- [`limits`](/de/docs/Web/API/GPUAdapter/limits) {{ReadOnlyInline}}
  - : Ein [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)-Objekt, das die vom Adapter unterstützten Grenzen beschreibt.

## Instanz-Methoden

- [`requestAdapterInfo()`](/de/docs/Web/API/GPUAdapter/requestAdapterInfo) {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)-Objekt erfüllt wird, das Identifikationsinformationen über den Adapter enthält.
- [`requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Objekt erfüllt wird, welches die primäre Schnittstelle zur Kommunikation mit der GPU ist.

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
