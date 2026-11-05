---
title: GPURenderBundle
slug: Web/API/GPURenderBundle
l10n:
  sourceCommit: da1da9061042da9f616b8621cada4f452545700a
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPURenderBundle`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) stellt einen Container für vorab aufgezeichnete Befehlsbündel dar.

Die Befehlsbündel werden mit einem [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) kodiert. Sobald die gewünschten Befehle kodiert sind, werden sie mit der Methode [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) in einer `GPURenderBundle`-Objektinstanz aufgezeichnet.

Diese Befehlsbündel können anschließend in mehreren Render-Durchläufen wiederverwendet werden, indem die `GPURenderBundle`-Objekte an Aufrufe von [`GPURenderPassEncoder.executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) übergeben werden. Die Wiederverwendung vorab aufgezeichneter Befehle kann die Leistung einer Anwendung erheblich verbessern, wenn der Overhead von JavaScript-Zeichenaufrufen einen Engpass darstellt. Render-Bundles sind besonders effektiv, wenn eine Gruppe von Objekten über mehrere Ansichten oder Frames hinweg auf dieselbe Weise gezeichnet wird und sich nur der verwendete Buffer-Inhalt unterscheidet (etwa aktualisierte Matrix-Uniforms).

Ein gutes Beispiel ist das VR-Rendering. Das Rendering als Render-Bundle aufzuzeichnen, anschließend die Ansichtsmatrix anzupassen und das Bundle für jedes Auge erneut auszuführen, ist eine effizientere Möglichkeit, die Zeichenaufrufe für beide Darstellungen der Szene auszuführen.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`label`](/de/docs/Web/API/GPURenderBundle/label)
  - : Ein String mit einer Bezeichnung, anhand derer das Objekt beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen identifiziert werden kann.

## Beispiele

Im [Animometer-Beispiel](https://webgpu.github.io/webgpu-samples/samples/animometer/) der WebGPU Samples werden viele gleichartige Operationen gleichzeitig an zahlreichen verschiedenen Objekten ausgeführt. Ein Render-Bundle wird mit der folgenden Funktion kodiert:

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

Später wird ein [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) erstellt, die Funktion aufgerufen und das Render-Bundle mit [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) aufgezeichnet:

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
});
recordRenderPass(renderBundleEncoder);
const renderBundle = renderBundleEncoder.finish();
```

Anschließend wird [`GPURenderPassEncoder.executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) verwendet, um die Arbeit über mehrere Render-Durchläufe hinweg wiederzuverwenden und so die Leistung zu verbessern. Den vollständigen Zusammenhang können Sie dem Code des Beispiels entnehmen.

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
