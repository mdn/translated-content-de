---
title: "GPUBindGroup: label-Eigenschaft"
short-title: label
slug: Web/API/GPUBindGroup/label
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft der [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Schnittstelle bietet ein Label, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.

Dies kann festgelegt werden, indem Sie eine `label`-Eigenschaft im Descriptor-Objekt bereitstellen, das beim ursprünglichen Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) übergeben wird, oder Sie können es direkt auf dem `GPUBindGroup`-Objekt festlegen und abrufen.

## Wert

Ein String. Wenn dies nicht wie oben beschrieben zuvor festgelegt wurde, wird es ein leerer String sein.

## Beispiele

Festlegen und Abrufen eines Labels über `GPUBindGroup.label`:

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

bindGroup.label = "mybindgroup";

console.log(bindGroup.label); // "mybindgroup";
```

Festlegen eines Labels über den ursprünglichen [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)-Aufruf und anschließendes Abrufen über `GPUBindGroup.label`:

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
  label: "mybindgroup",
});

console.log(bindGroup.label); // "mybindgroup";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
