---
title: "GPURenderPassEncoder: executeBundles() Methode"
short-title: executeBundles()
slug: Web/API/GPURenderPassEncoder/executeBundles
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`executeBundles()`**-Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle führt Befehle aus, die zuvor in die referenzierten [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)s aufgezeichnet wurden, als Teil dieses Render-Durchlaufs.

> [!NOTE]
> Nach dem Aufruf von `executeBundles()` werden die aktuell gesetzten Vertex-Puffer, Index-Puffer, Bind-Gruppen und Pipeline alle gelöscht, selbst wenn tatsächlich keine Bundles ausgeführt werden.

## Syntax

```js-nolint
executeBundles(bundles)
```

### Parameter

- `bundles`
  - : Ein Array von [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)-Objekten, das die vorab aufgezeichneten Befehle enthält, die ausgeführt werden sollen.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen beim Aufrufen von **`executeBundles()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) wird ungültig.

Für jedes [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle):

- Wenn die `depthReadOnly`-Eigenschaft des Render-Passes (wie in der Beschreibung des ursprünglichen Aufrufs von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) angegeben) `true` ist, dann ist die `depthReadOnly`-Eigenschaft des Bundles (wie in der Beschreibung des [`GPUDevice.createRenderBundleEncoder()`](/de/docs/Web/API/GPUDevice/createRenderBundleEncoder) Aufrufs, der den ursprünglichen [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) erstellt hat) ebenfalls `true`.
- Wenn die `stencilReadOnly`-Eigenschaft des Render-Passes (wie in der Beschreibung des ursprünglichen Aufrufs von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) angegeben) `true` ist, dann ist die `stencilReadOnly`-Eigenschaft des Bundles (wie in der Beschreibung des [`GPUDevice.createRenderBundleEncoder()`](/de/docs/Web/API/GPUDevice/createRenderBundleEncoder) Aufrufs, der den ursprünglichen [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) erstellt hat) ebenfalls `true`.
- Das Layout der in [`GPURenderPassEncoder.setPipeline()`](/de/docs/Web/API/GPURenderPassEncoder/setPipeline) angegebenen Render-Pipeline (wie in der Beschreibung des ursprünglichen Aufrufs von [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) definiert) entspricht dem Layout der in [`GPURenderBundleEncoder.setPipeline()`](/de/docs/Web/API/GPURenderBundleEncoder/setPipeline) angegebenen Render-Bundle-Pipeline.

## Beispiele

Im WebGPU-Beispiel [Animometer](https://webgpu.github.io/webgpu-samples/samples/animometer/) werden viele ähnliche Operationen gleichzeitig auf verschiedenen Objekten ausgeführt. `executeBundles()` wird verwendet, um die Arbeit an mehreren Render-Durchläufen wiederzuverwenden, um die Leistung zu verbessern. Studium des Beispiel-Codes für den gesamten Kontext.

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
