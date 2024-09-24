---
title: "GPURenderBundleEncoder: pushDebugGroup()-Methode"
short-title: pushDebugGroup()
slug: Web/API/GPURenderBundleEncoder/pushDebugGroup
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`pushDebugGroup()`**-Methode der {{domxref("GPURenderBundleEncoder")}}-Schnittstelle beginnt mit einer Render-Bundle-Debuggruppe, die mit einem angegebenen Label markiert wird und alle nachfolgenden codierten Befehle bis zur Ausführung einer {{domxref("GPURenderBundleEncoder.popDebugGroup", "popDebugGroup()")}}-Methode enthält.

Dies könnte für Telemetrie verwendet werden oder in Zukunft in {{domxref("GPUError")}}-Nachrichten, Entwicklerwerkzeugen des Browsers oder anderen Diensten zur Fehlerbehebung dienen.

> [!NOTE]
> Diese Methode ist funktional identisch mit ihrem Äquivalent auf {{domxref("GPURenderPassEncoder")}} — {{domxref("GPURenderPassEncoder.pushDebugGroup", "pushDebugGroup()")}}.

## Syntax

```js-nolint
pushDebugGroup(groupLabel)
```

### Parameter

- `groupLabel`
  - : Ein String, der das Label für die Debuggruppe darstellt.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

## Beispiele

```js
// ...

const bundleEncoder = device.createRenderBundleEncoder(renderBundleDescriptor);

bundleEncoder.pushDebugGroup("mygroupmarker"); // Start der gekennzeichneten Debuggruppe

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
