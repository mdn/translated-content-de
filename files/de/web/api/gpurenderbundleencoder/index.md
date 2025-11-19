---
title: GPURenderBundleEncoder
slug: Web/API/GPURenderBundleEncoder
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPURenderBundleEncoder`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) wird verwendet, um Bündel von Befehlen voraufzuzeichnen.

Die Befehlsbündel werden durch Aufrufen der Methoden von `GPURenderBundleEncoder` kodiert; sobald die gewünschten Befehle kodiert wurden, werden sie mithilfe der [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish)-Methode in eine Instanz eines [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)-Objekts aufgenommen. Diese Renderbündel können dann über mehrere Render-Passagen hinweg erneut verwendet werden, indem die `GPURenderBundle`-Objekte in Aufrufe von [`GPURenderPassEncoder.executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) übergeben werden.

Im Effekt ist dies wie eine partielle Render-Passage — `GPURenderBundleEncoder` bieten die gleiche Funktionalität wie [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder), mit der Ausnahme, dass sie keine Okklusionsabfragen beginnen und beenden und das Scherrechteck, den Viewport, die Mischkonstante und die Stencil-Referenz nicht festlegen können. Der `GPURenderBundle` übernimmt alle diese Werte von dem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder), der ihn ausführt.

> [!NOTE]
> Derzeitig gesetzte Vertex-Puffer, Index-Puffer, Bind-Gruppen und Pipelines werden alle vor und nach der Ausführung eines Render-Bündels gelöscht.

Das Wiederverwenden von voraufgezeichneten Befehlen kann die App-Performance erheblich verbessern, wenn der JavaScript-Zeichenaufruf-Overhead ein Engpass ist. Render-Bündel sind am effektivsten in Situationen, in denen ein Batch von Objekten in gleicher Weise über mehrere Ansichten oder Frames gezeichnet wird, wobei die einzigen Unterschiede der verwendete Pufferinhalt sind (wie z.B. aktualisierte Matrix-Uniformen). Ein gutes Beispiel dafür ist das VR-Rendering. Das Aufzeichnen der Renderings als Render-Bündel und das anschließende Ändern der Sichtmatrix und das Wiederholen für jedes Auge ist eine effizientere Methode, um Zeichenaufrufe für beide Renderings der Szene auszugeben.

Ein `GPURenderBundleEncoder`-Objekt wird über die [`GPUDevice.createRenderBundleEncoder()`](/de/docs/Web/API/GPUDevice/createRenderBundleEncoder)-Eigenschaft erstellt.

> [!NOTE]
> Die Methoden von `GPURenderBundleEncoder` sind funktional identisch mit ihren Entsprechungen auf [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder), mit Ausnahme von [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish), welches in seiner Funktionalität dem [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) ähnelt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`label`](/de/docs/Web/API/GPURenderBundleEncoder/label)
  - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

## Instanzmethoden

- [`draw()`](/de/docs/Web/API/GPURenderBundleEncoder/draw)
  - : Zeichnen von Primitiven basierend auf den durch [`setVertexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setVertexBuffer) bereitgestellten Vertex-Puffern.
- [`drawIndexed()`](/de/docs/Web/API/GPURenderBundleEncoder/drawIndexed)
  - : Zeichnen von indizierten Primitiven basierend auf den durch [`setVertexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setVertexBuffer) und [`setIndexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setIndexBuffer) bereitgestellten Vertex- und Index-Puffern.
- [`drawIndirect()`](/de/docs/Web/API/GPURenderBundleEncoder/drawIndirect)
  - : Zeichnen von Primitiven unter Verwendung von Parametern, die aus einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) gelesen werden.
- [`drawIndexedIndirect()`](/de/docs/Web/API/GPURenderBundleEncoder/drawIndexedIndirect)
  - : Zeichnen von indizierten Primitiven unter Verwendung von Parametern, die aus einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) gelesen werden.

- [`finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish)
  - : Beendet die Aufzeichnung der aktuellen Render-Pass-Befehlssequenz.

