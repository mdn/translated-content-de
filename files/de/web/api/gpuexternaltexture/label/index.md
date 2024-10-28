---
title: "GPUExternalTexture: label-Eigenschaft"
short-title: label
slug: Web/API/GPUExternalTexture/label
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft der [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Schnittstelle bietet ein Label, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dies kann gesetzt werden, indem man eine `label`-Eigenschaft im Deskriptionsobjekt bereitstellt, das im ursprünglichen [`GPUDevice.importExternalTexture()`](/de/docs/Web/API/GPUDevice/importExternalTexture)-Aufruf übergeben wird. Alternativ kann es direkt auf dem `GPUExternalTexture`-Objekt gesetzt und ausgelesen werden.

## Wert

Ein String. Falls dies nicht wie oben beschrieben zuvor gesetzt wurde, wird es ein leerer String sein.

## Beispiele

Setzen und Abrufen eines Labels über `GPUExternalTexture.label`:

```js
// ...

const externalTexture = device.importExternalTexture({
  source: video,
});

externalTexture.label = "my_ext_texture";

console.log(externalTexture.label); // "my_ext_texture"
```

Setzen eines Labels über den ursprünglichen [`GPUDevice.importExternalTexture()`](/de/docs/Web/API/GPUDevice/importExternalTexture)-Aufruf und das anschließende Abrufen über `GPUExternalTexture.label`:

```js
// ...

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
