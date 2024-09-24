---
title: GPUExternalTexture
slug: Web/API/GPUExternalTexture
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`GPUExternalTexture`**-Schnittstelle der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} repräsentiert ein Wrapper-Objekt, das ein {{domxref("HTMLVideoElement")}}-Abbild enthält, das als Textur in GPU-Rendering-Operationen verwendet werden kann.

Ein `GPUExternalTexture`-Objektinstanz wird mit {{domxref("GPUDevice.importExternalTexture()")}} erstellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- {{domxref("GPUExternalTexture.label", "label")}} {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, das genutzt werden kann, um das Objekt zu identifizieren, beispielsweise in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen.

## Beispiele

Im WebGPU-Beispiel [Video-Upload-Beispiel](https://webgpu.github.io/webgpu-samples/samples/videoUploading/) wird ein `GPUExternalTexture`-Objekt (erstellt durch einen {{domxref("GPUDevice.importExternalTexture()")}}-Aufruf) als Wert eines Bind-Group-Eintrags `resource` verwendet, der bei der Erstellung einer {{domxref("GPUBindGroup")}} durch einen {{domxref("GPUDevice.createBindGroup()")}}-Aufruf angegeben wird:

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
