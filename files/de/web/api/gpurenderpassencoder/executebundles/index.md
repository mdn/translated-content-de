---
title: "GPURenderPassEncoder: executeBundles()-Methode"
short-title: executeBundles()
slug: Web/API/GPURenderPassEncoder/executeBundles
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`executeBundles()`**-Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle führt Befehle aus, die zuvor in den referenzierten [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)s aufgezeichnet wurden, als Teil dieses Render-Passes.

> [!NOTE]
> Nach dem Aufruf von `executeBundles()` werden die aktuell gesetzten Vertex-Buffer, Index-Buffer, Bind-Gruppen und Pipeline alle gelöscht, auch wenn keine Bundles tatsächlich ausgeführt werden.

## Syntax

```js-nolint
executeBundles(bundles)
```

### Parameter

- `bundles`
  - : Ein Array von [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)-Objekten, das die voraufgezeichneten Befehle enthält, die ausgeführt werden sollen.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Überprüfung

Die folgenden Kriterien müssen erfüllt sein, wenn **`executeBundles()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) wird ungültig.

Für jedes [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle):

- Wenn die `depthReadOnly`-Eigenschaft des Render-Passes (wie in der Beschreibung des ursprünglichen Aufrufs von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) angegeben) `true` ist, dann ist die `depthReadOnly`-Eigenschaft des Bundles (wie in der Beschreibung des Aufrufs von [`GPUDevice.createRenderBundleEncoder()`](/de/docs/Web/API/GPUDevice/createRenderBundleEncoder) angegeben, der den ursprünglichen [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) erstellt hat) ebenfalls `true`.
- Wenn die `stencilReadOnly`-Eigenschaft des Render-Passes (wie in der Beschreibung des ursprünglichen Aufrufs von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) angegeben) `true` ist, dann ist die `stencilReadOnly`-Eigenschaft des Bundles (wie in der Beschreibung des Aufrufs von [`GPUDevice.createRenderBundleEncoder()`](/de/docs/Web/API/GPUDevice/createRenderBundleEncoder) angegeben, der den ursprünglichen [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) erstellt hat) ebenfalls `true`.
- Das Layout der in [`GPURenderPassEncoder.setPipeline()`](/de/docs/Web/API/GPURenderPassEncoder/setPipeline) spezifizierten Render-Pipeline (wie in der Beschreibung des ursprünglichen Aufrufs von [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) definiert) entspricht dem Layout der in [`GPURenderBundleEncoder.setPipeline()`](/de/docs/Web/API/GPURenderBundleEncoder/setPipeline) spezifizierten Render-Bundle-Pipeline.

## Beispiele

Im WebGPU-Beispiel [Animometer example](https://webgpu.github.io/webgpu-samples/samples/animometer/) werden viele ähnliche Operationen gleichzeitig an verschiedenen Objekten durchgeführt. `executeBundles()` wird verwendet, um die Arbeit an mehreren Render-Pässen wiederzuverwenden und die Leistung zu verbessern. Untersuchen Sie die Beispiel-Codeauflistung für den vollständigen Kontext.

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
