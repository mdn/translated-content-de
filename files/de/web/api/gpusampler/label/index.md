---
title: "GPUSampler: label-Eigenschaft"
short-title: label
slug: Web/API/GPUSampler/label
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft des [`GPUSampler`](/de/docs/Web/API/GPUSampler)-Interfaces bietet ein Label, das verwendet werden kann, um das Objekt zu identifizieren, z.B. in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dies kann festgelegt werden, indem eine `label`-Eigenschaft im Descriptor-Objekt angegeben wird, das im ursprünglichen Aufruf von [`GPUDevice.createSampler()`](/de/docs/Web/API/GPUDevice/createSampler) übergeben wird. Alternativ können Sie es direkt im `GPUSampler`-Objekt abrufen und festlegen.

## Wert

Ein String. Wenn dies, wie oben beschrieben, noch nicht festgelegt wurde, wird es ein leerer String sein.

## Beispiele

Festlegen und Abrufen eines Labels über `GPUSampler.label`:

```js
// …

const sampler = device.createSampler({
  compare: "less",
});

sampler.label = "my_sampler";

console.log(sampler.label); // "my_sampler"
```

Festlegen eines Labels über den ursprünglichen Aufruf von [`GPUDevice.createSampler()`](/de/docs/Web/API/GPUDevice/createSampler) und anschließendes Abrufen über `GPUSampler.label`:

```js
// …

const sampler = device.createSampler({
  compare: "less",
  label: "my_sampler",
});

console.log(sampler.label); // "my_sampler"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
