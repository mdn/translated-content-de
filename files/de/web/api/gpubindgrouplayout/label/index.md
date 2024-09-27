---
title: "GPUBindGroupLayout: label Eigenschaft"
short-title: label
slug: Web/API/GPUBindGroupLayout/label
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft der [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Schnittstelle bietet ein Label, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dies kann festgelegt werden, indem Sie eine `label`-Eigenschaft im Deskriptorobjekt angeben, das im ursprünglichen Aufruf von [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout) übergeben wird. Alternativ können Sie es direkt am `GPUBindGroupLayout`-Objekt abrufen und festlegen.

## Wert

Ein String. Falls dies wie oben beschrieben nicht vorher festgelegt wurde, wird es ein leerer String sein.

## Beispiele

Einstellen und Abrufen eines Labels über `GPUBindGroupLayout.label`:

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

bindGroupLayout.label = "mybindgrouplayout";

console.log(bindGroupLayout.label); // "mybindgrouplayout";
```

Festlegen eines Labels über den ursprünglichen Aufruf von [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout) und anschließendes Abrufen über `GPUBindGroupLayout.label`:

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
  label: "mybindgrouplayout",
});

console.log(bindGroupLayout.label); // "mybindgrouplayout";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
