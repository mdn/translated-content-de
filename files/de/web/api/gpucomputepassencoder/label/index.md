---
title: "GPUComputePassEncoder: label-Eigenschaft"
short-title: label
slug: Web/API/GPUComputePassEncoder/label
l10n:
  sourceCommit: fd69b5246378644ee2949180c83856fad474886b
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft der Schnittstelle
[`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) ist ein String, der eine Beschriftung bereitstellt, mit der das Objekt beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen identifiziert werden kann.

Diese kann festgelegt werden, indem im Deskriptorobjekt, das an den ursprünglichen Aufruf von [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) übergeben wird, eine `label`-Eigenschaft angegeben wird. Alternativ können Sie sie direkt auf dem `GPUComputePassEncoder`-Objekt abrufen und festlegen.

## Wert

Ein String. Wenn zuvor kein Beschriftungswert festgelegt wurde, gibt das Abrufen der Beschriftung einen leeren String zurück.

## Beispiele

Festlegen und Abrufen einer Beschriftung über `GPUComputePassEncoder.label`:

```js
const commandEncoder = device.createCommandEncoder();
const passEncoder = commandEncoder.beginComputePass();

passEncoder.label = "my_compute_pass_encoder";
console.log(passEncoder.label); // "my_compute_pass_encoder"
```

Festlegen einer Beschriftung über den ursprünglichen Aufruf von [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) und anschließendes Abrufen über `GPUComputePassEncoder.label`:

```js
const commandEncoder = device.createCommandEncoder();
const passEncoder = commandEncoder.beginComputePass({
  label: "my_compute_pass_encoder",
});

console.log(passEncoder.label); // "my_compute_pass_encoder"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
