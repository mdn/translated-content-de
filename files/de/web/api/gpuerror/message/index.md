---
title: "GPUError: message-Eigenschaft"
short-title: message
slug: Web/API/GPUError/message
l10n:
  sourceCommit: bec7ef59277e752985de0ee963c86f6e8e4b3400
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`message`**-Eigenschaft des [`GPUError`](/de/docs/Web/API/GPUError)-Interfaces ist eine schreibgeschützte Eigenschaft, die eine lesbare Nachricht bereitstellt, die erklärt, warum der Fehler aufgetreten ist.

## Wert

Ein String.

## Beispiele

Um Anwendungsbeispiele von Fehlerobjekten basierend auf `GPUError` zu sehen, beachten Sie:

- [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope#examples)
- [Das `GPUDevice uncapturederror`-Ereignis](/de/docs/Web/API/GPUDevice/uncapturederror_event#examples)
- [`GPUInternalError`](/de/docs/Web/API/GPUInternalError), [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError) und [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
- [Beste Praktiken zur Fehlerbehandlung bei WebGPU](https://toji.dev/webgpu-best-practices/error-handling)
