---
title: GPUComputePipeline
slug: Web/API/GPUComputePipeline
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUComputePipeline`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert eine Pipeline, die die Compute-Shader-Phase steuert und in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden kann.

Ein `GPUComputePipeline`-Objekt kann mithilfe der Methoden [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) oder [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) erstellt werden.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`label`](/de/docs/Web/API/GPUComputePipeline/label) {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

## Instanz-Methoden

- [`getBindGroupLayout()`](/de/docs/Web/API/GPUComputePipeline/getBindGroupLayout) {{Experimental_Inline}}
  - : Gibt das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt der Pipeline mit dem angegebenen Index zurück (d.h. enthalten im ursprünglichen Aufruf von [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) oder [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync)).

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) beinhalten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt einen Prozess von:

- Erstellen eines Bind Group Layouts mit [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout).
- Einfügen des `bindGroupLayout` in [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) zur Erstellung eines [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout).
- Verwenden dieses Werts unmittelbar in einem `createComputePipeline()`-Aufruf zur Erstellung einer `GPUComputePipeline`.

```js
// ...

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

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
