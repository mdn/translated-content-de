---
title: GPUError
slug: Web/API/GPUError
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUError`**-Schnittstelle der [WebGPU-API](/de/docs/Web/API/WebGPU_API) ist die Basisschnittstelle für Fehler, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis bekannt gemacht werden.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`message`](/de/docs/Web/API/GPUError/message) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein String, der eine menschenlesbare Nachricht bereitstellt, die erklärt, warum der Fehler aufgetreten ist.

## Beispiele

Für Anwendungsbeispiele von Fehlerobjekten basierend auf `GPUError`, siehe:

- [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope#examples)
- [Das `GPUDevice uncapturederror`-Ereignis](/de/docs/Web/API/GPUDevice/uncapturederror_event#examples)
- [`GPUInternalError`](/de/docs/Web/API/GPUInternalError), [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError), und [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [Beste Praktiken zur WebGPU-Fehlerbehandlung](https://toji.dev/webgpu-best-practices/error-handling)
