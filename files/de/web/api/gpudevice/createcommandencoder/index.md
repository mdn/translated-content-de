---
title: "GPUDevice: createCommandEncoder()-Methode"
short-title: createCommandEncoder()
slug: Web/API/GPUDevice/createCommandEncoder
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createCommandEncoder()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder), der verwendet wird, um Befehle zu codieren, die an die GPU gesendet werden sollen.

## Syntax

```js-nolint
createCommandEncoder()
createCommandEncoder(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `label` {{optional_inline}}
      - : Ein String, der eine Bezeichnung bereitstellt, die verwendet werden kann, um das Objekt zu identifizieren, z. B. in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.

### Rückgabewert

Eine Instanz eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Objekts.

## Beispiele

In unserem [Grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet, der über `createCommandEncoder()` erstellt wurde:

```js
// ...

// Create GPUCommandEncoder
const commandEncoder = device.createCommandEncoder();

// Create GPURenderPassDescriptor to tell WebGPU which texture to draw into, then initiate render pass
const renderPassDescriptor = {
  colorAttachments: [
    {
      clearValue: clearColor,
      loadOp: "clear",
      storeOp: "store",
      view: context.getCurrentTexture().createView(),
    },
  ],
};

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

// Draw a triangle
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);

// End the render pass
passEncoder.end();

// ...
```

Die von dem [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) codierten Befehle werden mit der [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish)-Methode in einem [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) aufgezeichnet. Der Befehls-Buffer wird dann über einen [`submit()`](/de/docs/Web/API/GPUQueue/submit)-Aufruf in die Warteschlange übergeben, damit er von der GPU verarbeitet werden kann.

```js
device.queue.submit([commandEncoder.finish()]);
```

> [!NOTE]
> Studieren Sie die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/), um weitere Beispiele zur Befehlscodierung zu finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
