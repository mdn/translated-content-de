---
title: "GPUCommandEncoder: clearBuffer() Methode"
short-title: clearBuffer()
slug: Web/API/GPUCommandEncoder/clearBuffer
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`clearBuffer()`**-Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle kodiert einen Befehl, der eine Region eines [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) mit Nullen füllt.

## Syntax

```js-nolint
clearBuffer(buffer)
clearBuffer(buffer, offset)
clearBuffer(buffer, offset, size)
```

### Parameter

- `buffer`
  - : Ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Objekt, das den zu löschenden Puffer darstellt.
- `offset` {{optional_inline}}
  - : Eine Zahl, die den Offset in Bytes vom Beginn des `buffer` zur zu löschenden Sub-Region darstellt. Wenn nicht angegeben, ist der Standardwert für `offset` 0.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe in Bytes der zu löschenden Sub-Region darstellt. Wenn nicht angegeben, ist der Standardwert für `size` die `buffer`-Größe minus `offset`.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`clearBuffer()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig:

- Der [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) des `buffer` enthält das `GPUBufferUsage.COPY_DST`-Flag.
- `offset` und `size` sind beide Vielfache von 4.
- Die [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) des `buffer` ist größer oder gleich `offset` + `size`.

## Beispiele

```js
// …

const buffer = device.createBuffer({
  size: 1000,
  usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
});

// Later on

const commandBuffer = device.createCommandEncoder();
commandEncoder.clearBuffer(buffer);

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
