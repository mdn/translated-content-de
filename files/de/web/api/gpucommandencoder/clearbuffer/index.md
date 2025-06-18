---
title: "GPUCommandEncoder: clearBuffer() Methode"
short-title: clearBuffer()
slug: Web/API/GPUCommandEncoder/clearBuffer
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`clearBuffer()`**-Methode der
[`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle kodiert einen Befehl, der einen Bereich eines [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) mit Nullen füllt.

## Syntax

```js-nolint
clearBuffer(buffer)
clearBuffer(buffer, offset)
clearBuffer(buffer, offset, size)
```

### Parameter

- `buffer`
  - : Ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Objekt, das den zu leerenden Puffer darstellt.
- `offset` {{optional_inline}}
  - : Eine Zahl, die den Versatz in Bytes vom Anfang des `buffer` bis zur zu leerenden Teilregion darstellt. Wenn weggelassen, ist der Standardwert für `offset` 0.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe in Bytes der zu leerenden Teilregion darstellt. Wenn weggelassen, ist `size` standardmäßig die `buffer`-Größe minus `offset`.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`clearBuffer()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig:

- Die [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) des `buffer` beinhaltet das `GPUBufferUsage.COPY_DST`-Flag.
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
