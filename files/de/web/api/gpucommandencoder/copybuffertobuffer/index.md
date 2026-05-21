---
title: "GPUCommandEncoder: copyBufferToBuffer()-Methode"
short-title: copyBufferToBuffer()
slug: Web/API/GPUCommandEncoder/copyBufferToBuffer
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}

Die **`copyBufferToBuffer()`**-Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle kodiert einen Befehl, der Daten von einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) in einen anderen kopiert.

## Syntax

```js-nolint
copyBufferToBuffer(source, destination)
copyBufferToBuffer(source, destination, size)
copyBufferToBuffer(source, sourceOffset, destination, destinationOffset, size)
```

### Parameter

- `source`
  - : Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), von dem kopiert werden soll.
- `sourceOffset` {{optional_inline}}
  - : Der Offset, in Bytes, ab dem im `source` mit dem Kopieren begonnen wird.
- `destination`
  - : Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), in den kopiert werden soll.
- `destinationOffset` {{optional_inline}}
  - : Der Offset, in Bytes, ab dem im `destination` mit dem Kopieren begonnen wird.
- `size` {{optional_inline}}
  - : Die Anzahl der Bytes, die kopiert werden sollen.

> [!NOTE]
> Der `sourceOffset` und der `destinationOffset` können weggelassen werden, wenn Sie einen Teil des Quell-Puffers mit einem Offset von `0` in beiden Puffern kopieren. Der `sourceOffset`, `destinationOffset` und `size` können weggelassen werden, wenn Sie den gesamten Quell-Puffer in den Ziel-Puffer kopieren.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`copyBufferToBuffer()`** aufgerufen wird. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig:

- Der [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) des `source` enthält das `GPUBufferUsage.COPY_SRC`-Flag.
- Der [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) des `destination` enthält das `GPUBufferUsage.COPY_DST`-Flag.
- `size`, `sourceOffset` und `destinationOffset` sind alle Vielfache von 4.
- Die [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) des `source` ist größer oder gleich `sourceOffset` + `size`.
- Die [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) des `destination` ist größer oder gleich `destinationOffset` + `size`.
- `source` und `destination` sind verschiedene [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) (es kann nicht vom gleichen Puffer aus und in denselben Puffer kopiert werden).

## Beispiele

In unserem [Basis-Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) verwenden wir `copyBufferToBuffer()`, um den Inhalt unseres `outputBuffer` in den `stagingBuffer` zu kopieren.

```js
// …

// Create an output buffer to read GPU calculations to, and a staging buffer to be mapped for JavaScript access

const outputBuffer = device.createBuffer({
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
  outputBuffer,
  0, // Source offset
  stagingBuffer,
  0, // Destination offset
  BUFFER_SIZE,
);

// Since we are copying the entire buffer, this can be shortened to
// commandEncoder.copyBufferToBuffer(outputBuffer, stagingBuffer);

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
