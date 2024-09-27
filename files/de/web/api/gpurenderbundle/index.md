---
title: GPURenderBundle
slug: Web/API/GPURenderBundle
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPURenderBundle`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) stellt einen Container für vorab aufgezeichnete Befehlssätze dar.

Die Befehlssätze werden mit einem [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) kodiert; sobald die gewünschten Befehle kodiert wurden, werden sie mit der Methode [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) in eine `GPURenderBundle`-Objektinstanz aufgenommen.

Diese Befehlssätze können dann über mehrere Render-Pässe hinweg wiederverwendet werden, indem die `GPURenderBundle`-Objekte in Aufrufen von [`GPURenderPassEncoder.executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) übergeben werden. Die Wiederverwendung von vorab aufgezeichneten Befehlen kann die Anwendungsleistung erheblich verbessern, insbesondere in Situationen, in denen der Overhead von JavaScript-Zeichenaufrufen eine Engstelle darstellt. Render-Bundles sind besonders effektiv in Situationen, in denen eine Gruppe von Objekten auf die gleiche Weise über mehrere Ansichten oder Frames hinweg gezeichnet wird, wobei sich nur der verwendete Pufferinhalt unterscheidet (wie aktualisierte Matrix-Uniformen).

Ein gutes Beispiel ist das VR-Rendering. Das Aufzeichnen des Renderings als Render-Bundle und dann das Anpassen der View-Matrix und das Wiederholen für jedes Auge ist eine effizientere Methode, um Zeichenaufrufe für beide Renderings der Szene auszuführen.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`label`](/de/docs/Web/API/GPURenderBundle/label) {{Experimental_Inline}}
  - : Ein String, der ein Label bietet, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.

## Beispiele

Im WebGPU-Beispiel von Samples [Animometer example](https://webgpu.github.io/webgpu-samples/samples/animometer/) werden viele Operationen gleichzeitig an vielen verschiedenen Objekten durchgeführt. Ein Render-Bundle wird mit der folgenden Funktion kodiert:

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

Später wird ein [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) erstellt, die Funktion wird aufgerufen und das Render-Bundle wird mit [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) aufgezeichnet:

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
});
recordRenderPass(renderBundleEncoder);
const renderBundle = renderBundleEncoder.finish();
```

[`GPURenderPassEncoder.executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) wird dann verwendet, um die Arbeit über mehrere Render-Pässe hinweg wiederzuverwenden und die Leistung zu verbessern. Studieren Sie die Beispiel-Code-Auflistung für den vollständigen Kontext.

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
