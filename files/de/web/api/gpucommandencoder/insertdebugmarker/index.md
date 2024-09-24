---
title: "GPUCommandEncoder: insertDebugMarker()-Methode"
short-title: insertDebugMarker()
slug: Web/API/GPUCommandEncoder/insertDebugMarker
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`insertDebugMarker()`**-Methode der {{domxref("GPUCommandEncoder")}}-Schnittstelle markiert einen bestimmten Punkt in einer Serie von codierten Befehlen mit einem Label.

Dies könnte für Telemetrie verwendet werden oder in Zukunft in {{domxref("GPUError")}}-Meldungen, Browser-Entwicklungstools oder anderen Diensten genutzt werden, um das Debugging zu unterstützen.

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

commandEncoder.insertDebugMarker("mymarker");

// ...
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
