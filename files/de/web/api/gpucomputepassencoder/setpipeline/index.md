---
title: "GPUComputePassEncoder: setPipeline()-Methode"
short-title: setPipeline()
slug: Web/API/GPUComputePassEncoder/setPipeline
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`setPipeline()`**-Methode der {{domxref("GPUComputePassEncoder")}}-Schnittstelle legt die {{domxref("GPUComputePipeline")}} fest, die für diesen Compute-Pass verwendet werden soll.

## Syntax

```js-nolint
setPipeline(pipeline)
```

### Parameter

- `pipeline`
  - : Die {{domxref("GPUComputePipeline")}}, die für diesen Compute-Pass verwendet werden soll.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

## Beispiele

In unserem [einfachen Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) werden mehrere Befehle über einen {{domxref("GPUCommandEncoder")}} aufgezeichnet. Die meisten dieser Befehle stammen von der {{domxref("GPUComputePassEncoder")}}, die über `beginComputePass()` erstellt wurde. Der Aufruf von `setPipeline()` wird verwendet, um die für diesen Pass zu verwendende Pipeline festzulegen.

```js
const BUFFER_SIZE = 1000;

// ...

// Erstellung eines GPUCommandEncoder, um Befehle zu kodieren, die an die GPU gesendet werden sollen
const commandEncoder = device.createCommandEncoder();

// Initiierung des Render-Passes
const passEncoder = commandEncoder.beginComputePass();

// Befehle ausgeben
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(BUFFER_SIZE / 64));

// Ende des Render-Passes
passEncoder.end();

// Ausgabe-Puffer zum Staging-Puffer kopieren
commandEncoder.copyBufferToBuffer(
  output,
  0, // Quell-Offset
  stagingBuffer,
  0, // Ziel-Offset
  BUFFER_SIZE,
);

// Rahmen beenden, indem ein Array von Befehls-Puffern zur Ausführung an die Befehlsschlange übergeben wird
device.queue.submit([commandEncoder.finish()]);

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
