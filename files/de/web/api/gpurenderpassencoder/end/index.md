---
title: "GPURenderPassEncoder: end() Methode"
short-title: end()
slug: Web/API/GPURenderPassEncoder/end
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`end()`**-Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle beendet die Aufzeichnung der aktuellen Renderpass-Befehlssequenz.

## Syntax

```js-nolint
end()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`end()`** aufgerufen wird. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) wird ungültig:

- Der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) ist offen (d. h. nicht bereits durch einen `end()`-Aufruf beendet).
- Es ist keine Okklusionsabfrage aktiv (d. h. gestartet durch [`beginOcclusionQuery()`](/de/docs/Web/API/GPURenderPassEncoder/beginOcclusionQuery)) im aktuellen Renderpass.
- Der Debug-Stack für den aktuellen Renderpass ist leer (d. h. keine Renderpass-Debug-Gruppe ist aktuell geöffnet, wie durch [`pushDebugGroup()`](/de/docs/Web/API/GPURenderPassEncoder/pushDebugGroup) geöffnet).
- Die Anzahl der in diesem Renderpass codierten Zeichenbefehle ist kleiner oder gleich der im [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Descriptor gesetzten Eigenschaft `maxDrawCount`.

## Beispiele

In unserem [einfachen Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen vom `GPURenderPassEncoder`, der über [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) erstellt wurde. `end()` wird an einer geeigneten Stelle aufgerufen, um den Renderpass zu beenden.

```js
// ...

const renderPipeline = device.createRenderPipeline(pipelineDescriptor);

// Create GPUCommandEncoder to issue commands to the GPU
// Note: render pass descriptor, command encoder, etc. are destroyed after use, fresh one needed for each frame.
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

// Draw the triangle
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);

// End the render pass
passEncoder.end();

// End frame by passing array of command buffers to command queue for execution
device.queue.submit([commandEncoder.finish()]);

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
