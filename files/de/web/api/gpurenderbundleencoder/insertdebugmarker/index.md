---
title: "GPURenderBundleEncoder: insertDebugMarker()-Methode"
short-title: insertDebugMarker()
slug: Web/API/GPURenderBundleEncoder/insertDebugMarker
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`insertDebugMarker()`**-Methode der Schnittstelle [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) markiert einen bestimmten Punkt in einer Reihe von codierten Render-Bundle-Durchgangsbefehlen mit einem Label.

Dies könnte für Telemetrie verwendet werden oder in Zukunft in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten, Entwickler-Tools des Browsers oder anderen Diensten zur Unterstützung der Fehlersuche genutzt werden.

> [!NOTE]
> Diese Methode ist funktional identisch mit ihrem Äquivalent in [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) — [`InsertDebugMarker()`](/de/docs/Web/API/GPURenderPassEncoder/insertDebugMarker).

## Syntax

```js-nolint
insertDebugMarker(markerLabel)
```

### Parameter

- `markerLabel`
  - : Ein String, der das einzufügende Label repräsentiert.

### Rückgabewert

Keine ({{jsxref("Undefined")}}).

## Beispiele

```js
// ...

bundleEncoder.insertDebugMarker("my_marker");

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
