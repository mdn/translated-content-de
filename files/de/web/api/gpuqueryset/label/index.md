---
title: "GPUQuerySet: label-Eigenschaft"
short-title: label
slug: Web/API/GPUQuerySet/label
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft der [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Schnittstelle ist ein String, der ein Label bereitstellt, welches verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dies kann durch Bereitstellen einer `label`-Eigenschaft im Deskriptorobjekt festgelegt werden, das in den ursprünglichen Aufruf von [`GPUDevice.createQuerySet()`](/de/docs/Web/API/GPUDevice/createQuerySet) übergeben wird. Sie können es auch direkt am `GPUQuerySet`-Objekt festlegen und abrufen.

## Wert

Ein String. Wenn dies, wie oben beschrieben, nicht zuvor festgelegt wurde, ist es ein leerer String.

## Beispiele

Festlegen und Abrufen eines Labels über `GPUQuerySet.label`:

```js
const querySet = device.createQuerySet({
  type: "occlusion",
  count: 32,
});

querySet.label = "my_query_set";

console.log(querySet.label); // "my_query_set"
```

Festlegen eines Labels über den ursprünglichen Aufruf von [`GPUDevice.createQuerySet()`](/de/docs/Web/API/GPUDevice/createQuerySet) und anschließendes Abrufen über `GPUQuerySet.label`:

```js
const querySet = device.createQuerySet({
  type: "occlusion",
  count: 32,
  label: "my_query_set",
});

console.log(querySet.label); // "my_query_set"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
