---
title: "GPUDevice: Methode createRenderBundleEncoder()"
short-title: createRenderBundleEncoder()
slug: Web/API/GPUDevice/createRenderBundleEncoder
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createRenderBundleEncoder()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt einen [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder), der verwendet werden kann, um Bündel von Befehlen vorab aufzuzeichnen. Diese können in [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)s über die [`executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles)-Methode beliebig oft wiederverwendet werden.

## Syntax

```js-nolint
createRenderBundleEncoder(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `colorFormats`
      - : Ein Array von enumerierten Werten, die die erwarteten Farbformate für Render-Ziele angeben. Mögliche Werte finden Sie in der [`GPUTextureFormat`-Definition](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) in der Spezifikation.
    - `depthReadOnly` {{optional_inline}}
      - : Ein Boolean. Wenn `true`, bedeutet dies, dass das Ausführen eines vom [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) erstellten [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle) die Tiefenkomponente des `depthStencilFormat` bei der Ausführung nicht modifizieren wird. Wenn weggelassen, wird `depthReadOnly` standardmäßig auf `false` gesetzt.
    - `depthStencilFormat` {{optional_inline}}
      - : Ein enumerierter Wert, der das erwartete Format für Tiefe- oder Stencil-Ziele angibt. Mögliche Werte finden Sie im Abschnitt [Depth-stencil formats](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) der Spezifikation.
    - `label` {{optional_inline}}
      - : Ein String, der eine Bezeichnung bereitstellt, die verwendet werden kann, um das Objekt zu identifizieren, z.B. in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `sampleCount` {{optional_inline}}
      - : Eine Zahl, die die erwartete Anzahl von Samples für Render-Ziele darstellt.
    - `stencilReadOnly` {{optional_inline}}
      - : Ein Boolean. Wenn `true`, bedeutet dies, dass das Ausführen eines vom [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) erstellten [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle) die Stencil-Komponente des `depthStencilFormat` bei der Ausführung nicht modifizieren wird. Wenn weggelassen, wird `stencilReadOnly` standardmäßig auf `false` gesetzt.

### Rückgabewert

Eine [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Objektinstanz.

## Beispiele

Im WebGPU-Samples [Animometer-Beispiel](https://webgpu.github.io/webgpu-samples/samples/animometer/) werden zahlreiche ähnliche Operationen an vielen verschiedenen Objekten gleichzeitig durchgeführt. Ein Bündel von Befehlen wird mit der folgenden Funktion kodiert:

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

Später wird ein [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) mit `createRenderBundleEncoder()` erstellt, die Funktion wird aufgerufen, und das Befehlsbündel wird in einem [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle) mit [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) aufgenommen:

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
});
recordRenderPass(renderBundleEncoder);
const renderBundle = renderBundleEncoder.finish();
```

Anschließend wird [`GPURenderPassEncoder.executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) verwendet, um die Arbeit über mehrere Render-Durchläufe hinweg zu wiederholen und die Leistung zu verbessern. Studieren Sie das Beispiel zur vollständigen Kontextualisierung.

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
