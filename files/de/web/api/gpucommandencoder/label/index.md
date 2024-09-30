---
title: "GPUCommandEncoder: label-Eigenschaft"
short-title: label
slug: Web/API/GPUCommandEncoder/label
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`label`**-Eigenschaft der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle ist ein Zeichenfolgen-Label, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dies kann durch das Bereitstellen eines `label`-Eigenschafts im Deskriptorobjekt gesetzt werden, das beim aufrufenden [`GPUDevice.createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder)-Aufruf übergeben wird. Alternativ können Sie es direkt auf dem `GPUCommandEncoder`-Objekt abrufen und festlegen.

## Wert

Eine Zeichenfolge. Wenn vorher kein Label-Wert festgelegt wurde, gibt das Abrufen des Labels eine leere Zeichenfolge zurück.

## Beispiele

Festlegen und Abrufen eines Labels über `GPUCommandEncoder.label`:

```js
const commandEncoder = device.createCommandEncoder();
commandEncoder.label = "mycommandencoder";
console.log(commandEncoder.label); // "mycommandencoder";
```

Festlegen eines Labels über den aufrufenden [`GPUDevice.createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder)-Aufruf und anschließendes Abrufen über `GPUCommandEncoder.label`:

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
