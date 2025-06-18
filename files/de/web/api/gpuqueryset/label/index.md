---
title: "GPUQuerySet: label-Eigenschaft"
short-title: label
slug: Web/API/GPUQuerySet/label
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft des
[`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Interfaces ist ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.

Dies kann durch das Bereitstellen einer `label`-Eigenschaft im Deskriptor-Objekt, das bei dem ursprünglichen Aufruf von [`GPUDevice.createQuerySet()`](/de/docs/Web/API/GPUDevice/createQuerySet) übergeben wird, gesetzt werden oder Sie können es direkt auf dem `GPUQuerySet`-Objekt setzen und abrufen.

## Wert

Ein String. Wenn dies nicht wie oben beschrieben gesetzt wurde, wird es ein leerer String sein.

## Beispiele

Setzen und Abrufen eines Labels über `GPUQuerySet.label`:

```js
const querySet = device.createQuerySet({
  type: "occlusion",
  count: 32,
});

querySet.label = "my_query_set";

console.log(querySet.label); // "my_query_set"
```

Setzen eines Labels über den ursprünglichen Aufruf von [`GPUDevice.createQuerySet()`](/de/docs/Web/API/GPUDevice/createQuerySet), und anschließend Abrufen über `GPUQuerySet.label`:

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

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
