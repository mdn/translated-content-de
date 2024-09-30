---
title: "GPUCommandBuffer: label-Eigenschaft"
short-title: label
slug: Web/API/GPUCommandBuffer/label
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`label`**-Eigenschaft der [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Schnittstelle ist ein String, der eine Bezeichnung bereitstellt, die zur Identifizierung des Objekts verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Diese kann durch Angabe einer `label`-Eigenschaft im Beschreibungsobjekt festgelegt werden, das beim ursprünglichen Aufruf von [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) übergeben wird, oder Sie können sie direkt am `GPUCommandBuffer`-Objekt abrufen und festlegen.

## Wert

Ein String. Wenn noch kein Bezeichnungswert festgelegt wurde, gibt das Abrufen der Bezeichnung einen leeren String zurück.

## Beispiele

Festlegen und Abrufen einer Bezeichnung über `GPUCommandBuffer.label`:

```js
const commandBuffer = commandEncoder.finish();
commandBuffer.label = "mycommandbuffer";
console.log(commandBuffer.label); // "mycommandbuffer";
```

Festlegen einer Bezeichnung über den ursprünglichen Aufruf von [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) und anschließendes Abrufen über `GPUCommandBuffer.label`:

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
