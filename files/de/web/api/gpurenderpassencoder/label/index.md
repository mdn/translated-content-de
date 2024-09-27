---
title: "GPURenderPassEncoder: label-Eigenschaft"
short-title: label
slug: Web/API/GPURenderPassEncoder/label
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft des [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Interfaces ist eine schreibgeschützte Zeichenkette, die ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dieses Label kann durch Angabe einer `label`-Eigenschaft im Deskriptorobjekt gesetzt werden, das im ursprünglichen Aufruf von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) übergeben wird. Alternativ können Sie es direkt am `GPURenderPassEncoder`-Objekt abrufen und setzen.

## Wert

Eine Zeichenkette. Wenn vorher kein Labelwert gesetzt wurde, dann wird ein leerer String zurückgegeben, wenn das Label abgerufen wird.

## Beispiele

Setzen und Abrufen eines Labels über `GPURenderPassEncoder.label`:

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

Setzen eines Labels über den ursprünglichen Aufruf von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) und anschließendes Abrufen über `GPURenderPassEncoder.label`:

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
