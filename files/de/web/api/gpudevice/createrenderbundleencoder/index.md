---
title: "GPUDevice: createRenderBundleEncoder() Methode"
short-title: createRenderBundleEncoder()
slug: Web/API/GPUDevice/createRenderBundleEncoder
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createRenderBundleEncoder()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt ein [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder), das verwendet werden kann, um Bündel von Befehlen vorab aufzuzeichnen. Diese können in [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)s über die [`executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles)-Methode beliebig oft wiederverwendet werden.

## Syntax

```js-nolint
createRenderBundleEncoder(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `colorFormats`
      - : Ein Array von Aufzählungswerten, das die erwarteten Farbformate für Renderziele angibt. Mögliche Werte finden Sie in der [`GPUTextureFormat`-Definition](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) in der Spezifikation.
    - `depthReadOnly` {{optional_inline}}
      - : Ein Boolean. Wenn `true`, wird angegeben, dass das Ausführen eines von dem [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) erstellten [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle) die Tiefenkomponente des `depthStencilFormat` beim Ausführen nicht ändern wird. Wenn weggelassen, wird `depthReadOnly` standardmäßig auf `false` gesetzt.
    - `depthStencilFormat` {{optional_inline}}
      - : Ein Aufzählungswert, der das erwartete Tiefen- oder Stencil-Format für Renderziele angibt. Mögliche Werte finden Sie im Abschnitt [Tiefen-Stencil-Formate](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) der Spezifikation.
    - `label` {{optional_inline}}
      - : Eine Zeichenkette, die ein Label angibt, das zum Identifizieren des Objekts verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `sampleCount` {{optional_inline}}
      - : Eine Zahl, die die erwartete Stichprobenanzahl für Renderziele darstellt.
    - `stencilReadOnly` {{optional_inline}}
      - : Ein Boolean. Wenn `true`, wird angegeben, dass das Ausführen eines von dem [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) erstellten [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle) die Stencil-Komponente des `depthStencilFormat` beim Ausführen nicht ändern wird. Wenn weggelassen, wird `stencilReadOnly` standardmäßig auf `false` gesetzt.

### Rückgabewert

Eine [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Objektinstanz.

## Beispiele

Im WebGPU Samples [Animometer-Beispiel](https://webgpu.github.io/webgpu-samples/samples/animometer/) werden zahlreiche ähnliche Operationen gleichzeitig an vielen verschiedenen Objekten durchgeführt. Ein Befehlsbündel wird mit der folgenden Funktion codiert:

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

Später wird ein [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) mit `createRenderBundleEncoder()` erstellt, die Funktion wird aufgerufen, und das Befehlsbündel wird in ein [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle) mit [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) aufgezeichnet:

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
});
recordRenderPass(renderBundleEncoder);
const renderBundle = renderBundleEncoder.finish();
```

[`GPURenderPassEncoder.executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) wird dann verwendet, um die Arbeit über mehrere Render-Pässe hinweg wiederzuverwenden, um die Leistung zu verbessern. Untersuchen Sie die Beispielcode-Auflistung für den vollständigen Kontext.

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
