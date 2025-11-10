---
title: "GPURenderBundleEncoder: drawIndexed() Methode"
short-title: drawIndexed()
slug: Web/API/GPURenderBundleEncoder/drawIndexed
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`drawIndexed()`**-Methode der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Schnittstelle zeichnet indizierte Primitive basierend auf den durch [`setVertexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setVertexBuffer) und [`setIndexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setIndexBuffer) bereitgestellten Vertex- und Indexpuffern.

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
  - : Eine Zahl, die die Anzahl der zu zeichnenden Instanzen definiert. Wenn dieser Wert weggelassen wird, ist der Standardwert für `instanceCount` 1.
- `firstIndex` {{optional_inline}}
  - : Eine Zahl, die den Offset im Indexpuffer in Indizes definiert, von dem aus gezeichnet werden soll. Wenn dieser Wert weggelassen wird, ist der Standardwert für `firstIndex` 0.
- `baseVertex` {{optional_inline}}
  - : Eine Zahl, die zu jedem Indexwert hinzugefügt wird, bevor in die Vertexpuffer indiziert wird. Wenn dieser Wert weggelassen wird, ist der Standardwert für `baseVertex` 0.
- `firstInstance` {{optional_inline}}
  - : Eine Zahl, die die erste zu zeichnende Instanz definiert. Wenn dieser Wert weggelassen wird, ist der Standardwert für `firstInstance` 0.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

## Beispiele

```js
// …

const bundleEncoder = device.createRenderBundleEncoder(descriptor);

bundleEncoder.setPipeline(pipeline);
bundleEncoder.setBindGroup(0, sceneBindGroupForRender);
bundleEncoder.setBindGroup(1, modelBindGroup);
bundleEncoder.setVertexBuffer(0, vertexBuffer);
bundleEncoder.setIndexBuffer(indexBuffer, "uint16");
bundleEncoder.drawIndexed(indexCount);

const renderBundle = bundleEncoder.finish();

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
