---
title: "GPUBindGroupLayout: label Eigenschaft"
short-title: label
slug: Web/API/GPUBindGroupLayout/label
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft der [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Schnittstelle bietet eine Bezeichnung, die zur Identifizierung des Objekts verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Diese kann durch Bereitstellung einer `label`-Eigenschaft im Deskriptorobjekt gesetzt werden, das in den ursprünglichen Aufruf von [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout) übergeben wird, oder Sie können sie direkt auf dem `GPUBindGroupLayout`-Objekt abrufen und setzen.

## Wert

Ein String. Wenn dies nicht zuvor wie oben beschrieben festgelegt wurde, wird es ein leerer String sein.

## Beispiele

Festlegen und Abrufen einer Bezeichnung über `GPUBindGroupLayout.label`:

```js
// ...

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

Festlegen einer Bezeichnung über den ursprünglichen Aufruf von [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout) und Abrufen über `GPUBindGroupLayout.label`:

```js
// ...

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
