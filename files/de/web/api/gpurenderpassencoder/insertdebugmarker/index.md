---
title: "GPURenderPassEncoder: insertDebugMarker()-Methode"
short-title: insertDebugMarker()
slug: Web/API/GPURenderPassEncoder/insertDebugMarker
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`insertDebugMarker()`**-Methode der {{domxref("GPURenderPassEncoder")}}-Schnittstelle markiert einen bestimmten Punkt in einer Serie von kodierten Render-Pass-Befehlen mit einem Label.

Dies könnte für Telemetrie genutzt werden oder in Zukunft in {{domxref("GPUError")}}-Nachrichten, Browser-Entwicklungstools oder anderen Diensten verwendet werden, um beim Debugging zu helfen.

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

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
