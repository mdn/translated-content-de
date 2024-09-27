---
title: "GPUPipelineError: reason-Eigenschaft"
short-title: reason
slug: Web/API/GPUPipelineError/reason
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`reason`** des [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError)-Interfaces definiert den Grund, warum die Pipeline-Erstellung maschinenlesbar fehlgeschlagen ist.

## Wert

Ein enumerierter Wert, der einer der folgenden sein kann:

- `"internal"`
  - : Die Pipeline-Erstellung ist aufgrund eines internen Fehlers fehlgeschlagen (siehe [`GPUInternalError`](/de/docs/Web/API/GPUInternalError) für weitere Informationen zu dieser Art von Fehlern).
- `"validation"`
  - : Die Pipeline-Erstellung ist aufgrund eines Validierungsfehlers fehlgeschlagen (siehe [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) für weitere Informationen zu dieser Art von Fehlern).

## Beispiele

Siehe die Hauptseite [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError#examples) für ein Beispiel mit einer `GPUPipelineError`-Objektinstanz.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
