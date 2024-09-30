---
title: "GPUCommandEncoder: clearBuffer()-Methode"
short-title: clearBuffer()
slug: Web/API/GPUCommandEncoder/clearBuffer
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
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
  - : Eine Zahl, die den Offset in Bytes vom Anfang des `buffer` zur zu löschenden Teilregion darstellt. Wird `offset` ausgelassen, wird standardmäßig 0 verwendet.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe in Bytes der zu löschenden Teilregion darstellt. Wird `size` ausgelassen, wird standardmäßig die Größe von `buffer` - `offset` verwendet.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`clearBuffer()`** aufgerufen wird, sonst wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig:

- Die [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) des `buffer` umfasst das `GPUBufferUsage.COPY_DST`-Flag.
- `offset` und `size` sind beide Vielfache von 4.
- Die [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) des `buffer` ist größer oder gleich `offset` + `size`.

## Beispiele

```js
// ...

const buffer = device.createBuffer({
  size: 1000,
  usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
});

// Later on

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
