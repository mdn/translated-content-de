---
title: "GPUCommandEncoder: Methode insertDebugMarker()"
short-title: insertDebugMarker()
slug: Web/API/GPUCommandEncoder/insertDebugMarker
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`insertDebugMarker()`**-Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle markiert einen bestimmten Punkt in einer Serie von kodierten Befehlen mit einem Label.

Dies könnte für Telemetrie verwendet werden oder möglicherweise in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten, Browser-Entwicklungstools, oder anderen Diensten in der Zukunft zur Unterstützung bei der Fehlersuche genutzt werden.

## Syntax

```js-nolint
insertDebugMarker(markerLabel)
```

### Parameter

- `markerLabel`
  - : Ein String, der das einzufügende Label darstellt.

### Rückgabewert

Keine ({{jsxref("Undefined")}}).

## Beispiele

```js
// ...

commandEncoder.insertDebugMarker("mymarker");

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
