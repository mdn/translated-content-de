---
title: GPUCompilationMessage
slug: Web/API/GPUCompilationMessage
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUCompilationMessage`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert eine einzelne Informations-, Warnungs- oder Fehlermeldung, die vom GPU-Shader-Modul-Compiler generiert wird.

Ein Array von `GPUCompilationMessage`-Objekten ist in der `messages`-Eigenschaft des [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo)-Objekts verfügbar, das über [`GPUShaderModule.getCompilationInfo()`](/de/docs/Web/API/GPUShaderModule/getCompilationInfo) abgerufen wird.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`length`](/de/docs/Web/API/GPUCompilationMessage/length) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Länge des Substrings darstellt, dem die Nachricht entspricht.
- [`lineNum`](/de/docs/Web/API/GPUCompilationMessage/lineNum) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Zeilennummer im Shader-Code darstellt, der die Nachricht entspricht.
- [`linePos`](/de/docs/Web/API/GPUCompilationMessage/linePos) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Position in der Code-Zeile darstellt, der die Nachricht entspricht. Dies könnte ein genauer Punkt oder der Anfang des relevanten Substrings sein.
- [`message`](/de/docs/Web/API/GPUCompilationMessage/message) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein String, der lesbaren Nachrichtentext darstellt.
- [`offset`](/de/docs/Web/API/GPUCompilationMessage/offset) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die den Versatz vom Anfang des Shader-Codes zum genauen Punkt oder zum Anfang des relevanten Substrings darstellt, dem die Nachricht entspricht.
- [`type`](/de/docs/Web/API/GPUCompilationMessage/type) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein enumerierter Wert, der den Typ der Nachricht darstellt — `"error"`, `"info"` oder `"warning"`.

## Beispiele

Sehen Sie sich die Hauptseite von [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo#examples) für ein Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
