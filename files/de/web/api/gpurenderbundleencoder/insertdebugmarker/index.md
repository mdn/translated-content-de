---
title: "GPURenderBundleEncoder: insertDebugMarker() Methode"
short-title: insertDebugMarker()
slug: Web/API/GPURenderBundleEncoder/insertDebugMarker
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`insertDebugMarker()`** Methode der
[`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) Schnittstelle markiert einen bestimmten Punkt in einer Reihe von kodierten Render-Bundle-Pass-Befehlen mit einem Label.

Dies könnte für Telemetrie verwendet werden oder möglicherweise in [`GPUError`](/de/docs/Web/API/GPUError) Nachrichten, Entwicklerwerkzeuge des Browsers oder andere Dienste in der Zukunft genutzt werden, um beim Debuggen zu helfen.

> [!NOTE]
> Diese Methode ist funktional identisch mit ihrem Äquivalent in [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) — [`InsertDebugMarker()`](/de/docs/Web/API/GPURenderPassEncoder/InsertDebugMarker).

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

bundleEncoder.insertDebugMarker("mymarker");

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
