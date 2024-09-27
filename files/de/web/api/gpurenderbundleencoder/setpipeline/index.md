---
title: "GPURenderBundleEncoder: setPipeline() Methode"
short-title: setPipeline()
slug: Web/API/GPURenderBundleEncoder/setPipeline
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setPipeline()`**-Methode der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Schnittstelle legt die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) fest, die für nachfolgende Render-Bundle-Befehle verwendet werden soll.

> [!NOTE]
> Diese Methode ist funktional identisch mit ihrem Äquivalent auf [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) — [`setPipeline()`](/de/docs/Web/API/GPURenderPassEncoder/setPipeline).

## Syntax

```js-nolint
setPipeline(pipeline)
```

### Parameter

- `pipeline`
  - : Die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline), die für nachfolgende Render-Bundle-Befehle verwendet werden soll.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`setPipeline()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) wird ungültig:

- Wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) in die Tiefenkomponente des Tiefen-/Stencil-Anhangs schreibt, ist `depthReadOnly` (wie im Deskriptor des ursprünglichen Calls von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) angegeben) `true`.
- Wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) in die Stencil-Komponente des Tiefen-/Stencil-Anhangs schreibt, ist `stencilReadOnly` (wie im Deskriptor des ursprünglichen Calls von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) angegeben) `true`.

## Beispiele

```js
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

Das obige Snippet stammt aus dem WebGPU Samples [Animometer-Beispiel](https://webgpu.github.io/webgpu-samples/samples/animometer/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
