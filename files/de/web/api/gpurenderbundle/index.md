---
title: GPURenderBundle
slug: Web/API/GPURenderBundle
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPURenderBundle`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert einen Container für voraufgezeichnete Bündel von Befehlen.

Die Befehlsbündel werden mit einem [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) kodiert; sobald die gewünschten Befehle kodiert wurden, werden sie in eine `GPURenderBundle`-Objektinstanz mit der Methode [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) aufgezeichnet.

Diese Befehlsbündel können dann in mehreren Render-Passes wiederverwendet werden, indem die `GPURenderBundle`-Objekte in Aufrufe von [`GPURenderPassEncoder.executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) übergeben werden. Die Wiederverwendung von voraufgezeichneten Befehlen kann die App-Leistung erheblich verbessern, insbesondere in Situationen, in denen die JavaScript-Zeichenaufrufe einen Engpass darstellen. Render-Bundles sind am effektivsten in Situationen, in denen eine Reihe von Objekten auf die gleiche Weise über mehrere Ansichten oder Frames hinweg gezeichnet wird, wobei die einzigen Unterschiede die verwendeten Pufferinhalte sind (beispielsweise aktualisierte Matrix-Uniformen).

Ein gutes Beispiel ist das VR-Rendering. Das Rendern als Render-Bundle aufzuzeichnen und dann die Ansichtsmatrix anzupassen und es für jedes Auge erneut abzuspielen, ist eine effizientere Methode, Zeichenaufrufe für beide Rendervorgänge der Szene auszuführen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`label`](/de/docs/Web/API/GPURenderBundle/label)
  - : Ein Zeichenkettenwert, der ein Label bereitstellt, das verwendet werden kann, um das Objekt beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen zu identifizieren.

## Beispiele

Im WebGPU-Beispiele [Animometer-Beispiel](https://webgpu.github.io/webgpu-samples/samples/animometer/) werden viele ähnliche Operationen gleichzeitig auf vielen unterschiedlichen Objekten ausgeführt. Ein Render-Bundle wird mit der folgenden Funktion kodiert:

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

Später wird ein [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) erstellt, die Funktion aufgerufen und das Render-Bundle mit [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) aufgezeichnet:

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
});
recordRenderPass(renderBundleEncoder);
const renderBundle = renderBundleEncoder.finish();
```

[`GPURenderPassEncoder.executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) wird dann verwendet, um die Arbeit über mehrere Render-Passes hinweg wiederzuverwenden, um die Leistung zu verbessern. Untersuchen Sie die Beispiel-Codeauflistung für den vollständigen Kontext.

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
