---
title: GPUCommandEncoder
slug: Web/API/GPUCommandEncoder
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUCommandEncoder`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert einen Befehlscodierer, der verwendet wird, um Befehle zu codieren, die an die GPU ausgegeben werden sollen.

Ein `GPUCommandEncoder`-Objekt wird über die Eigenschaft [`GPUDevice.createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder) erstellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`label`](/de/docs/Web/API/GPUCommandEncoder/label) {{Experimental_Inline}}
  - : Ein String, der ein Label zur Verfügung stellt, mit dem das Objekt identifiziert werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.

## Instanzmethoden

- [`beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) {{Experimental_Inline}}
  - : Startet die Codierung eines Rechenvorgangs und gibt einen [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) zurück, der zur Steuerung der Berechnung verwendet werden kann.
- [`beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) {{Experimental_Inline}}
  - : Startet die Codierung eines Renderdurchlaufs und gibt einen [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) zurück, der zur Steuerung des Renderings verwendet werden kann.
- [`clearBuffer()`](/de/docs/Web/API/GPUCommandEncoder/clearBuffer) {{Experimental_Inline}}
  - : Codiert einen Befehl, der einen Bereich eines [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) mit Nullen füllt.
- [`copyBufferToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyBufferToBuffer) {{Experimental_Inline}}
  - : Codiert einen Befehl, der Daten von einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) zu einem anderen kopiert.
- [`copyBufferToTexture()`](/de/docs/Web/API/GPUCommandEncoder/copyBufferToTexture) {{Experimental_Inline}}
  - : Codiert einen Befehl, der Daten von einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) zu einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) kopiert.
- [`copyTextureToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyTextureToBuffer) {{Experimental_Inline}}
  - : Codiert einen Befehl, der Daten von einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) zu einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) kopiert.
- [`copyTextureToTexture()`](/de/docs/Web/API/GPUCommandEncoder/copyTextureToTexture) {{Experimental_Inline}}
  - : Codiert einen Befehl, der Daten von einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) zu einer anderen kopiert.
- [`finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) {{Experimental_Inline}}

  - : Beendet die Aufzeichnung der Befehlssequenz, die auf diesem `GPUCommandEncoder` codiert wurde, und gibt einen entsprechenden [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) zurück.

- [`insertDebugMarker()`](/de/docs/Web/API/GPUCommandEncoder/insertDebugMarker) {{Experimental_Inline}}
  - : Markiert einen bestimmten Punkt in einer Reihe von codierten Befehlen mit einem Label.
- [`popDebugGroup()`](/de/docs/Web/API/GPUCommandEncoder/popDebugGroup) {{Experimental_Inline}}
  - : Beendet eine Debug-Gruppe, die mit einem Aufruf von [`pushDebugGroup()`](/de/docs/Web/API/GPUCommandEncoder/pushDebugGroup) begonnen wurde.
- [`pushDebugGroup()`](/de/docs/Web/API/GPUCommandEncoder/pushDebugGroup) {{Experimental_Inline}}

  - : Beginnt eine Debug-Gruppe, die mit einem angegebenen Label markiert ist und alle nachfolgenden codierten Befehle enthält, bis eine [`popDebugGroup()`](/de/docs/Web/API/GPUCommandEncoder/popDebugGroup)-Methode aufgerufen wird.

- [`resolveQuerySet()`](/de/docs/Web/API/GPUCommandEncoder/resolveQuerySet) {{Experimental_Inline}}
  - : Codiert einen Befehl, der einen [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) auflöst und die Ergebnisse in einen angegebenen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) kopiert.
- [`writeTimestamp()`](/de/docs/Web/API/GPUCommandEncoder/writeTimestamp) {{non-standard_inline}} {{deprecated_inline}}
  - : Codiert einen Befehl, der einen Zeitstempel in einen [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) schreibt, sobald die vorherigen Befehle, die in den gleichen in der Warteschlange befindlichen [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) aufgenommen wurden, von der GPU ausgeführt wurden.

## Beispiele

In unserem [Grundlegendes Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden mehrere Befehle über einen `GPUCommandEncoder` aufgezeichnet:

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

Die von dem `GPUCommandEncoder` codierten Befehle werden mithilfe der Methode [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) in einen [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) aufgenommen. Der Befehls-Puffer wird dann über einen [`submit()`](/de/docs/Web/API/GPUQueue/submit)-Aufruf in die Warteschlange gestellt, bereit zur Verarbeitung durch die GPU.

```js
device.queue.submit([commandEncoder.finish()]);
```

> [!NOTE]
> Studiere die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/), um weitere Beispiel-Codierungen von Befehlen zu finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
