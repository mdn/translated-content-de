---
title: "GPUSampler: label-Eigenschaft"
short-title: label
slug: Web/API/GPUSampler/label
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft des
[`GPUSampler`](/de/docs/Web/API/GPUSampler)-Interfaces bietet eine Bezeichnung, die verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dies kann durch Bereitstellung einer `label`-Eigenschaft im Deskriptor-Objekt, das beim ursprünglichen Aufruf von [`GPUDevice.createSampler()`](/de/docs/Web/API/GPUDevice/createSampler) übergeben wird, gesetzt werden. Oder Sie können es direkt auf dem `GPUSampler`-Objekt lesen und setzen.

## Wert

Ein String. Wenn dies nicht zuvor wie oben beschrieben gesetzt wurde, ist es ein leerer String.

## Beispiele

Setzen und Lesen einer Bezeichnung über `GPUSampler.label`:

```js
// ...

const sampler = device.createSampler({
  compare: "less",
});

sampler.label = "my_sampler";

console.log(sampler.label); // "my_sampler"
```

Setzen einer Bezeichnung über den ursprünglichen Aufruf von [`GPUDevice.createSampler()`](/de/docs/Web/API/GPUDevice/createSampler) und dann Abrufen über `GPUSampler.label`:

```js
// ...

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
