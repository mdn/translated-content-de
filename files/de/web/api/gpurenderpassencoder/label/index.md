---
title: "GPURenderPassEncoder: Labeleigenschaft"
short-title: label
slug: Web/API/GPURenderPassEncoder/label
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`label`**-Eigenschaft der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle ist ein String, der ein Label zur Verfügung stellt, das zur Identifizierung des Objekts verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Diese kann durch das Bereitstellen einer `label`-Eigenschaft im Deskriptionsobjekt gesetzt werden, das im ursprünglichen [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Aufruf übergeben wird, oder Sie können sie direkt am `GPURenderPassEncoder`-Objekt abrufen und setzen.

## Wert

Ein String. Wenn zuvor kein Labelwert festgelegt wurde, gibt das Abrufen des Labels einen leeren String zurück.

## Beispiele

Ein Label über `GPURenderPassEncoder.label` setzen und abrufen:

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
passEncoder.label = "my_render_pass_encoder";

console.log(passEncoder.label); // "my_render_pass_encoder"
```

Ein Label über den ursprünglichen [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Aufruf setzen und dann über `GPURenderPassEncoder.label` abrufen:

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
  label: "my_render_pass_encoder",
};

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

console.log(passEncoder.label); // "my_render_pass_encoder"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
