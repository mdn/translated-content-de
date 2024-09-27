---
title: "GPUComputePassEncoder: label-Eigenschaft"
short-title: label
slug: Web/API/GPUComputePassEncoder/label
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`label`**-Eigenschaft des [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)-Interfaces ist ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dies kann durch Bereitstellung einer `label`-Eigenschaft im Deskriptor-Objekt gesetzt werden, das dem ursprünglichen Aufruf von [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) übergeben wird, oder Sie können es direkt am `GPUComputePassEncoder`-Objekt abrufen und setzen.

## Wert

Ein String. Wenn kein Labelwert zuvor gesetzt wurde, gibt das Abrufen des Labels einen leeren String zurück.

## Beispiele

Setzen und Abrufen eines Labels über `GPUComputePassEncoder.label`:

```js
const commandEncoder = device.createCommandEncoder();
const passEncoder = commandEncoder.beginComputePass();

passEncoder.label = "mycomputepassencoder";
console.log(passEncoder.label); // "mycomputepassencoder"
```

Setzen eines Labels über den ursprünglichen Aufruf von [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) und dann Abrufen über `GPUComputePassEncoder.label`:

```js
const commandEncoder = device.createCommandEncoder();
const passEncoder = commandEncoder.beginComputePass({
  label: "mycomputepassencoder",
});

console.log(passEncoder.label); // "mycomputepassencoder"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
