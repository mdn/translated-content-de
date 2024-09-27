---
title: GPURenderBundleEncoder
slug: Web/API/GPURenderBundleEncoder
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPURenderBundleEncoder`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) wird verwendet, um Bündel von Befehlen vorab aufzuzeichnen.

Die Befehlsbündel werden durch Aufrufen der Methoden von `GPURenderBundleEncoder` codiert; sobald die gewünschten Befehle codiert sind, werden sie mit der Methode [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) in eine [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)-Objektinstanz aufgezeichnet. Diese Render-Bündel können dann über mehrere Render-Pässe hinweg wiederverwendet werden, indem die `GPURenderBundle`-Objekte in die Aufrufe von [`GPURenderPassEncoder.executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) übergeben werden.

Im Wesentlichen ist dies wie ein partieller Render-Pass – `GPURenderBundleEncoder`s haben die gleichen Funktionalitäten wie [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)s, außer dass sie keine Occulsion-Abfragen beginnen und beenden können und nicht das Scherenrechteck, den Viewport, die Mischkonstante und die Stencil-Referenz einstellen können. Das `GPURenderBundle` erbt alle diese Werte vom [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder), der es ausführt.

> [!NOTE]
> Derzeit werden aktuell gesetzte Vertex-Puffer, Index-Puffer, Bind-Gruppen und Pipelines alle vor der Ausführung eines Render-Bündels und nachdem das Render-Bündel die Ausführung abgeschlossen hat, gelöscht.

Die Wiederverwendung vorab aufgezeichneter Befehle kann die Leistung der App erheblich verbessern, insbesondere in Situationen, in denen der Overhead von JavaScript-Zeichenaufrufen als Flaschenhals wirkt. Render-Bündel sind besonders effektiv in Situationen, in denen eine Reihe von Objekten auf dieselbe Weise über mehrere Ansichten oder Frames hinweg gezeichnet wird, wobei die einzigen Unterschiede der verwendete Pufferinhalt sind (wie beispielsweise aktualisierte Matrix-Uniformen). Ein gutes Beispiel ist das VR-Rendering. Die Aufzeichnung des Renderings als Render-Bündel und anschließend die Anpassung der Ansichts-Matrix und die Wiedergabe für jedes Auge ist eine effizientere Methode, um Zeichenaufrufe für beide Renderings der Szene auszuführen.

Ein `GPURenderBundleEncoder`-Objektinstanz wird über die Eigenschaft [`GPUDevice.createRenderBundleEncoder()`](/de/docs/Web/API/GPUDevice/createRenderBundleEncoder) erstellt.

> [!NOTE]
> Die Methoden von `GPURenderBundleEncoder` sind funktional identisch mit ihren Entsprechungen auf [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder), mit Ausnahme von [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish), das in seiner Zweckbestimmung `GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) ähnlich ist.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`label`](/de/docs/Web/API/GPURenderBundleEncoder/label) {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, das zum Identifizieren des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

## Instanz-Methoden

- [`draw()`](/de/docs/Web/API/GPURenderBundleEncoder/draw) {{Experimental_Inline}}
  - : Zeichnet Primitiven basierend auf den durch [`setVertexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setVertexBuffer) bereitgestellten Vertex-Puffern.
- [`drawIndexed()`](/de/docs/Web/API/GPURenderBundleEncoder/drawIndexed) {{Experimental_Inline}}
  - : Zeichnet indizierte Primitiven basierend auf den durch [`setVertexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setVertexBuffer) und [`setIndexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setIndexBuffer) bereitgestellten Vertex- und Index-Puffern.
- [`drawIndirect()`](/de/docs/Web/API/GPURenderBundleEncoder/drawIndirect) {{Experimental_Inline}}
  - : Zeichnet Primitiven unter Verwendung von Parametern, die aus einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) gelesen werden.
- [`drawIndexedIndirect()`](/de/docs/Web/API/GPURenderBundleEncoder/drawIndexedIndirect) {{Experimental_Inline}}

  - : Zeichnet indizierte Primitiven unter Verwendung von Parametern, die aus einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) gelesen werden.

- [`finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) {{Experimental_Inline}}

  - : Schließt die Aufzeichnung der aktuellen Render-Pass-Befehlssequenz ab.

- [`insertDebugMarker()`](/de/docs/Web/API/GPURenderBundleEncoder/insertDebugMarker) {{Experimental_Inline}}
  - : Markiert einen bestimmten Punkt in einer Serie von codierten Befehlen mit einem Label.
- [`popDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/popDebugGroup) {{Experimental_Inline}}
  - : Beendet eine Debug-Gruppe, die mit einem [`pushDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/pushDebugGroup)-Aufruf begonnen wurde.
- [`pushDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/pushDebugGroup) {{Experimental_Inline}}
  - : Beginnt eine Debug-Gruppe, die mit einem angegebenen Label markiert ist und alle darauf folgenden codierten Befehle bis zur Auslösung einer [`popDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/popDebugGroup)-Methode enthält.
- [`setBindGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/setBindGroup) {{Experimental_Inline}}

  - : Setzt die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), die für nachfolgende Render-Bündelbefehle bei einem bestimmten Index verwendet werden soll.

- [`setIndexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setIndexBuffer) {{Experimental_Inline}}

  - : Setzt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der Indizierungsdaten für nachfolgende Zeichnungsbefehle bereitstellt.

- [`setPipeline()`](/de/docs/Web/API/GPURenderBundleEncoder/setPipeline) {{Experimental_Inline}}

  - : Setzt die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline), die für dieses Render-Bündel verwendet werden soll.

- [`setVertexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setVertexBuffer) {{Experimental_Inline}}
  - : Setzt oder entfernt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der Vertex-Daten für nachfolgende Zeichnungsbefehle bereitstellt.

## Beispiele

Im WebGPU-Beispiel [Animometer example](https://webgpu.github.io/webgpu-samples/samples/animometer/) werden gleichzeitig viele ähnliche Operationen auf unterschiedlichen Objekten ausgeführt. Ein Befehlsbündel wird mit der folgenden Funktion kodiert:

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

Später wird ein `GPURenderBundleEncoder` erstellt, die Funktion aufgerufen und das Befehlsbündel in ein [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle) mit [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) aufgezeichnet:

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
});
recordRenderPass(renderBundleEncoder);
const renderBundle = renderBundleEncoder.finish();
```

[`GPURenderPassEncoder.executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) wird dann verwendet, um die Arbeit über mehrere Render-Pässe hinweg wiederzuverwenden und die Leistung zu verbessern. Untersuchen Sie das Beispielcode-Listing für den vollständigen Kontext.

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
