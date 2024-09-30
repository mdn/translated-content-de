---
title: "GPUCommandEncoder: pushDebugGroup() Methode"
short-title: pushDebugGroup()
slug: Web/API/GPUCommandEncoder/pushDebugGroup
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`pushDebugGroup()`** Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle beginnt eine Debug-Gruppe, die mit einem angegebenen Label markiert ist und alle nachfolgenden kodierten Befehle bis zur Ausführung einer [`popDebugGroup()`](/de/docs/Web/API/GPUCommandEncoder/popDebugGroup)-Methode enthalten wird.

Diese Methode könnte für Telemetrie verwendet werden oder in Zukunft in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten, Browser-Entwicklungstools oder anderen Diensten genutzt werden, um beim Debuggen zu helfen.

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
// ...

commandEncoder.pushDebugGroup("mygroupmarker"); // Start labeled debug group

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);

passEncoder.end();

commandEncoder.popDebugGroup(); // End labeled debug group

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
