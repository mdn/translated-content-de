---
title: "GPUBuffer: size-Eigenschaft"
short-title: size
slug: Web/API/GPUBuffer/size
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`size`**-Eigenschaft der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Schnittstelle repräsentiert die Länge der Speicherzuweisung des `GPUBuffer` in Bytes.

`size` wird über die `size`-Eigenschaft im Beschreibungsobjekt festgelegt, das beim ursprünglichen Aufruf von [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) übergeben wird.

## Wert

Eine Zahl.

## Beispiele

```js
// Define global buffer size
const BUFFER_SIZE = 1000;

// ...

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
