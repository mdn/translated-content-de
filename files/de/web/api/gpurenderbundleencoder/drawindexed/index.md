---
title: "GPURenderBundleEncoder: drawIndexed()-Methode"
short-title: drawIndexed()
slug: Web/API/GPURenderBundleEncoder/drawIndexed
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`drawIndexed()`**-Methode der {{domxref("GPURenderBundleEncoder")}}-Schnittstelle zeichnet indizierte Primitive basierend auf den durch {{domxref("GPURenderBundleEncoder.setVertexBuffer", "setVertexBuffer()")}} und {{domxref("GPURenderBundleEncoder.setIndexBuffer", "setIndexBuffer()")}} bereitgestellten Vertex- und Indexpuffern.

> [!NOTE]
> Diese Methode ist funktional identisch mit ihrem Äquivalent auf {{domxref("GPURenderPassEncoder")}} — {{domxref("GPURenderPassEncoder.drawIndexed", "drawIndexed()")}}.

## Syntax

```js-nolint
drawIndexed(indexCount)
drawIndexed(indexCount, instanceCount)
drawIndexed(indexCount, instanceCount, firstIndex)
drawIndexed(indexCount, instanceCount, firstIndex, baseVertex)
drawIndexed(indexCount, instanceCount, firstIndex, baseVertex, firstInstance)
```

### Parameter

- `indexCount`
  - : Eine Zahl, die die Anzahl der zu zeichnenden Indizes definiert.
- `instanceCount` {{optional_inline}}
  - : Eine Zahl, die die Anzahl der zu zeichnenden Instanzen definiert. Wenn weggelassen, wird `instanceCount` auf 1 voreingestellt.
- `firstIndex` {{optional_inline}}
  - : Eine Zahl, die den Versatz in den Indexpuffer in Indizes definiert, von dem aus gezeichnet wird. Wenn weggelassen, wird `firstIndex` auf 0 voreingestellt.
- `baseVertex` {{optional_inline}}
  - : Eine Zahl, die zu jedem Indexwert hinzugefügt wird, bevor in die Vertexpuffer indexiert wird. Wenn weggelassen, wird `baseVertex` auf 0 voreingestellt.
- `firstInstance` {{optional_inline}}
  - : Eine Zahl, die die erste zu zeichnende Instanz definiert. Wenn weggelassen, wird `firstInstance` auf 0 voreingestellt.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

## Beispiele

```js
// ...

const bundleEncoder = device.createRenderBundleEncoder(descriptor);

bundleEncoder.setPipeline(pipeline);
bundleEncoder.setBindGroup(0, sceneBindGroupForRender);
bundleEncoder.setBindGroup(1, modelBindGroup);
bundleEncoder.setVertexBuffer(0, vertexBuffer);
bundleEncoder.setIndexBuffer(indexBuffer, "uint16");
bundleEncoder.drawIndexed(indexCount);

const renderBundle = bundleEncoder.finish();

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
