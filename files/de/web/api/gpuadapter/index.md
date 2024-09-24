---
title: GPUAdapter
slug: Web/API/GPUAdapter
l10n:
  sourceCommit: 8bb665b943fa480ea22b22135f58d97c0caca316
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`GPUAdapter`**-Schnittstelle der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} repräsentiert einen GPU-Adapter. Von hier aus können Sie ein {{domxref("GPUDevice")}}, Adapterinformationen, Funktionen und Grenzen anfordern.

Ein `GPUAdapter`-Objekt wird mit der Methode {{domxref("GPU.requestAdapter()")}} angefordert.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("GPUAdapter.features", "features")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein {{domxref("GPUSupportedFeatures")}}-Objekt, das die zusätzliche Funktionalität beschreibt, die vom Adapter unterstützt wird.
- {{domxref("GPUAdapter.isFallbackAdapter", "isFallbackAdapter")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein boolescher Wert. Gibt `true` zurück, wenn der Adapter ein [Fallback-Adapter](/de/docs/Web/API/GPU/requestAdapter#fallback_adapters) ist, und `false`, wenn nicht.
- {{domxref("GPUAdapter.limits", "limits")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein {{domxref("GPUSupportedLimits")}}-Objekt, das die vom Adapter unterstützten Grenzen beschreibt.

## Instanz-Methoden

- {{domxref("GPUAdapter.requestAdapterInfo", "requestAdapterInfo()")}} {{Experimental_Inline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("GPUAdapterInfo")}}-Objekt erfüllt wird, das identifizierende Informationen über einen Adapter enthält.
- {{domxref("GPUAdapter.requestDevice", "requestDevice()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("GPUDevice")}}-Objekt erfüllt wird, welches die primäre Schnittstelle für die Kommunikation mit der GPU darstellt.

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

  //...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
