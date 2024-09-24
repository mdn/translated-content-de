---
title: GPURenderPipeline
slug: Web/API/GPURenderPipeline
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`GPURenderPipeline`**-Schnittstelle der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} repräsentiert eine Pipeline, die die Vertex- und Fragment-Shader-Stufen steuert und in einem {{domxref("GPURenderPassEncoder")}} oder {{domxref("GPURenderBundleEncoder")}} verwendet werden kann.

Eine Instanz eines `GPURenderPipeline`-Objekts kann mit den Methoden {{domxref("GPUDevice.createRenderPipeline()")}} oder {{domxref("GPUDevice.createRenderPipelineAsync()")}} erstellt werden.

{{InheritanceDiagram}}

## Instanzeigenschaften

- {{domxref("GPURenderPipeline.label", "label")}} {{Experimental_Inline}}
  - : Ein String, der eine Bezeichnung bereitstellt, die verwendet werden kann, um das Objekt beispielsweise in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen zu identifizieren.

## Instanzmethoden

- {{domxref("GPURenderPipeline.getBindGroupLayout", "getBindGroupLayout()")}} {{Experimental_Inline}}
  - : Gibt das {{domxref("GPUBindGroupLayout")}}-Objekt der Pipeline mit dem angegebenen Index zurück (d.h. in das ursprüngliche {{domxref("GPUDevice.createRenderPipeline()")}}- oder {{domxref("GPUDevice.createRenderPipelineAsync()")}}-Aufruf Layout aufgenommen).

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) bietet ein einfaches Beispiel für die Konstruktion eines gültigen Render-Pipeline-Descriptor-Objekts, das dann verwendet wird, um eine `GPURenderPipeline` über einen `createRenderPipeline()`-Aufruf zu erstellen.

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
