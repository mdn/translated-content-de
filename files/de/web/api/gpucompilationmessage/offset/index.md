---
title: "GPUCompilationMessage: offset-Eigenschaft"
short-title: offset
slug: Web/API/GPUCompilationMessage/offset
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`offset`** schreibgeschützte Eigenschaft der [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Schnittstelle ist eine Zahl, die den Offset vom Beginn des Shader-Codes bis zu dem genauen Punkt oder dem Beginn der relevanten Teilzeichenkette darstellt, auf die sich die Nachricht bezieht.

## Wert

Eine Zahl.

Genauer gesagt ist `offset` die Anzahl der {{Glossary("UTF-16", "UTF-16-codierten Einheiten")}} vom Beginn des Shader-Codes bis zu dem genauen Punkt oder Beginn der relevanten Teilzeichenkette, auf die sich die Nachricht bezieht.

Wenn sich die Nachricht nicht auf eine bestimmte Position im Code bezieht (vielleicht bezieht sie sich auf den gesamten Shader-Code), wird `offset` 0 sein.

## Beispiele

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});

const shaderInfo = await shaderModule.getCompilationInfo();
const firstMessage = shaderInfo.messages[0];
console.log(firstMessage.offset);
```

Siehe die Hauptseite [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo#examples) für ein detaillierteres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
