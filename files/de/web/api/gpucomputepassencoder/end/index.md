---
title: "GPUComputePassEncoder: end() Methode"
short-title: end()
slug: Web/API/GPUComputePassEncoder/end
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`end()`** Methode der [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) Schnittstelle beendet die Aufzeichnung der aktuellen Compute-Pass-Befehlssequenz.

## Syntax

```js-nolint
end()
```

### Parameter

Keine.

### Rückgabewert

Kein Wert ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`end()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) wird ungültig:

- Der [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) ist offen (d.h. nicht bereits durch einen `end()`-Aufruf beendet).
- Alle [`pushDebugGroup()`](/de/docs/Web/API/GPUComputePassEncoder/pushDebugGroup)-Aufrufe, die an diesem Encoder vorgenommen wurden, müssen einen entsprechenden [`popDebugGroup()`](/de/docs/Web/API/GPUComputePassEncoder/popDebugGroup)-Aufruf haben, bevor `end()` aufgerufen wird.

## Beispiele

In unserem [grundlegenden Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen vom [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder), der über [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) erstellt wurde.

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
