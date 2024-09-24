---
title: "GPUCommandBuffer: label Eigenschaft"
short-title: label
slug: Web/API/GPUCommandBuffer/label
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`label`**-Eigenschaft der {{domxref("GPUCommandBuffer")}}-Schnittstelle ist ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen.

Dies kann durch Angabe einer `label`-Eigenschaft im Descriptor-Objekt, das in den ursprünglichen {{domxref("GPUCommandEncoder.finish()")}}-Aufruf übergeben wird, festgelegt werden, oder Sie können es direkt am `GPUCommandBuffer`-Objekt abrufen und festlegen.

## Wert

Ein String. Wenn zuvor kein Labelwert festgelegt wurde, gibt das Abrufen des Labels einen leeren String zurück.

## Beispiele

Festlegen und Abrufen eines Labels über `GPUCommandBuffer.label`:

```js
const commandBuffer = commandEncoder.finish();
commandBuffer.label = "mycommandbuffer";
console.log(commandBuffer.label); // "mycommandbuffer";
```

Festlegen eines Labels über den ursprünglichen {{domxref("GPUCommandEncoder.finish()")}}-Aufruf und anschließendem Abrufen über `GPUCommandBuffer.label`:

```js
const commandBuffer = commandEncoder.finish({
  label: "mycommandbuffer",
});

console.log(commandBuffer.label); // "mycommandbuffer";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
