---
title: GPURenderBundleEncoder
slug: Web/API/GPURenderBundleEncoder
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPURenderBundleEncoder`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) wird verwendet, um Bündel von Kommandos voraufzuzeichnen.

Die Befehlsbündel werden durch Aufrufen der Methoden von `GPURenderBundleEncoder` kodiert; sobald die gewünschten Befehle kodiert wurden, werden sie mit der Methode [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) in eine [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)-Objektinstanz aufgezeichnet. Diese Render-Bundles können dann in mehreren Render-Pässen wiederverwendet werden, indem die `GPURenderBundle`-Objekte in Aufrufen von [`GPURenderPassEncoder.executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) übergeben werden.

Effektiv ist dies wie ein teilweiser Render-Pass — `GPURenderBundleEncoder`s verfügen über alle dieselben Funktionen wie [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Objekte, außer dass sie keine Occlusion Queries beginnen und beenden können und nicht in der Lage sind, das Scherrechteck, die Viewport-Einstellungen, die Mischkonstante und die Stencil-Referenz festzulegen. Das `GPURenderBundle` erbt alle diese Werte von dem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder), der es ausführt.

> [!NOTE]
> Aktuell werden vor dem Ausführen eines Render-Bundles und nachdem das Render-Bundle ausgeführt wurde alle gesetzten Vertex-Buffer, Index-Buffer, Bind-Gruppen und Pipelines gelöscht.

Das Wiederverwenden vorcodierter Befehle kann die Leistung einer Anwendung erheblich verbessern, insbesondere in Situationen, in denen der JavaScript-Zeichenaufruf-Overhead ein Engpass ist. Render-Bundles sind am effektivsten in Situationen, in denen eine Gruppe von Objekten auf dieselbe Weise über mehrere Ansichten oder Frames hinweg gezeichnet wird, wobei der einzige Unterschied der verwendete Buffer-Inhalt ist (z. B. aktualisierte Matrix-Uniformen). Ein gutes Beispiel ist das VR-Rendering. Das Aufzeichnen des Renderings als Render-Bundle und dann die Anpassung der View-Matrix und deren Wiedergabe für jedes Auge ist eine effizientere Möglichkeit, Zeichenaufrufe für beide Renderings der Szene auszugeben.

Ein `GPURenderBundleEncoder`-Objekt wird über die [`GPUDevice.createRenderBundleEncoder()`](/de/docs/Web/API/GPUDevice/createRenderBundleEncoder)-Eigenschaft erstellt.

> [!NOTE]
> Die Methoden von `GPURenderBundleEncoder` sind funktional identisch mit ihren Entsprechungen, die bei [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) verfügbar sind, außer für [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish), das in Zweck ähnlich zu [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) ist.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`label`](/de/docs/Web/API/GPURenderBundleEncoder/label) {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.

## Instanz-Methoden

- [`draw()`](/de/docs/Web/API/GPURenderBundleEncoder/draw) {{Experimental_Inline}}
  - : Zeichnet Primitiven basierend auf den von [`setVertexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setVertexBuffer) bereitgestellten Vertex-Buffer.
- [`drawIndexed()`](/de/docs/Web/API/GPURenderBundleEncoder/drawIndexed) {{Experimental_Inline}}
  - : Zeichnet indizierte Primitiven basierend auf den von [`setVertexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setVertexBuffer) und [`setIndexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setIndexBuffer) bereitgestellten Vertex- und Index-Buffer.
- [`drawIndirect()`](/de/docs/Web/API/GPURenderBundleEncoder/drawIndirect) {{Experimental_Inline}}
  - : Zeichnet Primitiven unter Verwendung von Parametern, die aus einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) gelesen werden.
- [`drawIndexedIndirect()`](/de/docs/Web/API/GPURenderBundleEncoder/drawIndexedIndirect) {{Experimental_Inline}}

  - : Zeichnet indizierte Primitiven unter Verwendung von Parametern, die aus einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) gelesen werden.

- [`finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) {{Experimental_Inline}}

  - : Vervollständigt die Aufzeichnung der aktuellen Render-Pass-Befehlssequenz.

- [`insertDebugMarker()`](/de/docs/Web/API/GPURenderBundleEncoder/insertDebugMarker) {{Experimental_Inline}}
  - : Markiert einen bestimmten Punkt in einer Reihe von kodierten Befehlen mit einem Label.
- [`popDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/popDebugGroup) {{Experimental_Inline}}
  - : Beendet eine Debug-Gruppe, die mit einem [`pushDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/pushDebugGroup)-Aufruf begonnen wurde.
- [`pushDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/pushDebugGroup) {{Experimental_Inline}}
  - : Beginnt eine Debug-Gruppe, die mit einem spezifischen Label markiert wird und alle nachfolgenden kodierten Befehle bis zum Aufruf einer [`popDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/popDebugGroup)-Methode enthalten wird.
- [`setBindGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/setBindGroup) {{Experimental_Inline}}

  - : Legt die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) fest, die für nachfolgende Render-Bundle-Befehle für einen bestimmten Index verwendet werden soll.

- [`setIndexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setIndexBuffer) {{Experimental_Inline}}

  - : Setzt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der Indexdaten für nachfolgende Zeichenbefehle bereitstellen wird.

- [`setPipeline()`](/de/docs/Web/API/GPURenderBundleEncoder/setPipeline) {{Experimental_Inline}}

  - : Legt die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) fest, die für dieses Render-Bundle verwendet werden soll.

- [`setVertexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setVertexBuffer) {{Experimental_Inline}}
  - : Setzt oder entfernt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der Vertex-Daten für nachfolgende Zeichenbefehle bereitstellen wird.

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

Später wird ein `GPURenderBundleEncoder` erstellt, die Funktion wird aufgerufen und das Befehlsbündel wird mit [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) in ein [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle) aufgezeichnet:

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
});
recordRenderPass(renderBundleEncoder);
const renderBundle = renderBundleEncoder.finish();
```

[`GPURenderPassEncoder.executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) wird dann verwendet, um die Arbeit über mehrere Render-Pässe hinweg zur Verbesserung der Leistung wiederzuverwenden. Studieren Sie das Beispiel-Codeverzeichnis für den vollständigen Kontext.

```js
// ...

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

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
