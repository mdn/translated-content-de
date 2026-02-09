---
title: "GPUComputePassEncoder: setPipeline() Methode"
short-title: setPipeline()
slug: Web/API/GPUComputePassEncoder/setPipeline
l10n:
  sourceCommit: 4b47c0aad363dcc69a6ccca5940055491fa03594
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setPipeline()`**-Methode der [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)-Schnittstelle legt die [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) fest, die für diesen Berechnungsdurchgang verwendet werden soll.

## Syntax

```js-nolint
setPipeline(pipeline)
```

### Parameter

- `pipeline`
  - : Die [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline), die für diesen Berechnungsdurchgang verwendet werden soll.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

## Beispiele

In unserem [grundlegenden Berechnungsbeispiel](https://mdn.github.io/dom-examples/webgpu-compute-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen von dem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder), der über `beginComputePass()` erstellt wird. Der `setPipeline()`-Aufruf wird verwendet, um die Pipeline festzulegen, die für diesen Durchgang genutzt werden soll.

```js
const BUFFER_SIZE = 1000;

// …

// Create GPUCommandEncoder to encode commands to issue to the GPU
const commandEncoder = device.createCommandEncoder();

// Initiate compute pass
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
