---
title: "GPURenderBundleEncoder: popDebugGroup()-Methode"
short-title: popDebugGroup()
slug: Web/API/GPURenderBundleEncoder/popDebugGroup
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`popDebugGroup()`**-Methode der {{domxref("GPURenderBundleEncoder")}}-Schnittstelle beendet eine Render-Bundle-Debuggruppe, die mit einem {{domxref("GPURenderBundleEncoder.pushDebugGroup", "pushDebugGroup()")}}-Aufruf begonnen wurde.

Dies könnte für Telemetrie verwendet werden oder in Zukunft in {{domxref("GPUError")}}-Nachrichten, Browser-Entwicklungstools oder anderen Diensten genutzt werden, um bei der Fehlersuche zu helfen.

> [!NOTE]
> Diese Methode ist funktional identisch mit ihrem Äquivalent auf {{domxref("GPURenderPassEncoder")}} — {{domxref("GPURenderPassEncoder.popDebugGroup", "popDebugGroup()")}}.

## Syntax

```js-nolint
popDebugGroup()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`popDebugGroup()`** erfüllt sein, andernfalls wird ein {{domxref("GPUValidationError")}} generiert und der {{domxref("GPURenderBundleEncoder")}} wird ungültig:

- Der Debug-Stack des Render-Bundle-Encoders ist nicht leer (d. h. es wurde zuvor mindestens eine Render-Bundle-Debuggruppe mit {{domxref("GPURenderBundleEncoder.pushDebugGroup", "pushDebugGroup()")}} gestartet).

## Beispiele

```js
// ...

const bundleEncoder = device.createRenderBundleEncoder(renderBundleDescriptor);

bundleEncoder.pushDebugGroup("mygroupmarker"); // Startet eine benannte Debug-Gruppe

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
