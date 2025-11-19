---
title: "GPUCommandEncoder: Eigentum label"
short-title: label
slug: Web/API/GPUCommandEncoder/label
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft des [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Interfaces ist eine schreibgeschützte Zeichenkette, die eine Bezeichnung bereitstellt, mit der das Objekt identifiziert werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Diese Bezeichnung kann bereitgestellt werden, indem eine `label`-Eigenschaft in das Descriptor-Objekt eingefügt wird, das an den ursprünglichen Aufruf von [`GPUDevice.createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder) übergeben wird, oder Sie können sie direkt am `GPUCommandEncoder`-Objekt abrufen und setzen.

## Wert

Eine Zeichenkette. Wenn zuvor kein Labelwert festgelegt wurde, gibt das Abrufen des Labels eine leere Zeichenkette zurück.

## Beispiele

Ein Label über `GPUCommandEncoder.label` setzen und abrufen:

```js
const commandEncoder = device.createCommandEncoder();
commandEncoder.label = "my_command_encoder";
console.log(commandEncoder.label); // "my_command_encoder"
```

Ein Label über den ursprünglichen Aufruf von [`GPUDevice.createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder) setzen und es dann über `GPUCommandEncoder.label` abrufen:

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
