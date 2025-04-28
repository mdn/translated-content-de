---
title: "GPUBuffer: mapState-Eigenschaft"
short-title: mapState
slug: Web/API/GPUBuffer/mapState
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`mapState`**-Eigenschaft der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Schnittstelle, die nur gelesen werden kann, repräsentiert den zugeordneten Zustand des `GPUBuffer`.

## Wert

Ein enumerierter Wert. Mögliche Werte sind:

- `unmapped`
  - : Der Buffer ist nicht zugeordnet. [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) kann nicht verwendet werden, um auf den Inhalt des `GPUBuffer` in JavaScript zuzugreifen. Dies könnte folgende Gründe haben:
    - [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync) wurde noch nicht aufgerufen.
    - Der `GPUBuffer` war zuvor zugeordnet und wurde dann mit [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) wieder freigegeben.
- `pending`
  - : Der Buffer ist noch nicht zugeordnet. [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync) wurde aufgerufen, aber dessen {{jsxref("Promise")}} ist derzeit noch ausstehend. [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) kann derzeit nicht verwendet werden, um auf den Inhalt des `GPUBuffer` in JavaScript zuzugreifen.
- `mapped`
  - : Der Buffer ist zugeordnet. Das [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync) {{jsxref("Promise")}} wurde erfüllt, und [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) kann jetzt verwendet werden, um auf den Inhalt des `GPUBuffer` in JavaScript zuzugreifen.

## Beispiele

```js
const stagingBuffer = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
});

console.log(stagingBuffer.mapState); // "unmapped"

// …

await stagingBuffer.mapAsync(
  GPUMapMode.READ,
  0, // Offset
  BUFFER_SIZE, // Length
);

console.log(stagingBuffer.mapState); // "mapped"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
