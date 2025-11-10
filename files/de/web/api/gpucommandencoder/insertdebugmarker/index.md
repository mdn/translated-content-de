---
title: "GPUCommandEncoder: insertDebugMarker() Methode"
short-title: insertDebugMarker()
slug: Web/API/GPUCommandEncoder/insertDebugMarker
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`insertDebugMarker()`** Methode der
[`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle markiert einen bestimmten Punkt in einer Reihe von codierten Befehlen mit einem Label.

Dies könnte für Telemetrie verwendet werden oder zukünftig in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten, Browser-Entwicklungstools oder anderen Diensten zur Fehlersuche genutzt werden.

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
// …

commandEncoder.insertDebugMarker("my_marker");

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
