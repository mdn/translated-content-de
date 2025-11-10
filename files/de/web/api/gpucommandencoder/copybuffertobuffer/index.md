---
title: "GPUCommandEncoder: copyBufferToBuffer() Methode"
short-title: copyBufferToBuffer()
slug: Web/API/GPUCommandEncoder/copyBufferToBuffer
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}

Die **`copyBufferToBuffer()`**-Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle kodiert einen Befehl, der Daten von einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) zu einem anderen kopiert.

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
  - : Der Offset in Bytes im `source`, ab dem mit dem Kopieren begonnen wird.
- `destination`
  - : Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), in den kopiert wird.
- `destinationOffset` {{optional_inline}}
  - : Der Offset in Bytes im `destination`, ab dem in den Buffer kopiert wird.
- `size` {{optional_inline}}
  - : Die Anzahl der Bytes, die kopiert werden sollen.

> [!NOTE]
> Der `sourceOffset` und `destinationOffset` können weggelassen werden, wenn Sie einen Teil des Quell-Buffers mit einem Offset von `0` in beiden Buffern kopieren. `sourceOffset`, `destinationOffset` und `size` können weggelassen werden, wenn Sie den gesamten Quell-Buffer in den Ziel-Buffer kopieren.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`copyBufferToBuffer()`** aufgerufen wird, sonst wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig:

- Der `source`'s [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) enthält das `GPUBufferUsage.COPY_SRC`-Flag.
- Der `destination`'s [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) enthält das `GPUBufferUsage.COPY_DST`-Flag.
- `size`, `sourceOffset` und `destinationOffset` sind alle Vielfache von 4.
- Der `source`'s [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) ist größer oder gleich `sourceOffset` + `size`.
- Der `destination`'s [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) ist größer oder gleich `destinationOffset` + `size`.
- `source` und `destination` sind unterschiedliche [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)s (Sie können nicht vom selben Buffer kopieren und zu diesem zurückkopieren).

## Beispiele

In unserem [einfachen Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) verwenden wir `copyBufferToBuffer()`, um den Inhalt unseres `outputBuffer` in den `stagingBuffer` zu kopieren.

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
