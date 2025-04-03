---
title: "GPUQueue: submit()-Methode"
short-title: submit()
slug: Web/API/GPUQueue/submit
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`submit()`**-Methode der [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Schnittstelle plant die Ausführung von Befehls-Puffern, die durch ein oder mehrere [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Objekte dargestellt werden, durch die GPU.

## Syntax

```js-nolint
submit(commandBuffers)
```

### Parameter

- `commandBuffers`
  - : Ein Array von [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Objekten, das die Befehle enthält, die zur Verarbeitung durch die GPU in die Warteschlange gestellt werden sollen. Das Array darf keine doppelten `GPUCommandBuffer`-Objekte enthalten — jedes Objekt kann nur einmal pro `submit()`-Aufruf übermittelt werden.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`submit()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die [`GPUQueue`](/de/docs/Web/API/GPUQueue) wird ungültig:

- Das Array von [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Objekten, das im `submit()`-Aufruf referenziert wird, enthält keine Duplikate.
- Alle in den kodierten Befehlen verwendeten [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-, [`GPUTexture`](/de/docs/Web/API/GPUTexture)- und [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Objekte sind verfügbar, d.h. sie sind nicht nicht verfügbar (`GPUBuffer` sind nicht verfügbar, wenn sie derzeit [gemappt](/de/docs/Web/API/GPUBuffer/mapAsync) sind) oder zerstört (mit der `destroy()`-Methode).
- Alle [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekte, die in den kodierten Befehlen verwendet werden, sind nicht abgelaufen (sie laufen automatisch ab, kurz nachdem sie über [`importExternalTexture()`](/de/docs/Web/API/GPUDevice/importExternalTexture) importiert wurden).
- Wenn ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Objekt in einem kodierten Befehl vom Typ „occlusion“ query ist, wird es nicht bereits verwendet, außer durch [`GPURenderPassEncoder.beginOcclusionQuery()`](/de/docs/Web/API/GPURenderPassEncoder/beginOcclusionQuery).

## Beispiele

In unserem [grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden eine Reihe von Befehlen über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet:

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

Die durch den [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) kodierten Befehle werden mit der [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish)-Methode in einen [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) rekodiert. Der Befehls-Puffer wird dann über einen `submit()`-Aufruf in die Warteschlange übergeben, bereit zur Verarbeitung durch die GPU.

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
