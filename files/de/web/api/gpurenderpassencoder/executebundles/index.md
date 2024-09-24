---
title: "GPURenderPassEncoder: executeBundles()-Methode"
short-title: executeBundles()
slug: Web/API/GPURenderPassEncoder/executeBundles
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`executeBundles()`**-Methode der {{domxref("GPURenderPassEncoder")}}-Schnittstelle führt Befehle aus, die zuvor in den referenzierten {{domxref("GPURenderBundle")}}s für diesen Render-Pass aufgezeichnet wurden.

> [!NOTE]
> Nach dem Aufruf von `executeBundles()` werden die derzeit gesetzten Vertex-Puffer, Index-Puffer, Bind-Gruppen und die Pipeline gelöscht, auch wenn tatsächlich keine Bundles ausgeführt werden.

## Syntax

```js-nolint
executeBundles(bundles)
```

### Parameter

- `bundles`
  - : Ein Array von {{domxref("GPURenderBundle")}}-Objekten, das die voraufgezeichneten Befehle enthält, die ausgeführt werden sollen.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`executeBundles()`** erfüllt sein, andernfalls wird ein {{domxref("GPUValidationError")}} erzeugt und der {{domxref("GPURenderPassEncoder")}} wird ungültig.

Für jedes {{domxref("GPURenderBundle")}}:

- Wenn die `depthReadOnly`-Eigenschaft des Render-Passes (wie im Deskriptor des auslösenden {{domxref("GPUCommandEncoder.beginRenderPass()")}}-Aufrufs spezifiziert) `true` ist, dann ist auch die `depthReadOnly`-Eigenschaft des Bundles (wie im Deskriptor des {{domxref("GPUDevice.createRenderBundleEncoder()")}}-Aufrufs, der den ursprünglichen {{domxref("GPURenderBundleEncoder")}} erstellt hat) `true`.
- Wenn die `stencilReadOnly`-Eigenschaft des Render-Passes (wie im Deskriptor des auslösenden {{domxref("GPUCommandEncoder.beginRenderPass()")}}-Aufrufs spezifiziert) `true` ist, dann ist auch die `stencilReadOnly`-Eigenschaft des Bundles (wie im Deskriptor des {{domxref("GPUDevice.createRenderBundleEncoder()")}}-Aufrufs, der den ursprünglichen {{domxref("GPURenderBundleEncoder")}} erstellt hat) `true`.
- Das Layout der in {{domxref("GPURenderPassEncoder.setPipeline()")}} spezifizierten Render-Pipeline (wie im Deskriptor des auslösenden {{domxref("GPUDevice.createRenderPipeline()")}}-Aufrufs definiert) entspricht dem Layout der in {{domxref("GPURenderBundleEncoder.setPipeline()")}} spezifizierten Render-Bundle-Pipeline.

## Beispiele

Im WebGPU-Samples-[Animometer-Beispiel](https://webgpu.github.io/webgpu-samples/samples/animometer/) werden viele ähnliche Operationen gleichzeitig an vielen verschiedenen Objekten durchgeführt. `executeBundles()` wird verwendet, um die Arbeit in mehreren Render-Pässen wiederzuverwenden, um die Leistung zu verbessern. Studieren Sie das Beispielcode-Listing für den vollständigen Kontext.

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
