---
title: "GPUBuffer: mapState Eigenschaft"
short-title: mapState
slug: Web/API/GPUBuffer/mapState
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`mapState`** schreibgeschützte Eigenschaft des {{domxref("GPUBuffer")}} Interfaces repräsentiert den Mapping-Zustand des `GPUBuffer`.

## Wert

Ein enumerierter Wert. Mögliche Werte sind:

- `unmapped`
  - : Der Puffer ist nicht gemappt. {{domxref("GPUBuffer.getMappedRange()")}} kann nicht verwendet werden, um auf die Inhalte des `GPUBuffer` in JavaScript zuzugreifen. Dies könnte daran liegen, dass:
    - {{domxref("GPUBuffer.mapAsync()")}} noch nicht aufgerufen wurde.
    - Der `GPUBuffer` zuvor gemappt und dann mit {{domxref("GPUBuffer.unmap()")}} wieder ungemappt wurde.
- `pending`
  - : Der Puffer ist noch nicht gemappt. {{domxref("GPUBuffer.mapAsync()")}} wurde aufgerufen, aber sein {{jsxref("Promise")}} ist derzeit ausstehend. {{domxref("GPUBuffer.getMappedRange()")}} kann momentan nicht verwendet werden, um auf die Inhalte des `GPUBuffer` in JavaScript zuzugreifen.
- `mapped`
  - : Der Puffer ist gemappt. Das {{domxref("GPUBuffer.mapAsync()")}} {{jsxref("Promise")}} wurde erfüllt, und {{domxref("GPUBuffer.getMappedRange()")}} kann nun verwendet werden, um auf die Inhalte des `GPUBuffer` in JavaScript zuzugreifen.

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
