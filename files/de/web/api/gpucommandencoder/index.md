---
title: GPUCommandEncoder
slug: Web/API/GPUCommandEncoder
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUCommandEncoder`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) stellt einen Befehlscodierer dar, der verwendet wird, um Befehle zu kodieren, die an die GPU übergeben werden sollen.

Ein `GPUCommandEncoder`-Objekt wird über die [`GPUDevice.createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder)-Eigenschaft erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`label`](/de/docs/Web/API/GPUCommandEncoder/label) {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen zu identifizieren.

## Instanz-Methoden

- [`beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) {{Experimental_Inline}}
  - : Startet die Kodierung eines Compute-Passes und gibt einen [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) zurück, der zur Steuerung der Berechnung verwendet werden kann.
- [`beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) {{Experimental_Inline}}
  - : Startet die Kodierung eines Render-Passes und gibt einen [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) zurück, der zur Steuerung des Renderings verwendet werden kann.
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

  - : Beendet die Aufzeichnung der Befehlssequenz, die auf diesem `GPUCommandEncoder` kodiert wurde, und gibt einen entsprechenden [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) zurück.

- [`insertDebugMarker()`](/de/docs/Web/API/GPUCommandEncoder/insertDebugMarker) {{Experimental_Inline}}
  - : Markiert einen bestimmten Punkt in einer Serie von kodierten Befehlen mit einem Label.
- [`popDebugGroup()`](/de/docs/Web/API/GPUCommandEncoder/popDebugGroup) {{Experimental_Inline}}
  - : Beendet eine Debug-Gruppe, die mit einem [`pushDebugGroup()`](/de/docs/Web/API/GPUCommandEncoder/pushDebugGroup)-Aufruf begonnen wurde.
- [`pushDebugGroup()`](/de/docs/Web/API/GPUCommandEncoder/pushDebugGroup) {{Experimental_Inline}}

  - : Beginnt eine Debug-Gruppe, die mit einem bestimmten Label markiert ist und alle nachfolgenden kodierten Befehle enthalten wird, bis eine [`popDebugGroup()`](/de/docs/Web/API/GPUCommandEncoder/popDebugGroup)-Methode aufgerufen wird.

- [`resolveQuerySet()`](/de/docs/Web/API/GPUCommandEncoder/resolveQuerySet) {{Experimental_Inline}}
  - : Kodiert einen Befehl, der ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) auflöst und die Ergebnisse in einen angegebenen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) kopiert.
- [`writeTimestamp()`](/de/docs/Web/API/GPUCommandEncoder/writeTimestamp) {{deprecated_inline}} {{experimental_inline}} {{non-standard_inline}}
  - : Kodiert einen Befehl, der einen Zeitstempel in ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) schreibt, sobald die vorherigen Befehle, die in denselben wartenden [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) aufgezeichnet wurden, von der GPU ausgeführt worden sind.

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

Die vom `GPUCommandEncoder` kodierten Befehle werden mit der [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish)-Methode in einen [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) aufgezeichnet. Der Befehls-Puffer wird dann über einen [`submit()`](/de/docs/Web/API/GPUQueue/submit)-Aufruf in die Warteschlange gestellt und bereitgestellt, um von der GPU verarbeitet zu werden.

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
