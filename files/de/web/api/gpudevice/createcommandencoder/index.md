---
title: "GPUDevice: createCommandEncoder()-Methode"
short-title: createCommandEncoder()
slug: Web/API/GPUDevice/createCommandEncoder
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createCommandEncoder()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder), der verwendet wird, um Befehle zu kodieren, die an die GPU übermittelt werden sollen.

## Syntax

```js-nolint
createCommandEncoder()
createCommandEncoder(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.

### Rückgabewert

Eine Instanz des [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Objekts.

## Beispiele

In unserem [Grundlagendemonstrationsprojekt zur Wiedergabe](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet, der über `createCommandEncoder()` erstellt wurde:

```js
// …

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

// …
```

Die durch den [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) kodierten Befehle werden mithilfe der [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish)-Methode in einem [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) aufgenommen. Der Befehls-Puffer wird dann mittels eines [`submit()`](/de/docs/Web/API/GPUQueue/submit)-Aufrufs in die Warteschlange übergeben und ist bereit, von der GPU verarbeitet zu werden.

```js
device.queue.submit([commandEncoder.finish()]);
```

> [!NOTE]
> Studieren Sie die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/), um weitere Beispiele zur Befehlsenkodierung zu finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
