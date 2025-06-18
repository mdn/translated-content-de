---
title: GPUCommandEncoder
slug: Web/API/GPUCommandEncoder
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUCommandEncoder`**-Schnittstelle der [WebGPU-API](/de/docs/Web/API/WebGPU_API) repräsentiert einen Kommando-Encoder, der verwendet wird, um Befehle zu kodieren, die an die GPU gesendet werden sollen.

Ein `GPUCommandEncoder`-Objekt wird über die [`GPUDevice.createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder)-Eigenschaft erstellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`label`](/de/docs/Web/API/GPUCommandEncoder/label)
  - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

## Instanzmethoden

- [`beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass)
  - : Beginnt die Kodierung eines Compute-Passes und gibt einen [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) zurück, der zur Steuerung der Berechnung verwendet werden kann.
- [`beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)
  - : Beginnt die Kodierung eines Render-Passes und gibt einen [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) zurück, der zur Steuerung des Renderns verwendet werden kann.
- [`clearBuffer()`](/de/docs/Web/API/GPUCommandEncoder/clearBuffer)
  - : Kodiert einen Befehl, der einen Bereich eines [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) mit Nullen füllt.
- [`copyBufferToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyBufferToBuffer)
  - : Kodiert einen Befehl, der Daten von einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) zu einem anderen kopiert.
- [`copyBufferToTexture()`](/de/docs/Web/API/GPUCommandEncoder/copyBufferToTexture)
  - : Kodiert einen Befehl, der Daten von einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) zu einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) kopiert.
- [`copyTextureToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyTextureToBuffer)
  - : Kodiert einen Befehl, der Daten von einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) zu einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) kopiert.
- [`copyTextureToTexture()`](/de/docs/Web/API/GPUCommandEncoder/copyTextureToTexture)
  - : Kodiert einen Befehl, der Daten von einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) zu einer anderen kopiert.
- [`finish()`](/de/docs/Web/API/GPUCommandEncoder/finish)
  - : Schließt die Aufzeichnung der Befehlssequenz ab, die auf diesem `GPUCommandEncoder` kodiert wurde, und gibt einen entsprechenden [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) zurück.
- [`insertDebugMarker()`](/de/docs/Web/API/GPUCommandEncoder/insertDebugMarker)
  - : Markiert einen bestimmten Punkt in einer Serie kodierter Befehle mit einem Label.
- [`popDebugGroup()`](/de/docs/Web/API/GPUCommandEncoder/popDebugGroup)
  - : Beendet eine Debug-Gruppe, die mit einem [`pushDebugGroup()`](/de/docs/Web/API/GPUCommandEncoder/pushDebugGroup)-Aufruf begonnen wurde.
- [`pushDebugGroup()`](/de/docs/Web/API/GPUCommandEncoder/pushDebugGroup)
  - : Beginnt eine Debug-Gruppe, die mit einem bestimmten Label markiert ist und alle nachfolgenden kodierten Befehle bis zum Aufruf der Methode [`popDebugGroup()`](/de/docs/Web/API/GPUCommandEncoder/popDebugGroup) enthält.
- [`resolveQuerySet()`](/de/docs/Web/API/GPUCommandEncoder/resolveQuerySet)
  - : Kodiert einen Befehl, der einen [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) auflöst, wobei die Ergebnisse in einen angegebenen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) kopiert werden.
- [`writeTimestamp()`](/de/docs/Web/API/GPUCommandEncoder/writeTimestamp) {{non-standard_inline}} {{deprecated_inline}}
  - : Kodiert einen Befehl, der einen Zeitstempel in einen [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) schreibt, nachdem die vorherigen Befehle, die in den gleichen gequeueten [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) aufgenommen wurden, von der GPU ausgeführt wurden.

## Beispiele

In unserem [grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden mehrere Befehle über einen `GPUCommandEncoder` aufgezeichnet:

```js
// …

// Create GPUCommandEncoder
const commandEncoder = device.createCommandEncoder();

// Create GPURenderPassDescriptor to tell WebGPU which texture to draw into, then initiate render pass

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

// Draw a triangle

passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);

// End the render pass

passEncoder.end();

// …
```

Die durch den `GPUCommandEncoder` kodierten Befehle werden mithilfe der Methode [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) in einen [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) aufgenommen. Der Befehls-Puffer wird dann über einen [`submit()`](/de/docs/Web/API/GPUQueue/submit)-Aufruf in die Warteschlange gestellt und ist bereit, von der GPU verarbeitet zu werden.

```js
device.queue.submit([commandEncoder.finish()]);
```

> [!NOTE]
> Studieren Sie die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/), um mehr Beispiele zur Befehlscodierung zu finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
