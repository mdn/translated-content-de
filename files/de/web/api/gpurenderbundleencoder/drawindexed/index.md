---
title: "GPURenderBundleEncoder: drawIndexed()-Methode"
short-title: drawIndexed()
slug: Web/API/GPURenderBundleEncoder/drawIndexed
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`drawIndexed()`**-Methode der Schnittstelle [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) zeichnet indizierte Primitiven basierend auf den von [`setVertexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setVertexBuffer) und [`setIndexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setIndexBuffer) bereitgestellten Vertex- und Indexpuffern.

> [!NOTE]
> Diese Methode ist funktional identisch mit ihrem Äquivalent auf [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) — [`drawIndexed()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndexed).

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
  - : Eine Zahl, die die Anzahl der zu zeichnenden Instanzen definiert. Wird dieser Parameter weggelassen, wird `instanceCount` standardmäßig auf 1 gesetzt.
- `firstIndex` {{optional_inline}}
  - : Eine Zahl, die den Offset in den Indexpuffer in Indizes definiert, ab dem das Zeichnen beginnt. Wird dieser Parameter weggelassen, wird `firstIndex` standardmäßig auf 0 gesetzt.
- `baseVertex` {{optional_inline}}
  - : Eine Zahl, die zu jedem Indexwert hinzugefügt wird, bevor in die Vertexpuffer indiziert wird. Wird dieser Parameter weggelassen, wird `baseVertex` standardmäßig auf 0 gesetzt.
- `firstInstance` {{optional_inline}}
  - : Eine Zahl, die die erste zu zeichnende Instanz definiert. Wird dieser Parameter weggelassen, wird `firstInstance` standardmäßig auf 0 gesetzt.

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
