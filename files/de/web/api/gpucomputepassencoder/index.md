---
title: GPUComputePassEncoder
slug: Web/API/GPUComputePassEncoder
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUComputePassEncoder`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) kodiert Befehle zur Steuerung der Compute-Shader-Stufe, wie sie von einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) ausgestellt werden. Es ist Teil der gesamten Kodierungsaktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).

Eine Compute-Pipeline enthält eine einzelne Compute-Stufe, in der ein Compute-Shader allgemeine Daten verarbeitet, diese parallel über eine festgelegte Anzahl von Arbeitsgruppen verarbeitet und das Ergebnis in einem oder mehreren Puffern zurückgibt.

Ein `GPUComputePassEncoder`-Objekt wird über die Eigenschaft [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) erzeugt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`label`](/de/docs/Web/API/GPUComputePassEncoder/label) {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, mit dem das Objekt identifiziert werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.

## Instanzmethoden

- [`dispatchWorkgroups()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroups) {{Experimental_Inline}}
  - : Startet ein spezifisches Raster von Arbeitsgruppen, um die Arbeit auszuführen, die von der aktuellen [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) erledigt wird.
- [`dispatchWorkgroupsIndirect()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroupsIndirect) {{Experimental_Inline}}
  - : Startet ein Raster von Arbeitsgruppen, definiert durch die Parameter eines [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), um die Arbeit auszuführen, die von der aktuellen [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) erledigt wird.
- [`end()`](/de/docs/Web/API/GPUComputePassEncoder/end) {{Experimental_Inline}}
  - : Beendet die Aufzeichnung der aktuellen Compute-Pass-Befehlssequenz.
- [`insertDebugMarker()`](/de/docs/Web/API/GPUComputePassEncoder/insertDebugMarker) {{Experimental_Inline}}
  - : Markiert einen spezifischen Punkt in einer Serie von kodierten Befehlen mit einem Label.
- [`popDebugGroup()`](/de/docs/Web/API/GPUComputePassEncoder/popDebugGroup) {{Experimental_Inline}}
  - : Beendet eine Debug-Gruppe, die mit einem Aufruf von [`pushDebugGroup()`](/de/docs/Web/API/GPUComputePassEncoder/pushDebugGroup) begonnen wurde.
- [`pushDebugGroup()`](/de/docs/Web/API/GPUComputePassEncoder/pushDebugGroup) {{Experimental_Inline}}
  - : Beginnt eine Debug-Gruppe, die mit einem spezifizierten Label markiert wird und alle nachfolgenden kodierten Befehle bis zum Aufruf der Methode [`popDebugGroup()`](/de/docs/Web/API/GPUComputePassEncoder/popDebugGroup) enthält.
- [`setBindGroup()`](/de/docs/Web/API/GPUComputePassEncoder/setBindGroup) {{Experimental_Inline}}
  - : Setzt die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), die für nachfolgende Compute-Befehle bei einem gegebenen Index verwendet werden soll.
- [`setPipeline()`](/de/docs/Web/API/GPUComputePassEncoder/setPipeline) {{Experimental_Inline}}
  - : Setzt die [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline), die für diesen Compute-Pass verwendet werden soll.

## Beispiele

In unserem [grundlegenden Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen vom `GPUComputePassEncoder`, der über [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) erstellt wurde.

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
