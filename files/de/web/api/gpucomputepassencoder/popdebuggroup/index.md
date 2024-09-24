---
title: "GPUComputePassEncoder: popDebugGroup()-Methode"
short-title: popDebugGroup()
slug: Web/API/GPUComputePassEncoder/popDebugGroup
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`popDebugGroup()`**-Methode der {{domxref("GPUComputePassEncoder")}}-Schnittstelle beendet eine Debug-Gruppe für Compute-Pass, die mit einem {{domxref("GPUComputePassEncoder.pushDebugGroup", "pushDebugGroup()")}}-Aufruf begonnen wurde.

Dies könnte für Telemetrie verwendet werden oder in Zukunft in {{domxref("GPUError")}}-Nachrichten, Entwicklerwerkzeugen des Browsers oder anderen Diensten genutzt werden, um beim Debugging zu helfen.

## Syntax

```js-nolint
popDebugGroup()
```

### Parameter

Keine.

### Rückgabewert

Kein ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`popDebugGroup()`** aufgerufen wird, andernfalls wird ein {{domxref("GPUValidationError")}} erzeugt und der {{domxref("GPUComputePassEncoder")}} wird ungültig:

- Der Debug-Stack des Compute-Pass-Encoders ist nicht leer (d.h. mindestens eine Compute-Pass-Debug-Gruppe wurde zuvor mit {{domxref("GPUComputePassEncoder.pushDebugGroup", "pushDebugGroup()")}} gestartet).

## Beispiele

```js
// ...

const passEncoder = commandEncoder.beginComputePass();

passEncoder.pushDebugGroup("mygroupmarker"); // Starten der markierten Debug-Gruppe

passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(BUFFER_SIZE / 64));

passEncoder.popDebugGroup();

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
