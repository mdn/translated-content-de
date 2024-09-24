---
title: "GPUDevice: createCommandEncoder()-Methode"
short-title: createCommandEncoder()
slug: Web/API/GPUDevice/createCommandEncoder
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`createCommandEncoder()`**-Methode des {{domxref("GPUDevice")}}-Interfaces erstellt einen {{domxref("GPUCommandEncoder")}}, der verwendet wird, um Befehle zu kodieren, die an die GPU übermittelt werden sollen.

## Syntax

```js-nolint
createCommandEncoder()
createCommandEncoder(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in {{domxref("GPUError")}}-Nachrichten oder Konsolenwarnungen.

### Rückgabewert

Eine Instanz eines {{domxref("GPUCommandEncoder")}}-Objekts.

## Beispiele

In unserem [Grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden mehrere Befehle über einen {{domxref("GPUCommandEncoder")}} aufgezeichnet, der über `createCommandEncoder()` erstellt wurde:

```js
// ...

// GPUCommandEncoder erstellen
const commandEncoder = device.createCommandEncoder();

// GPURenderPassDescriptor erstellen, um WebGPU mitzuteilen, welche Textur gezeichnet werden soll, dann Renderpass starten
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

// Ein Dreieck zeichnen
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);

// Den Renderpass beenden
passEncoder.end();

// ...
```

Die vom {{domxref("GPUCommandEncoder")}} kodierten Befehle werden mit der {{domxref("GPUCommandEncoder.finish()")}}-Methode in einen {{domxref("GPUCommandBuffer")}} kodiert. Der Befehls-Buffer wird dann über einen {{domxref("GPUQueue.submit", "submit()")}}-Aufruf in die Warteschlange übertragen, um von der GPU verarbeitet zu werden.

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
