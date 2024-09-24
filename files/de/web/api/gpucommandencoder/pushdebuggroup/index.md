---
title: "GPUCommandEncoder: Methode pushDebugGroup()"
short-title: pushDebugGroup()
slug: Web/API/GPUCommandEncoder/pushDebugGroup
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`pushDebugGroup()`** Methode der {{domxref("GPUCommandEncoder")}} Schnittstelle beginnt eine Debug-Gruppe, die mit einem spezifizierten Label markiert ist, und alle folgenden codierten Befehle bis zur Ausführung der {{domxref("GPUCommandEncoder.popDebugGroup", "popDebugGroup()")}} Methode enthalten wird.

Dies könnte für Telemetrie genutzt werden, oder möglicherweise in Zukunft in {{domxref("GPUError")}} Nachrichten, Entwicklertools des Browsers oder anderen Diensten verwendet werden, um beim Debugging zu helfen.

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

commandEncoder.pushDebugGroup("mygroupmarker"); // Startet die benannte Debug-Gruppe

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);

passEncoder.end();

commandEncoder.popDebugGroup(); // Beendet die benannte Debug-Gruppe

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
