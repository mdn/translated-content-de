---
title: GPUCompilationMessage
slug: Web/API/GPUCompilationMessage
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUCompilationMessage`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert eine einzelne Informations-, Warn- oder Fehlermeldung, die vom GPU-Shader-Modul-Compiler generiert wurde.

Ein Array von `GPUCompilationMessage`-Objekten ist in der `messages`-Eigenschaft des [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo)-Objekts verfügbar, welches über [`GPUShaderModule.getCompilationInfo()`](/de/docs/Web/API/GPUShaderModule/getCompilationInfo) abgerufen werden kann.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`length`](/de/docs/Web/API/GPUCompilationMessage/length) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Länge des Substrings darstellt, zu dem die Nachricht gehört.
- [`lineNum`](/de/docs/Web/API/GPUCompilationMessage/lineNum) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Zeilennummer im Shader-Code darstellt, zu der die Nachricht gehört.
- [`linePos`](/de/docs/Web/API/GPUCompilationMessage/linePos) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Position in der Codezeile darstellt, zu der die Nachricht gehört. Dies könnte ein genauer Punkt oder der Beginn des relevanten Substrings sein.
- [`message`](/de/docs/Web/API/GPUCompilationMessage/message) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein String, der den menschenlesbaren Nachrichtentext repräsentiert.
- [`offset`](/de/docs/Web/API/GPUCompilationMessage/offset) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die den Versatz vom Beginn des Shader-Codes bis zu dem genauen Punkt oder dem Beginn des relevanten Substrings darstellt, zu dem die Nachricht gehört.
- [`type`](/de/docs/Web/API/GPUCompilationMessage/type) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein enumerierter Wert, der den Typ der Nachricht darstellt — `"error"`, `"info"` oder `"warning"`.

## Beispiele

Sehen Sie sich die Hauptseite [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo#examples) für ein Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
