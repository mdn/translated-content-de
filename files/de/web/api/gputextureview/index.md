---
title: GPUTextureView
slug: Web/API/GPUTextureView
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUTextureView`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert eine Ansicht in einen Teil der von einer bestimmten [`GPUTexture`](/de/docs/Web/API/GPUTexture) definierten Texturressourcen.

Ein `GPUTextureView`-Objekt wird mit der Methode [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) erstellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`label`](/de/docs/Web/API/GPUTextureView/label) {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.

## Beispiele

Im WebGPU-Samples [Cubemap-Demo](https://webgpu.github.io/webgpu-samples/samples/cubemap/) finden Sie mehrere Beispiele dafür, wie `GPUTextureView`s (erstellt durch Aufrufe von [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView)) verwendet werden, sowohl als `resource` in einem Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) als auch als bereitgestellte `view` im `depthStencilAttachment`-Objekt eines Deskriptors von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass).

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
