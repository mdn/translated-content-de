---
title: "GPUCompilationMessage: lineNum-Eigenschaft"
short-title: lineNum
slug: Web/API/GPUCompilationMessage/lineNum
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`lineNum`**-Schreibgeschützte Eigenschaft der [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Schnittstelle ist eine Zahl, die die Zeilennummer im Shader-Code darstellt, auf die sich die Nachricht bezieht.

## Wert

Eine Zahl.

Beachten Sie:

- Wenn die Nachricht einem Substring entspricht, bezieht sich `lineNum` auf die Zeilennummer, bei der der Substring beginnt.
- Wenn die Nachricht sich nicht auf eine spezifische Zeile im Code bezieht (möglicherweise bezieht sie sich auf den gesamten Shader-Code), wird `lineNum` 0 sein.
- Werte sind eins-basiert — ein Wert von 1 bezieht sich auf die erste Zeile des Codes.
- Zeilen werden durch Zeilenumbrüche begrenzt. In WGSL wird eine [spezifische Liste von Zeichen](https://gpuweb.github.io/gpuweb/wgsl/#line-break) als Zeilenumbrüche definiert.

## Beispiele

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});

const shaderInfo = await shaderModule.getCompilationInfo();
const firstMessage = shaderInfo.messages[0];
console.log(firstMessage.lineNum);
```

Siehe die Hauptseite [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo#examples) für ein detaillierteres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
