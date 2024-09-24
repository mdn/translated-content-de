---
title: "GPUComputePassEncoder: label-Eigenschaft"
short-title: label
slug: Web/API/GPUComputePassEncoder/label
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`label`** der {{domxref("GPUComputePassEncoder")}}-Schnittstelle ist ein String, der ein Label bereitstellt, welches dazu verwendet werden kann, das Objekt zu identifizieren, zum Beispiel in {{domxref("GPUError")}}-Nachrichten oder Konsolenwarnungen.

Dieses Label kann gesetzt werden, indem eine `label`-Eigenschaft im Deskriptorobjekt bereitgestellt wird, das in den ursprünglichen Aufruf von {{domxref("GPUCommandEncoder.beginComputePass()")}} übergeben wird. Alternativ können Sie es direkt am `GPUComputePassEncoder`-Objekt getten und setzen.

## Wert

Ein String. Wenn zuvor kein Label-Wert gesetzt wurde, gibt das Abrufen des Labels einen leeren String zurück.

## Beispiele

Setzen und Abrufen eines Labels über `GPUComputePassEncoder.label`:

```js
const commandEncoder = device.createCommandEncoder();
const passEncoder = commandEncoder.beginComputePass();

passEncoder.label = "mycomputepassencoder";
console.log(passEncoder.label); // "mycomputepassencoder"
```

Setzen eines Labels über den ursprünglichen {{domxref("GPUCommandEncoder.beginComputePass()")}}-Aufruf und anschließendem Abrufen über `GPUComputePassEncoder.label`:

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
