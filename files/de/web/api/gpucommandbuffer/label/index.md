---
title: "GPUCommandBuffer: label-Eigenschaft"
short-title: label
slug: Web/API/GPUCommandBuffer/label
l10n:
  sourceCommit: fd69b5246378644ee2949180c83856fad474886b
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft der Schnittstelle
[`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) ist ein String, der eine Beschriftung bereitstellt, die zur Identifizierung des Objekts verwendet werden kann, beispielsweise in Meldungen von [`GPUError`](/de/docs/Web/API/GPUError) oder Konsolenwarnungen.

Diese kann festgelegt werden, indem im Deskriptorobjekt, das an den ursprünglichen Aufruf von [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) übergeben wird, eine `label`-Eigenschaft bereitgestellt wird, oder Sie können sie direkt auf dem `GPUCommandBuffer`-Objekt abrufen und festlegen.

## Wert

Ein String. Wenn zuvor kein Beschriftungswert festgelegt wurde, gibt das Abrufen der Beschriftung einen leeren String zurück.

## Beispiele

Festlegen und Abrufen einer Beschriftung über `GPUCommandBuffer.label`:

```js
const commandBuffer = commandEncoder.finish();
commandBuffer.label = "my_command_buffer";
console.log(commandBuffer.label); // "my_command_buffer"
```

Festlegen einer Beschriftung über den ursprünglichen Aufruf von [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) und anschließendes Abrufen über `GPUCommandBuffer.label`:

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
