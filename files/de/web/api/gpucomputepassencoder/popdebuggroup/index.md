---
title: "GPUComputePassEncoder: popDebugGroup()-Methode"
short-title: popDebugGroup()
slug: Web/API/GPUComputePassEncoder/popDebugGroup
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`popDebugGroup()`**-Methode der [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)-Schnittstelle beendet eine Compute-Pass-Debug-Gruppe, die mit einem Aufruf von [`pushDebugGroup()`](/de/docs/Web/API/GPUComputePassEncoder/pushDebugGroup) begonnen wurde.

Dies könnte für Telemetrie verwendet werden oder in der Zukunft in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen, Browser-Entwicklungstools oder anderen Diensten genutzt werden, um beim Debuggen zu helfen.

## Syntax

```js-nolint
popDebugGroup()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`popDebugGroup()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) wird ungültig:

- Der Debug-Stack des Compute-Pass-Encoders ist nicht leer (d.h. mindestens eine Compute-Pass-Debug-Gruppe wurde zuvor mit [`pushDebugGroup()`](/de/docs/Web/API/GPUComputePassEncoder/pushDebugGroup) gestartet).

## Beispiele

```js
// ...

const passEncoder = commandEncoder.beginComputePass();

passEncoder.pushDebugGroup("mygroupmarker"); // Start labeled debug group

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
