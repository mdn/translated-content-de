---
title: "GPUBindGroup: label-Eigenschaft"
short-title: label
slug: Web/API/GPUBindGroup/label
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft des [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Interfaces bietet ein Label, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dies kann gesetzt werden, indem eine `label`-Eigenschaft im Deskriptor-Objekt bereitgestellt wird, das in den ursprünglichen [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)-Aufruf übergeben wird, oder Sie können es direkt an dem `GPUBindGroup`-Objekt abrufen und setzen.

## Wert

Ein String. Wenn dieser nicht wie oben beschrieben zuvor gesetzt wurde, wird er ein leerer String sein.

## Beispiele

Setzen und Abrufen eines Labels über `GPUBindGroup.label`:

```js
// ...

const bindGroup = device.createBindGroup({
  layout: bindGroupLayout,
  entries: [
    {
      binding: 0,
      resource: {
        buffer: output,
      },
    },
  ],
});

bindGroup.label = "my_bind_group";

console.log(bindGroup.label); // "my_bind_group"
```

Setzen eines Labels über den ursprünglichen [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)-Aufruf und anschließendem Abrufen über `GPUBindGroup.label`:

```js
// ...

const bindGroup = device.createBindGroup({
  layout: bindGroupLayout,
  entries: [
    {
      binding: 0,
      resource: {
        buffer: output,
      },
    },
  ],
  label: "my_bind_group",
});

console.log(bindGroup.label); // "my_bind_group"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
