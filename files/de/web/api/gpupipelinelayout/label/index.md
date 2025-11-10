---
title: "GPUPipelineLayout: label-Eigenschaft"
short-title: label
slug: Web/API/GPUPipelineLayout/label
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft des
[`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Interfaces bietet ein Label, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dies kann durch das Bereitstellen einer `label`-Eigenschaft im Deskriptorobjekt, das im ursprünglichen Aufruf von [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) übergeben wird, eingestellt werden, oder Sie können es direkt auf dem `GPUPipelineLayout`-Objekt abrufen und setzen.

## Wert

Ein String. Wenn dies nicht zuvor wie oben beschrieben gesetzt wurde, wird es ein leerer String sein.

## Beispiele

Setzen und Abrufen eines Labels über `GPUPipelineLayout.label`:

```js
// …

const pipelineLayout = device.createPipelineLayout({
  bindGroupLayouts: [bindGroupLayout],
});

pipelineLayout.label = "my_pipeline_layout";

console.log(pipelineLayout.label); // "my_pipeline_layout"
```

Setzen eines Labels über den ursprünglichen Aufruf von [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) und anschließend das Abrufen über `GPUPipelineLayout.label`:

```js
// …

const pipelineLayout = device.createPipelineLayout({
  bindGroupLayouts: [bindGroupLayout],
  label: "my_pipeline_layout",
});

console.log(pipelineLayout.label); // "my_pipeline_layout"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