- [`insertDebugMarker()`](/de/docs/Web/API/GPURenderBundleEncoder/insertDebugMarker)
  - : Markiert einen bestimmten Punkt in einer Reihe von kodierten Befehlen mit einem Label.
- [`popDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/popDebugGroup)
  - : Beendet eine Debug-Gruppe, die mit einem Aufruf von [`pushDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/pushDebugGroup) begonnen wurde.
- [`pushDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/pushDebugGroup)
  - : Beginnt eine Debug-Gruppe, die mit einem spezifischen Label markiert wird und alle nachfolgenden kodierten Befehle bis zur Ausführung der Methode [`popDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/popDebugGroup) enthält.
- [`setBindGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/setBindGroup)
  - : Setzt die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), die für nachfolgende Render-Bündelbefehle an einem bestimmten Index verwendet werden soll.

- [`setIndexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setIndexBuffer)
  - : Setzt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der Indexdaten für nachfolgende Zeichnungsbefehle bereitstellt.

- [`setPipeline()`](/de/docs/Web/API/GPURenderBundleEncoder/setPipeline)
  - : Setzt die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline), die für dieses Render-Bündel verwendet werden soll.

- [`setVertexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setVertexBuffer)
  - : Setzt oder entfernt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der Vertexdaten für nachfolgende Zeichnungsbefehle bereitstellt.

## Beispiele

Im WebGPU-Samples [Animometer-Beispiel](https://webgpu.github.io/webgpu-samples/samples/animometer/) werden viele ähnliche Operationen gleichzeitig an vielen verschiedenen Objekten durchgeführt. Ein Bündel von Befehlen wird mit der folgenden Funktion kodiert:

```js
function recordRenderPass(
  passEncoder: GPURenderBundleEncoder | GPURenderPassEncoder
) {
  if (settings.dynamicOffsets) {
    passEncoder.setPipeline(dynamicPipeline);
  } else {
    passEncoder.setPipeline(pipeline);
  }
  passEncoder.setVertexBuffer(0, vertexBuffer);
  passEncoder.setBindGroup(0, timeBindGroup);
  const dynamicOffsets = [0];
  for (let i = 0; i < numTriangles; ++i) {
    if (settings.dynamicOffsets) {
      dynamicOffsets[0] = i * alignedUniformBytes;
      passEncoder.setBindGroup(1, dynamicBindGroup, dynamicOffsets);
    } else {
      passEncoder.setBindGroup(1, bindGroups[i]);
    }
    passEncoder.draw(3, 1, 0, 0);
  }
}
```

Später wird ein `GPURenderBundleEncoder` erstellt, die Funktion aufgerufen und das Befehlsbündel in ein [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle) mit [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) aufgenommen:

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
});
recordRenderPass(renderBundleEncoder);
const renderBundle = renderBundleEncoder.finish();
```

[`GPURenderPassEncoder.executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) wird dann verwendet, um die Arbeit über mehrere Render-Passagen hinweg wiederzuverwenden und die Leistung zu verbessern. Untersuchen Sie den Beispielcode für den vollständigen Kontext.

```js
// …

return function doDraw(timestamp) {
  if (startTime === undefined) {
    startTime = timestamp;
  }
  uniformTime[0] = (timestamp - startTime) / 1000;
  device.queue.writeBuffer(uniformBuffer, timeOffset, uniformTime.buffer);

  renderPassDescriptor.colorAttachments[0].view = context
    .getCurrentTexture()
    .createView();

  const commandEncoder = device.createCommandEncoder();
  const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

  if (settings.renderBundles) {
    passEncoder.executeBundles([renderBundle]);
  } else {
    recordRenderPass(passEncoder);
  }

  passEncoder.end();
  device.queue.submit([commandEncoder.finish()]);
};

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
