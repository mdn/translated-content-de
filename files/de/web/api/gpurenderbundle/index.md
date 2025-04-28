---
title: GPURenderBundle
slug: Web/API/GPURenderBundle
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPURenderBundle`** Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) stellt einen Container für vorab aufgezeichnete Befehlsbündel dar.

Die Befehlsbündel werden mit einem [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) kodiert; sobald die gewünschten Befehle kodiert wurden, werden sie mit der Methode [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) in eine Instanz des `GPURenderBundle` Objekts aufgenommen.

Diese Befehlsbündel können dann über mehrere Render-Pässe hinweg wiederverwendet werden, indem die `GPURenderBundle` Objekte in Aufrufe von [`GPURenderPassEncoder.executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) übergeben werden. Die Wiederverwendung vorab aufgezeichneter Befehle kann die App-Performance erheblich verbessern, insbesondere in Situationen, in denen der Overhead von JavaScript-Zeichenaufrufen ein Engpass ist. Render-Bündel sind besonders effektiv, wenn ein Satz von Objekten auf die gleiche Weise über mehrere Ansichten oder Frames hinweg gezeichnet wird, wobei die einzigen Unterschiede im verwendeten Pufferinhalt liegen (wie z.B. aktualisierte Matrix-Uniformen).

Ein gutes Beispiel ist das VR-Rendering. Die Darstellung als Render-Bündel aufzuzeichnen und dann die View-Matrix anzupassen und für jedes Auge abzuspielen, ist eine effizientere Methode, um Zeichenaufrufe für beide Darstellungen der Szene auszuführen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`label`](/de/docs/Web/API/GPURenderBundle/label) {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError) Meldungen oder Konsolenwarnungen.

## Beispiele

Im WebGPU Samples [Animometer Beispiel](https://webgpu.github.io/webgpu-samples/samples/animometer/) werden viele ähnliche Operationen gleichzeitig an vielen verschiedenen Objekten durchgeführt. Ein Render-Bündel wird mit der folgenden Funktion kodiert:

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

Später wird ein [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) erstellt, die Funktion wird aufgerufen und das Render-Bündel wird mit [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) aufgezeichnet:

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
});
recordRenderPass(renderBundleEncoder);
const renderBundle = renderBundleEncoder.finish();
```

[`GPURenderPassEncoder.executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) wird dann verwendet, um die Arbeit über mehrere Render-Pässe hinweg wiederzuverwenden, um die Leistung zu verbessern. Studieren Sie die Beispiel-Code-Listung für den vollständigen Kontext.

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
