---
title: GPUError
slug: Web/API/GPUError
l10n:
  sourceCommit: bec7ef59277e752985de0ee963c86f6e8e4b3400
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUError`** Interface der [WebGPU-API](/de/docs/Web/API/WebGPU_API) ist das Basisinterface für Fehler, die durch [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und das [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis aufgetreten sind.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`message`](/de/docs/Web/API/GPUError/message) {{ReadOnlyInline}}
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

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
- [Beste Praktiken für die Fehlerbehandlung in WebGPU](https://toji.dev/webgpu-best-practices/error-handling)
