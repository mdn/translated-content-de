---
title: "GPURenderPassEncoder: label-Eigenschaft"
short-title: label
slug: Web/API/GPURenderPassEncoder/label
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`label`** der {{domxref("GPURenderPassEncoder")}}-Schnittstelle ist ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in {{domxref("GPUError")}}-Meldungen oder Konsole-Warnungen.

Dies kann festgelegt werden, indem eine `label`-Eigenschaft im Deskriptorobjekt bereitgestellt wird, das im ursprünglichen Aufruf von {{domxref("GPUCommandEncoder.beginRenderPass()")}} übergeben wird, oder Sie können es direkt am `GPURenderPassEncoder`-Objekt abrufen und setzen.

## Wert

Ein String. Wenn kein Labelwert zuvor festgelegt wurde, gibt das Abrufen des Labels einen leeren String zurück.

## Beispiele

Festlegen und Abrufen eines Labels über `GPURenderPassEncoder.label`:

```js
const commandEncoder = device.createCommandEncoder();

const renderPassDescriptor = {
  colorAttachments: [
    {
      clearValue: clearColor,
      loadOp: "clear",
      storeOp: "store",
      view: context.getCurrentTexture().createView(),
    },
  ],
};

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
passEncoder.label = "myrenderpassencoder";

console.log(passEncoder.label); // "myrenderpassencoder"
```

Festlegen eines Labels über den ursprünglichen Aufruf von {{domxref("GPUCommandEncoder.beginRenderPass()")}} und anschließendes Abrufen über `GPURenderPassEncoder.label`:

```js
const commandEncoder = device.createCommandEncoder();

const renderPassDescriptor = {
  colorAttachments: [
    {
      clearValue: clearColor,
      loadOp: "clear",
      storeOp: "store",
      view: context.getCurrentTexture().createView(),
    },
  ],
  label: "myrenderpassencoder",
};

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

console.log(passEncoder.label); // "myrenderpassencoder"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
