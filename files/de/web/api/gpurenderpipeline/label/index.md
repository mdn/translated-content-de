---
title: "GPURenderPipeline: label-Eigenschaft"
short-title: label
slug: Web/API/GPURenderPipeline/label
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft des [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)-Interfaces bietet ein Label, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dies kann durch Bereitstellung einer `label`-Eigenschaft im Deskriptorobjekt gesetzt werden, das in den ursprünglichen Aufruf von [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) oder [`GPUDevice.createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) übergeben wird. Alternativ kann es direkt am `GPURenderPipeline`-Objekt gesetzt und abgerufen werden.

## Wert

Ein String. Wenn dies nicht wie oben beschrieben zuvor gesetzt wurde, wird es ein leerer String sein.

## Beispiele

Setzen und Abrufen eines Labels über `GPURenderPipeline.label`:

```js
// …

const pipelineDescriptor = {
  vertex: {
    module: shaderModule,
    entryPoint: "vertex_main",
    buffers: vertexBuffers,
  },
  fragment: {
    module: shaderModule,
    entryPoint: "fragment_main",
    targets: [
      {
        format: navigator.gpu.getPreferredCanvasFormat(),
      },
    ],
  },
  primitive: {
    topology: "triangle-list",
  },
  layout: "auto",
};

const renderPipeline = device.createRenderPipeline(pipelineDescriptor);

renderPipeline.label = "my_render_pipeline";

console.log(renderPipeline.label); // "my_render_pipeline"
```

Setzen eines Labels über einen [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline)-Aufruf und anschließendes Abrufen über `GPURenderPipeline.label`:

```js
// …

const pipelineDescriptor = {
  vertex: {
    module: shaderModule,
    entryPoint: "vertex_main",
    buffers: vertexBuffers,
  },
  fragment: {
    module: shaderModule,
    entryPoint: "fragment_main",
    targets: [
      {
        format: navigator.gpu.getPreferredCanvasFormat(),
      },
    ],
  },
  primitive: {
    topology: "triangle-list",
  },
  layout: "auto",
  label: "my_render_pipeline",
};

const renderPipeline = device.createRenderPipeline(pipelineDescriptor);

console.log(renderPipeline.label); // "my_render_pipeline"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
