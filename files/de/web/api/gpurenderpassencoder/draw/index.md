---
title: "GPURenderPassEncoder: draw()-Methode"
short-title: draw()
slug: Web/API/GPURenderPassEncoder/draw
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`draw()`**-Methode der {{domxref("GPURenderPassEncoder")}}-Schnittstelle zeichnet Primitive basierend auf den von {{domxref("GPURenderPassEncoder.setVertexBuffer", "setVertexBuffer()")}} bereitgestellten Vertex-Puffern.

## Syntax

```js-nolint
draw(vertexCount)
draw(vertexCount, instanceCount)
draw(vertexCount, instanceCount, firstVertex)
draw(vertexCount, instanceCount, firstVertex, firstInstance)
```

### Parameter

- `vertexCount`
  - : Eine Zahl, die die Anzahl der zu zeichnenden Vertices definiert.
- `instanceCount` {{optional_inline}}
  - : Eine Zahl, die die Anzahl der zu zeichnenden Instanzen definiert. Wenn weggelassen, wird `instanceCount` standardmäßig auf 1 gesetzt.
- `firstVertex` {{optional_inline}}
  - : Eine Zahl, die den Versatz in die Vertex-Puffer definiert, in Vertices, von dem aus gezeichnet werden soll. Wenn weggelassen, wird `firstVertex` standardmäßig auf 0 gesetzt.
- `firstInstance` {{optional_inline}}
  - : Eine Zahl, die die erste zu zeichnende Instanz definiert. Wenn weggelassen, wird `firstInstance` standardmäßig auf 0 gesetzt.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

## Beispiele

In unserem [basic render demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden mehrere Befehle über einen {{domxref("GPUCommandEncoder")}} aufgezeichnet. Die meisten dieser Befehle stammen vom `GPURenderPassEncoder`, der über {{domxref("GPUCommandEncoder.beginRenderPass()")}} erstellt wird. `draw()` wird verwendet, um anzugeben, dass drei Vertices gezeichnet werden sollen, um unser Dreieck zu erstellen.

```js
// ...

const renderPipeline = device.createRenderPipeline(pipelineDescriptor);

// Erstellen Sie einen GPUCommandEncoder, um Befehle an die GPU zu senden
// Hinweis: Render-Pass-Deskriptor, Command-Encoder usw. werden nach der Verwendung zerstört, ein neuer wird für jeden Frame benötigt.
const commandEncoder = device.createCommandEncoder();

// Erstellen Sie einen GPURenderPassDescriptor, um WebGPU mitzuteilen, in welche Textur gezeichnet werden soll, und initiieren Sie dann den Render-Pass
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

// Zeichnen Sie das Dreieck
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);

// Beenden Sie den Render-Pass
passEncoder.end();

// Beenden Sie den Frame, indem Sie ein Array von Command-Buffern zur Ausführung an die Befehlswarteschlange übergeben
device.queue.submit([commandEncoder.finish()]);

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
