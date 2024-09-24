---
title: "GPUBindGroupLayout: label-Eigenschaft"
short-title: label
slug: Web/API/GPUBindGroupLayout/label
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`label`**-Eigenschaft der {{domxref("GPUBindGroupLayout")}}-Schnittstelle bietet ein Label, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen.

Dies kann festgelegt werden, indem eine `label`-Eigenschaft im Deskriptorobjekt angegeben wird, das in den Ursprung {{domxref("GPUDevice.createBindGroupLayout()")}}-Aufruf übergeben wird, oder Sie können es direkt am `GPUBindGroupLayout`-Objekt abrufen und festlegen.

## Wert

Ein String. Wenn dies nicht wie oben beschrieben zuvor festgelegt wurde, wird es ein leerer String sein.

## Beispiele

Festlegen und Abrufen eines Labels über `GPUBindGroupLayout.label`:

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

Festlegen eines Labels über den ursprünglichen {{domxref("GPUDevice.createBindGroupLayout()")}}-Aufruf und anschließend Abrufen über `GPUBindGroupLayout.label`:

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
