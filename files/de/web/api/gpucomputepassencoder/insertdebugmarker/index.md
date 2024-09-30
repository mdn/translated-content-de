---
title: "GPUComputePassEncoder: Die Methode insertDebugMarker()"
short-title: insertDebugMarker()
slug: Web/API/GPUComputePassEncoder/insertDebugMarker
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`insertDebugMarker()`**-Methode der [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)-Schnittstelle markiert einen bestimmten Punkt in einer Serie von codierten Compute Pass-Befehlen mit einem Label.

Dies könnte für Telemetrie verwendet werden oder in der Zukunft in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen, Browser-Entwicklungstools oder anderen Diensten genutzt werden, um beim Debuggen zu helfen.

## Syntax

```js-nolint
insertDebugMarker(markerLabel)
```

### Parameter

- `markerLabel`
  - : Ein String, der das einzufügende Label repräsentiert.

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
