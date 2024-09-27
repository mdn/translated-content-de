---
title: "GPURenderBundleEncoder: pushDebugGroup()-Methode"
short-title: pushDebugGroup()
slug: Web/API/GPURenderBundleEncoder/pushDebugGroup
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`pushDebugGroup()`**-Methode der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Schnittstelle beginnt eine Render-Bundle-Debug-Gruppe, die mit einem angegebenen Label markiert wird und alle nachfolgenden kodierten Befehle enthält, bis eine [`popDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/popDebugGroup)-Methode aufgerufen wird.

Dies könnte für Telemetrie verwendet werden oder in der Zukunft in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen, Entwicklerwerkzeugen im Browser oder anderen Diensten zur Unterstützung des Debuggings genutzt werden.

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

bundleEncoder.pushDebugGroup("mygroupmarker"); // Start labeled debug group

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
