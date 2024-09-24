---
title: "GPUPipelineLayout: label-Eigenschaft"
short-title: label
slug: Web/API/GPUPipelineLayout/label
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`label`**-Eigenschaft der {{domxref("GPUPipelineLayout")}}-Schnittstelle bietet ein Label, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen.

Dieses kann festgelegt werden, indem eine `label`-Eigenschaft im Deskriptor-Objekt angegeben wird, das in den ursprünglichen {{domxref("GPUDevice.createPipelineLayout()")}}-Aufruf übergeben wird, oder Sie können es direkt am `GPUPipelineLayout`-Objekt abrufen und setzen.

## Wert

Ein String. Wenn dies zuvor nicht wie oben beschrieben gesetzt wurde, wird es ein leerer String sein.

## Beispiele

Setzen und Abrufen eines Labels über `GPUPipelineLayout.label`:

```js
// ...

const pipelineLayout = device.createPipelineLayout({
  bindGroupLayouts: [bindGroupLayout],
});

pipelineLayout.label = "mypipelinelayout";

console.log(pipelineLayout.label); // "mypipelinelayout";
```

Setzen eines Labels über den ursprünglichen {{domxref("GPUDevice.createPipelineLayout()")}}-Aufruf und dann Abrufen über `GPUPipelineLayout.label`:

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
