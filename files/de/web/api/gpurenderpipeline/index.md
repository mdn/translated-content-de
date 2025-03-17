---
title: GPURenderPipeline
slug: Web/API/GPURenderPipeline
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPURenderPipeline`** Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert eine Pipeline, die die Vertex- und Fragment-Shader-Stufen steuert und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden kann.

Ein `GPURenderPipeline`-Objekt kann mit den Methoden [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) oder [`GPUDevice.createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) erstellt werden.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`label`](/de/docs/Web/API/GPURenderPipeline/label) {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError) Meldungen oder Konsolenwarnungen.

## Instanz-Methoden

- [`getBindGroupLayout()`](/de/docs/Web/API/GPURenderPipeline/getBindGroupLayout) {{Experimental_Inline}}
  - : Gibt das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) Objekt der Pipeline mit dem angegebenen Index zurück (d.h. enthalten im ursprünglichen Aufruf von [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) oder [`GPUDevice.createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync)'s Pipeline-Layout).

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) bietet ein Beispiel für die Konstruktion eines gültigen Render-Pipeline-Deskriptor-Objekts, das dann verwendet wird, um eine `GPURenderPipeline` über einen `createRenderPipeline()` Aufruf zu erstellen.

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
