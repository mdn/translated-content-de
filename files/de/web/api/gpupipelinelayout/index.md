---
title: GPUPipelineLayout
slug: Web/API/GPUPipelineLayout
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUPipelineLayout`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) definiert die [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s, die von einer Pipeline verwendet werden. [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), die während der Befehlskodierung mit der Pipeline verwendet werden, müssen kompatible [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s haben.

Ein `GPUPipelineLayout`-Objekt wird mit der Methode [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`label`](/de/docs/Web/API/GPUPipelineLayout/label) {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Pipeline-Layout-Beispiel

Der folgende Schnipsel:

- Erstellt ein [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), das eine Bindung mit einem Buffer, einer Textur und einem Sampler beschreibt.
- Erstellt ein `GPUPipelineLayout` basierend auf dem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout).

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
