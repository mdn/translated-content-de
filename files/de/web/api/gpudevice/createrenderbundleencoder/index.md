---
title: "GPUDevice: Methode createRenderBundleEncoder()"
short-title: createRenderBundleEncoder()
slug: Web/API/GPUDevice/createRenderBundleEncoder
l10n:
  sourceCommit: da1da9061042da9f616b8621cada4f452545700a
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die Methode **`createRenderBundleEncoder()`** des Interfaces [`GPUDevice`](/de/docs/Web/API/GPUDevice) erstellt einen [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder), mit dem Befehlsbündel vorab aufgezeichnet werden können. Diese lassen sich über die Methode [`executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) beliebig oft in [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Instanzen wiederverwenden.

## Syntax

```js-nolint
createRenderBundleEncoder(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `colorFormats`
      - : Ein Array von Enum-Werten, das die erwarteten Farbformate für Renderziele angibt. Mögliche Werte finden Sie in der [Definition von `GPUTextureFormat`](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) in der Spezifikation.
    - `depthReadOnly` {{optional_inline}}
      - : Ein boolescher Wert. Wenn `true`, wird die Tiefenkomponente von `depthStencilFormat` bei der Ausführung eines vom [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) erstellten [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle) nicht verändert. Wird `depthReadOnly` weggelassen, ist der Standardwert `false`.
    - `depthStencilFormat` {{optional_inline}}
      - : Ein Enum-Wert, der das erwartete Tiefen- oder Stencil-Format für Renderziele angibt. Mögliche Werte finden Sie im Abschnitt [Tiefen-Stencil-Formate](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) der Spezifikation.
    - `label` {{optional_inline}}
      - : Ein String mit einer Bezeichnung, anhand derer das Objekt beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen identifiziert werden kann.
    - `sampleCount` {{optional_inline}}
      - : Eine Zahl, die die erwartete Anzahl von Samples für Renderziele angibt.
    - `stencilReadOnly` {{optional_inline}}
      - : Ein boolescher Wert. Wenn `true`, wird die Stencil-Komponente von `depthStencilFormat` bei der Ausführung eines vom [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) erstellten [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle) nicht verändert. Wird `stencilReadOnly` weggelassen, ist der Standardwert `false`.

### Rückgabewert

Eine Instanz des Objekts [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder).

## Beispiele

Im [Animometer-Beispiel](https://webgpu.github.io/webgpu-samples/samples/animometer/) der WebGPU Samples werden zahlreiche ähnliche Operationen gleichzeitig an vielen verschiedenen Objekten ausgeführt. Mit der folgenden Funktion wird ein Befehlsbündel kodiert:

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

Später wird mit `createRenderBundleEncoder()` ein [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) erstellt, die Funktion aufgerufen und das Befehlsbündel mit [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) in einem [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle) aufgezeichnet:

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
});
recordRenderPass(renderBundleEncoder);
const renderBundle = renderBundleEncoder.finish();
```

Anschließend wird [`GPURenderPassEncoder.executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) verwendet, um die aufgezeichneten Befehle über mehrere Renderdurchläufe hinweg wiederzuverwenden und so die Leistung zu verbessern. Den vollständigen Zusammenhang entnehmen Sie dem Beispielcode.

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
