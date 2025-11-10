---
title: GPUCompilationMessage
slug: Web/API/GPUCompilationMessage
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUCompilationMessage`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert eine einzelne Informations-, Warn- oder Fehlermeldung, die vom GPU-Shader-Modul-Compiler generiert wird.

Ein Array von `GPUCompilationMessage`-Objekten ist in der `messages`-Eigenschaft des [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo)-Objekts verfügbar, das über [`GPUShaderModule.getCompilationInfo()`](/de/docs/Web/API/GPUShaderModule/getCompilationInfo) abgerufen werden kann.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`length`](/de/docs/Web/API/GPUCompilationMessage/length) {{ReadOnlyInline}}
  - : Eine Zahl, die die Länge des Substrings darstellt, dem die Nachricht entspricht.
- [`lineNum`](/de/docs/Web/API/GPUCompilationMessage/lineNum) {{ReadOnlyInline}}
  - : Eine Zahl, die die Zeilennummer im Shader-Code darstellt, zu der die Nachricht gehört.
- [`linePos`](/de/docs/Web/API/GPUCompilationMessage/linePos) {{ReadOnlyInline}}
  - : Eine Zahl, die die Position in der Codezeile darstellt, zu der die Nachricht gehört. Dies könnte ein genauer Punkt oder der Anfang des relevanten Substrings sein.
- [`message`](/de/docs/Web/API/GPUCompilationMessage/message) {{ReadOnlyInline}}
  - : Ein String, der den menschenlesbaren Nachrichtentext darstellt.
- [`offset`](/de/docs/Web/API/GPUCompilationMessage/offset) {{ReadOnlyInline}}
  - : Eine Zahl, die den Offset vom Anfang des Shader-Codes bis zu dem genauen Punkt oder dem Anfang des relevanten Substrings darstellt, zu dem die Nachricht gehört.
- [`type`](/de/docs/Web/API/GPUCompilationMessage/type) {{ReadOnlyInline}}
  - : Ein enumerierter Wert, der den Nachrichtentyp repräsentiert — `"error"`, `"info"` oder `"warning"`.

## Beispiele

Sehen Sie sich das Hauptbeispiel auf der Seite [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo#examples) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
