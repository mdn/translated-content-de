---
title: "GPUComputePipeline: label-Eigenschaft"
short-title: label
slug: Web/API/GPUComputePipeline/label
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft der [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)-Schnittstelle bietet eine Bezeichnung, die verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.

Diese kann gesetzt werden, indem eine `label`-Eigenschaft im Deskriptorobjekt bereitgestellt wird, das in den Aufruf von [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) oder [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) übergeben wird, oder Sie können sie direkt am `GPUComputePipeline`-Objekt abrufen und setzen.

## Wert

Ein String. Wenn dies nicht wie oben beschrieben zuvor gesetzt wurde, wird es ein leerer String sein.

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

computePipeline.label = "mycomputepipeline";

console.log(computePipeline.label); // "mycomputepipeline"
```

Setzen eines Labels über einen Aufruf von [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) und anschließendes Abrufen über `GPUComputePipeline.label`:

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
  label: "mycomputepipeline",
});

console.log(computePipeline.label); // "mycomputepipeline"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
