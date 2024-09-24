---
title: "GPUQuerySet: label-Eigenschaft"
short-title: label
slug: Web/API/GPUQuerySet/label
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`label`**-Eigenschaft der {{domxref("GPUQuerySet")}}-Schnittstelle ist ein String, der ein Label bereitstellt, das dazu verwendet werden kann, das Objekt zu identifizieren, beispielsweise in {{domxref("GPUError")}}-Nachrichten oder Konsolenwarnungen.

Dies kann durch Bereitstellung einer `label`-Eigenschaft im Deskriptorobjekt, das in den ursprünglichen {{domxref("GPUDevice.createQuerySet()")}}-Aufruf übergeben wird, festgelegt werden, oder Sie können es direkt am `GPUQuerySet`-Objekt abfragen und festlegen.

## Wert

Ein String. Wenn dies nicht wie oben beschrieben vorher festgelegt wurde, ist es ein leerer String.

## Beispiele

Festlegen und Abrufen eines Labels über `GPUQuerySet.label`:

```js
const querySet = device.createQuerySet({
  type: "occlusion",
  count: 32,
});

querySet.label = "myqueryset";

console.log(querySet.label); // "myqueryset"
```

Festlegen eines Labels über den ursprünglichen {{domxref("GPUDevice.createQuerySet()")}}-Aufruf und anschließendes Abrufen über `GPUQuerySet.label`:

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
