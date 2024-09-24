---
title: "GPUComputePassEncoder: Methode insertDebugMarker()"
short-title: insertDebugMarker()
slug: Web/API/GPUComputePassEncoder/insertDebugMarker
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`insertDebugMarker()`**-Methode der {{domxref("GPUComputePassEncoder")}}-Schnittstelle markiert einen bestimmten Punkt in einer Reihe von codierten Compute-Pass-Befehlen mit einem Label.

Dies könnte für Telemetrie verwendet werden oder in Zukunft in {{domxref("GPUError")}}-Meldungen, Entwicklerwerkzeugen des Browsers oder anderen Diensten hilfreich sein, um beim Debugging zu unterstützen.

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

passEncoder.insertDebugMarker("mymarker");

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
