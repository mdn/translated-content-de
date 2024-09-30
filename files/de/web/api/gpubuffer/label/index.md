---
title: "GPUBuffer: label-Eigenschaft"
short-title: label
slug: Web/API/GPUBuffer/label
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft des [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Interfaces bietet ein Label, das zur Identifizierung des Objekts verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dieses kann durch Bereitstellen einer `label`-Eigenschaft im Deskriptorobjekt, das in den ursprünglichen Aufruf von [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) übergeben wird, gesetzt werden. Alternativ kann es direkt im `GPUBuffer`-Objekt abgerufen und gesetzt werden.

## Wert

Ein String. Wenn dies nicht wie oben beschrieben zuvor gesetzt wurde, wird es ein leerer String sein.

## Beispiele

Setzen und Abrufen eines Labels über `GPUBuffer.label`:

```js
const output = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
});

output.label = "mybuffer";

console.log(output.label); // "mybuffer"
```

Setzen eines Labels über den ursprünglichen Aufruf von [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) und anschließendem Abrufen über `GPUBuffer.label`:

```js
const output = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
  label: "mybuffer",
});

console.log(output.label); // "mybuffer"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
