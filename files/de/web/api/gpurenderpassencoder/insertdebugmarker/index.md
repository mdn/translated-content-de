---
title: "GPURenderPassEncoder: insertDebugMarker()-Methode"
short-title: insertDebugMarker()
slug: Web/API/GPURenderPassEncoder/insertDebugMarker
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`insertDebugMarker()`**-Methode des [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Interfaces markiert einen bestimmten Punkt in einer Reihe von codierten Renderpass-Befehlen mit einem Label.

Dies könnte für Telemetriezwecke verwendet werden oder in Zukunft in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten, Browser-Entwicklertools oder anderen Diensten genutzt werden, um beim Debuggen zu helfen.

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
