---
title: "GPURenderPassEncoder: label-Eigenschaft"
short-title: label
slug: Web/API/GPURenderPassEncoder/label
l10n:
  sourceCommit: fd69b5246378644ee2949180c83856fad474886b
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft der Schnittstelle
[`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) ist ein String, der eine Bezeichnung bereitstellt, mit der das Objekt identifiziert werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Sie kann festgelegt werden, indem im Deskriptorobjekt, das an den ursprünglichen Aufruf von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) übergeben wird, eine `label`-Eigenschaft angegeben wird. Alternativ können Sie sie direkt auf dem `GPURenderPassEncoder`-Objekt abrufen und festlegen.

## Wert

Ein String. Wenn zuvor kein Bezeichnungswert festgelegt wurde, gibt das Abrufen der Bezeichnung einen leeren String zurück.

## Beispiele

Festlegen und Abrufen einer Bezeichnung über `GPURenderPassEncoder.label`:

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

Festlegen einer Bezeichnung über den ursprünglichen Aufruf von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) und anschließendes Abrufen über `GPURenderPassEncoder.label`:

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
