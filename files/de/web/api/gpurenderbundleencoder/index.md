---
title: GPURenderBundleEncoder
slug: Web/API/GPURenderBundleEncoder
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPURenderBundleEncoder`** Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) wird verwendet, um Bündel von Befehlen vorab aufzuzeichnen.

Die Befehlsbündel werden durch Aufrufen der Methoden von `GPURenderBundleEncoder` kodiert; sobald die gewünschten Befehle kodiert sind, werden sie mit der Methode [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) in eine [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle) Objektinstanz aufgezeichnet. Diese Render-Bündel können dann über mehrere Render-Durchläufe hinweg wiederverwendet werden, indem die `GPURenderBundle` Objekte in [`GPURenderPassEncoder.executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) Aufrufe übergeben werden.

Effektiv ist dies wie ein teiler Render-Durchlauf — `GPURenderBundleEncoder` haben alle Funktionalitäten wie [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)s, mit der Ausnahme, dass sie keine Occlusion-Queries beginnen und beenden können und nicht das Scherrechteck, die Viewport, die Mischkonstante und die Stencil-Referenz setzen können. Der `GPURenderBundle` wird all diese Werte von dem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) erben, der ihn ausführt.

> [!NOTE]
> Aktuell werden die gesetzten Vertex-Buffer, Index-Buffer, Bind-Gruppen und Pipeline alle gelöscht, bevor ein Render-Bündel ausgeführt wird und sobald das Render-Bündel die Ausführung abgeschlossen hat.

Das Wiederverwenden vorab aufgezeichneter Befehle kann die Leistung von Apps erheblich verbessern, insbesondere in Situationen, in denen der JavaScript-Draw-Call-Overhead ein Engpass ist. Render-Bündel sind am effektivsten in Situationen, in denen eine Gruppe von Objekten auf die gleiche Weise über mehrere Ansichten oder Frames hinweg gezeichnet wird, wobei die einzigen Unterschiede im Pufferinhalt liegen (wie aktualisierte Matrix-Uniformen). Ein gutes Beispiel ist das Rendering für VR. Das Aufzeichnen des Renderings als Render-Bündel und das anschließende Anpassen der View-Matrix und das erneute Abspielen für jedes Auge ist eine effizientere Möglichkeit, Draw-Calls für beide Renderings der Szene auszuführen.

Ein `GPURenderBundleEncoder` Objektinstanz wird über die [`GPUDevice.createRenderBundleEncoder()`](/de/docs/Web/API/GPUDevice/createRenderBundleEncoder) Eigenschaft erstellt.

> [!NOTE]
> Die Methoden von `GPURenderBundleEncoder` sind funktional identisch mit ihren Äquivalenten, die auf [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) verfügbar sind, mit Ausnahme von [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish), die in ihrer Funktion mit [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) vergleichbar ist.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`label`](/de/docs/Web/API/GPURenderBundleEncoder/label)
  - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError) Nachrichten oder Konsolenwarnungen.

## Instanz-Methoden

- [`draw()`](/de/docs/Web/API/GPURenderBundleEncoder/draw)
  - : Zeichnet Primitive basierend auf den von [`setVertexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setVertexBuffer) bereitgestellten Vertex-Buffer.
- [`drawIndexed()`](/de/docs/Web/API/GPURenderBundleEncoder/drawIndexed)
  - : Zeichnet indexierte Primitive basierend auf den von [`setVertexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setVertexBuffer) und [`setIndexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setIndexBuffer) bereitgestellten Vertex- und Index-Buffer.
- [`drawIndirect()`](/de/docs/Web/API/GPURenderBundleEncoder/drawIndirect)
  - : Zeichnet Primitive, indem Parameter aus einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) gelesen werden.
- [`drawIndexedIndirect()`](/de/docs/Web/API/GPURenderBundleEncoder/drawIndexedIndirect)

  - : Zeichnet indexierte Primitive, indem Parameter aus einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) gelesen werden.

- [`finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish)

  - : Vervollständigt die Aufzeichnung der aktuellen Render-Pass-Befehlsfolge.

- [`insertDebugMarker()`](/de/docs/Web/API/GPURenderBundleEncoder/insertDebugMarker)
  - : Markiert einen bestimmten Punkt in einer Serie von kodierten Befehlen mit einem Label.
- [`popDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/popDebugGroup)
  - : Beendet eine Debug-Gruppe, die mit einem [`pushDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/pushDebugGroup) Aufruf begonnen wurde.
- [`pushDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/pushDebugGroup)
  - : Startet eine Debug-Gruppe, die mit einem angegebenen Label markiert ist und alle nachfolgenden kodierten Befehle bis zu einem [`popDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/popDebugGroup) Methodenaufruf enthält.
- [`setBindGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/setBindGroup)

  - : Setzt die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), die für nachfolgende Render-Bundle-Befehle für einen bestimmten Index verwendet werden soll.

- [`setIndexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setIndexBuffer)

  - : Setzt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der Indexdaten für nachfolgende Zeichenbefehle bereitstellt.

- [`setPipeline()`](/de/docs/Web/API/GPURenderBundleEncoder/setPipeline)

  - : Setzt die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline), die für dieses Render-Bündel verwendet werden soll.

- [`setVertexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setVertexBuffer)
  - : Setzt oder hebt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) auf, der Vertex-Daten für nachfolgende Zeichenbefehle bereitstellt.

## Beispiele

Im WebGPU-Samples [Animometer Beispiel](https://webgpu.github.io/webgpu-samples/samples/animometer/) werden viele gleichartige Operationen gleichzeitig auf vielen verschiedenen Objekten durchgeführt. Ein Bündel von Befehlen wird mit der folgenden Funktion kodiert:

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

Später wird ein `GPURenderBundleEncoder` erstellt, die Funktion aufgerufen und das Befehlsbündel in einer [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle) mithilfe von [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) aufgezeichnet:

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
});
recordRenderPass(renderBundleEncoder);
const renderBundle = renderBundleEncoder.finish();
```

[`GPURenderPassEncoder.executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) wird dann verwendet, um die Arbeit über mehrere Render-Durchläufe hinweg wiederzuverwenden, um die Leistung zu verbessern. Studieren Sie die Beispielcode-Liste für den vollständigen Kontext.

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
