---
title: "GPUBuffer: size-Eigenschaft"
short-title: size
slug: Web/API/GPUBuffer/size
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`size`**-Eigenschaft des [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Interfaces ist eine schreibgeschützte Eigenschaft, die die Länge der Speicherzuweisung des `GPUBuffer` in Bytes darstellt.

`size` wird über die `size`-Eigenschaft im Deskriptor-Objekt gesetzt, das in den ursprünglichen Aufruf von [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) übergeben wird.

## Wert

Eine Zahl.

## Beispiele

```js
// Define global buffer size
const BUFFER_SIZE = 1000;

// …

const output = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
});

console.log(output.size); // 1000
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
