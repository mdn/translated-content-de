---
title: "GPUComputePipeline: label-Eigenschaft"
short-title: label
slug: Web/API/GPUComputePipeline/label
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft der [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)-Schnittstelle bietet ein Label, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Diese kann gesetzt werden, indem eine `label`-Eigenschaft im Deskriptorobjekt angegeben wird, das in den ursprünglichen Aufruf von [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) oder [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) übergeben wird, oder Sie können sie direkt am `GPUComputePipeline`-Objekt abrufen und festlegen.

## Wert

Ein String. Wenn dies nicht wie oben beschrieben zuvor festgelegt wurde, ist es ein leerer String.

## Beispiele

Setzen und Abrufen eines Labels über `GPUComputePipeline.label`:

```js
// ...

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

Setzen eines Labels über einen [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline)-Aufruf und anschließendes Abrufen über `GPUComputePipeline.label`:

```js
// ...

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
