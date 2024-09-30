---
title: "GPURenderPassEncoder: pushDebugGroup()-Methode"
short-title: pushDebugGroup()
slug: Web/API/GPURenderPassEncoder/pushDebugGroup
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`pushDebugGroup()`**-Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle beginnt eine Render-Pass-Debug-Gruppe, die mit einem angegebenen Label markiert ist und alle nachfolgenden codierten Befehle enthält, bis eine [`popDebugGroup()`](/de/docs/Web/API/GPURenderPassEncoder/popDebugGroup)-Methode aufgerufen wird.

Dies könnte für Telemetrie verwendet werden oder in Zukunft in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen, Entwicklerwerkzeugen des Browsers oder anderen Diensten hilfreich sein, um beim Debuggen zu unterstützen.

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
