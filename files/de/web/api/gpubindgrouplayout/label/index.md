---
title: "GPUBindGroupLayout: label-Eigenschaft"
short-title: label
slug: Web/API/GPUBindGroupLayout/label
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft des [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Interfaces bietet ein Label, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dies kann festgelegt werden, indem eine `label`-Eigenschaft im Deskriptorobjekt angegeben wird, das in den ursprünglichen Aufruf von [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout) übergeben wird, oder Sie können es direkt am `GPUBindGroupLayout`-Objekt abrufen und festlegen.

## Wert

Ein String. Wenn dies wie oben beschrieben nicht zuvor gesetzt wurde, wird es ein leerer String sein.

## Beispiele

Festlegen und Abrufen eines Labels über `GPUBindGroupLayout.label`:

```js
// …

const bindGroupLayout = device.createBindGroupLayout({
  entries: [
    {
      binding: 0,
      visibility: GPUShaderStage.COMPUTE,
      buffer: {
        type: "storage",
      },
    },
  ],
});

bindGroupLayout.label = "my_bind_group_layout";

console.log(bindGroupLayout.label); // "my_bind_group_layout"
```

Festlegen eines Labels über den ursprünglichen Aufruf von [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout) und anschließendes Abrufen über `GPUBindGroupLayout.label`:

```js
// …

const bindGroupLayout = device.createBindGroupLayout({
  entries: [
    {
      binding: 0,
      visibility: GPUShaderStage.COMPUTE,
      buffer: {
        type: "storage",
      },
    },
  ],
  label: "my_bind_group_layout",
});

console.log(bindGroupLayout.label); // "my_bind_group_layout"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
