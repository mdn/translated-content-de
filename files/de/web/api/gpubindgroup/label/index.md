---
title: "GPUBindGroup: label-Eigenschaft"
short-title: label
slug: Web/API/GPUBindGroup/label
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`label`**-Eigenschaft der {{domxref("GPUBindGroup")}}-Schnittstelle bietet ein Label, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in {{domxref("GPUError")}}-Nachrichten oder Konsolenwarnungen.

Dies kann durch Bereitstellung einer `label`-Eigenschaft im Deskriptor-Objekt festgelegt werden, das bei dem ursprünglichen {{domxref("GPUDevice.createBindGroup()")}}-Aufruf übergeben wird, oder Sie können es direkt am `GPUBindGroup`-Objekt setzen und abrufen.

## Wert

Ein String. Wenn dies zuvor nicht wie oben beschrieben gesetzt wurde, ist es ein leerer String.

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

Festlegen eines Labels über den ursprünglichen {{domxref("GPUDevice.createBindGroup()")}}-Aufruf und anschließend Abrufen über `GPUBindGroup.label`:

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
