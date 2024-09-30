---
title: GPUComputePassEncoder
slug: Web/API/GPUComputePassEncoder
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUComputePassEncoder`** Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) kodiert Befehle zur Steuerung der Compute-Shader-Stufe, wie sie von einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) ausgegeben werden. Sie ist Teil der gesamten Kodierungsaktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).

Eine Compute-Pipeline enthält eine einzige Compute-Stufe, in der ein Compute-Shader allgemeine Daten entgegennimmt, diese parallel über eine festgelegte Anzahl von Arbeitsgruppen verarbeitet und das Ergebnis in einem oder mehreren Puffern zurückgibt.

Ein `GPUComputePassEncoder` Objekt wird über die [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) Eigenschaft erstellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`label`](/de/docs/Web/API/GPUComputePassEncoder/label) {{Experimental_Inline}}
  - : Eine Zeichenkette, die eine Kennzeichnung bereitstellt, die verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError) Meldungen oder Konsolenwarnungen.

## Instanzmethoden

- [`dispatchWorkgroups()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroups) {{Experimental_Inline}}
  - : Verteilt ein spezifisches Raster von Arbeitsgruppen, um die Arbeit auszuführen, die von der aktuellen [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) durchgeführt wird.
- [`dispatchWorkgroupsIndirect()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroupsIndirect) {{Experimental_Inline}}
  - : Verteilt ein Raster von Arbeitsgruppen, das durch die Parameter eines [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) definiert ist, um die Arbeit auszuführen, die von der aktuellen [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) durchgeführt wird.
- [`end()`](/de/docs/Web/API/GPUComputePassEncoder/end) {{Experimental_Inline}}
  - : Beendet die Aufnahme der aktuellen Compute-Pass-Befehlsequenz.
- [`insertDebugMarker()`](/de/docs/Web/API/GPUComputePassEncoder/insertDebugMarker) {{Experimental_Inline}}
  - : Markiert einen bestimmten Punkt in einer Reihe kodierter Befehle mit einer Kennzeichnung.
- [`popDebugGroup()`](/de/docs/Web/API/GPUComputePassEncoder/popDebugGroup) {{Experimental_Inline}}
  - : Beendet eine Debug-Gruppe, die mit einem [`pushDebugGroup()`](/de/docs/Web/API/GPUComputePassEncoder/pushDebugGroup) Aufruf begonnen wurde.
- [`pushDebugGroup()`](/de/docs/Web/API/GPUComputePassEncoder/pushDebugGroup) {{Experimental_Inline}}
  - : Beginnt eine Debug-Gruppe, die mit einer festgelegten Kennzeichnung versehen ist und alle nachfolgenden kodierten Befehle bis zur Aufrufmethode [`popDebugGroup()`](/de/docs/Web/API/GPUComputePassEncoder/popDebugGroup) enthalten wird.
- [`setBindGroup()`](/de/docs/Web/API/GPUComputePassEncoder/setBindGroup) {{Experimental_Inline}}
  - : Setzt die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) für die nachfolgenden Compute-Befehle für einen bestimmten Index.
- [`setPipeline()`](/de/docs/Web/API/GPUComputePassEncoder/setPipeline) {{Experimental_Inline}}
  - : Setzt die [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline), die für diesen Compute-Pass verwendet werden soll.

## Beispiele

In unserem [einfachen Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen von dem `GPUComputePassEncoder`, der über [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) erstellt wurde.

```js
// ...

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

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
