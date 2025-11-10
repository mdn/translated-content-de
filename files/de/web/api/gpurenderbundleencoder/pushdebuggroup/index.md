---
title: "GPURenderBundleEncoder: Methode pushDebugGroup()"
short-title: pushDebugGroup()
slug: Web/API/GPURenderBundleEncoder/pushDebugGroup
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`pushDebugGroup()`**-Methode der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Schnittstelle startet eine Render-Bundle-Debuggruppe, die mit einem angegebenen Label gekennzeichnet ist und alle nachfolgenden enkodierten Befehle bis zur Aufruf einer [`popDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/popDebugGroup)-Methode enthält.

Dies könnte für Telemetrie verwendet werden oder in Zukunft in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen, Browser-Entwicklungstools oder anderen Diensten zur Debugging-Unterstützung genutzt werden.

> [!NOTE]
> Diese Methode ist funktional identisch mit ihrem Äquivalent auf [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) — [`pushDebugGroup()`](/de/docs/Web/API/GPURenderPassEncoder/pushDebugGroup).

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
// …

const bundleEncoder = device.createRenderBundleEncoder(renderBundleDescriptor);

bundleEncoder.pushDebugGroup("my_group_marker"); // Start labeled debug group

bundleEncoder.setPipeline(renderPipeline);
bundleEncoder.setVertexBuffer(0, vertexBuffer);
bundleEncoder.draw(3);

bundleEncoder.popDebugGroup();

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
