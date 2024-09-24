---
title: "GPURenderBundleEncoder: setPipeline()-Methode"
short-title: setPipeline()
slug: Web/API/GPURenderBundleEncoder/setPipeline
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`setPipeline()`**-Methode der {{domxref("GPURenderBundleEncoder")}}-Schnittstelle setzt die {{domxref("GPURenderPipeline")}}, die für nachfolgende Render-Bundle-Befehle verwendet werden soll.

> [!NOTE]
> Diese Methode ist funktionell identisch mit ihrem Äquivalent bei {{domxref("GPURenderPassEncoder")}} — {{domxref("GPURenderPassEncoder.setPipeline", "setPipeline()")}}.

## Syntax

```js-nolint
setPipeline(pipeline)
```

### Parameter

- `pipeline`
  - : Die {{domxref("GPURenderPipeline")}}, die für nachfolgende Render-Bundle-Befehle verwendet werden soll.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`setPipeline()`** aufgerufen wird, andernfalls wird ein {{domxref("GPUValidationError")}} erzeugt und die {{domxref("GPURenderBundleEncoder")}} wird ungültig:

- Wenn die {{domxref("GPURenderPipeline")}} auf die Tiefenkomponente des Tiefen-/Stencil-Anhangs schreibt, ist `depthReadOnly` (wie im Descriptor des ursprünglichen {{domxref("GPUCommandEncoder.beginRenderPass()")}}-Aufrufs angegeben) `true`.
- Wenn die {{domxref("GPURenderPipeline")}} auf die Stencil-Komponente des Tiefen-/Stencil-Anhangs schreibt, ist `stencilReadOnly` (wie im Descriptor des ursprünglichen {{domxref("GPUCommandEncoder.beginRenderPass()")}}-Aufrufs angegeben) `true`.

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

Der obige Ausschnitt stammt aus dem WebGPU Samples [Animometer-Beispiel](https://webgpu.github.io/webgpu-samples/samples/animometer/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
