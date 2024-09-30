---
title: "GPUSampler: label-Eigenschaft"
short-title: label
slug: Web/API/GPUSampler/label
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft der [`GPUSampler`](/de/docs/Web/API/GPUSampler) Schnittstelle bietet ein Label, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError) Meldungen oder Konsolenwarnungen.

Dies kann durch Bereitstellung einer `label` Eigenschaft in dem Descriptor-Objekt gesetzt werden, das in den ursprünglichen [`GPUDevice.createSampler()`](/de/docs/Web/API/GPUDevice/createSampler) Aufruf übergeben wird, oder Sie können es direkt am `GPUSampler` Objekt setzen und abrufen.

## Wert

Ein String. Wenn dies nicht zuvor wie oben beschrieben gesetzt wurde, ist es ein leerer String.

## Beispiele

Setzen und Abrufen eines Labels über `GPUSampler.label`:

```js
// ...

const sampler = device.createSampler({
  compare: "less",
});

sampler.label = "mysampler";

console.log(sampler.label); // "mysampler"
```

Setzen eines Labels über den ursprünglichen [`GPUDevice.createSampler()`](/de/docs/Web/API/GPUDevice/createSampler) Aufruf und dann Abrufen über `GPUSampler.label`:

```js
// ...

const sampler = device.createSampler({
  compare: "less",
  label: "mysampler",
});

console.log(sampler.label); // "mysampler"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
