---
title: "GPUCommandEncoder: Methode popDebugGroup()"
short-title: popDebugGroup()
slug: Web/API/GPUCommandEncoder/popDebugGroup
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die Methode **`popDebugGroup()`** der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle beendet eine Debug-Gruppe, die mit einem Aufruf von [`pushDebugGroup()`](/de/docs/Web/API/GPUCommandEncoder/pushDebugGroup) begonnen wurde.

Dies könnte für Telemetrie verwendet werden oder möglicherweise in Zukunft in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten, Browser-Entwicklungstools oder anderen Diensten genutzt werden, um bei der Fehlersuche zu helfen.

## Syntax

```js-nolint
popDebugGroup()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`popDebugGroup()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig:

- Der Debug-Stack des Befehlscoders ist nicht leer (d.h. mindestens eine Debug-Gruppe wurde zuvor mit [`pushDebugGroup()`](/de/docs/Web/API/GPUCommandEncoder/pushDebugGroup) gestartet).

## Beispiele

```js
// ...

commandEncoder.pushDebugGroup("mygroupmarker"); // Start labeled debug group

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);

passEncoder.end();

commandEncoder.popDebugGroup(); // End labeled debug group

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
