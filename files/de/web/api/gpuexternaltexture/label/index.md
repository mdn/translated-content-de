---
title: "GPUExternalTexture: label-Eigenschaft"
short-title: label
slug: Web/API/GPUExternalTexture/label
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft der [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Schnittstelle bietet ein Label, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dies kann durch Angabe einer `label`-Eigenschaft im Deskriptorobjekt, das in den ursprünglichen Aufruf von [`GPUDevice.importExternalTexture()`](/de/docs/Web/API/GPUDevice/importExternalTexture) übergeben wird, festgelegt werden. Alternativ können Sie es direkt am `GPUExternalTexture`-Objekt abrufen und festlegen.

## Wert

Ein String. Wenn dies wie oben beschrieben nicht zuvor festgelegt wurde, wird es ein leerer String sein.

## Beispiele

Festlegen und Abrufen eines Labels über `GPUExternalTexture.label`:

```js
// …

const externalTexture = device.importExternalTexture({
  source: video,
});

externalTexture.label = "my_ext_texture";

console.log(externalTexture.label); // "my_ext_texture"
```

Festlegen eines Labels über den ursprünglichen Aufruf von [`GPUDevice.importExternalTexture()`](/de/docs/Web/API/GPUDevice/importExternalTexture) und anschließend Abrufen über `GPUExternalTexture.label`:

```js
// …

const externalTexture = device.importExternalTexture({
  source: video,
  label: "my_ext_texture",
});

console.log(externalTexture.label); //  "my_ext_texture"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
