---
title: "GPUComputePassEncoder: insertDebugMarker()-Methode"
short-title: insertDebugMarker()
slug: Web/API/GPUComputePassEncoder/insertDebugMarker
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`insertDebugMarker()`**-Methode der Schnittstelle [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) markiert einen bestimmten Punkt in einer Serie von kodierten Compute-Pass-Befehlen mit einem Label.

Dies kann für Telemetriezwecke verwendet werden oder könnte in Zukunft in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten, Entwicklungswerkzeugen von Browsern oder anderen Diensten genutzt werden, um beim Debugging zu helfen.

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

passEncoder.insertDebugMarker("my_marker");

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
