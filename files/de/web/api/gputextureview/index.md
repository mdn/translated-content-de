---
title: GPUTextureView
slug: Web/API/GPUTextureView
l10n:
  sourceCommit: da1da9061042da9f616b8621cada4f452545700a
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUTextureView`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) stellt eine Ansicht auf eine Teilmenge der Texturressourcen dar, die durch eine bestimmte [`GPUTexture`](/de/docs/Web/API/GPUTexture) definiert sind.

Eine `GPUTextureView`-Objektinstanz wird mit der Methode [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) erstellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`label`](/de/docs/Web/API/GPUTextureView/label)
  - : Eine Zeichenfolge mit einer Bezeichnung, anhand derer das Objekt identifiziert werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

## Beispiele

In der [Cubemap-Demo](https://webgpu.github.io/webgpu-samples/samples/cubemap/) der WebGPU Samples finden Sie mehrere Beispiele für die Verwendung von `GPUTextureView`-Objekten (erstellt durch Aufrufe von [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView)): sowohl als `resource` in einem Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) als auch als `view` im `depthStencilAttachment`-Objekt eines Deskriptors für [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass).

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

const renderPassDescriptor = {
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
