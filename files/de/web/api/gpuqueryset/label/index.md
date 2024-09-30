---
title: "GPUQuerySet: label-Eigenschaft"
short-title: label
slug: Web/API/GPUQuerySet/label
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft der [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) Schnittstelle ist ein String, der ein Etikett bereitstellt, das verwendet werden kann, um das Objekt beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError) Nachrichten oder Konsolenwarnungen zu identifizieren.

Dies kann durch Bereitstellung einer `label`-Eigenschaft im Descriptor-Objekt geschehen, das beim ursprünglichen Aufruf von [`GPUDevice.createQuerySet()`](/de/docs/Web/API/GPUDevice/createQuerySet) übergeben wird, oder Sie können es direkt am `GPUQuerySet`-Objekt lesen und setzen.

## Wert

Ein String. Wenn dies nicht wie oben beschrieben vorher gesetzt wurde, wird es ein leerer String sein.

## Beispiele

Setzen und Abrufen eines Etiketts über `GPUQuerySet.label`:

```js
const querySet = device.createQuerySet({
  type: "occlusion",
  count: 32,
});

querySet.label = "myqueryset";

console.log(querySet.label); // "myqueryset"
```

Setzen eines Etiketts über den ursprünglichen Aufruf von [`GPUDevice.createQuerySet()`](/de/docs/Web/API/GPUDevice/createQuerySet) und anschließendem Abrufen über `GPUQuerySet.label`:

```js
const querySet = device.createQuerySet({
  type: "occlusion",
  count: 32,
  label: "myqueryset",
});

console.log(querySet.label); // "myqueryset"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
