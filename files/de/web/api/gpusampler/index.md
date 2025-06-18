---
title: GPUSampler
slug: Web/API/GPUSampler
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUSampler`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert ein Objekt, das steuern kann, wie Shader Texturressourcendaten transformieren und filtern.

Eine `GPUSampler`-Objektinstanz wird mit der Methode [`GPUDevice.createSampler()`](/de/docs/Web/API/GPUDevice/createSampler) erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`label`](/de/docs/Web/API/GPUSampler/label)
  - : Ein String, der ein Etikett bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.

## Beispiele

Der folgende Ausschnitt erstellt ein `GPUSampler`, das trilineare Filterung durchführt und Texturkoordinaten wiederholt:

```js
// …
const sampler = device.createSampler({
  addressModeU: "repeat",
  addressModeV: "repeat",
  magFilter: "linear",
  minFilter: "linear",
  mipmapFilter: "linear",
});
```

Das WebGPU-Beispiel [Shadow Mapping sample](https://webgpu.github.io/webgpu-samples/samples/shadowMapping/) verwendet Vergleichs-Sampler, um aus einer Tiefentextur zu sampeln und Schatten zu rendern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
