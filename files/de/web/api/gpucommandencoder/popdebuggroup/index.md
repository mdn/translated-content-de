---
title: "GPUCommandEncoder: popDebugGroup()-Methode"
short-title: popDebugGroup()
slug: Web/API/GPUCommandEncoder/popDebugGroup
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`popDebugGroup()`**-Methode der {{domxref("GPUCommandEncoder")}}-Schnittstelle beendet eine Debug-Gruppe, die mit einem {{domxref("GPUCommandEncoder.pushDebugGroup", "pushDebugGroup()")}}-Aufruf begonnen wurde.

Dies könnte für Telemetrie verwendet werden oder in Zukunft in {{domxref("GPUError")}}-Nachrichten, Entwickler-Tools des Browsers oder anderen Diensten genutzt werden, um das Debugging zu unterstützen.

## Syntax

```js-nolint
popDebugGroup()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`popDebugGroup()`** aufgerufen wird. Andernfalls wird ein {{domxref("GPUValidationError")}} erzeugt und der {{domxref("GPUCommandEncoder")}} wird ungültig:

- Der Debug-Stack des Befehlskodierers ist nicht leer (d. h. mindestens eine Debug-Gruppe wurde zuvor mit {{domxref("GPUCommandEncoder.pushDebugGroup", "pushDebugGroup()")}} gestartet).

## Beispiele

```js
// ...

commandEncoder.pushDebugGroup("mygroupmarker"); // Start des markierten Debug-Gruppe

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);

passEncoder.end();

commandEncoder.popDebugGroup(); // Ende der markierten Debug-Gruppe

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
