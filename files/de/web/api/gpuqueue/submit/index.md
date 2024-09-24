---
title: "GPUQueue: submit()-Methode"
short-title: submit()
slug: Web/API/GPUQueue/submit
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`submit()`**-Methode der {{domxref("GPUQueue")}}-Schnittstelle plant die Ausführung von Befehls-Puffern, die durch ein oder mehrere {{domxref("GPUCommandBuffer")}}-Objekte dargestellt werden, durch die GPU.

## Syntax

```js-nolint
submit(commandBuffers)
```

### Parameter

- `commandBuffers`
  - : Ein Array von {{domxref("GPUCommandBuffer")}}-Objekten, die die Befehle enthalten, die zur Verarbeitung durch die GPU eingereiht werden sollen.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`submit()`** aufgerufen wird, sonst wird ein {{domxref("GPUValidationError")}} erzeugt und die {{domxref("GPUQueue")}} wird ungültig:

- Alle {{domxref("GPUBuffer")}}, {{domxref("GPUTexture")}} und {{domxref("GPUQuerySet")}} Objekte, die in den kodierten Befehlen verwendet werden, müssen verfügbar sein, d.h. nicht unzugänglich ({{domxref("GPUBuffer")}} sind unzugänglich, wenn sie derzeit {{domxref("GPUBuffer.mapAsync", "gemappt", "", "nocode")}}) oder zerstört (mit der Methode `destroy()`) sind.
- Alle {{domxref("GPUExternalTexture")}} Objekte, die in den kodierten Befehlen verwendet werden, dürfen nicht abgelaufen sein (sie laufen automatisch kurz nach der Importierung über {{domxref("GPUDevice.importExternalTexture", "importExternalTexture()")}} ab).
- Wenn ein {{domxref("GPUQuerySet")}} Objekt, das in einem kodierten Befehl verwendet wird, vom Typ „Occlusion“-Abfrage ist, wird es nicht bereits verwendet, außer durch {{domxref("GPURenderPassEncoder.beginOcclusionQuery()")}}.

## Beispiele

In unserem [grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden eine Reihe von Befehlen über einen {{domxref("GPUCommandEncoder")}} aufgezeichnet:

```js
// ...

// Erstellen eines GPUCommandEncoder
const commandEncoder = device.createCommandEncoder();

// Erstellen eines GPURenderPassDescriptor, um WebGPU anzuweisen, in welche Textur gezeichnet werden soll, und dann Render-Pass starten

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

// Zeichnen eines Dreiecks

passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);

// Ende des Render-Passes

passEncoder.end();

// ...
```

Die von dem {{domxref("GPUCommandEncoder")}} kodierten Befehle werden mithilfe der {{domxref("GPUCommandEncoder.finish()")}}-Methode in einen {{domxref("GPUCommandBuffer")}} umgewandelt. Der Befehls-Puffer wird dann über einen `submit()`-Aufruf in die Warteschlange übergeben, bereit zur Verarbeitung durch die GPU.

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
