---
title: "GPURenderBundleEncoder: Methode insertDebugMarker()"
short-title: insertDebugMarker()
slug: Web/API/GPURenderBundleEncoder/insertDebugMarker
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`insertDebugMarker()`**-Methode der
{{domxref("GPURenderBundleEncoder")}}-Schnittstelle markiert einen bestimmten Punkt in einer Reihe von codierten Render-Bundle-Pass-Befehlen mit einem Label.

Dies könnte für Telemetrie verwendet werden oder könnte in Zukunft in {{domxref("GPUError")}}-Nachrichten, Browser-Entwicklungstools oder anderen Diensten genutzt werden, um bei der Fehlersuche zu helfen.

> [!NOTE]
> Diese Methode ist funktional identisch mit ihrem Äquivalent auf {{domxref("GPURenderPassEncoder")}} — {{domxref("GPURenderPassEncoder.InsertDebugMarker", "InsertDebugMarker()")}}.

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
