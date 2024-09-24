---
title: "GPUBuffer: size-Eigenschaft"
short-title: size
slug: Web/API/GPUBuffer/size
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`size`** des {{domxref("GPUBuffer")}}-Interfaces gibt die Länge der Speicherzuweisung des `GPUBuffer` in Bytes an.

`size` wird über die `size`-Eigenschaft im Deskriptorobjekt festgelegt, das in den Ursprungsaufruf von {{domxref("GPUDevice.createBuffer()")}} übergeben wird.

## Wert

Eine Zahl.

## Beispiele

```js
// Definieren Sie die globale Puffergröße
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
