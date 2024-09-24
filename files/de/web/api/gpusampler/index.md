---
title: GPUSampler
slug: Web/API/GPUSampler
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`GPUSampler`**-Schnittstelle der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} repräsentiert ein Objekt, das steuern kann, wie Shader Texturdaten transformieren und filtern.

Ein `GPUSampler`-Objektinstanz wird mit der Methode {{domxref("GPUDevice.createSampler()")}} erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("GPUSampler.label", "label")}} {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt beispielsweise in {{domxref("GPUError")}}-Nachrichten oder Konsolenwarnungen zu identifizieren.

## Beispiele

Das folgende Snippet erstellt einen `GPUSampler`, der trilineare Filterung durchführt und Texturkoordinaten wiederholt:

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
