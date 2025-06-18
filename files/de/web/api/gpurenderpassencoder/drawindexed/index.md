---
title: "GPURenderPassEncoder: drawIndexed()-Methode"
short-title: drawIndexed()
slug: Web/API/GPURenderPassEncoder/drawIndexed
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`drawIndexed()`**-Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle zeichnet indizierte Primitiven basierend auf den durch [`setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) und [`setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer) bereitgestellten Vertex- und Indexpuffern.

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
  - : Eine Zahl, die die Anzahl der zu zeichnenden Indizes festlegt.
- `instanceCount` {{optional_inline}}
  - : Eine Zahl, die die Anzahl der zu zeichnenden Instanzen festlegt. Wenn weggelassen, ist `instanceCount` standardmäßig 1.
- `firstIndex` {{optional_inline}}
  - : Eine Zahl, die den Offset in den Indexpuffer in Indizes angibt, ab dem das Zeichnen beginnt. Wenn weggelassen, ist `firstIndex` standardmäßig 0.
- `baseVertex` {{optional_inline}}
  - : Eine Zahl, die zu jedem Indexwert hinzugefügt wird, bevor in die Vertexpuffer indiziert wird. Wenn weggelassen, ist `baseVertex` standardmäßig 0.
- `firstInstance` {{optional_inline}}
  - : Eine Zahl, die die erste zu zeichnende Instanz festlegt. Wenn weggelassen, ist `firstInstance` standardmäßig 0.

### Rückgabewert

Kein Wert ({{jsxref("Undefined")}}).

## Beispiele

Im WebGPU-Samples-Beispiel [Shadow Mapping](https://webgpu.github.io/webgpu-samples/samples/shadowMapping/) wird `drawIndexed()` in zwei separaten Renderdurchläufen in jedem Animationsframe verwendet, einer zum Befüllen des Schattenpuffers und einer zum Zeichnen der Hauptansicht der Szene. Untersuchen Sie die Beispielcode-Auflistung für den vollständigen Kontext.

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

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
