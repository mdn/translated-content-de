---
title: "GPUCommandEncoder: finish()-Methode"
short-title: finish()
slug: Web/API/GPUCommandEncoder/finish
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`finish()`**-Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle vervollständigt die Aufzeichnung der Befehlssequenz, die auf diesem `GPUCommandEncoder` kodiert wurde, und gibt einen entsprechenden [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) zurück.

## Syntax

```js-nolint
finish()
finish(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `label` {{optional_inline}}
      - : Ein String, der ein Label für den zurückgegebenen [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) bereitstellt, das zur Identifikation verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

### Rückgabewert

Eine [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`finish()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig:

- Es gibt keine aktiven Debug-Gruppen (d. h. gestartet über [`pushDebugGroup()`](/de/docs/Web/API/GPUCommandEncoder/pushDebugGroup)).
- Der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) befindet sich in einem offenen Zustand — das bedeutet, dass:
  - Keine untergeordneten [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) oder [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)s aktiv sind, die nicht beendet wurden (durch Aufruf von `end()`).
  - Der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) nicht bereits mit `finish()` aufgerufen wurde (in diesem Fall kann er nicht mehr zum Kodieren von Befehlen verwendet werden).

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
