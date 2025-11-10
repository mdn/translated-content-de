---
title: "GPUCompilationMessage: linePos-Eigenschaft"
short-title: linePos
slug: Web/API/GPUCompilationMessage/linePos
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`linePos`**-Eigenschaft der [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Schnittstelle ist eine Zahl, die die Position in der Codezeile darstellt, auf die sich die Nachricht bezieht. Dies kann ein exakter Punkt oder der Beginn der relevanten Teilzeichenfolge sein.

## Wert

Eine Zahl.

Genauer gesagt ist `linePos` die Anzahl der {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}} vom Beginn der Zeile bis zu dem genauen Punkt oder Beginn der relevanten Teilzeichenfolge, auf die sich die Nachricht bezieht.

Beachten Sie:

- Wenn sich die Nachricht auf eine Teilzeichenfolge bezieht, verweist `linePos` auf die erste UTF-16 Code-Einheit der Teilzeichenfolge.
- Wenn sich die Nachricht nicht auf eine bestimmte Codeposition bezieht (vielleicht bezieht sie sich auf den gesamten Shader-Code), wird `linePos` 0 sein.
- Werte sind einsbasiert — ein Wert von 1 bezieht sich auf die erste Code-Einheit der Zeile.

## Beispiele

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});

const shaderInfo = await shaderModule.getCompilationInfo();
const firstMessage = shaderInfo.messages[0];
console.log(firstMessage.linePos);
```

Siehe die Hauptseite [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo#examples) für ein detaillierteres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
