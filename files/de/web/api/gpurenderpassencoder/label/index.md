---
title: "GPURenderPassEncoder: label-Eigenschaft"
short-title: label
slug: Web/API/GPURenderPassEncoder/label
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`label`** der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle ist ein Zeichenstring, der ein Label bereitstellt, mit dem das Objekt identifiziert werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dies kann durch Bereitstellung einer `label`-Eigenschaft im Descriptorobjekt festgelegt werden, das beim ursprünglichen Aufruf von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) übergeben wird, oder Sie können es direkt auf dem `GPURenderPassEncoder`-Objekt abrufen und festlegen.

## Wert

Ein Zeichenstring. Wenn zuvor kein Labelwert festgelegt wurde, gibt das Abrufen des Labels einen leeren Zeichenstring zurück.

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

Festlegen eines Labels über den ursprünglichen Aufruf von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) und anschließend Abrufen über `GPURenderPassEncoder.label`:

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
