---
title: "GPUComputePassEncoder: Methode insertDebugMarker()"
short-title: insertDebugMarker()
slug: Web/API/GPUComputePassEncoder/insertDebugMarker
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`insertDebugMarker()`**-Methode der Schnittstelle [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) markiert einen bestimmten Punkt in einer Reihe von codierten Compute-Pass-Befehlen mit einem Etikett.

Dies könnte für Telemetrie verwendet werden oder in Zukunft in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen, Browser-Entwicklungstools oder anderen Diensten zur Unterstützung beim Debugging genutzt werden.

## Syntax

```js-nolint
insertDebugMarker(markerLabel)
```

### Parameter

- `markerLabel`
  - : Ein String, der das einzufügende Etikett darstellt.

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

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
