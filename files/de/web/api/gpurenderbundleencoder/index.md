---
title: GPURenderBundleEncoder
slug: Web/API/GPURenderBundleEncoder
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`GPURenderBundleEncoder`**-Schnittstelle der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} wird verwendet, um Bündel von Befehlen vorab aufzuzeichnen.

Die Befehlsbündel werden codiert, indem die Methoden des `GPURenderBundleEncoder` aufgerufen werden; sobald die gewünschten Befehle codiert wurden, werden sie mithilfe der Methode {{domxref("GPURenderBundleEncoder.finish()")}} in eine {{domxref("GPURenderBundle")}}-Objektinstanz aufgenommen. Diese Render-Bündel können dann über mehrere Render-Passagen hinweg wiederverwendet werden, indem die `GPURenderBundle`-Objekte in {{domxref("GPURenderPassEncoder.executeBundles()")}}-Aufrufen übergeben werden.

Im Wesentlichen ist dies wie eine Teil-Render-Passage — `GPURenderBundleEncoder`s haben alle dieselben Funktionen wie {{domxref("GPURenderPassEncoder")}}s, mit der Ausnahme, dass sie keine Okklusionsabfragen beginnen und beenden können und dass sie das Scherenrecht, die Sicht, die Blendkonstante und die Stencil-Referenz nicht setzen können. Die `GPURenderBundle` übernimmt alle diese Werte von dem {{domxref("GPURenderPassEncoder")}}, der sie ausführt.

> [!NOTE]
> Derzeit werden alle gesetzten Vertex-Puffer, Index-Puffer, Bind-Gruppen und Pipelines vor der Ausführung eines Render-Bündels und nachdem das Render-Bündel die Ausführung beendet hat, gelöscht.

Die Wiederverwendung vorab aufgezeichneter Befehle kann die Anwendungsleistung erheblich verbessern, wenn der JavaScript-Zeichenaufruf-Overhead ein Engpass ist. Render-Bündel sind am effektivsten in Situationen, in denen eine Charge von Objekten in mehreren Ansichten oder Rahmen auf die gleiche Weise gezeichnet wird, wobei die einzigen Unterschiede der verwendete Pufferspeicherinhalt sind (wie aktualisierte Matrixuniformen). Ein gutes Beispiel ist das VR-Rendering. Das Erfassen des Renderings als Render-Bündel und dann das Anpassen der Ansichts-Matrix und das Wiedergeben für jedes Auge ist eine effizientere Methode, um Zeichenaufrufe für beide Renderings der Szene auszugeben.

Eine `GPURenderBundleEncoder`-Objektinstanz wird über die {{domxref("GPUDevice.createRenderBundleEncoder()")}}-Eigenschaft erstellt.

> [!NOTE]
> Die Methoden von `GPURenderBundleEncoder` sind funktional identisch mit ihren Äquivalenten, die auf {{domxref("GPURenderPassEncoder")}} verfügbar sind, mit Ausnahme von {{domxref("GPURenderBundleEncoder.finish()")}}, das in Zweck ähnlich ist wie {{domxref("GPUCommandEncoder.finish()")}}.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("GPURenderBundleEncoder.label", "label")}} {{Experimental_Inline}}
  - : Ein Zeichenfolgenwert, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen.

## Instanz-Methoden

- {{domxref("GPURenderBundleEncoder.draw", "draw()")}} {{Experimental_Inline}}
  - : Zeichnet Primitiven basierend auf den durch {{domxref("GPURenderBundleEncoder.setVertexBuffer", "setVertexBuffer()")}} bereitgestellten Vertex-Puffern.
- {{domxref("GPURenderBundleEncoder.drawIndexed", "drawIndexed()")}} {{Experimental_Inline}}
  - : Zeichnet indizierte Primitiven basierend auf den durch {{domxref("GPURenderBundleEncoder.setVertexBuffer", "setVertexBuffer()")}} und {{domxref("GPURenderBundleEncoder.setIndexBuffer", "setIndexBuffer()")}} bereitgestellten Vertex- und Index-Puffern.
