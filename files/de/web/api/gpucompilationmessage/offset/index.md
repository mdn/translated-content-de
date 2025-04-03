---
title: "GPUCompilationMessage: offset-Eigenschaft"
short-title: offset
slug: Web/API/GPUCompilationMessage/offset
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`offset`** schreibgeschützte Eigenschaft der [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage) Schnittstelle ist eine Zahl, die den Abstand vom Beginn des Shader-Codes bis zum exakten Punkt oder dem Beginn der relevanten Teilzeichenkette angibt, auf die sich die Nachricht bezieht.

## Wert

Eine Zahl.

Genauer gesagt ist `offset` die Anzahl der UTF-16 Codeeinheiten vom Anfang des Shader-Codes bis zum exakten Punkt oder dem Beginn der relevanten Teilzeichenkette, auf die sich die Nachricht bezieht.

Wenn sich die Nachricht nicht auf eine spezifische Codeposition bezieht (vielleicht gilt sie für den gesamten Shader-Code), wird `offset` 0 sein.

## Beispiele

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});

const shaderInfo = await shaderModule.getCompilationInfo();
const firstMessage = shaderInfo.messages[0];
console.log(firstMessage.offset);
```

Siehe die Hauptseite [GPUCompilationInfo](/de/docs/Web/API/GPUCompilationInfo#examples) für ein detaillierteres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
