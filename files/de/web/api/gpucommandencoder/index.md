---
title: GPUCommandEncoder
slug: Web/API/GPUCommandEncoder
l10n:
  sourceCommit: c28529c0cc75eb5d2de857c923f0a1ebd5145313
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`GPUCommandEncoder`**-Schnittstelle der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} repräsentiert einen Befehlsencoder, der verwendet wird, um Befehle zur Ausführung an die GPU zu kodieren.

Ein `GPUCommandEncoder`-Objekt wird über die Eigenschaft {{domxref("GPUDevice.createCommandEncoder()")}} erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("GPUCommandEncoder.label", "label")}} {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in {{domxref("GPUError")}}-Nachrichten oder Konsolenwarnungen.

## Instanzmethoden

- {{domxref("GPUCommandEncoder.beginComputePass", "beginComputePass()")}} {{Experimental_Inline}}
  - : Startet die Kodierung eines Berechnungsdurchgangs und gibt einen {{domxref("GPUComputePassEncoder")}} zurück, der zur Steuerung der Berechnung verwendet werden kann.
- {{domxref("GPUCommandEncoder.beginRenderPass", "beginRenderPass()")}} {{Experimental_Inline}}
  - : Startet die Kodierung eines Rendering-Durchgangs und gibt einen {{domxref("GPURenderPassEncoder")}} zurück, der zur Steuerung des Renderings verwendet werden kann.
- {{domxref("GPUCommandEncoder.clearBuffer", "clearBuffer()")}} {{Experimental_Inline}}
  - : Kodiert einen Befehl, der einen Bereich eines {{domxref("GPUBuffer")}} mit Nullen füllt.
- {{domxref("GPUCommandEncoder.copyBufferToBuffer", "copyBufferToBuffer()")}} {{Experimental_Inline}}
  - : Kodiert einen Befehl, der Daten von einem {{domxref("GPUBuffer")}} zu einem anderen kopiert.
- {{domxref("GPUCommandEncoder.copyBufferToTexture", "copyBufferToTexture()")}} {{Experimental_Inline}}
  - : Kodiert einen Befehl, der Daten von einem {{domxref("GPUBuffer")}} zu einer {{domxref("GPUTexture")}} kopiert.
- {{domxref("GPUCommandEncoder.copyTextureToBuffer", "copyTextureToBuffer()")}} {{Experimental_Inline}}
  - : Kodiert einen Befehl, der Daten von einer {{domxref("GPUTexture")}} zu einem {{domxref("GPUBuffer")}} kopiert.
- {{domxref("GPUCommandEncoder.copyTextureToTexture", "copyTextureToTexture()")}} {{Experimental_Inline}}
  - : Kodiert einen Befehl, der Daten von einer {{domxref("GPUTexture")}} zu einer anderen kopiert.
- {{domxref("GPUCommandEncoder.finish", "finish()")}} {{Experimental_Inline}}

  - : Schließt die Aufnahme der Befehlsequenz ab, die auf diesem `GPUCommandEncoder` kodiert wurde, und gibt einen entsprechenden {{domxref("GPUCommandBuffer")}} zurück.

- {{domxref("GPUCommandEncoder.insertDebugMarker", "insertDebugMarker()")}} {{Experimental_Inline}}
  - : Markiert einen bestimmten Punkt in einer Reihe von kodierten Befehlen mit einem Label.
- {{domxref("GPUCommandEncoder.popDebugGroup", "popDebugGroup()")}} {{Experimental_Inline}}
  - : Beendet eine Debug-Gruppe, die mit einem {{domxref("GPUCommandEncoder.pushDebugGroup", "pushDebugGroup()")}}-Aufruf begonnen wurde.
- {{domxref("GPUCommandEncoder.pushDebugGroup", "pushDebugGroup()")}} {{Experimental_Inline}}

  - : Beginnt eine Debug-Gruppe, die mit einem bestimmten Label markiert ist und alle nachfolgenden kodierten Befehle bis zur Aufruf der Methode {{domxref("GPUCommandEncoder.popDebugGroup", "popDebugGroup()")}} enthalten wird.

- {{domxref("GPUCommandEncoder.resolveQuerySet", "resolveQuerySet()")}} {{Experimental_Inline}}
  - : Kodiert einen Befehl, der einen {{domxref("GPUQuerySet")}} auflöst und die Ergebnisse in einem angegebenen {{domxref("GPUBuffer")}} kopiert.
- {{domxref("GPUCommandEncoder.writeTimestamp", "writeTimestamp()")}} {{deprecated_inline}} {{experimental_inline}} {{non-standard_inline}}
  - : Kodiert einen Befehl, der einen Zeitstempel in einen {{domxref("GPUQuerySet")}} schreibt, sobald die vorherigen, in denselben wartenden {{domxref("GPUCommandBuffer")}} aufgezeichneten Befehle von der GPU ausgeführt wurden.

## Beispiele

In unserem [Basic Render Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden mehrere Befehle über einen `GPUCommandEncoder` aufgezeichnet:

```js
// ...

// GPUCommandEncoder erstellen
const commandEncoder = device.createCommandEncoder();

// GPURenderPassDescriptor erstellen, um WebGPU mitzuteilen, in welche Textur gezeichnet werden soll, dann Renderpass initiieren

const renderPassDescriptor = {
  colorAttachments: [
    {
      clearValue: clearColor,
      loadOp: "clear",
      storeOp: "store",
      view: context.getCurrentTexture().createView(),
    },
  ],
};

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

// Ein Dreieck zeichnen

passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);

// Den Renderpass beenden

passEncoder.end();

// ...
```

Die vom `GPUCommandEncoder` kodierten Befehle werden mit der {{domxref("GPUCommandEncoder.finish()")}}-Methode in einen {{domxref("GPUCommandBuffer")}} recodiert. Der Befehlsbuffer wird dann über einen {{domxref("GPUQueue.submit", "submit()")}}-Aufruf in die Warteschlange gegeben und ist bereit, von der GPU verarbeitet zu werden.

```js
device.queue.submit([commandEncoder.finish()]);
```

> [!NOTE]
> Studieren Sie die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/), um weitere Beispiele für die Befehlsenkodierung zu finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
