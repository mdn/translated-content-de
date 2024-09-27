---
title: "GPUCommandEncoder: copyBufferToBuffer()-Methode"
short-title: copyBufferToBuffer()
slug: Web/API/GPUCommandEncoder/copyBufferToBuffer
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`copyBufferToBuffer()`**-Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle codiert einen Befehl, der Daten von einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) in einen anderen kopiert.

## Syntax

```js-nolint
copyBufferToBuffer(source, sourceOffset, destination, destinationOffset, size)
```

### Parameter

- `source`
  - : Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), von dem kopiert wird.
- `sourceOffset`
  - : Der Versatz in Bytes, ab dem im `source` begonnen wird zu kopieren.
- `destination`
  - : Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), in den kopiert wird.
- `destinationOffset`
  - : Der Versatz in Bytes, ab dem im `destination` begonnen wird zu kopieren.
- `size`
  - : Die Anzahl der Bytes, die kopiert werden sollen.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`copyBufferToBuffer()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig:

- Der [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) von `source` enthält das `GPUBufferUsage.COPY_SRC`-Flag.
- Der [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) von `destination` enthält das `GPUBufferUsage.COPY_DST`-Flag.
- `size`, `sourceOffset` und `destinationOffset` sind Vielfache von 4.
- Die [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) von `source` ist größer oder gleich `sourceOffset` + `size`.
- Die [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) von `destination` ist größer oder gleich `destinationOffset` + `size`.
- `source` und `destination` sind unterschiedliche [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)s (es kann nicht vom selben Puffer kopiert und in ihn kopiert werden).

## Beispiele

In unserem [grundlegenden Berechnungs-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) verwenden wir `copyBufferToBuffer()`, um den Inhalt unseres `output`-Buffers in den `stagingBuffer` zu kopieren.

```js
// ...

// Create an output buffer to read GPU calculations to, and a staging buffer to be mapped for JavaScript access

const output = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
});

const stagingBuffer = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
});

// ...

// Create GPUCommandEncoder to encode commands to issue to the GPU
const commandEncoder = device.createCommandEncoder();

// ...

// Copy output buffer to staging buffer
commandEncoder.copyBufferToBuffer(
  output,
  0, // Source offset
  stagingBuffer,
  0, // Destination offset
  BUFFER_SIZE,
);

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
