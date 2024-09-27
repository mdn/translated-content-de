---
title: "GPUCommandEncoder: finish() Methode"
short-title: finish()
slug: Web/API/GPUCommandEncoder/finish
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`finish()`** Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) Schnittstelle vervollständigt die Aufnahme der Befehlsfolge, die auf diesem `GPUCommandEncoder` kodiert wurde, und gibt ein entsprechendes [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) zurück.

## Syntax

```js-nolint
finish()
finish(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `label` {{optional_inline}}
      - : Ein String, der ein Label für das zurückgegebene [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) bereitstellt, das beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen zur Identifizierung verwendet werden kann.

### Rückgabewert

Ein [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen beim Aufrufen von **`finish()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig:

- Es gibt keine aktiven Debuggruppen (d.h. gestartet über [`pushDebugGroup()`](/de/docs/Web/API/GPUCommandEncoder/pushDebugGroup)).
- Der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) befindet sich in einem offenen Zustand — das bedeutet, dass:
  - Es gibt keine aktiven untergeordneten [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)- oder [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Instanzen, die nicht beendet wurden (durch Aufrufen von `end()`).
  - Auf den [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wurde nicht bereits `finish()` aufgerufen (in diesem Fall kann er nicht mehr zum Kodieren weiterer Befehle verwendet werden).

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
