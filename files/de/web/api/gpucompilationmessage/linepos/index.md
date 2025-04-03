---
title: "GPUCompilationMessage: linePos-Eigenschaft"
short-title: linePos
slug: Web/API/GPUCompilationMessage/linePos
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`linePos`**-Eigenschaft der
[`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Schnittstelle ist eine Zahl, die die Position in der Codezeile darstellt, auf die sich die Nachricht bezieht. Dies kann ein genauer Punkt oder der Beginn des relevanten Substrings sein.

## Wert

Eine Zahl.

Genauer gesagt ist `linePos` die Anzahl der UTF-16-Codeeinheiten vom Anfang der Zeile bis zu dem genauen Punkt oder Anfang des relevanten Substrings, auf den sich die Nachricht bezieht.

Beachten Sie:

- Wenn die Nachricht sich auf einen Substring bezieht, dann verweist `linePos` auf die erste UTF-16-Codeeinheit des Substrings.
- Wenn sich die Nachricht nicht auf eine spezifische Codeposition bezieht (möglicherweise bezieht sie sich auf den gesamten Shader-Code), wird `linePos` 0 sein.
- Werte sind eins-basiert — ein Wert von 1 verweist auf die erste Codeeinheit der Zeile.

## Beispiele

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});

const shaderInfo = await shaderModule.getCompilationInfo();
const firstMessage = shaderInfo.messages[0];
console.log(firstMessage.linePos);
```

Sehen Sie die Hauptseite [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo#examples) für ein ausführlicheres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
