---
title: "GPUQuerySet: Eigenschaft label"
short-title: label
slug: Web/API/GPUQuerySet/label
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft der
[`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Schnittstelle ist ein String, der ein Label bereitstellt, um das Objekt zu identifizieren, z. B. in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dieses Label kann festgelegt werden, indem eine `label`-Eigenschaft im Deskriptorobjekt angegeben wird, das im ursprünglichen Aufruf von [`GPUDevice.createQuerySet()`](/de/docs/Web/API/GPUDevice/createQuerySet) übergeben wird. Sie können es auch direkt am `GPUQuerySet`-Objekt setzen und abrufen.

## Wert

Ein String. Wenn dies wie oben beschrieben nicht vorher festgelegt wurde, wird es ein leerer String sein.

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

Festlegen eines Labels über den ursprünglichen Aufruf von [`GPUDevice.createQuerySet()`](/de/docs/Web/API/GPUDevice/createQuerySet) und anschließendes Abrufen über `GPUQuerySet.label`:

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
