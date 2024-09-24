---
title: "GPUCommandEncoder: copyBufferToBuffer() Methode"
short-title: copyBufferToBuffer()
slug: Web/API/GPUCommandEncoder/copyBufferToBuffer
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`copyBufferToBuffer()`** Methode der {{domxref("GPUCommandEncoder")}}-Schnittstelle kodiert einen Befehl, der Daten von einem {{domxref("GPUBuffer")}} auf einen anderen kopiert.

## Syntax

```js-nolint
copyBufferToBuffer(source, sourceOffset, destination, destinationOffset, size)
```

### Parameter

- `source`
  - : Der {{domxref("GPUBuffer")}}, von dem kopiert werden soll.
- `sourceOffset`
  - : Der Versatz in Bytes, von dem begonnen wird, aus dem `source` zu kopieren.
- `destination`
  - : Der {{domxref("GPUBuffer")}}, in den kopiert werden soll.
- `destinationOffset`
  - : Der Versatz in Bytes, bei dem begonnen wird, in die `destination` zu kopieren.
- `size`
  - : Die Anzahl der Bytes, die kopiert werden sollen.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`copyBufferToBuffer()`** aufgerufen wird, ansonsten wird ein {{domxref("GPUValidationError")}} erzeugt und der {{domxref("GPUCommandEncoder")}} wird ungültig:

- Der {{domxref("GPUBuffer.usage")}} des `source` enthält das `GPUBufferUsage.COPY_SRC`-Flag.
- Der {{domxref("GPUBuffer.usage")}} der `destination` enthält das `GPUBufferUsage.COPY_DST`-Flag.
- `size`, `sourceOffset` und `destinationOffset` sind alle Vielfache von 4.
- Die {{domxref("GPUBuffer.size")}} des `source` ist größer oder gleich `sourceOffset` + `size`.
- Die {{domxref("GPUBuffer.size")}} der `destination` ist größer oder gleich `destinationOffset` + `size`.
- `source` und `destination` sind unterschiedliche {{domxref("GPUBuffer")}}s (es ist nicht möglich, aus demselben Puffer zu kopieren und in denselben zu schreiben).

## Beispiele

In unserem [einfachen Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) verwenden wir `copyBufferToBuffer()`, um den Inhalt unseres `output` Puffers in den `stagingBuffer` zu kopieren.

```js
// ...

// Erstellen Sie einen Ausgabe-Puffer, um GPU-Berechnungen zu lesen, und einen Staging-Puffer, der für den JavaScript-Zugriff abgebildet wird

const output = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
});

const stagingBuffer = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
});

// ...

// Erstellen Sie einen GPUCommandEncoder, um Befehle zu kodieren, die an die GPU ausgegeben werden sollen
const commandEncoder = device.createCommandEncoder();

// ...

// Kopieren Sie den Ausgabe-Puffer in den Staging-Puffer
commandEncoder.copyBufferToBuffer(
  output,
  0, // Quellversatz
  stagingBuffer,
  0, // Zielversatz
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
