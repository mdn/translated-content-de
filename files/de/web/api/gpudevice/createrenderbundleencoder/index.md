---
title: "GPUDevice: createRenderBundleEncoder() Methode"
short-title: createRenderBundleEncoder()
slug: Web/API/GPUDevice/createRenderBundleEncoder
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createRenderBundleEncoder()`** Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice) Schnittstelle erstellt einen [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder), der verwendet werden kann, um Befehlssätze vorab aufzuzeichnen. Diese können im [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) über die [`executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) Methode beliebig oft wiederverwendet werden.

## Syntax

```js-nolint
createRenderBundleEncoder(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `colorFormats`
      - : Ein Array von aufgezählten Werten, das die erwarteten Farbformate für Renderziele angibt. Für mögliche Werte siehe die [`GPUTextureFormat` Definition](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) in der Spezifikation.
    - `depthReadOnly` {{optional_inline}}
      - : Ein boolescher Wert. Falls `true`, wird angegeben, dass das Ausführen eines durch den [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) erstellten [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle) nicht die Tiefenkomponente des `depthStencilFormat` beim Ausführen verändert. Falls weggelassen, ist `depthReadOnly` standardmäßig `false`.
    - `depthStencilFormat` {{optional_inline}}
      - : Ein aufgezählter Wert, der das erwartete Tiefen- oder Schablonenformat für Renderziele angibt. Für mögliche Werte siehe den Abschnitt [Depth-stencil formats](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) der Spezifikation.
    - `label` {{optional_inline}}
      - : Eine Zeichenkette, die ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError) Meldungen oder Konsolenwarnungen.
    - `sampleCount` {{optional_inline}}
      - : Eine Zahl, die die erwartete Abtastanzahl für Renderziele repräsentiert.
    - `stencilReadOnly` {{optional_inline}}
      - : Ein boolescher Wert. Falls `true`, wird angegeben, dass das Ausführen eines durch den [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) erstellten [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle) nicht die Schablonenkomponente des `depthStencilFormat` beim Ausführen verändert. Falls weggelassen, ist `stencilReadOnly` standardmäßig `false`.

### Rückgabewert

Ein [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) Objektinstanz.

## Beispiele

Im WebGPU Samples [Animometer Beispiel](https://webgpu.github.io/webgpu-samples/samples/animometer/) werden zahlreiche ähnliche Operationen gleichzeitig auf vielen verschiedenen Objekten durchgeführt. Ein Befehlssatz wird mit der folgenden Funktion kodiert:

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

Später wird ein [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) mit `createRenderBundleEncoder()` erstellt, die Funktion aufgerufen, und der Befehlssatz in ein [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle) mit [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) aufgezeichnet:

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
});
recordRenderPass(renderBundleEncoder);
const renderBundle = renderBundleEncoder.finish();
```

[`GPURenderPassEncoder.executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) wird dann verwendet, um die Arbeit über mehrere Renderdurchläufe hinweg wiederzuverwenden und die Leistung zu verbessern. Studieren Sie das Beispiel-Code-Listing für den vollständigen Kontext.

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
