---
title: "GPUComputePassEncoder: end()-Methode"
short-title: end()
slug: Web/API/GPUComputePassEncoder/end
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`end()`**-Methode des [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)-Interfaces beendet die Aufzeichnung der aktuellen Rechendurchlauf-Befehlssequenz.

## Syntax

```js-nolint
end()
```

### Parameter

Keine.

### Rückgabewert

Kein Wert ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`end()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) wird ungültig:

- Der [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) ist geöffnet (d.h. er wurde nicht bereits über einen `end()`-Aufruf beendet).
- Alle [`pushDebugGroup()`](/de/docs/Web/API/GPUComputePassEncoder/pushDebugGroup)-Aufrufe, die mit diesem Encoder gemacht wurden, haben einen entsprechenden [`popDebugGroup()`](/de/docs/Web/API/GPUComputePassEncoder/popDebugGroup)-Aufruf, bevor `end()` aufgerufen wird.

## Beispiele

In unserem [grundlegenden Rechen-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen von dem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder), der über [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) erstellt wurde.

```js
const BUFFER_SIZE = 1000;

// ...

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

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
