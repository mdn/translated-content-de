---
title: "GPURenderPassEncoder: executeBundles()-Methode"
short-title: executeBundles()
slug: Web/API/GPURenderPassEncoder/executeBundles
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`executeBundles()`**-Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle führt Befehle aus, die zuvor in die referenzierten [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)s aufgezeichnet wurden, als Teil dieses Render-Passes.

> [!NOTE]
> Nach dem Aufrufen von `executeBundles()` werden die aktuell gesetzten Vertex-Buffer, Index-Buffer, Bind-Gruppen und Pipeline alle gelöscht, selbst wenn keine Bundles tatsächlich ausgeführt werden.

## Syntax

```js-nolint
executeBundles(bundles)
```

### Parameter

- `bundles`
  - : Ein Array von [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)-Objekten, die die vorab aufgezeichneten Befehle enthalten, die ausgeführt werden sollen.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`executeBundles()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) wird ungültig.

Für jedes [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle):

- Wenn die `depthReadOnly`-Eigenschaft des Render-Passes (wie im Deskriptor des ursprünglichen Aufrufs von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) angegeben) `true` ist, dann ist die `depthReadOnly`-Eigenschaft des Bundles (wie im Deskriptor des Aufrufs von [`GPUDevice.createRenderBundleEncoder()`](/de/docs/Web/API/GPUDevice/createRenderBundleEncoder) angegeben, der den ursprünglichen [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) erstellt hat) ebenfalls `true`.
- Wenn die `stencilReadOnly`-Eigenschaft des Render-Passes (wie im Deskriptor des ursprünglichen Aufrufs von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) angegeben) `true` ist, dann ist die `stencilReadOnly`-Eigenschaft des Bundles (wie im Deskriptor des Aufrufs von [`GPUDevice.createRenderBundleEncoder()`](/de/docs/Web/API/GPUDevice/createRenderBundleEncoder) angegeben, der den ursprünglichen [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) erstellt hat) ebenfalls `true`.
- Das Layout der in [`GPURenderPassEncoder.setPipeline()`](/de/docs/Web/API/GPURenderPassEncoder/setPipeline) spezifizierten Render-Pipeline (wie im Deskriptor des ursprünglichen Aufrufs von [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) definiert) entspricht dem Layout der in [`GPURenderBundleEncoder.setPipeline()`](/de/docs/Web/API/GPURenderBundleEncoder/setPipeline) spezifizierten Render-Bundle-Pipeline.

## Beispiele

Im WebGPU Samples [Animometer-Beispiel](https://webgpu.github.io/webgpu-samples/samples/animometer/) werden viele ähnliche Operationen gleichzeitig auf vielen verschiedenen Objekten durchgeführt. `executeBundles()` wird verwendet, um die Arbeit in mehreren Render-Pässen wiederzuverwenden, um die Leistung zu verbessern. Studieren Sie die Beispielcode-Auflistung für den vollständigen Kontext.

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
