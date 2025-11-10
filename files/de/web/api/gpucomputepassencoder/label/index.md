---
title: "GPUComputePassEncoder: label-Eigenschaft"
short-title: label
slug: Web/API/GPUComputePassEncoder/label
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft (nur lesbar) der [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)-Schnittstelle ist ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dieses Label kann gesetzt werden, indem eine `label`-Eigenschaft im Deskriptor-Objekt angegeben wird, das an den ursprünglichen Aufruf von [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) übergeben wird, oder es kann direkt am `GPUComputePassEncoder`-Objekt gesetzt und abgerufen werden.

## Wert

Ein String. Wenn vorher kein Labelwert gesetzt wurde, wird beim Abrufen der `label`-Eigenschaft ein leerer String zurückgegeben.

## Beispiele

Setzen und Abrufen eines Labels über `GPUComputePassEncoder.label`:

```js
const commandEncoder = device.createCommandEncoder();
const passEncoder = commandEncoder.beginComputePass();

passEncoder.label = "my_compute_pass_encoder";
console.log(passEncoder.label); // "my_compute_pass_encoder"
```

Setzen eines Labels über den ursprünglichen Aufruf von [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass), und anschließendes Abrufen über `GPUComputePassEncoder.label`:

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
