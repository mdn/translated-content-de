---
title: "GPUCommandBuffer: label-Eigenschaft"
short-title: label
slug: Web/API/GPUCommandBuffer/label
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`label`**-Eigenschaft des [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Interfaces ist ein String, der ein Label bereitstellt, das zur Identifikation des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dies kann durch Bereitstellung einer `label`-Eigenschaft im Deskriptor-Objekt festgelegt werden, das in den ursprünglichen [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish)-Aufruf übergeben wird. Alternativ können Sie es direkt am `GPUCommandBuffer`-Objekt abrufen und festlegen.

## Wert

Ein String. Wenn zuvor kein Label-Wert festgelegt wurde, gibt das Abrufen des Labels einen leeren String zurück.

## Beispiele

Festlegen und Abrufen eines Labels über `GPUCommandBuffer.label`:

```js
const commandBuffer = commandEncoder.finish();
commandBuffer.label = "my_command_buffer";
console.log(commandBuffer.label); // "my_command_buffer"
```

Festlegen eines Labels über den ursprünglichen [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish)-Aufruf und anschließendes Abrufen über `GPUCommandBuffer.label`:

```js
const commandBuffer = commandEncoder.finish({
  label: "my_command_buffer",
});

console.log(commandBuffer.label); // "my_command_buffer"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
