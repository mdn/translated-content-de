---
title: GPUComputePassEncoder
slug: Web/API/GPUComputePassEncoder
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`GPUComputePassEncoder`**-Schnittstelle der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} codiert Befehle, die mit der Steuerung der Compute-Shader-Phase zusammenhängen, wie sie von einer {{domxref("GPUComputePipeline")}} ausgegeben werden. Sie ist Teil der Gesamtcodierungstätigkeit eines {{domxref("GPUCommandEncoder")}}.

Eine Compute-Pipeline enthält eine einzige Compute-Phase, in der ein Compute-Shader allgemeine Daten entgegennimmt, sie parallel über eine angegebene Anzahl von Arbeitsgruppen verarbeitet und dann das Ergebnis in einem oder mehreren Puffern zurückgibt.

Ein `GPUComputePassEncoder`-Objekt wird über die {{domxref("GPUCommandEncoder.beginComputePass()")}}-Eigenschaft erstellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- {{domxref("GPUComputePassEncoder.label", "label")}} {{Experimental_Inline}}
  - : Ein Zeichenkette, die ein Label bereitstellt, das zur Identifikation des Objekts genutzt werden kann, beispielsweise in {{domxref("GPUError")}}-Nachrichten oder Konsolenwarnungen.

## Instanzmethoden

- {{domxref("GPUComputePassEncoder.dispatchWorkgroups", "dispatchWorkgroups()")}} {{Experimental_Inline}}
  - : Veranlasst ein bestimmtes Raster von Arbeitsgruppen, die Arbeit auszuführen, die von der aktuellen {{domxref("GPUComputePipeline")}} geleistet wird.
- {{domxref("GPUComputePassEncoder.dispatchWorkgroupsIndirect", "dispatchWorkgroupsIndirect()")}} {{Experimental_Inline}}
  - : Veranlasst ein Raster von Arbeitsgruppen, das durch die Parameter eines {{domxref("GPUBuffer")}} definiert wird, die Arbeit auszuführen, die von der aktuellen {{domxref("GPUComputePipeline")}} geleistet wird.
- {{domxref("GPUComputePassEncoder.end", "end()")}} {{Experimental_Inline}}
  - : Beendet die Aufzeichnung der aktuellen Compute-Pass-Befehlsabfolge.
- {{domxref("GPUComputePassEncoder.insertDebugMarker", "insertDebugMarker()")}} {{Experimental_Inline}}
  - : Markiert einen bestimmten Punkt in einer Reihe von codierten Befehlen mit einem Label.
- {{domxref("GPUComputePassEncoder.popDebugGroup", "popDebugGroup()")}} {{Experimental_Inline}}
  - : Beendet eine Debug-Gruppe, die mit einem Aufruf von {{domxref("GPUComputePassEncoder.pushDebugGroup", "pushDebugGroup()")}} begonnen wurde.
- {{domxref("GPUComputePassEncoder.pushDebugGroup", "pushDebugGroup()")}} {{Experimental_Inline}}
  - : Beginnt eine Debug-Gruppe, die mit einem angegebenen Label markiert wird und alle folgenden codierten Befehle enthält, bis eine {{domxref("GPUComputePassEncoder.popDebugGroup", "popDebugGroup()")}}-Methode aufgerufen wird.
- {{domxref("GPUComputePassEncoder.setBindGroup", "setBindGroup()")}} {{Experimental_Inline}}
  - : Setzt die {{domxref("GPUBindGroup")}}, die für nachfolgende Compute-Befehle bei einem gegebenen Index verwendet werden soll.
- {{domxref("GPUComputePassEncoder.setPipeline", "setPipeline()")}} {{Experimental_Inline}}
  - : Setzt die {{domxref("GPUComputePipeline")}}, die für diesen Compute-Pass verwendet werden soll.

## Beispiele

In unserem [grundlegenden Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) werden mehrere Befehle über einen {{domxref("GPUCommandEncoder")}} aufgezeichnet. Die meisten dieser Befehle stammen vom `GPUComputePassEncoder`, der über {{domxref("GPUCommandEncoder.beginComputePass()")}} erstellt wurde.

```js
// ...

// Erstellen Sie GPUCommandEncoder, um Befehle zu kodieren, die an die GPU gesendet werden sollen
const commandEncoder = device.createCommandEncoder();

// Erstellen Sie GPUComputePassEncoder, um die Compute-Pass zu starten
const passEncoder = commandEncoder.beginComputePass();

// Befehle ausgeben
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(BUFFER_SIZE / 64));

// Beenden Sie den Compute-Pass
passEncoder.end();

// Kopieren Sie den Ausgabepuffer in den Zwischenspeicher
commandEncoder.copyBufferToBuffer(
  output,
  0, // Ausgangsoffset
  stagingBuffer,
  0, // Zieloffset
  BUFFER_SIZE,
);

// Beenden Sie den Frame, indem Sie ein Array von Befehls-Puffern an die Befehlswarteschlange zur Ausführung übergeben
device.queue.submit([commandEncoder.finish()]);

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
