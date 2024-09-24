---
title: "GPURenderPassEncoder: popDebugGroup() Methode"
short-title: popDebugGroup()
slug: Web/API/GPURenderPassEncoder/popDebugGroup
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`popDebugGroup()`** Methode der
{{domxref("GPURenderPassEncoder")}} Schnittstelle beendet eine Render-Pass-Debug-Gruppe, die mit einem {{domxref("GPURenderPassEncoder.pushDebugGroup", "pushDebugGroup()")}} Aufruf begonnen wurde.

Diese Methode könnte für Telemetrie genutzt werden oder in Zukunft in {{domxref("GPUError")}}-Meldungen, Entwicklerwerkzeugen des Browsers oder anderen Diensten zur Unterstützung bei der Fehlersuche verwendet werden.

## Syntax

```js-nolint
popDebugGroup()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`popDebugGroup()`** aufgerufen wird, andernfalls wird ein {{domxref("GPUValidationError")}} erzeugt und der {{domxref("GPURenderPassEncoder")}} wird ungültig:

- Der Debug-Stack des Render-Pass-Encoders ist nicht leer (d.h. mindestens eine Render-Pass-Debug-Gruppe wurde zuvor mit {{domxref("GPURenderPassEncoder.pushDebugGroup", "pushDebugGroup()")}} gestartet).

## Beispiele

```js
// ...

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

passEncoder.pushDebugGroup("mygroupmarker"); // Starten Sie die Debug-Gruppe mit Label

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