- {{domxref("GPURenderBundleEncoder.drawIndirect", "drawIndirect()")}} {{Experimental_Inline}}
  - : Zeichnet Primitiven unter Verwendung von Parametern, die aus einem {{domxref("GPUBuffer")}} gelesen werden.
- {{domxref("GPURenderBundleEncoder.drawIndexedIndirect", "drawIndexedIndirect()")}} {{Experimental_Inline}}

  - : Zeichnet indizierte Primitiven unter Verwendung von Parametern, die aus einem {{domxref("GPUBuffer")}} gelesen werden.

- {{domxref("GPURenderBundleEncoder.finish", "finish()")}} {{Experimental_Inline}}

  - : Beendet die Aufzeichnung der aktuellen Render-Pass-Befehlsequenz.

- {{domxref("GPURenderBundleEncoder.insertDebugMarker", "insertDebugMarker()")}} {{Experimental_Inline}}
  - : Markiert einen bestimmten Punkt in einer Serie codierter Befehle mit einem Label.
- {{domxref("GPURenderBundleEncoder.popDebugGroup", "popDebugGroup()")}} {{Experimental_Inline}}
  - : Beendet eine Debug-Gruppe, die mit einem {{domxref("GPURenderBundleEncoder.pushDebugGroup", "pushDebugGroup()")}}-Aufruf begonnen wird.
- {{domxref("GPURenderBundleEncoder.pushDebugGroup", "pushDebugGroup()")}} {{Experimental_Inline}}
  - : Beginnt eine Debug-Gruppe, die mit einem spezifischen Label markiert wird und alle nachfolgenden codierten Befehle enthält, bis eine {{domxref("GPURenderBundleEncoder.popDebugGroup", "popDebugGroup()")}}-Methode aufgerufen wird.
- {{domxref("GPURenderBundleEncoder.setBindGroup", "setBindGroup()")}} {{Experimental_Inline}}

  - : Setzt die {{domxref("GPUBindGroup")}}, die für nachfolgende Render-Bündel-Befehle für einen bestimmten Index verwendet werden soll.

- {{domxref("GPURenderBundleEncoder.setIndexBuffer", "setIndexBuffer()")}} {{Experimental_Inline}}

  - : Setzt den aktuellen {{domxref("GPUBuffer")}}, der Index-Daten für nachfolgende Zeichenbefehle bereitstellen wird.

- {{domxref("GPURenderBundleEncoder.setPipeline", "setPipeline()")}} {{Experimental_Inline}}

  - : Setzt die {{domxref("GPURenderPipeline")}}, die für dieses Render-Bündel verwendet werden soll.

- {{domxref("GPURenderBundleEncoder.setVertexBuffer", "setVertexBuffer()")}} {{Experimental_Inline}}
  - : Setzt oder entfernt den aktuellen {{domxref("GPUBuffer")}}, der Vertex-Daten für nachfolgende Zeichenbefehle bereitstellen wird.

## Beispiele

Im WebGPU-Beispiel [Animometer-Beispiel](https://webgpu.github.io/webgpu-samples/samples/animometer/) werden viele ähnliche Operationen an verschiedenen Objekten gleichzeitig durchgeführt. Ein Befehlsbündel wird mit der folgenden Funktion codiert:

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

Später wird ein `GPURenderBundleEncoder` erstellt, die Funktion wird aufgerufen und das Befehlsbündel wird mithilfe von {{domxref("GPURenderBundleEncoder.finish()")}} in eine {{domxref("GPURenderBundle")}} aufgezeichnet:

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
});
recordRenderPass(renderBundleEncoder);
const renderBundle = renderBundleEncoder.finish();
```

{{domxref("GPURenderPassEncoder.executeBundles()")}} wird dann verwendet, um die Arbeit über mehrere Render-Passagen hinweg wiederzuverwenden, um die Leistung zu verbessern. Studieren Sie die Beispiel-Code-Auflistung für den vollständigen Kontext.

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
