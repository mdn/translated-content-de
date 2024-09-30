---
title: "GPURenderPassEncoder: setStencilReference() Methode"
short-title: setStencilReference()
slug: Web/API/GPURenderPassEncoder/setStencilReference
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setStencilReference()`**-Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) Schnittstelle legt den Stencil-Referenzwert fest, der während Stencil-Tests mit der `"replace"`-Stencil-Operation verwendet wird (wie im Deskriptor der [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) Methode festgelegt, in den Eigenschaften, die die verschiedenen Stencil-Operationen definieren).

## Syntax

```js-nolint
setStencilReference(reference)
```

### Parameter

- `reference`
  - : Eine Zahl, die den neuen Stencil-Referenzwert darstellt, der für den Renderdurchgang festgelegt werden soll.

> [!NOTE]
> Wenn kein Aufruf von `setStencilReference()` erfolgt, wird der Stencil-Referenzwert standardmäßig auf 0 für jeden Renderdurchgang gesetzt.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

## Beispiele

```js
// ...

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.setStencilReference(1);
passEncoder.draw(3);

passEncoder.end();

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
