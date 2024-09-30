---
title: "GPURenderBundleEncoder: popDebugGroup()-Methode"
short-title: popDebugGroup()
slug: Web/API/GPURenderBundleEncoder/popDebugGroup
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`popDebugGroup()`**-Methode der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Schnittstelle beendet eine Render-Bundle-Debuggruppe, die mit einem [`pushDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/pushDebugGroup)-Aufruf begonnen wurde.

Dies könnte für Telemetrie verwendet werden oder in Zukunft in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen, Browser-Entwicklungstools oder anderen Diensten genutzt werden, um bei der Fehlerbehebung zu helfen.

> [!NOTE]
> Diese Methode ist funktional identisch mit ihrem Äquivalent auf [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) — [`popDebugGroup()`](/de/docs/Web/API/GPURenderPassEncoder/popDebugGroup).

## Syntax

```js-nolint
popDebugGroup()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`popDebugGroup()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) wird ungültig:

- Der Debug-Stack des Render-Bundle-Encoders ist nicht leer (d. h. mindestens eine Render-Bundle-Debuggruppe wurde zuvor mit [`pushDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/pushDebugGroup) gestartet).

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
