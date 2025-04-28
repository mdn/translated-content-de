---
title: "GPURenderPassEncoder: executeBundles()-Methode"
short-title: executeBundles()
slug: Web/API/GPURenderPassEncoder/executeBundles
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`executeBundles()`**-Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle führt zuvor in die referenzierten [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)s aufgezeichnete Befehle als Teil dieses Render-Passes aus.

> [!NOTE]
> Nach dem Aufruf von `executeBundles()` werden die aktuell gesetzten Vertex-Buffer, Index-Buffer, Bind-Gruppen und die Pipeline alle gelöscht, selbst wenn keine Bundles tatsächlich ausgeführt werden.

## Syntax

```js-nolint
executeBundles(bundles)
```

### Parameter

- `bundles`
  - : Ein Array von [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)-Objekten, das die vorab aufgezeichneten Befehle zur Ausführung enthält.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Folgende Kriterien müssen beim Aufruf von **`executeBundles()`** erfüllt sein, sonst wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) wird ungültig.

Für jedes [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle):

- Wenn die `depthReadOnly`-Eigenschaft des Render-Passes (wie im Deskriptor des ursprünglichen [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Aufrufs angegeben) `true` ist, dann ist die `depthReadOnly`-Eigenschaft des Bundles (wie im Deskriptor des [`GPUDevice.createRenderBundleEncoder()`](/de/docs/Web/API/GPUDevice/createRenderBundleEncoder)-Aufrufs, der den ursprünglichen [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) erstellt hat, angegeben) auch `true`.
- Wenn die `stencilReadOnly`-Eigenschaft des Render-Passes (wie im Deskriptor des ursprünglichen [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Aufrufs angegeben) `true` ist, dann ist die `stencilReadOnly`-Eigenschaft des Bundles (wie im Deskriptor des [`GPUDevice.createRenderBundleEncoder()`](/de/docs/Web/API/GPUDevice/createRenderBundleEncoder)-Aufrufs, der den ursprünglichen [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) erstellt hat, angegeben) auch `true`.
- Das Layout der in [`GPURenderPassEncoder.setPipeline()`](/de/docs/Web/API/GPURenderPassEncoder/setPipeline) angegebenen Render-Pipeline (wie im Deskriptor des ursprünglichen [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline)-Aufrufs definiert) entspricht dem Layout der in [`GPURenderBundleEncoder.setPipeline()`](/de/docs/Web/API/GPURenderBundleEncoder/setPipeline) angegebenen Render-Bundle-Pipeline.

## Beispiele

Im WebGPU-Beispiel [Animometer](https://webgpu.github.io/webgpu-samples/samples/animometer/) werden viele ähnliche Operationen gleichzeitig an verschiedenen Objekten durchgeführt. `executeBundles()` wird verwendet, um die Arbeit an mehreren Render-Passes wiederzuverwenden und so die Leistung zu verbessern. Studieren Sie die Beispiel-Codeauflistung für den vollständigen Kontext.

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
