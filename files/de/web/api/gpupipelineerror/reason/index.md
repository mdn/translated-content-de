---
title: "GPUPipelineError: reason-Eigenschaft"
short-title: reason
slug: Web/API/GPUPipelineError/reason
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`reason`** des {{domxref("GPUPipelineError")}}-Interfaces definiert den Grund, warum die Pipelinenerstellung in einer maschinenlesbaren Form fehlgeschlagen ist.

## Wert

Ein enumerierter Wert, der einer der folgenden sein kann:

- `"internal"`
  - : Pipelinenerstellung ist aufgrund eines internen Fehlers fehlgeschlagen (siehe {{domxref("GPUInternalError")}} für weitere Informationen zu diesen Fehlerarten.)
- `"validation"`
  - : Pipelinenerstellung ist aufgrund eines Validierungsfehlers fehlgeschlagen (siehe {{domxref("GPUValidationError")}} für weitere Informationen zu diesen Fehlerarten.)

## Beispiele

Sehen Sie sich die Hauptseite [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError#examples) für ein Beispiel an, das eine `GPUPipelineError`-Objektinstanz beinhaltet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
