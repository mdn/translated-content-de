---
title: "GPUComputePassEncoder: end()-Methode"
short-title: end()
slug: Web/API/GPUComputePassEncoder/end
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`end()`**-Methode des
{{domxref("GPUComputePassEncoder")}}-Interfaces beendet die Aufnahme der aktuellen Befehlssequenz für die Compute-Pass.

## Syntax

```js-nolint
end()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`end()`** aufgerufen wird, andernfalls wird ein {{domxref("GPUValidationError")}} erzeugt und der {{domxref("GPUComputePassEncoder")}} wird ungültig:

- Der {{domxref("GPUComputePassEncoder")}} ist offen (d.h. nicht bereits durch einen `end()`-Aufruf beendet).
- Alle {{domxref("GPUComputePassEncoder.pushDebugGroup", "pushDebugGroup()")}}-Aufrufe, die auf diesem Encoder gemacht wurden, haben einen entsprechenden {{domxref("GPUComputePassEncoder.popDebugGroup", "popDebugGroup()")}}-Aufruf, bevor `end()` aufgerufen wird.

## Beispiele

In unserem [grundlegenden Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) werden mehrere Befehle über einen {{domxref("GPUCommandEncoder")}} aufgezeichnet. Die meisten dieser Befehle stammen vom {{domxref("GPUComputePassEncoder")}}, der über {{domxref("GPUCommandEncoder.beginComputePass()")}} erstellt wurde.

```js
const BUFFER_SIZE = 1000;

// ...

// Erstellen eines GPUCommandEncoders zum Kodieren von Befehlen zur Ausführung auf der GPU
const commandEncoder = device.createCommandEncoder();

// Initiierung des Render-Passes
const passEncoder = commandEncoder.beginComputePass();

// Befehle erteilen
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(BUFFER_SIZE / 64));

// Beenden des Render-Passes
passEncoder.end();

// Ausgangspuffer in den Staging-Puffer kopieren
commandEncoder.copyBufferToBuffer(
  output,
  0, // Quell-Offset
  stagingBuffer,
  0, // Ziel-Offset
  BUFFER_SIZE,
);

// Beenden des Frames durch Übergeben des Arrays von Befehls-Puffern an die Befehlswarteschlange zur Ausführung
device.queue.submit([commandEncoder.finish()]);

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
