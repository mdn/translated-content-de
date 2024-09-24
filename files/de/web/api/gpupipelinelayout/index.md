---
title: GPUPipelineLayout
slug: Web/API/GPUPipelineLayout
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`GPUPipelineLayout`**-Schnittstelle der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} definiert die {{domxref("GPUBindGroupLayout")}}s, die von einer Pipeline verwendet werden. {{domxref("GPUBindGroup")}}s, die mit der Pipeline während der Befehlskodierung verwendet werden, müssen kompatible {{domxref("GPUBindGroupLayout")}}s haben.

Ein `GPUPipelineLayout`-Objekt wird mit der Methode {{domxref("GPUDevice.createPipelineLayout()")}} erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("GPUPipelineLayout.label", "label")}} {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, welches zur Identifikation des Objekts verwendet werden kann, zum Beispiel in {{domxref("GPUError")}}-Nachrichten oder Konsolenwarnungen.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) enthalten viele weitere Beispiele.

### Grundlegendes Beispiel für ein Pipeline-Layout

Der folgende Ausschnitt:

- Erstellt ein {{domxref("GPUBindGroupLayout")}}, das eine Bindung mit einem Puffer, einer Textur und einem Sampler beschreibt.
- Erstellt ein `GPUPipelineLayout` basierend auf dem {{domxref("GPUBindGroupLayout")}}.

```js
// ...

const bindGroupLayout = device.createBindGroupLayout({
  entries: [
    {
      binding: 0,
      visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
      buffer: {},
    },
    {
      binding: 1,
      visibility: GPUShaderStage.FRAGMENT,
      texture: {},
    },
    {
      binding: 2,
      visibility: GPUShaderStage.FRAGMENT,
      sampler: {},
    },
  ],
});

const pipelineLayout = device.createPipelineLayout({
  bindGroupLayouts: [bindGroupLayout],
});

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
