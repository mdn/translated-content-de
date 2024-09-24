---
title: "GPUError: Nachrichten-Eigenschaft"
short-title: Nachricht
slug: Web/API/GPUError/message
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`message`**-Eigenschaft der schreibgeschützten Schnittstelle {{domxref("GPUError")}} liefert eine menschenlesbare Nachricht, die erklärt, warum der Fehler aufgetreten ist.

## Wert

Ein String.

## Beispiele

Für Anwendungsbeispiele von Fehlerobjekten basierend auf `GPUError`, siehe:

- [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope#examples)
- [Das `GPUDevice uncapturederror` Ereignis](/de/docs/Web/API/GPUDevice/uncapturederror_event#examples)
- {{domxref("GPUInternalError")}}, {{domxref("GPUOutOfMemoryError")}}, und {{domxref("GPUValidationError")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [Best Practices für die WebGPU-Fehlerbehandlung](https://toji.dev/webgpu-best-practices/error-handling)
