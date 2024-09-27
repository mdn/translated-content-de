---
title: GPUExternalTexture
slug: Web/API/GPUExternalTexture
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUExternalTexture`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert ein Wrapper-Objekt, das einen Schnappschuss eines [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) enthält, der als Textur in GPU-Rendering-Operationen verwendet werden kann.

Ein `GPUExternalTexture`-Objekt wird mit [`GPUDevice.importExternalTexture()`](/de/docs/Web/API/GPUDevice/importExternalTexture) erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`label`](/de/docs/Web/API/GPUExternalTexture/label) {{Experimental_Inline}}
  - : Ein String, der ein Etikett bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

## Beispiele

Im WebGPU-Beispiel [Video Uploading sample](https://webgpu.github.io/webgpu-samples/samples/videoUploading/) wird ein `GPUExternalTexture`-Objekt (erstellt durch einen Aufruf von [`GPUDevice.importExternalTexture()`](/de/docs/Web/API/GPUDevice/importExternalTexture)) als Wert eines Bindgruppe-Eintrags `resource` verwendet, der beim Erstellen einer [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) durch einen Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) angegeben wird:

```js
//...
const uniformBindGroup = device.createBindGroup({
  layout: pipeline.getBindGroupLayout(0),
  entries: [
    {
      binding: 1,
      resource: sampler,
    },
    {
      binding: 2,
      resource: device.importExternalTexture({
        source: video,
      }),
    },
  ],
});
//...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
