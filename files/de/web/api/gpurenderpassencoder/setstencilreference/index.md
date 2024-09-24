---
title: "GPURenderPassEncoder: Methode setStencilReference()"
short-title: setStencilReference()
slug: Web/API/GPURenderPassEncoder/setStencilReference
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`setStencilReference()`**-Methode der
{{domxref("GPURenderPassEncoder")}}-Schnittstelle legt den Stencil-Referenzwert fest, der während der Stencil-Tests mit der `"replace"` Stencil-Operation verwendet wird (wie im Deskriptor der {{domxref("GPUDevice.createRenderPipeline()")}}-Methode in den Eigenschaften, die die verschiedenen Stencil-Operationen definieren, festgelegt).

## Syntax

```js-nolint
setStencilReference(reference)
```

### Parameter

- `reference`
  - : Eine Zahl, die den neuen Stencil-Referenzwert darstellt, der für den Render-Durchlauf festgelegt werden soll.

> [!NOTE]
> Wenn kein `setStencilReference()`-Aufruf gemacht wird, ist der Stencil-Referenzwert für jeden Render-Durchlauf standardmäßig 0.

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
