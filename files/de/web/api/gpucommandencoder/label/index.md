---
title: "GPUCommandEncoder: label Eigenschaft"
short-title: label
slug: Web/API/GPUCommandEncoder/label
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`label`** schreibgeschützte Eigenschaft des {{domxref("GPUCommandEncoder")}}-Interfaces ist ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen.

Dies kann durch Angabe einer `label`-Eigenschaft im Beschreibungsobjekt, das in den ursprünglichen {{domxref("GPUDevice.createCommandEncoder()")}}-Aufruf übergeben wird, gesetzt werden, oder Sie können es direkt am `GPUCommandEncoder`-Objekt abrufen und setzen.

## Wert

Ein String. Wenn noch kein Labelwert festgelegt wurde, gibt das Abrufen des Labels einen leeren String zurück.

## Beispiele

Festlegen und Abrufen eines Labels über `GPUCommandEncoder.label`:

```js
const commandEncoder = device.createCommandEncoder();
commandEncoder.label = "mycommandencoder";
console.log(commandEncoder.label); // "mycommandencoder";
```

Festlegen eines Labels über den ursprünglichen {{domxref("GPUDevice.createCommandEncoder()")}}-Aufruf und dann das Abrufen über `GPUCommandEncoder.label`:

```js
const commandEncoder = device.createCommandEncoder({
  label: "mycommandencoder",
});

console.log(commandEncoder.label); // "mycommandencoder";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
