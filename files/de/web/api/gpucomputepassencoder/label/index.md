---
title: "GPUComputePassEncoder: Label-Eigenschaft"
short-title: label
slug: Web/API/GPUComputePassEncoder/label
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`** Eigenschaft der [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)-Schnittstelle ist eine schreibgeschützte Zeichenkette, die ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren. Zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dieses Label kann gesetzt werden, indem eine `label`-Eigenschaft im Deskriptordatenobjekt angegeben wird, das im ursprünglichen Aufruf von [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) übergeben wird. Alternativ können Sie es direkt auf dem `GPUComputePassEncoder`-Objekt setzen und abrufen.

## Wert

Eine Zeichenkette. Wenn zuvor kein Label gesetzt wurde, liefert das Abrufen des Labels einen leeren String.

## Beispiele

Setzen und Abrufen eines Labels über `GPUComputePassEncoder.label`:

```js
const commandEncoder = device.createCommandEncoder();
const passEncoder = commandEncoder.beginComputePass();

passEncoder.label = "mycomputepassencoder";
console.log(passEncoder.label); // "mycomputepassencoder"
```

Setzen eines Labels über den ursprünglichen Aufruf von [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) und anschließend das Abrufen über `GPUComputePassEncoder.label`:

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
