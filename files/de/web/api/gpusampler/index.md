---
title: GPUSampler
slug: Web/API/GPUSampler
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUSampler`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert ein Objekt, das steuern kann, wie Shader Texturressourcendaten transformieren und filtern.

Ein `GPUSampler`-Objekt wird mit der Methode [`GPUDevice.createSampler()`](/de/docs/Web/API/GPUDevice/createSampler) erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`label`](/de/docs/Web/API/GPUSampler/label) {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, welches verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

## Beispiele

Der folgende Codeausschnitt erstellt einen `GPUSampler`, der trilineares Filtern durchführt und Texturkoordinaten wiederholt:

```js
// ...
const sampler = device.createSampler({
  addressModeU: "repeat",
  addressModeV: "repeat",
  magFilter: "linear",
  minFilter: "linear",
  mipmapFilter: "linear",
});
```

Das WebGPU-Beispiel [Shadow Mapping sample](https://webgpu.github.io/webgpu-samples/samples/shadowMapping/) verwendet Vergleichs-Sampler, um aus einer Tiefentextur Schatten zu rendern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
