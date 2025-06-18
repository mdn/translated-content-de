---
title: "GPUCompilationMessage: offset-Eigenschaft"
short-title: offset
slug: Web/API/GPUCompilationMessage/offset
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`offset`**-Schreibgeschützte Eigenschaft des [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Interfaces ist eine Zahl, die den Offset vom Anfang des Shadercodes bis zum genauen Punkt oder dem Beginn des relevanten Substrings darstellt, dem die Nachricht entspricht.

## Wert

Eine Zahl.

Genauer gesagt ist `offset` die Anzahl der UTF-16-Codeeinheiten vom Anfang des Shadercodes bis zum genauen Punkt oder Beginn des relevanten Substrings, dem die Nachricht entspricht.

Falls die Nachricht nicht einer bestimmten Codeposition entspricht (möglicherweise bezieht sie sich auf den gesamten Shadercode), wird `offset` 0 sein.

## Beispiele

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});

const shaderInfo = await shaderModule.getCompilationInfo();
const firstMessage = shaderInfo.messages[0];
console.log(firstMessage.offset);
```

Sehen Sie sich die Hauptseite [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo#examples) für ein detaillierteres Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
