---
title: "GPUQueue: submit()-Methode"
short-title: submit()
slug: Web/API/GPUQueue/submit
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`submit()`**-Methode des [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Interfaces plant die Ausführung von Befehls-Puffern, die durch ein oder mehrere [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Objekte dargestellt werden, durch die GPU.

## Syntax

```js-nolint
submit(commandBuffers)
```

### Parameter

- `commandBuffers`
  - : Ein Array von [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Objekten, das die Befehle enthält, die zur Verarbeitung durch die GPU in die Warteschlange eingespeist werden sollen. Das Array darf keine doppelten `GPUCommandBuffer`-Objekte enthalten — jedes kann nur einmal pro `submit()`-Aufruf übergeben werden.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`submit()`** erfüllt werden, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die [`GPUQueue`](/de/docs/Web/API/GPUQueue) wird ungültig:

- Das Array von [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Objekten, das im `submit()`-Aufruf referenziert wird, darf keine Duplikate enthalten.
- Alle [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-, [`GPUTexture`](/de/docs/Web/API/GPUTexture)- und [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Objekte, die in den codierten Befehlen verwendet werden, müssen verfügbar sein, d.h. sie dürfen nicht als nicht verfügbar (so sind `GPUBuffer` nicht verfügbar, wenn sie derzeit [gemappt](/de/docs/Web/API/GPUBuffer/mapAsync) sind) oder zerstört (mit der `destroy()`-Methode) markiert sein.
- Alle [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekte, die in den codierten Befehlen verwendet werden, dürfen nicht abgelaufen sein (sie laufen automatisch kurz nach dem Import über [`importExternalTexture()`](/de/docs/Web/API/GPUDevice/importExternalTexture) ab).
- Wenn ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Objekt in einem codierten Befehl vom Typ `"occlusion"`-Abfrage ist, darf es nicht bereits verwendet sein, es sei denn, es wird von [`GPURenderPassEncoder.beginOcclusionQuery()`](/de/docs/Web/API/GPURenderPassEncoder/beginOcclusionQuery) genutzt.

## Beispiele

In unserem [einfachen Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden eine Reihe von Befehlen über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet:

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

Die Befehle, die vom [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) kodiert wurden, werden mit der [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish)-Methode in einem [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) aufgenommen. Der Befehls-Puffer wird dann über einen `submit()`-Aufruf in die Warteschlange übergeben und ist bereit, von der GPU verarbeitet zu werden.

```js
device.queue.submit([commandEncoder.finish()]);
```

> [!NOTE]
> Studieren Sie die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/), um weitere Warteschlangenbeispiele zu finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
