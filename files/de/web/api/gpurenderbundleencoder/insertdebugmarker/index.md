---
title: "GPURenderBundleEncoder: insertDebugMarker() Methode"
short-title: insertDebugMarker()
slug: Web/API/GPURenderBundleEncoder/insertDebugMarker
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`insertDebugMarker()`**-Methode der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Schnittstelle markiert einen bestimmten Punkt in einer Serie von kodierten Render-Bundle-Pass-Befehlen mit einem Label.

Dies könnte für Telemetrie verwendet werden oder könnte in Zukunft in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen, Entwicklerwerkzeugen des Browsers oder anderen Diensten genutzt werden, um beim Debugging zu helfen.

> [!NOTE]
> Diese Methode ist funktional identisch mit ihrem Äquivalent auf [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) — [`InsertDebugMarker()`](/de/docs/Web/API/GPURenderPassEncoder/insertDebugMarker).

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
// …

bundleEncoder.insertDebugMarker("my_marker");

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
