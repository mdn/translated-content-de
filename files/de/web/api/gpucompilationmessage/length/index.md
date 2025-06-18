---
title: "GPUCompilationMessage: length-Eigenschaft"
short-title: length
slug: Web/API/GPUCompilationMessage/length
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`length`**-Schreibgeschützte Eigenschaft des [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Interface ist eine Zahl, die die Länge des Substrings darstellt, auf den sich die Nachricht bezieht.

## Wert

Eine Zahl.

Genauer gesagt ist `length` die Anzahl der UTF-16 Code-Einheiten in dem Shader-Code-Substring, auf den sich die Nachricht bezieht. Wenn sich die Nachricht auf einen einzelnen Punkt anstatt auf einen Substring bezieht, ist `length` 0.

## Beispiele

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});

const shaderInfo = await shaderModule.getCompilationInfo();
const firstMessage = shaderInfo.messages[0];
console.log(firstMessage.length);
```

Sehen Sie die Hauptseite zu [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo#examples) für ein ausführlicheres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
