---
title: "GPUCommandEncoder: insertDebugMarker() Methode"
short-title: insertDebugMarker()
slug: Web/API/GPUCommandEncoder/insertDebugMarker
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`insertDebugMarker()`** Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle markiert einen bestimmten Punkt in einer Reihe von codierten Befehlen mit einem Label.

Dies könnte für Telemetrie verwendet werden oder in [`GPUError`](/de/docs/Web/API/GPUError) Nachrichten, Browser-Entwicklungstools oder anderen Diensten in der Zukunft genutzt werden, um beim Debugging zu helfen.

## Syntax

```js-nolint
insertDebugMarker(markerLabel)
```

### Parameter

- `markerLabel`
  - : Ein String, der das einzufügende Label darstellt.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

## Beispiele

```js
// ...

commandEncoder.insertDebugMarker("my_marker");

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
