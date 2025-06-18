---
title: "GPUBuffer: mapState-Eigenschaft"
short-title: mapState
slug: Web/API/GPUBuffer/mapState
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`mapState`**-Eigenschaft der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die den Zuordnungszustand des `GPUBuffer` darstellt.

## Wert

Ein enumerierter Wert. Mögliche Werte sind:

- `unmapped`
  - : Der Puffer ist nicht zugeordnet. [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) kann nicht verwendet werden, um auf den Inhalt des `GPUBuffer` in JavaScript zuzugreifen. Dies könnte daran liegen:
    - [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync) wurde noch nicht aufgerufen.
    - Der `GPUBuffer` wurde zuvor zugeordnet und dann mit [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) wieder freigegeben.
- `pending`
  - : Der Puffer ist noch nicht zugeordnet. [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync) wurde aufgerufen, aber sein {{jsxref("Promise")}} ist derzeit ausstehend. [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) kann momentan nicht verwendet werden, um auf den Inhalt des `GPUBuffer` in JavaScript zuzugreifen.
- `mapped`
  - : Der Puffer ist zugeordnet. Das [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync) {{jsxref("Promise")}} wurde erfüllt, und [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) kann jetzt verwendet werden, um auf den Inhalt des `GPUBuffer` in JavaScript zuzugreifen.

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
