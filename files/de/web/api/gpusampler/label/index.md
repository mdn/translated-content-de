---
title: "GPUSampler: label-Eigenschaft"
short-title: label
slug: Web/API/GPUSampler/label
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft der
[`GPUSampler`](/de/docs/Web/API/GPUSampler)-Schnittstelle bietet ein Label, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dies kann festgelegt werden, indem man eine `label`-Eigenschaft in dem Beschreibungsobjekt bereitstellt, das in den ursprünglichen [`GPUDevice.createSampler()`](/de/docs/Web/API/GPUDevice/createSampler)-Aufruf übergeben wird, oder Sie können es direkt am `GPUSampler`-Objekt festlegen und abrufen.

## Wert

Ein String. Wenn dies zuvor nicht wie oben beschrieben festgelegt wurde, wird es ein leerer String sein.

## Beispiele

Festlegen und Abrufen eines Labels über `GPUSampler.label`:

```js
// ...

const sampler = device.createSampler({
  compare: "less",
});

sampler.label = "mysampler";

console.log(sampler.label); // "mysampler"
```

Festlegen eines Labels über den ursprünglichen [`GPUDevice.createSampler()`](/de/docs/Web/API/GPUDevice/createSampler)-Aufruf und anschließendes Abrufen über `GPUSampler.label`:

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
