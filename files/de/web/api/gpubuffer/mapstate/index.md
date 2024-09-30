---
title: "GPUBuffer: mapState-Eigenschaft"
short-title: mapState
slug: Web/API/GPUBuffer/mapState
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`mapState`** schreibgeschützte Eigenschaft der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Schnittstelle stellt den gemappten Zustand des `GPUBuffer` dar.

## Wert

Ein enumerierter Wert. Mögliche Werte sind:

- `unmapped`
  - : Der Buffer ist nicht gemappt. [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) kann nicht verwendet werden, um auf den Inhalt des `GPUBuffer` in JavaScript zuzugreifen. Dies könnte der Fall sein, weil:
    - [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync) noch nicht aufgerufen wurde.
    - Der `GPUBuffer` vorher gemappt und dann mit [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) wieder entmappt wurde.
- `pending`
  - : Der Buffer ist noch nicht gemappt. [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync) wurde aufgerufen, aber sein {{jsxref("Promise")}} ist derzeit ausstehend. [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) kann derzeit nicht verwendet werden, um auf den Inhalt des `GPUBuffer` in JavaScript zuzugreifen.
- `mapped`
  - : Der Buffer ist gemappt. Der [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync) {{jsxref("Promise")}} wurde erfüllt, und [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) kann nun verwendet werden, um auf den Inhalt des `GPUBuffer` in JavaScript zuzugreifen.

## Beispiele

```js
const stagingBuffer = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
});

console.log(stagingBuffer.mapState); // "unmapped"

// ...

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
