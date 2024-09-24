---
title: "GPURenderBundleEncoder: draw()-Methode"
short-title: draw()
slug: Web/API/GPURenderBundleEncoder/draw
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`draw()`**-Methode des
{{domxref("GPURenderBundleEncoder")}}-Interfaces zeichnet Primitiven basierend auf den durch {{domxref("GPURenderBundleEncoder.setVertexBuffer", "setVertexBuffer()")}} bereitgestellten Vertex-Puffern.

> [!NOTE]
> Diese Methode ist funktional identisch mit ihrem Gegenstück auf {{domxref("GPURenderPassEncoder")}} — {{domxref("GPURenderPassEncoder.draw", "draw()")}}.

## Syntax

```js-nolint
draw(vertexCount)
draw(vertexCount, instanceCount)
draw(vertexCount, instanceCount, firstVertex)
draw(vertexCount, instanceCount, firstVertex, firstInstance)
```

### Parameter

- `vertexCount`
  - : Eine Zahl, die die Anzahl der zu zeichnenden Vertizes definiert.
- `instanceCount` {{optional_inline}}
  - : Eine Zahl, die die Anzahl der zu zeichnenden Instanzen definiert. Wenn nicht angegeben, beträgt der Standardwert für `instanceCount` 1.
- `firstVertex` {{optional_inline}}
  - : Eine Zahl, die den Offset in den Vertex-Puffern in Vertizes definiert, von dem aus begonnen wird zu zeichnen. Wenn nicht angegeben, beträgt der Standardwert für `firstVertex` 0.
- `firstInstance` {{optional_inline}}
  - : Eine Zahl, die die erste zu zeichnende Instanz definiert. Wenn nicht angegeben, beträgt der Standardwert für `firstInstance` 0.

### Rückgabewert

Kein ({{jsxref("Undefined")}}).

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

Der obige Ausschnitt stammt aus dem WebGPU-Beispiel [Animometer example](https://webgpu.github.io/webgpu-samples/samples/animometer/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
