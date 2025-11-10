---
title: GPUTextureView
slug: Web/API/GPUTextureView
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUTextureView`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) stellt eine Ansicht auf einen Teil der von einem bestimmten [`GPUTexture`](/de/docs/Web/API/GPUTexture) definierten Texturressourcen dar.

Eine Instanz des `GPUTextureView`-Objekts wird mit der Methode [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`label`](/de/docs/Web/API/GPUTextureView/label)
  - : Ein String, der eine Bezeichnung zur Verfügung stellt, die verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

## Beispiele

Im WebGPU Samples [Cubemap-Demo](https://webgpu.github.io/webgpu-samples/samples/cubemap/) sehen Sie mehrere Beispiele dafür, wie `GPUTextureView`s (erstellt durch Aufrufe von [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView)) verwendet werden, sowohl als `resource` in einem Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup), als auch als bereitgestellte `view` im `depthStencilAttachment`-Objekt eines Deskriptors von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass).

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
      view: undefined, // Assigned later
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

// …

const commandEncoder = device.createCommandEncoder();
const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
