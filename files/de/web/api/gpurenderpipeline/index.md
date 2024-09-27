---
title: GPURenderPipeline
slug: Web/API/GPURenderPipeline
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPURenderPipeline`** Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert eine Pipeline, die die Vertex- und Fragment-Shader-Stufen steuert und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden kann.

Ein `GPURenderPipeline` Objektinstanz kann mittels der Methoden [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) oder [`GPUDevice.createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) erstellt werden.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`label`](/de/docs/Web/API/GPURenderPipeline/label) {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, das dazu verwendet werden kann, das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError) Meldungen oder Konsolenwarnungen.

## Instanz-Methoden

- [`getBindGroupLayout()`](/de/docs/Web/API/GPURenderPipeline/getBindGroupLayout) {{Experimental_Inline}}
  - : Gibt das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) Objekt der Pipeline mit dem gegebenen Index zurück (d.h. enthalten im ursprünglichen [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) oder [`GPUDevice.createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) Aufruf des Pipeline-Layouts).

## Beispiele

> [!NOTE]
> Die [WebGPU Samples](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Unser [grundlegendes Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) bietet ein einfaches Beispiel für die Konstruktion eines gültigen Render-Pipeline-Deskriptors, der dann verwendet wird, um eine `GPURenderPipeline` über einen `createRenderPipeline()` Aufruf zu erstellen.

```js
// ...

const vertexBuffers = [
  {
    attributes: [
      {
        shaderLocation: 0, // position
        offset: 0,
        format: "float32x4",
      },
      {
        shaderLocation: 1, // color
        offset: 16,
        format: "float32x4",
      },
    ],
    arrayStride: 32,
    stepMode: "vertex",
  },
];

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

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
