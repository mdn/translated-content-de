---
title: GPUCompilationMessage
slug: Web/API/GPUCompilationMessage
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`GPUCompilationMessage`**-Schnittstelle der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} repräsentiert eine einzelne Informations-, Warn- oder Fehlermeldung, die vom Shader-Modul-Compiler der GPU generiert wurde.

Ein Array von `GPUCompilationMessage`-Objekten ist in der `messages`-Eigenschaft des {{domxref("GPUCompilationInfo")}}-Objekts verfügbar, das über {{domxref("GPUShaderModule.getCompilationInfo()")}} abgerufen wird.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("GPUCompilationMessage.length", "length")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Länge des Substrings angibt, mit dem die Nachricht korrespondiert.
- {{domxref("GPUCompilationMessage.lineNum", "lineNum")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Zeilennummer im Shader-Code angibt, mit der die Nachricht korrespondiert.
- {{domxref("GPUCompilationMessage.linePos", "linePos")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Position in der Codezeile angibt, mit der die Nachricht korrespondiert. Dies könnte ein genauer Punkt oder der Beginn des relevanten Substrings sein.
- {{domxref("GPUCompilationMessage.message", "message")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein String, der einen menschenlesbaren Nachrichtentext darstellt.
- {{domxref("GPUCompilationMessage.offset", "offset")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die den Offset vom Beginn des Shader-Codes zu dem genauen Punkt oder dem Beginn des relevanten Substrings angibt, mit dem die Nachricht korrespondiert.
- {{domxref("GPUCompilationMessage.type", "type")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein enumerierter Wert, der den Typ der Nachricht darstellt — `"error"`, `"info"` oder `"warning"`.

## Beispiele

Siehe die Hauptseite [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo#examples) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
