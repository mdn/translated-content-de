---
title: "GPURenderPassEncoder: drawIndexed()-Methode"
short-title: drawIndexed()
slug: Web/API/GPURenderPassEncoder/drawIndexed
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`drawIndexed()`**-Methode der {{domxref("GPURenderPassEncoder")}}-Schnittstelle zeichnet indizierte Primitiven basierend auf den Vertex- und Index-Puffern, die durch {{domxref("GPURenderPassEncoder.setVertexBuffer", "setVertexBuffer()")}} und {{domxref("GPURenderPassEncoder.setIndexBuffer", "setIndexBuffer()")}} bereitgestellt werden.

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
  - : Eine Zahl, die die Anzahl der Indizes definiert, die gezeichnet werden sollen.
- `instanceCount` {{optional_inline}}
  - : Eine Zahl, die die Anzahl der Instanzen definiert, die gezeichnet werden sollen. Wenn weggelassen, ist `instanceCount` standardmäßig 1.
- `firstIndex` {{optional_inline}}
  - : Eine Zahl, die den Offset in den Indexpuffer, in Indizes, definiert, von dem das Zeichnen beginnen soll. Wenn weggelassen, ist `firstIndex` standardmäßig 0.
- `baseVertex` {{optional_inline}}
  - : Eine Zahl, die zu jedem Indexwert hinzugefügt wird, bevor in die Vertex-Puffer indiziert wird. Wenn weggelassen, ist `baseVertex` standardmäßig 0.
- `firstInstance` {{optional_inline}}
  - : Eine Zahl, die die erste zu zeichnende Instanz definiert. Wenn weggelassen, ist `firstInstance` standardmäßig 0.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

## Beispiele

Im WebGPU-Sample [Shadow Mapping](https://webgpu.github.io/webgpu-samples/samples/shadowMapping/) wird `drawIndexed()` in zwei separaten Render-Pässen in jedem Animationsrahmen verwendet, einer zum Befüllen des Schattenpuffers und einer, um die Hauptansicht der Szene zu zeichnen. Studieren Sie das Beispiel-Code-Listing für den vollständigen Kontext.

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
