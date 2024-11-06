---
title: "GPUQueue: submit() Methode"
short-title: submit()
slug: Web/API/GPUQueue/submit
l10n:
  sourceCommit: d38f6ba931f45fb6df7d1ef9b1c27c2572e42f12
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`submit()`** Methode der [`GPUQueue`](/de/docs/Web/API/GPUQueue) Schnittstelle plant die Ausführung von Befehls-Puffern, die durch ein oder mehrere [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) Objekte dargestellt werden, durch die GPU.

## Syntax

```js-nolint
submit(commandBuffers)
```

### Parameter

- `commandBuffers`
  - : Ein Array von [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) Objekten, das die Befehle enthält, die für die Verarbeitung durch die GPU in die Warteschlange gestellt werden sollen. Das Array darf keine doppelten `GPUCommandBuffer` Objekte enthalten — jedes kann nur einmal pro `submit()` Aufruf übergeben werden.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`submit()`** erfüllt sein, sonst wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die [`GPUQueue`](/de/docs/Web/API/GPUQueue) wird ungültig:

- Das Array der [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) Objekte, auf die im `submit()` Aufruf verwiesen wird, enthält keine Duplikate.
- Alle [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), [`GPUTexture`](/de/docs/Web/API/GPUTexture), und [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) Objekte, die in den kodierten Befehlen verwendet werden, sind zur Nutzung verfügbar, d.h. nicht nicht verfügbar (`GPUBuffer` sind nicht verfügbar, wenn sie derzeit [gemappt](/de/docs/Web/API/GPUBuffer/mapAsync) sind) oder zerstört (mit der `destroy()` Methode).
- Alle [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture) Objekte, die in den kodierten Befehlen verwendet werden, sind nicht abgelaufen (sie laufen automatisch kurz nach dem Import über [`importExternalTexture()`](/de/docs/Web/API/GPUDevice/importExternalTexture) ab).
- Wenn ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) Objekt, das in einem codierten Befehl verwendet wird, den Typ `"occlusion"` Abfrage hat, darf es nicht bereits verwendet werden, außer durch [`GPURenderPassEncoder.beginOcclusionQuery()`](/de/docs/Web/API/GPURenderPassEncoder/beginOcclusionQuery).

## Beispiele

In unserem [Grundlegender Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden eine Reihe von Befehlen über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet:

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

Die durch den [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) codierten Befehle werden mit der Methode [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) in einen [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) umkodiert. Der Befehls-Puffer wird dann über einen `submit()` Aufruf in die Warteschlange übergeben, bereit zur Verarbeitung durch die GPU.

```js
device.queue.submit([commandEncoder.finish()]);
```

> [!NOTE]
> Studieren Sie die [WebGPU Beispiele](https://webgpu.github.io/webgpu-samples/), um weitere Beispiele für Warteschlangen zu finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
