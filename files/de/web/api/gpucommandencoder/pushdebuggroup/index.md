---
title: "GPUCommandEncoder: pushDebugGroup() Methode"
short-title: pushDebugGroup()
slug: Web/API/GPUCommandEncoder/pushDebugGroup
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`pushDebugGroup()`** Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) Schnittstelle beginnt eine Debug-Gruppe, die mit einem angegebenen Label markiert ist und alle nachfolgenden codierten Befehle enthalten wird, bis eine [`popDebugGroup()`](/de/docs/Web/API/GPUCommandEncoder/popDebugGroup) Methode aufgerufen wird.

Dies könnte zur Telemetrie verwendet werden oder in Zukunft in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen, Browser-Entwicklungstools oder anderen Diensten genutzt werden, um bei der Fehlersuche zu helfen.

## Syntax

```js-nolint
pushDebugGroup(groupLabel)
```

### Parameter

- `groupLabel`
  - : Ein String, der das Label für die Debug-Gruppe darstellt.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

## Beispiele

```js
// …

commandEncoder.pushDebugGroup("my_group_marker"); // Start labeled debug group

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);

passEncoder.end();

commandEncoder.popDebugGroup(); // End labeled debug group

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
