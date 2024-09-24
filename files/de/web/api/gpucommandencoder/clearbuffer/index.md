---
title: "GPUCommandEncoder: clearBuffer()-Methode"
short-title: clearBuffer()
slug: Web/API/GPUCommandEncoder/clearBuffer
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`clearBuffer()`**-Methode der {{domxref("GPUCommandEncoder")}}-Schnittstelle kodiert einen Befehl, der einen Bereich eines {{domxref("GPUBuffer")}} mit Nullen füllt.

## Syntax

```js-nolint
clearBuffer(buffer)
clearBuffer(buffer, offset)
clearBuffer(buffer, offset, size)
```

### Parameter

- `buffer`
  - : Ein {{domxref("GPUBuffer")}}-Objekt, das den zu löschenden Puffer darstellt.
- `offset` {{optional_inline}}
  - : Eine Zahl, die den Offset in Bytes vom Anfang des `buffer` bis zum zu löschenden Teilbereich darstellt. Wenn nicht angegeben, wird `offset` auf 0 gesetzt.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe in Bytes des zu löschenden Teilbereichs darstellt. Wenn nicht angegeben, wird `size` auf die `buffer`-Größe - `offset` gesetzt.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`clearBuffer()`** aufgerufen wird, andernfalls wird ein {{domxref("GPUValidationError")}} generiert und der {{domxref("GPUCommandEncoder")}} wird ungültig:

- Die {{domxref("GPUBuffer.usage")}} des `buffer` beinhaltet das `GPUBufferUsage.COPY_DST`-Flag.
- `offset` und `size` sind beide Vielfache von 4.
- Die {{domxref("GPUBuffer.size")}} des `buffer` ist größer oder gleich `offset` + `size`.

## Beispiele

```js
// ...

const buffer = device.createBuffer({
  size: 1000,
  usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
});

// Später

const commandBuffer = device.createCommandEncoder();
commandEncoder.clearBuffer(buffer);

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
