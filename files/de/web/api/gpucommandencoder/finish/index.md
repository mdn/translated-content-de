---
title: "GPUCommandEncoder: finish()-Methode"
short-title: finish()
slug: Web/API/GPUCommandEncoder/finish
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`finish()`**-Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle vervollständigt die Aufzeichnung der auf diesem `GPUCommandEncoder` kodierten Befehlssequenz und gibt einen entsprechenden [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) zurück.

## Syntax

```js-nolint
finish()
finish(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `label` {{optional_inline}}
      - : Ein String, der eine Bezeichnung für den zurückgegebenen [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) bereitstellt, die genutzt werden kann, um diesen z. B. in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen zu identifizieren.

### Rückgabewert

Eine [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`finish()`** aufgerufen wird. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig:

- Es gibt keine aktiven Debug-Gruppen (d.h. gestartet über [`pushDebugGroup()`](/de/docs/Web/API/GPUCommandEncoder/pushDebugGroup)).
- Der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) befindet sich in einem offenen Zustand — das bedeutet:
  - Es sind keine untergeordneten [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) oder [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) aktiv, die nicht beendet wurden (durch Aufrufen von `end()`).
  - Auf dem [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wurde noch keine `finish()`-Methode aufgerufen (in diesem Fall kann er nicht mehr für die Kodierung weiterer Befehle verwendet werden).

## Beispiele

```js
// …

const commandBuffer = commandEncoder.finish();
device.queue.submit([commandBuffer]);

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
