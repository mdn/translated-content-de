---
title: "GPUComputePassEncoder: setPipeline()-Methode"
short-title: setPipeline()
slug: Web/API/GPUComputePassEncoder/setPipeline
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setPipeline()`**-Methode der [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)-Schnittstelle legt die zu verwendende [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) für diesen Compute-Pass fest.

## Syntax

```js-nolint
setPipeline(pipeline)
```

### Parameter

- `pipeline`
  - : Die [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline), die für diesen Compute-Pass verwendet werden soll.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

## Beispiele

In unserem [grundlegenden Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen von dem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder), der über `beginComputePass()` erstellt wurde. Der `setPipeline()`-Aufruf wird verwendet, um die Pipeline für diesen Pass festzulegen.

```js
const BUFFER_SIZE = 1000;

// …

// Create GPUCommandEncoder to encode commands to issue to the GPU
const commandEncoder = device.createCommandEncoder();

// Initiate render pass
const passEncoder = commandEncoder.beginComputePass();

// Issue commands
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(BUFFER_SIZE / 64));

// End the render pass
passEncoder.end();

// Copy output buffer to staging buffer
commandEncoder.copyBufferToBuffer(
  output,
  0, // Source offset
  stagingBuffer,
  0, // Destination offset
  BUFFER_SIZE,
);

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
