---
title: "GPURenderBundleEncoder: drawIndexed()-Methode"
short-title: drawIndexed()
slug: Web/API/GPURenderBundleEncoder/drawIndexed
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`drawIndexed()`**-Methode der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Schnittstelle zeichnet indizierte Primitiven basierend auf den von [`setVertexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setVertexBuffer) und [`setIndexBuffer()`](/de/docs/Web/API/GPURenderBundleEncoder/setIndexBuffer) bereitgestellten Vertex- und Index-Puffern.

> [!NOTE]
> Diese Methode ist funktionell identisch mit ihrem Äquivalent auf dem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) — [`drawIndexed()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndexed).

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
  - : Eine Zahl, die die Anzahl der zu zeichnenden Instanzen definiert. Wenn weggelassen, ist `instanceCount` standardmäßig 1.
- `firstIndex` {{optional_inline}}
  - : Eine Zahl, die den Versatz im Index-Puffer, in Indizes, definiert, von dem aus das Zeichnen beginnt. Wenn weggelassen, ist `firstIndex` standardmäßig 0.
- `baseVertex` {{optional_inline}}
  - : Eine Zahl, die zu jedem Indexwert hinzugefügt wird, bevor auf die Vertex-Puffer zugegriffen wird. Wenn weggelassen, ist `baseVertex` standardmäßig 0.
- `firstInstance` {{optional_inline}}
  - : Eine Zahl, die die erste zu zeichnende Instanz definiert. Wenn weggelassen, ist `firstInstance` standardmäßig 0.

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
