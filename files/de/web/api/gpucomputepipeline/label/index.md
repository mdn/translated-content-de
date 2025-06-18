---
title: "GPUComputePipeline: label-Eigenschaft"
short-title: label
slug: Web/API/GPUComputePipeline/label
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft des [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)-Interfaces liefert ein Label, das zur Identifikation des Objekts verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dieses kann durch die Angabe einer `label`-Eigenschaft im Deskriptorobjekt gesetzt werden, das in den ursprünglichen Aufruf von [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) oder [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) übergeben wird. Alternativ können Sie es direkt auf dem `GPUComputePipeline`-Objekt abrufen und setzen.

## Wert

Ein String. Wenn dieser nicht wie oben beschrieben zuvor gesetzt wurde, wird er als leerer String vorliegen.

## Beispiele

Ein Label über `GPUComputePipeline.label` setzen und abrufen:

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

Ein Label über einen [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline)-Aufruf setzen und dann über `GPUComputePipeline.label` abrufen:

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
