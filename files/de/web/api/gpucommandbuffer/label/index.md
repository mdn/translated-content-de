---
title: "GPUCommandBuffer: label-Eigenschaft"
short-title: label
slug: Web/API/GPUCommandBuffer/label
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`label`**-Eigenschaft des [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Interfaces ist ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dieses kann gesetzt werden, indem eine `label`-Eigenschaft im Deskriptor-Objekt übergeben wird, das im ursprünglichen Aufruf von [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) verwendet wird. Alternativ können Sie es direkt auf dem `GPUCommandBuffer`-Objekt abrufen und setzen.

## Wert

Ein String. Wenn zuvor kein Labelwert gesetzt wurde, gibt das Abrufen des Labels einen leeren String zurück.

## Beispiele

Setzen und Abrufen eines Labels über `GPUCommandBuffer.label`:

```js
const commandBuffer = commandEncoder.finish();
commandBuffer.label = "mycommandbuffer";
console.log(commandBuffer.label); // "mycommandbuffer";
```

Setzen eines Labels über den ursprünglichen Aufruf von [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) und dann Abrufen über `GPUCommandBuffer.label`:

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
