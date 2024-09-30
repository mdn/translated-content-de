---
title: "GPUPipelineError: reason-Eigenschaft"
short-title: reason
slug: Web/API/GPUPipelineError/reason
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`reason`**-Eigenschaft des [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError)-Interfaces definiert in maschinenlesbarer Form den Grund, warum die Pipelineerstellung fehlgeschlagen ist.

## Wert

Ein enumerierter Wert, der einer der folgenden sein kann:

- `"internal"`
  - : Die Pipelineerstellung ist aufgrund eines internen Fehlers fehlgeschlagen (siehe [`GPUInternalError`](/de/docs/Web/API/GPUInternalError) für weitere Informationen über diese Art von Fehlern).
- `"validation"`
  - : Die Pipelineerstellung ist aufgrund eines Validierungsfehlers fehlgeschlagen (siehe [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) für weitere Informationen über diese Art von Fehlern).

## Beispiele

Ein Beispiel mit einer `GPUPipelineError`-Objektinstanz finden Sie auf der Hauptseite von [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
