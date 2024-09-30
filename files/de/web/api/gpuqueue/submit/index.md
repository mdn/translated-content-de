---
title: "GPUQueue: submit()-Methode"
short-title: submit()
slug: Web/API/GPUQueue/submit
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`submit()`**-Methode des [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Interfaces plant die Ausführung von Befehls-Puffern, die durch einen oder mehrere [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Objekte dargestellt werden, für die GPU.

## Syntax

```js-nolint
submit(commandBuffers)
```

### Parameter

- `commandBuffers`
  - : Ein Array von [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Objekten, die die Befehle enthalten, die von der GPU in die Warteschlange gestellt und verarbeitet werden sollen.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`submit()`** aufgerufen wird, ansonsten wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die [`GPUQueue`](/de/docs/Web/API/GPUQueue) wird ungültig:

- Alle in den kodierten Befehlen verwendeten [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-, [`GPUTexture`](/de/docs/Web/API/GPUTexture)- und [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Objekte sind verfügbar, d.h. nicht nicht verfügbar (`GPUBuffer` sind nicht verfügbar, wenn sie derzeit [gemappt](/de/docs/Web/API/GPUBuffer/mapAsync) sind) oder zerstört (mit der `destroy()`-Methode).
- Alle [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekte, die in den kodierten Befehlen verwendet werden, sind nicht abgelaufen (sie laufen automatisch kurz nach dem Import über [`importExternalTexture()`](/de/docs/Web/API/GPUDevice/importExternalTexture) ab).
- Wenn ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Objekt, das in einem kodierten Befehl verwendet wird, vom Typ `"occlusion"`-Abfrage ist, wird es nicht bereits verwendet, außer durch [`GPURenderPassEncoder.beginOcclusionQuery()`](/de/docs/Web/API/GPURenderPassEncoder/beginOcclusionQuery).

## Beispiele

In unserem [grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden eine Anzahl von Befehlen über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet:

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

Die von dem [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) kodierten Befehle werden mit der Methode [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) in einen [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) umcodiert. Der Befehls-Puffer wird dann über einen `submit()`-Aufruf in die Warteschlange übergeben, bereit zur Verarbeitung durch die GPU.

```js
device.queue.submit([commandEncoder.finish()]);
```

> [!NOTE]
> Untersuchen Sie die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/), um weitere Beispiele für Warteschlangen zu finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
