---
title: "GPUDevice: createRenderBundleEncoder() Methode"
short-title: createRenderBundleEncoder()
slug: Web/API/GPUDevice/createRenderBundleEncoder
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createRenderBundleEncoder()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt einen [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder), der verwendet werden kann, um Bündel von Befehlen vorab aufzuzeichnen. Diese können via der [`executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles)-Methode in [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)s beliebig oft wiederverwendet werden.

## Syntax

```js-nolint
createRenderBundleEncoder(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `colorFormats`
      - : Ein Array von aufgezählten Werten, die die erwarteten Farbformate für Render-Ziele angeben. Mögliche Werte finden Sie in der [`GPUTextureFormat`-Definition](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) in der Spezifikation.
    - `depthReadOnly` {{optional_inline}}
      - : Ein boolescher Wert. Wenn `true`, wird angegeben, dass das Ausführen eines vom [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) erstellten [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle) die Tiefenkomponente des `depthStencilFormat` beim Ausführen nicht ändert. Wird es weggelassen, ist der Standardwert für `depthReadOnly` `false`.
    - `depthStencilFormat` {{optional_inline}}
      - : Ein aufgezählter Wert, der das erwartete Tiefen- oder Schablonenformat für Render-Ziele angibt. Mögliche Werte finden Sie im Abschnitt [Tiefen-Schablonen-Formate](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) der Spezifikation.
    - `label` {{optional_inline}}
      - : Ein String, der eine Bezeichnung bereitstellt, die verwendet werden kann, um das Objekt zu identifizieren, z.B. in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.
    - `sampleCount` {{optional_inline}}
      - : Eine Zahl, die die erwartete Abtastanzahl für Render-Ziele darstellt.
    - `stencilReadOnly` {{optional_inline}}
      - : Ein boolescher Wert. Wenn `true`, wird angegeben, dass das Ausführen eines vom [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) erstellten [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle) die Schablonenkomponente des `depthStencilFormat` beim Ausführen nicht ändert. Wird es weggelassen, ist der Standardwert für `stencilReadOnly` `false`.

### Rückgabewert

Eine Instanz des [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Objekts.

## Beispiele

Im WebGPU-Samples [Animometer-Beispiel](https://webgpu.github.io/webgpu-samples/samples/animometer/) werden viele ähnliche Operationen gleichzeitig auf verschiedenen Objekten ausgeführt. Ein Befehlsbündel wird mit der folgenden Funktion kodiert:

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

Später wird ein [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) mit `createRenderBundleEncoder()` erstellt, die Funktion wird aufgerufen und das Befehlsbündel wird mithilfe von [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) in ein [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle) aufgezeichnet:

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
});
recordRenderPass(renderBundleEncoder);
const renderBundle = renderBundleEncoder.finish();
```

[`GPURenderPassEncoder.executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) wird dann verwendet, um die Arbeit für mehrere Render-Pässe wiederzuverwenden und so die Leistung zu verbessern. Studieren Sie das Beispielcode-Listing, um den vollständigen Kontext zu verstehen.

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
