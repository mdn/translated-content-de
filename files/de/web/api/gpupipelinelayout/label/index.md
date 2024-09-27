---
title: "GPUPipelineLayout: label-Eigenschaft"
short-title: label
slug: Web/API/GPUPipelineLayout/label
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft der [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Schnittstelle bietet eine Bezeichnung, die verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Diese kann bereitgestellt werden, indem eine `label`-Eigenschaft im Beschreibungsobjekt festgelegt wird, das beim ursprünglichen Aufruf von [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) übergeben wird, oder Sie können sie direkt auf dem `GPUPipelineLayout`-Objekt abrufen und festlegen.

## Wert

Ein String. Wenn dies zuvor nicht wie oben beschrieben gesetzt wurde, wird es ein leerer String sein.

## Beispiele

Festlegen und Abrufen einer Beschriftung über `GPUPipelineLayout.label`:

```js
// ...

const pipelineLayout = device.createPipelineLayout({
  bindGroupLayouts: [bindGroupLayout],
});

pipelineLayout.label = "mypipelinelayout";

console.log(pipelineLayout.label); // "mypipelinelayout";
```

Festlegen einer Beschriftung über den ursprünglichen Aufruf von [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) und dann Abrufen über `GPUPipelineLayout.label`:

```js
// ...

const pipelineLayout = device.createPipelineLayout({
  bindGroupLayouts: [bindGroupLayout],
  label: "mypipelinelayout",
});

console.log(pipelineLayout.label); // "mypipelinelayout";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
