---
title: GPUCommandEncoder
slug: Web/API/GPUCommandEncoder
l10n:
  sourceCommit: 08e04f121ea7b3a55e6ef47782d2d82fb053ca88
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUCommandEncoder`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert einen Befehlscodierer, der verwendet wird, um Befehle zu kodieren, die an die GPU gesendet werden sollen.

Eine `GPUCommandEncoder`-Objektinstanz wird über die [`GPUDevice.createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder)-Eigenschaft erstellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`label`](/de/docs/Web/API/GPUCommandEncoder/label) {{Experimental_Inline}}
  - : Ein String, der eine Bezeichnung bereitstellt, die verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

## Instanzmethoden

- [`beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) {{Experimental_Inline}}
  - : Beginnt mit der Kodierung eines Compute-Passes und gibt einen [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) zurück, der zur Steuerung der Berechnung verwendet werden kann.
- [`beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) {{Experimental_Inline}}
  - : Beginnt mit der Kodierung eines Render-Passes und gibt einen [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) zurück, der zur Steuerung der Darstellung verwendet werden kann.
- [`clearBuffer()`](/de/docs/Web/API/GPUCommandEncoder/clearBuffer) {{Experimental_Inline}}
  - : Kodiert einen Befehl, der einen Bereich eines [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) mit Nullen füllt.
- [`copyBufferToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyBufferToBuffer) {{Experimental_Inline}}
  - : Kodiert einen Befehl, der Daten von einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) zu einem anderen kopiert.
- [`copyBufferToTexture()`](/de/docs/Web/API/GPUCommandEncoder/copyBufferToTexture) {{Experimental_Inline}}
  - : Kodiert einen Befehl, der Daten von einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) zu einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) kopiert.
- [`copyTextureToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyTextureToBuffer) {{Experimental_Inline}}
  - : Kodiert einen Befehl, der Daten von einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) zu einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) kopiert.
- [`copyTextureToTexture()`](/de/docs/Web/API/GPUCommandEncoder/copyTextureToTexture) {{Experimental_Inline}}
  - : Kodiert einen Befehl, der Daten von einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) zu einer anderen kopiert.
- [`finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) {{Experimental_Inline}}

  - : Schließt die Aufzeichnung der Befehlssequenz ab, die auf diesem `GPUCommandEncoder` kodiert wurde, und gibt ein entsprechendes [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) zurück.

- [`insertDebugMarker()`](/de/docs/Web/API/GPUCommandEncoder/insertDebugMarker) {{Experimental_Inline}}
  - : Markiert einen spezifischen Punkt in einer Serie von kodierten Befehlen mit einer Bezeichnung.
- [`popDebugGroup()`](/de/docs/Web/API/GPUCommandEncoder/popDebugGroup) {{Experimental_Inline}}
  - : Beendet eine Debug-Gruppe, die mit einem Aufruf von [`pushDebugGroup()`](/de/docs/Web/API/GPUCommandEncoder/pushDebugGroup) begonnen wurde.
- [`pushDebugGroup()`](/de/docs/Web/API/GPUCommandEncoder/pushDebugGroup) {{Experimental_Inline}}

  - : Beginnt eine Debug-Gruppe, die mit einer spezifischen Bezeichnung markiert wird und alle nachfolgenden kodierten Befehle bis zur Ausführung einer [`popDebugGroup()`](/de/docs/Web/API/GPUCommandEncoder/popDebugGroup)-Methode enthält.

- [`resolveQuerySet()`](/de/docs/Web/API/GPUCommandEncoder/resolveQuerySet) {{Experimental_Inline}}
  - : Kodiert einen Befehl, der einen [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) auflöst und die Ergebnisse in einen angegebenen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) kopiert.
- [`writeTimestamp()`](/de/docs/Web/API/GPUCommandEncoder/writeTimestamp) {{non-standard_inline}} {{deprecated_inline}}
  - : Kodiert einen Befehl, der einen Zeitstempel in ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) schreibt, sobald die vorhergehenden Befehle, die in den gleichen `GPUCommandBuffer` eingereiht wurden, von der GPU ausgeführt wurden.

## Beispiele

In unserem [grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden mehrere Befehle über einen `GPUCommandEncoder` aufgezeichnet:

```js
// ...

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

// ...
```

Die von dem `GPUCommandEncoder` kodierten Befehle werden mithilfe der Methode [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) in einem [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) aufgezeichnet. Der Befehlsbuffer wird dann über einen [`submit()`](/de/docs/Web/API/GPUQueue/submit)-Aufruf in die Warteschlange übergeben, bereit zur Verarbeitung durch die GPU.

```js
device.queue.submit([commandEncoder.finish()]);
```

> [!NOTE]
> Studieren Sie die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/), um mehr Beispiele zur Befehlskodierung zu finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
