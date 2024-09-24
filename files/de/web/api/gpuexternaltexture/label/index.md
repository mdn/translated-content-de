---
title: "GPUExternalTexture: label-Eigenschaft"
short-title: label
slug: Web/API/GPUExternalTexture/label
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`label`**-Eigenschaft des {{domxref("GPUExternalTexture")}}-Interfaces stellt eine Beschriftung zur Verfügung, die verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen.

Diese kann durch Bereitstellung einer `label`-Eigenschaft im Descriptor-Objekt, das in den ursprünglichen {{domxref("GPUDevice.importExternalTexture()")}}-Aufruf übergeben wird, festgelegt werden oder Sie können sie direkt am `GPUExternalTexture`-Objekt festlegen und abrufen.

## Wert

Ein String. Wenn dieser zuvor nicht wie oben beschrieben gesetzt wurde, wird es ein leerer String sein.

## Beispiele

Festlegen und Abrufen einer Beschriftung über `GPUExternalTexture.label`:

```js
// ...

const externalTexture = device.importExternalTexture({
  source: video,
});

externalTexture.label = "myExtTexture";

console.log(externalTexture.label); // "myExtTexture"
```

Festlegen einer Beschriftung über den ursprünglichen {{domxref("GPUDevice.importExternalTexture()")}}-Aufruf und dann Abrufen über `GPUExternalTexture.label`:

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
