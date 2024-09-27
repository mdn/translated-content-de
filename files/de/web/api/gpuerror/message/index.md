---
title: "GPUError: message property"
slug: Web/API/GPUError/message
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

---

title: "GPUError: Nachricht-Eigenschaft"
short-title: message
slug: Web/API/GPUError/message
page-type: web-api-instance-property
status:

- experimental
  browser-compat: api.GPUError.message

---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`message`** schreibgeschützte Eigenschaft der
[`GPUError`](/de/docs/Web/API/GPUError)-Schnittstelle liefert eine menschenlesbare Nachricht, die erklärt, warum der Fehler aufgetreten ist.

## Wert

Ein Zeichenkette.

## Beispiele

Für Anwendungsbeispiele von Fehlerobjekten basierend auf `GPUError`, siehe:

- [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope#examples)
- [Das `GPUDevice uncapturederror` Ereignis](/de/docs/Web/API/GPUDevice/uncapturederror_event#examples)
- [`GPUInternalError`](/de/docs/Web/API/GPUInternalError), [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError) und [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [WebGPU Fehlerbehandlungs-Best-Practices](https://toji.dev/webgpu-best-practices/error-handling)
