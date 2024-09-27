---
title: "GPUExternalTexture: label-Eigenschaft"
short-title: label
slug: Web/API/GPUExternalTexture/label
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft der [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Schnittstelle bietet ein Label, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.

Dies kann durch Angabe einer `label`-Eigenschaft im Deskriptionsobjekt festgelegt werden, das in den ursprünglichen Aufruf von [`GPUDevice.importExternalTexture()`](/de/docs/Web/API/GPUDevice/importExternalTexture) übergeben wird. Sie können es auch direkt auf dem `GPUExternalTexture`-Objekt abfragen und festlegen.

## Wert

Ein String. Wenn dieser nicht wie oben beschrieben zuvor gesetzt wurde, ist er ein leerer String.

## Beispiele

Festlegen und Abrufen eines Labels über `GPUExternalTexture.label`:

```js
// ...

const externalTexture = device.importExternalTexture({
  source: video,
});

externalTexture.label = "myExtTexture";

console.log(externalTexture.label); // "myExtTexture"
```

Festlegen eines Labels über den ursprünglichen [`GPUDevice.importExternalTexture()`](/de/docs/Web/API/GPUDevice/importExternalTexture)-Aufruf und dann Abrufen über `GPUExternalTexture.label`:

```js
// ...

const externalTexture = device.importExternalTexture({
  source: video,
  label: "myExtTexture",
});

console.log(externalTexture.label); //  "myExtTexture"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
