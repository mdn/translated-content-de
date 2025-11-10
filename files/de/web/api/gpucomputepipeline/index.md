---
title: GPUComputePipeline
slug: Web/API/GPUComputePipeline
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUComputePipeline`** Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert eine Pipeline, die die Compute-Shader-Stufe steuert und im [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden kann.

Ein `GPUComputePipeline` Objekt kann mit den Methoden [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) oder [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) erstellt werden.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`label`](/de/docs/Web/API/GPUComputePipeline/label)
  - : Ein String, der eine Bezeichnung zur Identifizierung des Objekts bereitstellt, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.

## Instanz-Methoden

- [`getBindGroupLayout()`](/de/docs/Web/API/GPUComputePipeline/getBindGroupLayout)
  - : Gibt das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) Objekt der Pipeline mit dem angegebenen Index zurück (d.h. enthalten im ursprünglichen Aufruf von [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) oder [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) zur Pipeline-Erstellung).

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) enthalten noch viele weitere Beispiele.

### Einfache Beispiel

Unser [einfaches Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt einen Prozess von:

- Erstellen eines Bind Group Layouts mit [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout).
- Einspeisen des `bindGroupLayout` in [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) zur Erstellung eines [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout).
- Verwendung dieses Wertes direkt in einem `createComputePipeline()` Aufruf zur Erstellung einer `GPUComputePipeline`.

```js
// …

const bindGroupLayout = device.createBindGroupLayout({
  entries: [
    {
      binding: 0,
      visibility: GPUShaderStage.COMPUTE,
      buffer: {
        type: "storage",
      },
    },
  ],
});

const computePipeline = device.createComputePipeline({
  layout: device.createPipelineLayout({
    bindGroupLayouts: [bindGroupLayout],
  }),
  compute: {
    module: shaderModule,
    entryPoint: "main",
  },
});

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
