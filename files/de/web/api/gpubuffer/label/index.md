---
title: "GPUBuffer: label-Eigenschaft"
short-title: label
slug: Web/API/GPUBuffer/label
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft des [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Interfaces bietet ein Label, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dieses Label kann gesetzt werden, indem eine `label`-Eigenschaft im Deskriptor-Objekt angegeben wird, das in den ursprünglichen Aufruf von [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) übergeben wird, oder Sie können es direkt am `GPUBuffer`-Objekt get- und setten.

## Wert

Ein String. Wenn dieser vorher nicht wie oben beschrieben gesetzt wurde, ist er ein leerer String.

## Beispiele

Setzen und Abrufen eines Labels über `GPUBuffer.label`:

```js
const output = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
});

output.label = "my_buffer";

console.log(output.label); // "my_buffer"
```

Setzen eines Labels über den ursprünglichen [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer)-Aufruf und anschließendes Abrufen über `GPUBuffer.label`:

```js
const output = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
  label: "my_buffer",
});

console.log(output.label); // "my_buffer"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
