---
title: "GPUCommandEncoder: finish()-Methode"
short-title: finish()
slug: Web/API/GPUCommandEncoder/finish
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`finish()`**-Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle schließt die Aufzeichnung der Befehlsequenz ab, die auf diesem `GPUCommandEncoder` kodiert wurde, und gibt einen entsprechenden [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) zurück.

## Syntax

```js-nolint
finish()
finish(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `label` {{optional_inline}}
      - : Ein String, der ein Label für den zurückgegebenen [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) bereitstellt, das zur Identifizierung verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

### Rückgabewert

Eine Instanz des [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`finish()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig:

- Es gibt keine aktiven Debug-Gruppen (d.h. gestartet über [`pushDebugGroup()`](/de/docs/Web/API/GPUCommandEncoder/pushDebugGroup)).
- Der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) befindet sich in einem offenen Zustand — das bedeutet:
  - Es sind keine untergeordneten [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) oder [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) aktiv, die nicht beendet wurden (durch Aufruf von `end()`).
  - Auf den [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wurde nicht bereits `finish()` aufgerufen (in diesem Fall kann er nicht mehr verwendet werden, um weitere Befehle zu kodieren).

## Beispiele

```js
// ...

const commandBuffer = commandEncoder.finish();
device.queue.submit([commandBuffer]);

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
