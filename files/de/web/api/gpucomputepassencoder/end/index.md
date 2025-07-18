---
title: "GPUComputePassEncoder: end() Methode"
short-title: end()
slug: Web/API/GPUComputePassEncoder/end
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`end()`** Methode der [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) Schnittstelle beendet die Aufnahme der aktuellen Befehlssequenz für den Compute-Pass.

## Syntax

```js-nolint
end()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`end()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) wird ungültig:

- Der [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) ist geöffnet (d.h. er wurde nicht bereits durch einen `end()`-Aufruf beendet).
- Alle [`pushDebugGroup()`](/de/docs/Web/API/GPUComputePassEncoder/pushDebugGroup) Aufrufe, die auf diesem Encoder gemacht wurden, haben einen entsprechenden [`popDebugGroup()`](/de/docs/Web/API/GPUComputePassEncoder/popDebugGroup) Aufruf, bevor `end()` aufgerufen wird.

## Beispiele

In unserem [Grundlegenden Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen vom [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder), der über [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) erstellt wurde.

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
