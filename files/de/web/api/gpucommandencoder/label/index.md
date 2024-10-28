---
title: "GPUCommandEncoder: label-Eigenschaft"
short-title: label
slug: Web/API/GPUCommandEncoder/label
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Schreibgeschützte Eigenschaft der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle ist ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen zu identifizieren.

Dies kann durch Bereitstellung einer `label`-Eigenschaft im Descriptor-Objekt, das in den ursprünglichen [`GPUDevice.createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder)-Aufruf übergeben wird, gesetzt werden, oder Sie können es direkt am `GPUCommandEncoder`-Objekt erhalten und setzen.

## Wert

Ein String. Wenn zuvor kein Labelwert gesetzt wurde, gibt das Abrufen des Labels einen leeren String zurück.

## Beispiele

Setzen und Abrufen eines Labels über `GPUCommandEncoder.label`:

```js
const commandEncoder = device.createCommandEncoder();
commandEncoder.label = "my_command_encoder";
console.log(commandEncoder.label); // "my_command_encoder"
```

Setzen eines Labels über den ursprünglichen [`GPUDevice.createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder)-Aufruf und anschließendes Abrufen über `GPUCommandEncoder.label`:

```js
const commandEncoder = device.createCommandEncoder({
  label: "my_command_encoder",
});

console.log(commandEncoder.label); // "my_command_encoder"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
