---
title: "GPUQueue: submit()-Methode"
short-title: submit()
slug: Web/API/GPUQueue/submit
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`submit()`**-Methode des [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Interfaces plant die Ausführung von Befehls-Puffern, die durch ein oder mehrere [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Objekte repräsentiert werden, durch die GPU.

## Syntax

```js-nolint
submit(commandBuffers)
```

### Parameter

- `commandBuffers`
  - : Ein Array von [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Objekten, die die Befehle enthalten, die zur Verarbeitung durch die GPU in die Warteschlange eingereiht werden sollen.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`submit()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die [`GPUQueue`](/de/docs/Web/API/GPUQueue) wird ungültig:

- Alle [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-, [`GPUTexture`](/de/docs/Web/API/GPUTexture)- und [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Objekte, die in den kodierten Befehlen verwendet werden, sind zur Nutzung verfügbar, d.h. sie sind nicht unzugänglich (`GPUBuffer`s sind unzugänglich, wenn sie momentan [gemappt](/de/docs/Web/API/GPUBuffer/mapAsync) sind) oder zerstört (mit der `destroy()`-Methode).
- Alle [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekte, die in den kodierten Befehlen verwendet werden, sind nicht abgelaufen (sie laufen automatisch kurz nach dem Import über [`importExternalTexture()`](/de/docs/Web/API/GPUDevice/importExternalTexture) ab).
- Wenn ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Objekt, das in einem kodierten Befehl verwendet wird, vom Typ einer "`occlusion`"-Abfrage ist, darf es nicht bereits verwendet werden, außer durch [`GPURenderPassEncoder.beginOcclusionQuery()`](/de/docs/Web/API/GPURenderPassEncoder/beginOcclusionQuery).

## Beispiele

In unserem [einfachen Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden eine Reihe von Befehlen über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet:

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

Die vom [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) kodierten Befehle werden mit der [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish)-Methode in einen [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) rekodiert. Der Befehls-Puffer wird dann über einen `submit()`-Aufruf in die Warteschlange übergeben, bereit zur Verarbeitung durch die GPU.

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
