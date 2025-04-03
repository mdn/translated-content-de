---
title: "GPUCompilationMessage: length-Eigenschaft"
short-title: length
slug: Web/API/GPUCompilationMessage/length
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`length`**-Schreibgeschützte Eigenschaft des [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Interfaces ist eine Zahl, die die Länge des Substrings darstellt, auf den sich die Nachricht bezieht.

## Wert

Eine Zahl.

Genauer gesagt ist `length` die Anzahl der UTF-16-Code-Einheiten im Shader-Code-Substring, auf den sich die Nachricht bezieht. Wenn sich die Nachricht auf einen einzelnen Punkt anstatt auf einen Substring bezieht, beträgt `length` 0.

## Beispiele

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});

const shaderInfo = await shaderModule.getCompilationInfo();
const firstMessage = shaderInfo.messages[0];
console.log(firstMessage.length);
```

Siehe die Hauptseite zu [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo#examples) für ein detaillierteres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
