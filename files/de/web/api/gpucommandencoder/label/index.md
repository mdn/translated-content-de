---
title: "GPUCommandEncoder: label-Eigenschaft"
short-title: label
slug: Web/API/GPUCommandEncoder/label
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`label`**-Eigenschaft der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle ist eine Zeichenkette, die eine Kennzeichnung bereitstellt, die zur Identifikation des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dies kann durch Bereitstellen einer `label`-Eigenschaft im Deskripturobjekt, das im ursprünglichen Aufruf von [`GPUDevice.createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder) übergeben wird, gesetzt werden, oder Sie können es direkt am `GPUCommandEncoder`-Objekt holen und setzen.

## Wert

Eine Zeichenkette. Wenn zuvor kein Labelwert festgelegt wurde, gibt das Abrufen des Labels eine leere Zeichenkette zurück.

## Beispiele

Festlegen und Abrufen eines Labels über `GPUCommandEncoder.label`:

```js
const commandEncoder = device.createCommandEncoder();
commandEncoder.label = "mycommandencoder";
console.log(commandEncoder.label); // "mycommandencoder";
```

Festlegen eines Labels über den ursprünglichen Aufruf von [`GPUDevice.createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder) und anschließendes Abrufen über `GPUCommandEncoder.label`:

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
