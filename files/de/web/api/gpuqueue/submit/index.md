---
title: "GPUQueue: submit() Methode"
short-title: submit()
slug: Web/API/GPUQueue/submit
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`submit()`**-Methode des [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Interfaces plant die Ausführung von Befehls-Puffern, die durch eines oder mehrere [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Objekte vom GPU repräsentiert werden.

## Syntax

```js-nolint
submit(commandBuffers)
```

### Parameter

- `commandBuffers`
  - : Ein Array von [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Objekten, die die zu verarbeitenden Befehle für die GPU enthalten. Das Array darf keine doppelten `GPUCommandBuffer`-Objekte enthalten — jedes kann nur einmal pro `submit()`-Aufruf übermittelt werden.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`submit()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die [`GPUQueue`](/de/docs/Web/API/GPUQueue) wird ungültig:

- Das Array von [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Objekten, auf das im `submit()`-Aufruf verwiesen wird, enthält keine Duplikate.
- Alle [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-, [`GPUTexture`](/de/docs/Web/API/GPUTexture)- und [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Objekte, die in den kodierten Befehlen verwendet werden, sind verfügbar, d.h. nicht unzugänglich (z. B. sind `GPUBuffer`s unzugänglich, wenn sie derzeit [gemappt](/de/docs/Web/API/GPUBuffer/mapAsync) sind) oder zerstört (mit der `destroy()`-Methode).
- Alle [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekte, die in den kodierten Befehlen verwendet werden, sind nicht abgelaufen (sie laufen automatisch kurz nach dem Import über [`importExternalTexture()`](/de/docs/Web/API/GPUDevice/importExternalTexture) ab).
- Wenn ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Objekt, das in einem kodierten Befehl verwendet wird, von Typ "occlusion query" ist, wird es nicht bereits verwendet, außer von [`GPURenderPassEncoder.beginOcclusionQuery()`](/de/docs/Web/API/GPURenderPassEncoder/beginOcclusionQuery).

## Beispiele

In unserem [Grundlegendes Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden eine Reihe von Befehlen über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet:

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

Die durch den [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) kodierten Befehle werden mithilfe der [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish)-Methode in einem [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) neu aufgezeichnet. Der Befehls-Puffer wird dann über einen `submit()`-Aufruf in die Warteschlange übergeben und ist bereit, von der GPU verarbeitet zu werden.

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
