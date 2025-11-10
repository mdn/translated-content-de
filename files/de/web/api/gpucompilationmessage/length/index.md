---
title: "GPUCompilationMessage: length-Eigenschaft"
short-title: length
slug: Web/API/GPUCompilationMessage/length
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`length`**-Eigenschaft der [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Schnittstelle ist eine schreibgeschützte Zahl, die die Länge des Substrings darstellt, auf den sich die Nachricht bezieht.

## Wert

Eine Zahl.

Genauer gesagt ist `length` die Anzahl der {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}} im Shader-Code-Substring, auf den sich die Nachricht bezieht. Wenn sich die Nachricht auf einen einzelnen Punkt anstatt eines Substrings bezieht, ist `length` 0.

## Beispiele

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});

const shaderInfo = await shaderModule.getCompilationInfo();
const firstMessage = shaderInfo.messages[0];
console.log(firstMessage.length);
```

Siehe die Hauptseite zu [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo#examples) für ein ausführlicheres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
