---
title: "GPURenderPassEncoder: drawIndexed()-Methode"
short-title: drawIndexed()
slug: Web/API/GPURenderPassEncoder/drawIndexed
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`drawIndexed()`**-Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle zeichnet indizierte Primitiven basierend auf den durch [`setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) und [`setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer) bereitgestellten Vertex- und Index-Puffern.

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
  - : Eine Zahl, die die Anzahl der zu zeichnenden Instanzen definiert. Falls nicht angegeben, ist der Standardwert für `instanceCount` 1.
- `firstIndex` {{optional_inline}}
  - : Eine Zahl, die den Versatz in den Indexpuffer in Indizes definiert, ab dem gezeichnet werden soll. Falls nicht angegeben, ist der Standardwert für `firstIndex` 0.
- `baseVertex` {{optional_inline}}
  - : Eine Zahl, die vor der Indizierung in die Vertex-Puffer zu jedem Indexwert hinzugefügt wird. Falls nicht angegeben, ist der Standardwert für `baseVertex` 0.
- `firstInstance` {{optional_inline}}
  - : Eine Zahl, die die erste Instanz definiert, die gezeichnet wird. Falls nicht angegeben, ist der Standardwert für `firstInstance` 0.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

## Beispiele

Im WebGPU-Beispiel [Shadow Mapping](https://webgpu.github.io/webgpu-samples/samples/shadowMapping/) wird `drawIndexed()` in zwei verschiedenen Render-Passes in jedem Animationsrahmen verwendet, einer zur Befüllung des Schattenpuffers und einer, um die Primäransicht der Szene zu zeichnen. Studieren Sie das Beispielcode-Listing für den vollständigen Kontext.

```js
// …

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

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
