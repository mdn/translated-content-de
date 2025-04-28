---
title: "GPURenderPassEncoder: setStencilReference()-Methode"
short-title: setStencilReference()
slug: Web/API/GPURenderPassEncoder/setStencilReference
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setStencilReference()`**-Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle setzt den Stencil-Referenzwert, der während der Stencil-Tests mit der Stencil-Operation `"replace"` verwendet wird (wie im Deskriptor der Methode [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) festgelegt, in den Eigenschaften, die die verschiedenen Stencil-Operationen definieren).

## Syntax

```js-nolint
setStencilReference(reference)
```

### Parameter

- `reference`
  - : Eine Zahl, die den neuen Stencil-Referenzwert darstellt, der für den Renderdurchlauf festgelegt wird.

> [!NOTE]
> Wenn kein `setStencilReference()`-Aufruf erfolgt, wird der Stencil-Referenzwert für jeden Renderdurchlauf standardmäßig auf 0 gesetzt.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

## Beispiele

```js
// …

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.setStencilReference(1);
passEncoder.draw(3);

passEncoder.end();

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
