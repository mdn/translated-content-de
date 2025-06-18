---
title: "GPUComputePassEncoder: pushDebugGroup() Methode"
short-title: pushDebugGroup()
slug: Web/API/GPUComputePassEncoder/pushDebugGroup
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`pushDebugGroup()`** Methode der [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) Schnittstelle beginnt eine Compute-Pass-Debug-Gruppe, die mit einem angegebenen Label gekennzeichnet ist und alle nachfolgenden enkodierten Befehle bis zur Aufruf der [`popDebugGroup()`](/de/docs/Web/API/GPUComputePassEncoder/popDebugGroup) Methode enthalten wird.

Dies könnte für Telemetrie verwendet werden oder in Zukunft in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten, Entwickler-Tools von Browsern oder anderen Diensten zur Unterstützung beim Debugging eingesetzt werden.

## Syntax

```js-nolint
pushDebugGroup(groupLabel)
```

### Parameter

- `groupLabel`
  - : Ein String, der das Label für die Debug-Gruppe repräsentiert.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

## Beispiele

```js
// …

const passEncoder = commandEncoder.beginComputePass();

passEncoder.pushDebugGroup("my_group_marker"); // Start labeled debug group

passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(BUFFER_SIZE / 64));

passEncoder.popDebugGroup();

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
