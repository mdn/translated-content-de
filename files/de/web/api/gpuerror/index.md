---
title: GPUError
slug: Web/API/GPUError
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das Interface **`GPUError`** der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} ist die Basis-Schnittstelle für Fehler, die von {{domxref("GPUDevice.popErrorScope")}} und dem {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}}-Ereignis übermittelt werden.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("GPUError.message", "message")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein String, der eine menschenlesbare Nachricht bereitstellt, die erklärt, warum der Fehler aufgetreten ist.

## Beispiele

Für Anwendungsbeispiele von Fehlerobjekten basierend auf `GPUError`, siehe:

- [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope#examples)
- [Das `GPUDevice uncapturederror`-Ereignis](/de/docs/Web/API/GPUDevice/uncapturederror_event#examples)
- {{domxref("GPUInternalError")}}, {{domxref("GPUOutOfMemoryError")}}, und {{domxref("GPUValidationError")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [WebGPU-Fehlerbehandlung Best Practices](https://toji.dev/webgpu-best-practices/error-handling)
