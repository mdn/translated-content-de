---
title: "GPUSampler: label Eigenschaft"
short-title: label
slug: Web/API/GPUSampler/label
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`** Eigenschaft des [`GPUSampler`](/de/docs/Web/API/GPUSampler)-Interfaces bietet ein Label, das zur Identifizierung des Objekts verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder in Konsolenwarnungen.

Dies kann gesetzt werden, indem eine `label`-Eigenschaft im Deskriptorobjekt angegeben wird, das in den ursprünglichen Aufruf von [`GPUDevice.createSampler()`](/de/docs/Web/API/GPUDevice/createSampler) übergeben wird, oder Sie können es direkt am `GPUSampler`-Objekt abrufen und setzen.

## Wert

Ein String. Wenn dies nicht wie oben beschrieben zuvor gesetzt wurde, ist es ein leerer String.

## Beispiele

Setzen und Abrufen eines Labels über `GPUSampler.label`:

```js
// …

const sampler = device.createSampler({
  compare: "less",
});

sampler.label = "my_sampler";

console.log(sampler.label); // "my_sampler"
```

Setzen eines Labels über den ursprünglichen Aufruf von [`GPUDevice.createSampler()`](/de/docs/Web/API/GPUDevice/createSampler) und anschließendes Abrufen über `GPUSampler.label`:

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
