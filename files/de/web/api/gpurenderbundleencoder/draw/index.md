---
title: "GPURenderBundleEncoder: draw()-Methode"
short-title: draw()
slug: Web/API/GPURenderBundleEncoder/draw
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`draw()`**-Methode der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Schnittstelle zeichnet Primitive basierend auf den von [`setVertexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setVertexBuffer) bereitgestellten Vertex-Buffer.

> [!NOTE]
> Diese Methode ist funktional identisch mit ihrem Äquivalent auf [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) — [`draw()`](/de/docs/Web/API/GPURenderPassEncoder/draw).

## Syntax

```js-nolint
draw(vertexCount)
draw(vertexCount, instanceCount)
draw(vertexCount, instanceCount, firstVertex)
draw(vertexCount, instanceCount, firstVertex, firstInstance)
```

### Parameter

- `vertexCount`
  - : Eine Zahl, die die Anzahl der zu zeichnenden Vertices definiert.
- `instanceCount` {{optional_inline}}
  - : Eine Zahl, die die Anzahl der zu zeichnenden Instanzen definiert. Wenn ausgelassen, ist der Standardwert von `instanceCount` 1.
- `firstVertex` {{optional_inline}}
  - : Eine Zahl, die den Versatz in die Vertex-Buffer in Vertices definiert, ab dem gezeichnet wird. Wenn ausgelassen, ist der Standardwert von `firstVertex` 0.
- `firstInstance` {{optional_inline}}
  - : Eine Zahl, die die erste zu zeichnende Instanz definiert. Wenn ausgelassen, ist der Standardwert von `firstInstance` 0.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

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

Der obige Codeausschnitt stammt aus dem WebGPU Samples [Animometer Beispiel](https://webgpu.github.io/webgpu-samples/samples/animometer/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
