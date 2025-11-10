---
title: "GPURenderPassEncoder: setPipeline()-Methode"
short-title: setPipeline()
slug: Web/API/GPURenderPassEncoder/setPipeline
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setPipeline()`**-Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle setzt die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline), die für nachfolgende Renderpass-Befehle verwendet werden soll.

## Syntax

```js-nolint
setPipeline(pipeline)
```

### Parameter

- `pipeline`
  - : Die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline), die für nachfolgende Renderpass-Befehle verwendet werden soll.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`setPipeline()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) wird ungültig:

- Wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) die Tiefenkomponente des Tiefen-/Stencil-Anhangs beschreibt, ist `depthReadOnly` (wie im Deskriptor des auslösenden [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Aufrufs angegeben) `true`.
- Wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) die Stencil-Komponente des Tiefen-/Stencil-Anhangs beschreibt, ist `stencilReadOnly` (wie im Deskriptor des auslösenden [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Aufrufs angegeben) `true`.

## Beispiele

In unserem [grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen von dem `GPURenderPassEncoder`, der über [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) erstellt wurde. `setPipeline()` wird an geeigneter Stelle aufgerufen, um die Render-Pipeline festzulegen.

```js
// …

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

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
