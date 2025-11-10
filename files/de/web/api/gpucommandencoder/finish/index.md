---
title: "GPUCommandEncoder: finish()-Methode"
short-title: finish()
slug: Web/API/GPUCommandEncoder/finish
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`finish()`**-Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle schließt die Aufzeichnung der auf diesem `GPUCommandEncoder` codierten Befehlssequenz ab und gibt einen entsprechenden [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) zurück.

## Syntax

```js-nolint
finish()
finish(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `label` {{optional_inline}}
      - : Ein String, der eine Bezeichnung für den zurückgegebenen [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) angibt, die zur Identifizierung verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

### Rückgabewert

Eine Instanz des [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`finish()`** aufgerufen wird. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig:

- Es dürfen keine aktiven Debug-Gruppen vorhanden sein (d.h. gestartet über [`pushDebugGroup()`](/de/docs/Web/API/GPUCommandEncoder/pushDebugGroup)).
- Der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) muss sich in einem offenen Zustand befinden — das bedeutet:
  - Es dürfen keine untergeordneten [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)- oder [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Instanzen aktiv sein, die nicht beendet wurden (durch Aufruf von `end()`).
  - Der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) darf noch nicht `finish()` aufgerufen haben (in diesem Fall kann er nicht mehr zum Kodieren weiterer Befehle verwendet werden).

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
