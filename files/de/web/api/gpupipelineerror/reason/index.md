---
title: "GPUPipelineError: reason-Eigenschaft"
short-title: reason
slug: Web/API/GPUPipelineError/reason
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`reason`**-Eigenschaft der [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError)-Schnittstelle beschreibt den Grund, warum die Erstellung der Pipeline fehlschlug, in einer maschinenlesbaren Form.

## Wert

Ein enumerierter Wert, der einer der folgenden sein kann:

- `"internal"`
  - : Die Erstellung der Pipeline schlug aufgrund eines internen Fehlers fehl (siehe [`GPUInternalError`](/de/docs/Web/API/GPUInternalError) für weitere Informationen zu dieser Art von Fehlern).
- `"validation"`
  - : Die Erstellung der Pipeline schlug aufgrund eines Validierungsfehlers fehl (siehe [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) für weitere Informationen zu dieser Art von Fehlern).

## Beispiele

Ein Beispiel, das ein `GPUPipelineError`-Objekt beschreibt, finden Sie auf der Hauptseite [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
