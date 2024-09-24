---
title: GPURenderBundle
slug: Web/API/GPURenderBundle
l10n:
  sourceCommit: cf331ccff0dd88648dc9fe22a14f9aaa595ec4bf
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`GPURenderBundle`**-Interface der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} repräsentiert einen Container für vorab aufgenommene Befehlsbündel.

Die Befehlsbündel werden unter Verwendung eines {{domxref("GPURenderBundleEncoder")}} kodiert; sobald die gewünschten Befehle kodiert wurden, werden sie mithilfe der Methode {{domxref("GPURenderBundleEncoder.finish()")}} in einer `GPURenderBundle`-Objektinstanz aufgezeichnet.

Diese Befehlsbündel können dann über mehrere Render-Passagen hinweg wiederverwendet werden, indem die `GPURenderBundle`-Objekte in {{domxref("GPURenderPassEncoder.executeBundles()")}}-Aufrufen übergeben werden. Die Wiederverwendung von vorab kodierten Befehlen kann die Anwendungsleistung signifikant verbessern, insbesondere in Situationen, in denen der Overhead von JavaScript-Zeichenaufrufen eine Engstelle darstellt. Render-Bundles sind am effektivsten in Situationen, in denen eine Gruppe von Objekten auf dieselbe Weise über mehrere Ansichten oder Frames gezeichnet wird, wobei die einzigen Unterschiede die verwendeten Pufferinhalte sind (wie aktualisierte Matrix-Uniformen).

Ein gutes Beispiel ist das VR-Rendering. Das Aufzeichnen des Renderings als Render-Bundle und dann das Anpassen der View-Matrix und das Wiederholen für jedes Auge ist eine effizientere Möglichkeit, Zeichenaufrufe für beide Renderings der Szene auszugeben.

{{InheritanceDiagram}}

## Instanzeigenschaften

- {{domxref("GPURenderBundle.label", "label")}} {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, das zur Identifikation des Objekts verwendet werden kann, beispielsweise in {{domxref("GPUError")}}-Nachrichten oder Konsolenwarnungen.

## Beispiele

Im WebGPU-Samples [Animometer-Beispiel](https://webgpu.github.io/webgpu-samples/samples/animometer/), werden viele ähnliche Operationen gleichzeitig an vielen verschiedenen Objekten ausgeführt. Ein Render-Bundle wird mit der folgenden Funktion kodiert:

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

Später wird ein {{domxref("GPURenderBundleEncoder")}} erstellt, die Funktion aufgerufen und das Render-Bundle mit {{domxref("GPURenderBundleEncoder.finish()")}} aufgezeichnet:

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
});
recordRenderPass(renderBundleEncoder);
const renderBundle = renderBundleEncoder.finish();
```

{{domxref("GPURenderPassEncoder.executeBundles()")}} wird dann verwendet, um die Arbeit über mehrere Render-Passagen hinweg wiederzuverwenden, um die Leistung zu verbessern. Untersuchen Sie die Beispielcode-Listung für den vollständigen Kontext.

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
