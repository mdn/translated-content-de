---
title: "GPUBuffer: size-Eigenschaft"
short-title: size
slug: Web/API/GPUBuffer/size
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`size`**-Eigenschaft des [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Interfaces ist eine schreibgeschützte Eigenschaft, die die Länge der Speicherzuordnung des `GPUBuffer` in Bytes darstellt.

`size` wird über die `size`-Eigenschaft im Deskriptor-Objekt festgelegt, das im ursprünglichen Aufruf von [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) übergeben wird.

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
