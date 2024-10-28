---
title: "GPUComputePassEncoder: insertDebugMarker() Methode"
short-title: insertDebugMarker()
slug: Web/API/GPUComputePassEncoder/insertDebugMarker
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`insertDebugMarker()`** Methode des [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) Interfaces markiert einen spezifischen Punkt in einer Reihe von codierten Compute-Pass-Befehlen mit einem Label.

Dies könnte für Telemetrie verwendet werden oder in Zukunft in [`GPUError`](/de/docs/Web/API/GPUError) Nachrichten, Browser-Entwicklungstools oder anderen Diensten genutzt werden, um bei der Fehlersuche zu helfen.

## Syntax

```js-nolint
insertDebugMarker(markerLabel)
```

### Parameter

- `markerLabel`
  - : Ein String, der das einzufügende Label darstellt.

### Rückgabewert

Kein Wert ({{jsxref("Undefined")}}).

## Beispiele

```js
// ...

passEncoder.insertDebugMarker("my_marker");

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
