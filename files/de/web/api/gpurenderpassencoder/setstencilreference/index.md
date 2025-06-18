---
title: "GPURenderPassEncoder: setStencilReference() Methode"
short-title: setStencilReference()
slug: Web/API/GPURenderPassEncoder/setStencilReference
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setStencilReference()`**-Methode der
[`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle legt den Stencil-Referenzwert fest, der während der Stencil-Tests mit der `"replace"` Stencil-Operation verwendet wird (wie im Deskriptor der [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline)-Methode festgelegt, in den Eigenschaften, die die verschiedenen Stencil-Operationen definieren).

## Syntax

```js-nolint
setStencilReference(reference)
```

### Parameter

- `reference`
  - : Eine Zahl, die den neuen Stencil-Referenzwert darstellt, der für den Renderdurchlauf festgelegt werden soll.

> [!NOTE]
> Wenn kein `setStencilReference()`-Aufruf erfolgt, wird der Stencil-Referenzwert standardmäßig auf 0 für jeden Renderdurchlauf gesetzt.

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
