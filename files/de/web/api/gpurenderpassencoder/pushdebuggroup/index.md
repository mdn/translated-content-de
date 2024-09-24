---
title: "GPURenderPassEncoder: pushDebugGroup()-Methode"
short-title: pushDebugGroup()
slug: Web/API/GPURenderPassEncoder/pushDebugGroup
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`pushDebugGroup()`**-Methode der {{domxref("GPURenderPassEncoder")}}-Schnittstelle beginnt eine Render-Pass-Debug-Gruppe, die mit einem angegebenen Label markiert ist und alle nachfolgenden kodierten Befehle bis zur Aufruf einer {{domxref("GPURenderPassEncoder.popDebugGroup", "popDebugGroup()")}}-Methode enthalten wird.

Dies könnte für Telemetrie verwendet werden oder in der Zukunft in {{domxref("GPUError")}}-Nachrichten, Entwicklerwerkzeugen von Browsern oder anderen Diensten zur Unterstützung bei der Fehlerbehebung genutzt werden.

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

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

passEncoder.pushDebugGroup("mygroupmarker"); // Starten einer mit Label versehenen Debug-Gruppe

passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);

passEncoder.popDebugGroup();

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
