---
title: GPURenderBundleEncoder
slug: Web/API/GPURenderBundleEncoder
l10n:
  sourceCommit: da1da9061042da9f616b8621cada4f452545700a
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPURenderBundleEncoder`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) wird verwendet, um Befehlsbündel vorab aufzuzeichnen.

Die Befehlsbündel werden durch Aufrufe der Methoden von `GPURenderBundleEncoder` kodiert. Sobald die gewünschten Befehle kodiert sind, werden sie mit der Methode [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) in einer [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)-Objektinstanz aufgezeichnet. Diese Render-Bündel können anschließend in mehreren Render-Durchläufen wiederverwendet werden, indem die `GPURenderBundle`-Objekte an Aufrufe von [`GPURenderPassEncoder.executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) übergeben werden.

Im Grunde entspricht dies einem teilweisen Render-Durchlauf: `GPURenderBundleEncoder`-Instanzen bieten dieselben Funktionen wie [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Instanzen. Sie können jedoch keine Occlusion-Queries beginnen oder beenden und weder Scissor-Rechteck noch Viewport, Blend-Konstante oder Stencil-Referenz festlegen. Das `GPURenderBundle` übernimmt all diese Werte von dem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder), der es ausführt.

> [!NOTE]
> Aktuell festgelegte Vertex-Buffer, Index-Buffer, Bind-Gruppen und die Pipeline werden sowohl vor der Ausführung eines Render-Bündels als auch nach dessen Ausführung zurückgesetzt.

Die Wiederverwendung vorab aufgezeichneter Befehle kann die Leistung einer Anwendung erheblich verbessern, wenn der Overhead von JavaScript-Zeichenaufrufen einen Engpass darstellt. Render-Bündel sind besonders effektiv, wenn eine Gruppe von Objekten über mehrere Ansichten oder Frames hinweg auf dieselbe Weise gezeichnet wird und sich lediglich der verwendete Buffer-Inhalt unterscheidet, etwa durch aktualisierte Matrix-Uniforms. Ein gutes Beispiel ist VR-Rendering: Das Rendering als Render-Bündel aufzuzeichnen, dann die Ansichtsmatrix anzupassen und das Bündel für jedes Auge erneut auszuführen, ist eine effizientere Möglichkeit, Zeichenaufrufe für beide Darstellungen der Szene auszugeben.

Eine `GPURenderBundleEncoder`-Objektinstanz wird über die Methode [`GPUDevice.createRenderBundleEncoder()`](/de/docs/Web/API/GPUDevice/createRenderBundleEncoder) erstellt.

> [!NOTE]
> Die Methoden von `GPURenderBundleEncoder` sind funktional identisch mit ihren Entsprechungen auf [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder). Eine Ausnahme ist [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish), dessen Zweck dem von [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) ähnelt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`label`](/de/docs/Web/API/GPURenderBundleEncoder/label)
  - : Ein String mit einer Bezeichnung, anhand derer das Objekt beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen identifiziert werden kann.

## Instanzmethoden

- [`draw()`](/de/docs/Web/API/GPURenderBundleEncoder/draw)
  - : Zeichnet Primitive auf Grundlage der mit [`setVertexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setVertexBuffer) bereitgestellten Vertex-Buffer.
- [`drawIndexed()`](/de/docs/Web/API/GPURenderBundleEncoder/drawIndexed)
  - : Zeichnet indizierte Primitive auf Grundlage der mit [`setVertexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setVertexBuffer) und [`setIndexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setIndexBuffer) bereitgestellten Vertex- und Index-Buffer.
- [`drawIndirect()`](/de/docs/Web/API/GPURenderBundleEncoder/drawIndirect)
  - : Zeichnet Primitive anhand von Parametern, die aus einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) gelesen werden.
- [`drawIndexedIndirect()`](/de/docs/Web/API/GPURenderBundleEncoder/drawIndexedIndirect)
  - : Zeichnet indizierte Primitive anhand von Parametern, die aus einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) gelesen werden.

- [`finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish)
  - : Schließt die Aufzeichnung der aktuellen Befehlsfolge für den Render-Durchlauf ab.

- [`insertDebugMarker()`](/de/docs/Web/API/GPURenderBundleEncoder/insertDebugMarker)
  - : Markiert eine bestimmte Stelle in einer Folge kodierter Befehle mit einer Bezeichnung.
- [`popDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/popDebugGroup)
  - : Beendet eine Debug-Gruppe, die mit einem Aufruf von [`pushDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/pushDebugGroup) begonnen wurde.
- [`pushDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/pushDebugGroup)
  - : Beginnt eine Debug-Gruppe mit einer angegebenen Bezeichnung. Sie enthält alle nachfolgenden kodierten Befehle, bis die Methode [`popDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/popDebugGroup) aufgerufen wird.
- [`setBindGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/setBindGroup)
  - : Legt für einen bestimmten Index die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) fest, die für nachfolgende Render-Bündel-Befehle verwendet wird.

- [`setIndexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setIndexBuffer)
  - : Legt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) fest, der Indexdaten für nachfolgende Zeichenbefehle bereitstellt.

- [`setPipeline()`](/de/docs/Web/API/GPURenderBundleEncoder/setPipeline)
  - : Legt die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) fest, die für dieses Render-Bündel verwendet wird.

- [`setVertexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setVertexBuffer)
  - : Legt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der Vertex-Daten für nachfolgende Zeichenbefehle bereitstellt, fest oder hebt seine Festlegung auf.

## Beispiele

Im [Animometer-Beispiel](https://webgpu.github.io/webgpu-samples/samples/animometer/) der WebGPU Samples werden viele gleichartige Operationen gleichzeitig auf zahlreichen verschiedenen Objekten ausgeführt. Mit der folgenden Funktion wird ein Befehlsbündel kodiert:

```js
// passEncoder is a GPURenderBundleEncoder or a GPURenderPassEncoder
function recordRenderPass(passEncoder) {
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

Später wird ein `GPURenderBundleEncoder` erstellt, die Funktion aufgerufen und das Befehlsbündel mit [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) in einem [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle) aufgezeichnet:

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
});
recordRenderPass(renderBundleEncoder);
const renderBundle = renderBundleEncoder.finish();
```

Anschließend wird [`GPURenderPassEncoder.executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) verwendet, um die Arbeit über mehrere Render-Durchläufe hinweg wiederzuverwenden und so die Leistung zu verbessern. Den vollständigen Zusammenhang zeigt der Quellcode des Beispiels.

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
