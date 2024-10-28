---
title: "GPURenderBundleEncoder: Methode pushDebugGroup()"
short-title: pushDebugGroup()
slug: Web/API/GPURenderBundleEncoder/pushDebugGroup
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`pushDebugGroup()`**-Methode der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Schnittstelle beginnt eine Render-Bundle-Debug-Gruppe, die mit einem angegebenen Label markiert ist und alle nachfolgenden kodierten Befehle enthält, bis eine [`popDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/popDebugGroup)-Methode aufgerufen wird.

Dies könnte für Telemetrie verwendet werden oder möglicherweise in der Zukunft in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen, Entwicklungswerkzeugen des Browsers oder anderen Diensten zur Unterstützung der Fehlersuche eingesetzt werden.

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
// ...

const bundleEncoder = device.createRenderBundleEncoder(renderBundleDescriptor);

bundleEncoder.pushDebugGroup("my_group_marker"); // Start labeled debug group

bundleEncoder.setPipeline(renderPipeline);
bundleEncoder.setVertexBuffer(0, vertexBuffer);
bundleEncoder.draw(3);

bundleEncoder.popDebugGroup();

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
