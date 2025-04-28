---
title: "GPUCommandEncoder: copyBufferToBuffer()-Methode"
short-title: copyBufferToBuffer()
slug: Web/API/GPUCommandEncoder/copyBufferToBuffer
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`copyBufferToBuffer()`**-Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle kodiert einen Befehl, der Daten von einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) in einen anderen kopiert.

## Syntax

```js-nolint
copyBufferToBuffer(source, sourceOffset, destination, destinationOffset, size)
```

### Parameter

- `source`
  - : Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), von dem kopiert werden soll.
- `sourceOffset`
  - : Der Offset in Bytes in den `source`, ab dem das Kopieren beginnen soll.
- `destination`
  - : Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), in den kopiert werden soll.
- `destinationOffset`
  - : Der Offset in Bytes in den `destination`, ab dem das Kopieren beginnen soll.
- `size`
  - : Die Anzahl der Bytes, die kopiert werden sollen.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`copyBufferToBuffer()`** aufgerufen wird. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig:

- Das [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) von `source` enthält das `GPUBufferUsage.COPY_SRC`-Flag.
- Das [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) von `destination` enthält das `GPUBufferUsage.COPY_DST`-Flag.
- `size`, `sourceOffset` und `destinationOffset` sind alle Vielfache von 4.
- Die [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) des `source` ist größer oder gleich `sourceOffset` + `size`.
- Die [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) des `destination` ist größer oder gleich `destinationOffset` + `size`.
- `source` und `destination` sind verschiedene [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) (Sie können nicht von und zu demselben Puffer kopieren).

## Beispiele

In unserem [Basis-Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) verwenden wir `copyBufferToBuffer()`, um den Inhalt unseres `output`-Buffers in den `stagingBuffer` zu kopieren.

```js
// …

// Create an output buffer to read GPU calculations to, and a staging buffer to be mapped for JavaScript access

const output = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
});

const stagingBuffer = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
});

// …

// Create GPUCommandEncoder to encode commands to issue to the GPU
const commandEncoder = device.createCommandEncoder();

// …

// Copy output buffer to staging buffer
commandEncoder.copyBufferToBuffer(
  output,
  0, // Source offset
  stagingBuffer,
  0, // Destination offset
  BUFFER_SIZE,
);

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
