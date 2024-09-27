---
title: "GPUCompilationMessage: lineNum Eigenschaft"
short-title: lineNum
slug: Web/API/GPUCompilationMessage/lineNum
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`lineNum`**-Eigenschaft der [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Schnittstelle ist eine Zahl, die die Zeilennummer im Shader-Code darstellt, auf die sich die Nachricht bezieht.

## Wert

Eine Zahl.

Beachten Sie, dass:

- Wenn die Nachricht einem Substring entspricht, bezieht sich `lineNum` auf die Zeilennummer, auf der der Substring beginnt.
- Falls die Nachricht sich nicht auf eine bestimmte Codezeile bezieht (vielleicht bezieht sie sich auf den gesamten Shader-Code), wird `lineNum` 0 sein.
- Die Werte beginnen bei eins – ein Wert von 1 bezieht sich auf die erste Codezeile.
- Zeilen werden durch Zeilenumbrüche begrenzt. In WGSL wird eine [spezifische Liste von Zeichen](https://gpuweb.github.io/gpuweb/wgsl/#line-break) als Zeilenumbrüche definiert.

## Beispiele

Siehe die Hauptseite zu [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo#examples) für ein detaillierteres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
