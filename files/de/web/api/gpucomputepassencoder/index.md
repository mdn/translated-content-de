---
title: GPUComputePassEncoder
slug: Web/API/GPUComputePassEncoder
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUComputePassEncoder`**-Schnittstelle der [WebGPU-API](/de/docs/Web/API/WebGPU_API) kodiert Befehle, die mit der Steuerung der Compute-Shader-Phase verbunden sind und von einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) ausgegeben werden. Sie ist Teil der umfassenden Kodierungsaktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).

Eine Compute-Pipeline enthält eine einzelne Compute-Stufe, in der ein Compute-Shader allgemeine Daten verarbeitet, diese parallel über eine festgelegte Anzahl von Arbeitsgruppen verarbeitet und das Ergebnis in einem oder mehreren Puffern zurückgibt.

Ein `GPUComputePassEncoder`-Objekt wird über die [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass)-Eigenschaft erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`label`](/de/docs/Web/API/GPUComputePassEncoder/label)
  - : Ein String, der ein Label zur Verfügung stellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

## Instanz-Methoden

- [`dispatchWorkgroups()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroups)
  - : Sendet ein spezifisches Raster von Arbeitsgruppen, um die Arbeit zu erledigen, die von der aktuellen [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) durchgeführt wird.
- [`dispatchWorkgroupsIndirect()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroupsIndirect)
  - : Sendet ein Raster von Arbeitsgruppen, definiert durch die Parameter eines [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), um die Arbeit der aktuellen [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) auszuführen.
- [`end()`](/de/docs/Web/API/GPUComputePassEncoder/end)
  - : Beendet die Aufzeichnung der aktuellen Compute-Pass-Befehlssequenz.
- [`insertDebugMarker()`](/de/docs/Web/API/GPUComputePassEncoder/insertDebugMarker)
  - : Markiert einen bestimmten Punkt in einer Serie von kodierten Befehlen mit einem Label.
- [`popDebugGroup()`](/de/docs/Web/API/GPUComputePassEncoder/popDebugGroup)
  - : Beendet eine Debug-Gruppe, die mit einem [`pushDebugGroup()`](/de/docs/Web/API/GPUComputePassEncoder/pushDebugGroup)-Aufruf begonnen wurde.
- [`pushDebugGroup()`](/de/docs/Web/API/GPUComputePassEncoder/pushDebugGroup)
  - : Beginnt eine Debug-Gruppe, die mit einem angegebenen Label markiert wird und alle nachfolgenden kodierten Befehle bis zu einer [`popDebugGroup()`](/de/docs/Web/API/GPUComputePassEncoder/popDebugGroup)-Methode enthält.
- [`setBindGroup()`](/de/docs/Web/API/GPUComputePassEncoder/setBindGroup)
  - : Stellt die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) ein, die für die folgenden Compute-Befehle für einen gegebenen Index verwendet werden soll.
- [`setPipeline()`](/de/docs/Web/API/GPUComputePassEncoder/setPipeline)
  - : Stellt die [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) ein, die für diesen Compute-Pass verwendet werden soll.

## Beispiele

In unserem [basischen Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen von dem `GPUComputePassEncoder`, der über [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) erstellt wurde.

```js
// …

// Create GPUCommandEncoder to encode commands to issue to the GPU
const commandEncoder = device.createCommandEncoder();

// Create GPUComputePassEncoder to initiate compute pass
const passEncoder = commandEncoder.beginComputePass();

// Issue commands
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(BUFFER_SIZE / 64));

// End the compute pass
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

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
