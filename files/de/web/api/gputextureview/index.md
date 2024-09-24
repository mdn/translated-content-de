---
title: GPUTextureView
slug: Web/API/GPUTextureView
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`GPUTextureView`**-Schnittstelle der {{domxref("WebGPU API", "WebGPU-API", "", "nocode")}} stellt eine Sicht auf einen Teil der Texturressourcen dar, die durch eine bestimmte {{domxref("GPUTexture")}} definiert sind.

Eine Instanz eines `GPUTextureView`-Objekts wird mit der Methode {{domxref("GPUTexture.createView()")}} erstellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- {{domxref("GPUTextureView.label", "label")}} {{Experimental_Inline}}
  - : Ein Zeichenfolgenwert, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen.

## Beispiele

Im WebGPU-Samples- [Cubemap-Demo](https://webgpu.github.io/webgpu-samples/samples/cubemap/) sehen Sie mehrere Beispiele, wie `GPUTextureView`s (erstellt durch Aufrufe von {{domxref("GPUTexture.createView()")}}) sowohl als `resource` in einem {{domxref("GPUDevice.createBindGroup()")}}-Aufruf genutzt werden als auch als bereitgestellte `view` im Objekt `depthStencilAttachment` eines {{domxref("GPUCommandEncoder.beginRenderPass()")}}-Descriptors.

```js
const uniformBindGroup = device.createBindGroup({
  layout: pipeline.getBindGroupLayout(0),
  entries: [
    {
      binding: 0,
      resource: {
        buffer: uniformBuffer,
        offset: 0,
        size: uniformBufferSize,
      },
    },
    {
      binding: 1,
      resource: sampler,
    },
    {
      binding: 2,
      resource: cubemapTexture.createView({
        dimension: "cube",
      }),
    },
  ],
});

const renderPassDescriptor: GPURenderPassDescriptor = {
  colorAttachments: [
    {
      view: undefined, // Wird später zugewiesen
      loadOp: "clear",
      storeOp: "store",
    },
  ],
  depthStencilAttachment: {
    view: depthTexture.createView(),
    depthClearValue: 1.0,
    depthLoadOp: "clear",
    depthStoreOp: "store",
  },
};

// ...

const commandEncoder = device.createCommandEncoder();
const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
