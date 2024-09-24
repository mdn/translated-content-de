---
title: "GPUDevice: createRenderBundleEncoder()-Methode"
short-title: createRenderBundleEncoder()
slug: Web/API/GPUDevice/createRenderBundleEncoder
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`createRenderBundleEncoder()`**-Methode der {{domxref("GPUDevice")}}-Schnittstelle erstellt einen {{domxref("GPURenderBundleEncoder")}}, der verwendet werden kann, um Bündel von Befehlen im Voraus aufzuzeichnen. Diese können in {{domxref("GPURenderPassEncoder")}}s mit der {{domxref("GPURenderPassEncoder.executeBundles", "executeBundles()")}}-Methode wiederverwendet werden, so oft wie erforderlich.

## Syntax

```js-nolint
createRenderBundleEncoder(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `colorFormats`
      - : Ein Array von enumerierten Werten, das die erwarteten Farbformate für Rendertargets spezifiziert. Mögliche Werte finden Sie in der Definition von [`GPUTextureFormat`](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) in der Spezifikation.
    - `depthReadOnly` {{optional_inline}}
      - : Ein boolean. Wenn `true`, gibt es an, dass das Ausführen eines beliebigen {{domxref("GPURenderBundle")}}, das vom {{domxref("GPURenderBundleEncoder")}} erstellt wurde, die Tiefenkomponente des `depthStencilFormat` bei der Ausführung nicht verändert. Wenn es weggelassen wird, ist der Standardwert für `depthReadOnly` `false`.
    - `depthStencilFormat` {{optional_inline}}
      - : Ein enumerierter Wert, der das erwartete Tiefen- oder Stencil-Format für Rendertargets spezifiziert. Mögliche Werte finden Sie im Abschnitt [Depth-stencil formats](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) der Spezifikation.
    - `label` {{optional_inline}}
      - : Ein String, der eine Bezeichnung bereitstellt, die verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen.
    - `sampleCount` {{optional_inline}}
      - : Eine Zahl, die die erwartete Sample-Anzahl für Rendertargets darstellt.
    - `stencilReadOnly` {{optional_inline}}
      - : Ein boolean. Wenn `true`, gibt es an, dass das Ausführen eines beliebigen {{domxref("GPURenderBundle")}}, das vom {{domxref("GPURenderBundleEncoder")}} erstellt wurde, die Stencil-Komponente des `depthStencilFormat` bei der Ausführung nicht verändert. Wenn es weggelassen wird, ist der Standardwert für `stencilReadOnly` `false`.

### Rückgabewert

Eine Instanz des {{domxref("GPURenderBundleEncoder")}}-Objekts.

## Beispiele

Im [[WebGPU Samples](https://webgpu.github.io/webgpu-samples/samples/animometer/) Animometer-Beispiel]] werden zahlreiche ähnliche Operationen gleichzeitig an vielen verschiedenen Objekten durchgeführt. Ein Befehlsbündel wird mit der folgenden Funktion kodiert:

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

Später wird ein {{domxref("GPURenderBundleEncoder")}} mit `createRenderBundleEncoder()` erstellt, die Funktion wird aufgerufen, und das Befehlsbündel wird in ein {{domxref("GPURenderBundle")}} mit {{domxref("GPURenderBundleEncoder.finish()")}} aufgezeichnet:

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
});
recordRenderPass(renderBundleEncoder);
const renderBundle = renderBundleEncoder.finish();
```

{{domxref("GPURenderPassEncoder.executeBundles()")}} wird dann verwendet, um die Arbeit über mehrere Render-Passes hinweg wiederzuverwenden und so die Leistung zu verbessern. Studieren Sie die Beispiel-Code-Liste für den vollständigen Kontext.

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
