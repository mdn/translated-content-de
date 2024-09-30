---
title: "GPUComputePassEncoder: pushDebugGroup()-Methode"
short-title: pushDebugGroup()
slug: Web/API/GPUComputePassEncoder/pushDebugGroup
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`pushDebugGroup()`**-Methode der
[`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)-Schnittstelle startet eine Debug-Gruppe für einen Compute-Pass, die mit einem angegebenen Label markiert ist und alle nachfolgenden kodierten Befehle enthält, bis eine [`popDebugGroup()`](/de/docs/Web/API/GPUComputePassEncoder/popDebugGroup)-Methode aufgerufen wird.

Dies könnte für Telemetrie verwendet werden oder in Zukunft in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen, Entwicklerwerkzeugen des Browsers oder anderen Diensten zur Unterstützung bei der Fehlersuche genutzt werden.

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
