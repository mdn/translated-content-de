---
title: "GPUCommandEncoder: copyBufferToBuffer()-Methode"
short-title: copyBufferToBuffer()
slug: Web/API/GPUCommandEncoder/copyBufferToBuffer
l10n:
  sourceCommit: 1e1e0c43a7edb8835370e4c9ebc07d60a2372cf3
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`copyBufferToBuffer()`**-Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle kodiert einen Befehl, der Daten von einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) in einen anderen kopiert.

## Syntax

```js-nolint
copyBufferToBuffer(source, destination)
copyBufferToBuffer(source, destination, size)
copyBufferToBuffer(source, sourceOffset, destination, destinationOffset, size)
```

### Parameter

- `source`
  - : Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), von dem kopiert wird.
- `sourceOffset` {{optional_inline}}
  - : Der Offset in Bytes in den `source`, ab dem das Kopieren beginnt.
- `destination`
  - : Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), in den kopiert wird.
- `destinationOffset` {{optional_inline}}
  - : Der Offset in Bytes in den `destination`, ab dem das Kopieren beginnt.
- `size` {{optional_inline}}
  - : Die Anzahl der Bytes, die kopiert werden sollen.

> [!NOTE]
> Der `sourceOffset` und `destinationOffset` können weggelassen werden, wenn ein Teil des Quellpuffers mit einem `0`-Offset in beiden Puffern kopiert wird. `sourceOffset`, `destinationOffset` und `size` können weggelassen werden, wenn der gesamte Quellpuffer in den Zielpuffer kopiert wird.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`copyBufferToBuffer()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig:

- Die [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) des `source` enthält das `GPUBufferUsage.COPY_SRC`-Flag.
- Die [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) des `destination` enthält das `GPUBufferUsage.COPY_DST`-Flag.
- `size`, `sourceOffset` und `destinationOffset` sind Vielfache von 4.
- Die [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) des `source` ist größer als oder gleich `sourceOffset` + `size`.
- Die [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) des `destination` ist größer als oder gleich `destinationOffset` + `size`.
- `source` und `destination` sind unterschiedliche [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)s (man kann nicht von und zu demselben Puffer kopieren).

## Beispiele

In unserem [basic compute demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) verwenden wir `copyBufferToBuffer()`, um den Inhalt unseres `outputBuffer` in den `stagingBuffer` zu kopieren.

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
