---
title: "GPUPipelineLayout: label Eigenschaft"
short-title: label
slug: Web/API/GPUPipelineLayout/label
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft des
[`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Interfaces bietet ein Label, das zur Identifizierung des Objekts verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Diese kann gesetzt werden, indem eine `label`-Eigenschaft im Deskriptionsobjekt angegeben wird, das beim Aufruf von [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) übergeben wird. Alternativ können Sie das Label direkt auf dem `GPUPipelineLayout`-Objekt festlegen und abrufen.

## Wert

Ein String. Falls dies zuvor nicht wie oben beschrieben festgelegt wurde, ist es ein leerer String.

## Beispiele

Festlegen und Abrufen eines Labels über `GPUPipelineLayout.label`:

```js
// ...

const pipelineLayout = device.createPipelineLayout({
  bindGroupLayouts: [bindGroupLayout],
});

pipelineLayout.label = "my_pipeline_layout";

console.log(pipelineLayout.label); // "my_pipeline_layout"
```

Festlegen eines Labels über den ursprünglichen Aufruf von [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) und anschließendes Abrufen über `GPUPipelineLayout.label`:

```js
// ...

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
