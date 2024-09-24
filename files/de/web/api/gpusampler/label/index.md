---
title: "GPUSampler: Eigenschaft label"
short-title: label
slug: Web/API/GPUSampler/label
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`label`**-Eigenschaft der {{domxref("GPUSampler")}}-Schnittstelle bietet ein Label, das zur Identifikation des Objekts verwendet werden kann, beispielsweise in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen.

Dies kann durch Angabe einer `label`-Eigenschaft im Descriptor-Objekt gesetzt werden, das in den ursprünglichen {{domxref("GPUDevice.createSampler()")}}-Aufruf übergeben wird, oder Sie können es direkt auf dem `GPUSampler`-Objekt setzen und abrufen.

## Wert

Ein String. Wenn dies wie oben beschrieben nicht vorher festgelegt wurde, wird es ein leerer String sein.

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

Festlegen eines Labels über den ursprünglichen {{domxref("GPUDevice.createSampler()")}}-Aufruf und dann Abrufen über `GPUSampler.label`:

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
