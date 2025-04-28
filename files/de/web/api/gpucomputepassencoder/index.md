---
title: GPUComputePassEncoder
slug: Web/API/GPUComputePassEncoder
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUComputePassEncoder`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) codiert Befehle, die sich auf die Steuerung der Compute-Shader-Phase beziehen, wie sie von einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) ausgegeben werden. Sie bildet einen Teil der gesamten Codierungsaktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).

Eine Compute-Pipeline enthält eine einzige Compute-Phase, in der ein Compute-Shader allgemeine Daten nimmt, diese parallel über eine angegebene Anzahl von Arbeitsgruppen verarbeitet und dann das Ergebnis in einem oder mehreren Puffern zurückgibt.

Eine Instanz des `GPUComputePassEncoder`-Objekts wird über die Eigenschaft [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`label`](/de/docs/Web/API/GPUComputePassEncoder/label) {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

## Instanz-Methoden

- [`dispatchWorkgroups()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroups) {{Experimental_Inline}}
  - : Sendet ein spezifisches Raster von Arbeitsgruppen, um die Arbeit auszuführen, die von der aktuellen [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) erledigt wird.
- [`dispatchWorkgroupsIndirect()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroupsIndirect) {{Experimental_Inline}}
  - : Sendet ein Raster von Arbeitsgruppen, definiert durch die Parameter eines [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), um die Arbeit auszuführen, die von der aktuellen [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) erledigt wird.
- [`end()`](/de/docs/Web/API/GPUComputePassEncoder/end) {{Experimental_Inline}}
  - : Beendet die Aufzeichnung der aktuellen Compute-Pass-Befehlssequenz.
- [`insertDebugMarker()`](/de/docs/Web/API/GPUComputePassEncoder/insertDebugMarker) {{Experimental_Inline}}
  - : Markiert einen bestimmten Punkt in einer Serie von codierten Befehlen mit einem Label.
- [`popDebugGroup()`](/de/docs/Web/API/GPUComputePassEncoder/popDebugGroup) {{Experimental_Inline}}
  - : Beendet eine Debug-Gruppe, die mit einem Aufruf von [`pushDebugGroup()`](/de/docs/Web/API/GPUComputePassEncoder/pushDebugGroup) begonnen wurde.
- [`pushDebugGroup()`](/de/docs/Web/API/GPUComputePassEncoder/pushDebugGroup) {{Experimental_Inline}}
  - : Beginnt eine Debug-Gruppe, die mit einem angegebenen Label markiert ist und alle nachfolgenden codierten Befehle bis zu einer Aufruf von [`popDebugGroup()`](/de/docs/Web/API/GPUComputePassEncoder/popDebugGroup) enthalten wird.
- [`setBindGroup()`](/de/docs/Web/API/GPUComputePassEncoder/setBindGroup) {{Experimental_Inline}}
  - : Setzt die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) für nachfolgende Compute-Befehle für einen bestimmten Index.
- [`setPipeline()`](/de/docs/Web/API/GPUComputePassEncoder/setPipeline) {{Experimental_Inline}}
  - : Setzt die [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) für diesen Compute-Pass.

## Beispiele

In unserem [grundlegenden Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen von dem `GPUComputePassEncoder`, der über [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) erstellt wird.

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

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
