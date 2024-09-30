---
title: "GPURenderPassEncoder: end()-Methode"
short-title: end()
slug: Web/API/GPURenderPassEncoder/end
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`end()`**-Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle beendet die Aufzeichnung der aktuellen Render-Pass-Befehlskette.

## Syntax

```js-nolint
end()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`end()`** aufgerufen wird, ansonsten wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) wird ungültig:

- Der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) ist geöffnet (d.h. nicht bereits durch einen `end()`-Aufruf beendet).
- Es ist keine Okklusionsabfrage aktiv (d.h. gestartet über [`beginOcclusionQuery()`](/de/docs/Web/API/GPURenderPassEncoder/beginOcclusionQuery)) für den aktuellen Render-Pass.
- Der Debug-Stack für den aktuellen Render-Pass ist leer (d.h. es ist keine Render-Pass-Debug-Gruppe geöffnet, wie sie von [`pushDebugGroup()`](/de/docs/Web/API/GPURenderPassEncoder/pushDebugGroup) geöffnet wird).
- Die Anzahl der Zeichnungsbefehle, die in diesem Render-Pass kodiert sind, ist kleiner oder gleich der `maxDrawCount`-Eigenschaft, die im [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Deskriptor festgelegt ist.

## Beispiele

In unserem [basic render demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen von dem `GPURenderPassEncoder`, der über [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) erstellt wurde. `end()` wird an einer geeigneten Stelle aufgerufen, um den Render-Pass zu beenden.

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
