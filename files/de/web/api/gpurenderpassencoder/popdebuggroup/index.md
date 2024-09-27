---
title: "GPURenderPassEncoder: popDebugGroup() Methode"
short-title: popDebugGroup()
slug: Web/API/GPURenderPassEncoder/popDebugGroup
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`popDebugGroup()`**-Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle beendet eine Render-Pass-Debug-Gruppe, die mit einem [`pushDebugGroup()`](/de/docs/Web/API/GPURenderPassEncoder/pushDebugGroup)-Aufruf begonnen wurde.

Dies könnte für Telemetrie verwendet werden oder in Zukunft in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten, Entwicklertools des Browsers oder anderen Diensten genutzt werden, um bei der Fehlersuche zu helfen.

## Syntax

```js-nolint
popDebugGroup()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`popDebugGroup()`** aufgerufen wird. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) wird ungültig:

- Der Debug-Stack des Render-Pass-Encoders ist nicht leer (d. h. mindestens eine Render-Pass-Debug-Gruppe wurde zuvor mit [`pushDebugGroup()`](/de/docs/Web/API/GPURenderPassEncoder/pushDebugGroup) gestartet).

## Beispiele

```js
// ...

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

passEncoder.pushDebugGroup("mygroupmarker"); // Start labeled debug group

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
