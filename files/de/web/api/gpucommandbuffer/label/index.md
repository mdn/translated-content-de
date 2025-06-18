---
title: "GPUCommandBuffer: label-Eigenschaft"
short-title: label
slug: Web/API/GPUCommandBuffer/label
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`label`**-Eigenschaft der [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Schnittstelle ist ein String, der ein Label bereitstellt, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dieses Label kann gesetzt werden, indem eine `label`-Eigenschaft im Deskriptorobjekt angegeben wird, das in den ursprünglichen Aufruf von [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) übergeben wird. Alternativ können Sie es direkt am `GPUCommandBuffer`-Objekt abrufen und setzen.

## Wert

Ein String. Wenn zuvor kein Labelwert gesetzt wurde, gibt das Abrufen des Labels einen leeren String zurück.

## Beispiele

Setzen und Abrufen eines Labels über `GPUCommandBuffer.label`:

```js
const commandBuffer = commandEncoder.finish();
commandBuffer.label = "my_command_buffer";
console.log(commandBuffer.label); // "my_command_buffer"
```

Setzen eines Labels über den ursprünglichen Aufruf von [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) und anschließendem Abrufen über `GPUCommandBuffer.label`:

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
