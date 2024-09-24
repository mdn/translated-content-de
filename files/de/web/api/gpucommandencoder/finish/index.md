---
title: "GPUCommandEncoder: finish()-Methode"
short-title: finish()
slug: Web/API/GPUCommandEncoder/finish
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`finish()`**-Methode der {{domxref("GPUCommandEncoder")}}-Schnittstelle vervollständigt die Aufnahme der Befehlsequenz, die auf diesem `GPUCommandEncoder` codiert wurde, und gibt einen entsprechenden {{domxref("GPUCommandBuffer")}} zurück.

## Syntax

```js-nolint
finish()
finish(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `label` {{optional_inline}}
      - : Ein String, der ein Label für den zurückgegebenen {{domxref("GPUCommandBuffer")}} bereitstellt, das zur Identifizierung verwendet werden kann, zum Beispiel in {{domxref("GPUError")}}-Nachrichten oder Konsolenwarnungen.

### Rückgabewert

Eine {{domxref("GPUCommandBuffer")}}-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`finish()`** erfüllt sein, andernfalls wird ein {{domxref("GPUValidationError")}} generiert und der {{domxref("GPUCommandEncoder")}} wird ungültig:

- Es gibt keine aktiven Debug-Gruppen (d.h. gestartet über {{domxref("GPUCommandEncoder.pushDebugGroup", "pushDebugGroup()")}}).
- Der {{domxref("GPUCommandEncoder")}} befindet sich in einem offenen Zustand — das bedeutet:
  - Es gibt keine aktiven {{domxref("GPUComputePassEncoder")}} oder {{domxref("GPURenderPassEncoder")}}, die nicht beendet wurden (durch Aufruf von `end()`).
  - Der {{domxref("GPUCommandEncoder")}} hat nicht bereits `finish()` aufgerufen (in diesem Fall kann er nicht mehr verwendet werden, um Befehle zu kodieren).

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
