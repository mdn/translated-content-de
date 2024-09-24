---
title: "GPUComputePipeline: label-Eigenschaft"
short-title: label
slug: Web/API/GPUComputePipeline/label
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`label`**-Eigenschaft der {{domxref("GPUComputePipeline")}}-Schnittstelle bietet eine Bezeichnung, die verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in {{domxref("GPUError")}}-Nachrichten oder Konsolenwarnungen.

Diese kann gesetzt werden, indem eine `label`-Eigenschaft im Deskriptorobjekt angegeben wird, das in den ursprünglichen {{domxref("GPUDevice.createComputePipeline()")}} oder {{domxref("GPUDevice.createComputePipelineAsync()")}}-Aufruf übergeben wird, oder Sie können sie direkt am `GPUComputePipeline`-Objekt abrufen und setzen.

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

Setzen eines Labels über einen {{domxref("GPUDevice.createComputePipeline()")}}-Aufruf und anschließendes Abrufen über `GPUComputePipeline.label`:

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
