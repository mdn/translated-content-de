---
title: "GPUComputePipeline: label-Eigenschaft"
short-title: label
slug: Web/API/GPUComputePipeline/label
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft der [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)-Schnittstelle bietet eine Bezeichnung, die verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Diese kann festgelegt werden, indem eine `label`-Eigenschaft im Deskriptor-Objekt angegeben wird, das an den [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline)- oder [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync)-Aufruf übergeben wird. Alternativ können Sie sie direkt am `GPUComputePipeline`-Objekt abrufen und festlegen.

## Wert

Ein String. Wenn dies zuvor nicht wie oben beschrieben festgelegt wurde, ist es ein leerer String.

## Beispiele

Festlegen und Abrufen einer Bezeichnung über `GPUComputePipeline.label`:

```js
// …

const computePipeline = device.createComputePipeline({
  layout: device.createPipelineLayout({
    bindGroupLayouts: [bindGroupLayout],
  }),
  compute: {
    module: shaderModule,
    entryPoint: "main",
  },
});

computePipeline.label = "my_compute_pipeline";

console.log(computePipeline.label); // "my_compute_pipeline"
```

Festlegen einer Bezeichnung über einen [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline)-Aufruf und anschließendes Abrufen über `GPUComputePipeline.label`:

```js
// …

const computePipeline = device.createComputePipeline({
  layout: device.createPipelineLayout({
    bindGroupLayouts: [bindGroupLayout],
  }),
  compute: {
    module: shaderModule,
    entryPoint: "main",
  },
  label: "my_compute_pipeline",
});

console.log(computePipeline.label); // "my_compute_pipeline"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
