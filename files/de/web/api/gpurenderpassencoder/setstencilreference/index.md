---
title: "GPURenderPassEncoder: setStencilReference()-Methode"
short-title: setStencilReference()
slug: Web/API/GPURenderPassEncoder/setStencilReference
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setStencilReference()`**-Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle legt den Stencil-Referenzwert fest, der während der Stencil-Tests mit der `"replace"` Stencil-Operation verwendet wird (wie im Deskriptor der [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline)-Methode, in den Eigenschaften, die die verschiedenen Stencil-Operationen definieren, festgelegt).

## Syntax

```js-nolint
setStencilReference(reference)
```

### Parameter

- `reference`
  - : Eine Zahl, die den neuen Stencil-Referenzwert für den Render-Pass darstellt.

> [!NOTE]
> Wenn kein `setStencilReference()`-Aufruf erfolgt, wird der Stencil-Referenzwert für jeden Render-Pass standardmäßig auf 0 gesetzt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

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
