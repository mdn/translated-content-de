---
title: "GPURenderPassEncoder: popDebugGroup()-Methode"
short-title: popDebugGroup()
slug: Web/API/GPURenderPassEncoder/popDebugGroup
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`popDebugGroup()`**-Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle beendet eine Render-Pass-Debug-Gruppe, die mit einem [`pushDebugGroup()`](/de/docs/Web/API/GPURenderPassEncoder/pushDebugGroup)-Aufruf begonnen wurde.

Dies könnte für Telemetrie verwendet werden oder in Zukunft in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten, Browser-Entwicklungstools oder anderen Diensten genutzt werden, um beim Debugging zu helfen.

## Syntax

```js-nolint
popDebugGroup()
```

### Parameter

Keine.

### Rückgabewert

Kein ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`popDebugGroup()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) wird ungültig:

- Der Debug-Stack des Render-Pass-Encoders ist nicht leer (d.h. es wurde zuvor mindestens eine Render-Pass-Debug-Gruppe mit [`pushDebugGroup()`](/de/docs/Web/API/GPURenderPassEncoder/pushDebugGroup) gestartet).

## Beispiele

```js
// ...

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

passEncoder.pushDebugGroup("my_group_marker"); // Start labeled debug group

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
