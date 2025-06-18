---
title: "GPUBindGroup: label-Eigenschaft"
short-title: label
slug: Web/API/GPUBindGroup/label
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft der [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Schnittstelle bietet ein Label, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dies kann gesetzt werden, indem eine `label`-Eigenschaft im Beschreibungsobjekt bereitgestellt wird, das in den ursprünglichen Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) übergeben wird, oder Sie können es direkt am `GPUBindGroup`-Objekt abrufen und setzen.

## Wert

Ein String. Wenn dies nicht wie oben beschrieben zuvor gesetzt wurde, ist es ein leerer String.

## Beispiele

Setzen und Abrufen eines Labels über `GPUBindGroup.label`:

```js
// …

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

Setzen eines Labels über den ursprünglichen Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) und anschließendem Abrufen über `GPUBindGroup.label`:

```js
// …

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
