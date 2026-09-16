---
title: "GPUCommandEncoder: label-Eigenschaft"
short-title: label
slug: Web/API/GPUCommandEncoder/label
l10n:
  sourceCommit: fd69b5246378644ee2949180c83856fad474886b
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft der Schnittstelle
[`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) ist ein String, der eine Bezeichnung bereitstellt, die zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Sie kann durch Angabe einer `label`-Eigenschaft im Deskriptorobjekt gesetzt werden, das an den ursprünglichen Aufruf von [`GPUDevice.createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder) übergeben wird. Alternativ können Sie sie direkt auf dem `GPUCommandEncoder`-Objekt abrufen und setzen.

## Wert

Ein String. Wenn zuvor kein Bezeichnungswert gesetzt wurde, gibt das Abrufen der Bezeichnung einen leeren String zurück.

## Beispiele

Setzen und Abrufen einer Bezeichnung über `GPUCommandEncoder.label`:

```js
const commandEncoder = device.createCommandEncoder();
commandEncoder.label = "my_command_encoder";
console.log(commandEncoder.label); // "my_command_encoder"
```

Setzen einer Bezeichnung über den ursprünglichen Aufruf von [`GPUDevice.createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder) und anschließendes Abrufen über `GPUCommandEncoder.label`:

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
