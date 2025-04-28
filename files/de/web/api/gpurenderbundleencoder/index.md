---
title: GPURenderBundleEncoder
slug: Web/API/GPURenderBundleEncoder
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPURenderBundleEncoder`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) wird verwendet, um Bündel von Befehlen vorab aufzuzeichnen.

Die Befehlsbündel werden durch Aufrufen der Methoden von `GPURenderBundleEncoder` kodiert; sobald die gewünschten Befehle kodiert wurden, werden sie in eine [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)-Objektinstanz mithilfe der Methode [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) aufgezeichnet. Diese Render-Bündel können dann über mehrere Render-Durchläufe hinweg wiederverwendet werden, indem die `GPURenderBundle`-Objekte in Aufrufe von [`GPURenderPassEncoder.executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) übergeben werden.

Im Grunde ist dies wie ein Teil-Render-Durchlauf — `GPURenderBundleEncoder` hat alle dieselben Funktionalitäten verfügbar wie [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)s, mit der Ausnahme, dass sie keine Okklusionsabfragen beginnen und beenden können und nicht die Schererekt, den Viewport, die Mischkonstante und die Stencil-Referenz setzen können. Das `GPURenderBundle` erbt all diese Werte von dem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder), der es ausführt.

> [!NOTE]
> Aktuell werden festgelegte Vertex-Puffer, Index-Puffer, Bind-Gruppen und -Pipelines alle gelöscht, bevor ein Render-Bündel ausgeführt wird und nachdem das Render-Bündel die Ausführung beendet hat.

Das Wiederverwenden vorab aufgezeichneter Befehle kann die Leistung einer App erheblich verbessern, insbesondere in Situationen, in denen der JavaScript-Aufruf-Overhead ein Engpass ist. Render-Bündel sind am effektivsten in Situationen, in denen eine Reihe von Objekten auf die gleiche Weise über mehrere Ansichten oder Frames hinweg gezeichnet wird, wobei die einzigen Unterschiede in den verwendeten Pufferinhalten liegen (z. B. aktualisierte Matrix-Uniformen). Ein gutes Beispiel ist das VR-Rendering. Das Aufzeichnen des Renderings als Render-Bündel und dann Anpassen der Ansichts-Matrix und Wiedergeben für jedes Auge ist eine effizientere Möglichkeit, Aufrufbefehle für beide Renderings der Szene zu erteilen.

Eine `GPURenderBundleEncoder`-Objektinstanz wird über die Eigenschaft [`GPUDevice.createRenderBundleEncoder()`](/de/docs/Web/API/GPUDevice/createRenderBundleEncoder) erstellt.

> [!NOTE]
> Die Methoden von `GPURenderBundleEncoder` sind funktional identisch mit ihren Äquivalenten, die auf [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) verfügbar sind, mit Ausnahme von [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish), das in seiner Funktionalität dem [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) ähnlich ist.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`label`](/de/docs/Web/API/GPURenderBundleEncoder/label) {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, z. B. in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

## Instanzmethoden

- [`draw()`](/de/docs/Web/API/GPURenderBundleEncoder/draw) {{Experimental_Inline}}
  - : Zeichnet Primitiven basierend auf den von [`setVertexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setVertexBuffer) bereitgestellten Vertex-Puffern.
- [`drawIndexed()`](/de/docs/Web/API/GPURenderBundleEncoder/drawIndexed) {{Experimental_Inline}}
  - : Zeichnet indizierte Primitiven basierend auf den von [`setVertexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setVertexBuffer) und [`setIndexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setIndexBuffer) bereitgestellten Vertex- und Index-Puffern.
- [`drawIndirect()`](/de/docs/Web/API/GPURenderBundleEncoder/drawIndirect) {{Experimental_Inline}}
  - : Zeichnet Primitiven unter Verwendung von Parametern, die aus einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) gelesen werden.
- [`drawIndexedIndirect()`](/de/docs/Web/API/GPURenderBundleEncoder/drawIndexedIndirect) {{Experimental_Inline}}

  - : Zeichnet indizierte Primitiven unter Verwendung von Parametern, die aus einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) gelesen werden.

- [`finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) {{Experimental_Inline}}

  - : Komplette Aufzeichnung der derzeitigen Render-Durchlauf-Befehlssequenz.

- [`insertDebugMarker()`](/de/docs/Web/API/GPURenderBundleEncoder/insertDebugMarker) {{Experimental_Inline}}
  - : Markiert einen spezifischen Punkt in einer Serie kodierter Befehle mit einem Label.
- [`popDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/popDebugGroup) {{Experimental_Inline}}
  - : Beendet eine Debug-Gruppe, die mit einem Aufruf von [`pushDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/pushDebugGroup) begonnen wurde.
- [`pushDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/pushDebugGroup) {{Experimental_Inline}}
  - : Beginnt eine Debug-Gruppe, die mit einem bestimmten Label markiert ist und alle nachfolgenden kodierten Befehle enthalten wird, bis eine [`popDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/popDebugGroup)-Methode aufgerufen wird.
- [`setBindGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/setBindGroup) {{Experimental_Inline}}

  - : Setzt die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) zur Verwendung für nachfolgende Render-Bündel-Befehle, für einen gegebenen Index.

- [`setIndexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setIndexBuffer) {{Experimental_Inline}}

  - : Setzt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der Indexdaten für nachfolgende Zeichenbefehle bereitstellen wird.

- [`setPipeline()`](/de/docs/Web/API/GPURenderBundleEncoder/setPipeline) {{Experimental_Inline}}

  - : Setzt die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline), die für dieses Render-Bündel verwendet werden soll.

- [`setVertexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setVertexBuffer) {{Experimental_Inline}}
  - : Setzt oder hebt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) auf, der Vertex-Daten für nachfolgende Zeichenbefehle bereitstellen wird.

## Beispiele

Im WebGPU Samples [Animometer-Beispiel](https://webgpu.github.io/webgpu-samples/samples/animometer/) werden viele gleiche Operationen gleichzeitig an vielen verschiedenen Objekten durchgeführt. Ein Bündel von Befehlen wird mit der folgenden Funktion kodiert:

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

Später wird ein `GPURenderBundleEncoder` erstellt, die Funktion wird aufgerufen und das Befehlsbündel wird in eine [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle) mithilfe von [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) aufgezeichnet:

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
});
recordRenderPass(renderBundleEncoder);
const renderBundle = renderBundleEncoder.finish();
```

Es wird dann [`GPURenderPassEncoder.executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) verwendet, um die Arbeit über mehrere Render-Durchläufe hinweg wiederzuverwenden, um die Leistung zu verbessern. Untersuchen Sie die Beispiel-Codeauflistung für den vollständigen Kontext.

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
