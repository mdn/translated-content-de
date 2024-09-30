---
title: "GPURenderPassEncoder: drawIndexed()-Methode"
short-title: drawIndexed()
slug: Web/API/GPURenderPassEncoder/drawIndexed
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`drawIndexed()`**-Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle zeichnet indizierte Primitiven basierend auf den von [`setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) und [`setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer) bereitgestellten Vertex- und Indexpuffern.

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
  - : Eine Zahl, die die Anzahl der zu zeichnenden Instanzen definiert. Wenn sie weggelassen wird, ist der Standardwert für `instanceCount` 1.
- `firstIndex` {{optional_inline}}
  - : Eine Zahl, die den Versatz im Indexpuffer in Indizes definiert, von dem aus gezeichnet werden soll. Wenn sie weggelassen wird, ist der Standardwert für `firstIndex` 0.
- `baseVertex` {{optional_inline}}
  - : Eine Zahl, die jedem Indexwert hinzugefügt wird, bevor in die Vertex-Puffer indiziert wird. Wenn sie weggelassen wird, ist der Standardwert für `baseVertex` 0.
- `firstInstance` {{optional_inline}}
  - : Eine Zahl, die die erste zu zeichnende Instanz definiert. Wenn sie weggelassen wird, ist der Standardwert für `firstInstance` 0.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

## Beispiele

Im WebGPU Samples [Shadow Mapping](https://webgpu.github.io/webgpu-samples/samples/shadowMapping/)-Beispiel wird `drawIndexed()` in zwei separaten Render-Passes in jedem Animationsrahmen verwendet, einer um den Schattenpuffer zu befüllen und einer um die primäre Ansicht der Szene zu zeichnen. Studieren Sie das Beispielcode-Listing für den vollständigen Kontext.

```js
// ...

const commandEncoder = device.createCommandEncoder();
{
  const shadowPass = commandEncoder.beginRenderPass(shadowPassDescriptor);
  shadowPass.setPipeline(shadowPipeline);
  shadowPass.setBindGroup(0, sceneBindGroupForShadow);
  shadowPass.setBindGroup(1, modelBindGroup);
  shadowPass.setVertexBuffer(0, vertexBuffer);
  shadowPass.setIndexBuffer(indexBuffer, "uint16");
  shadowPass.drawIndexed(indexCount);

  shadowPass.end();
}
{
  const renderPass = commandEncoder.beginRenderPass(renderPassDescriptor);
  renderPass.setPipeline(pipeline);
  renderPass.setBindGroup(0, sceneBindGroupForRender);
  renderPass.setBindGroup(1, modelBindGroup);
  renderPass.setVertexBuffer(0, vertexBuffer);
  renderPass.setIndexBuffer(indexBuffer, "uint16");
  renderPass.drawIndexed(indexCount);

  renderPass.end();
}

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
