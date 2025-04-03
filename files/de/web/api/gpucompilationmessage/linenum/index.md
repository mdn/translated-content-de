---
title: "GPUCompilationMessage: lineNum-Eigenschaft"
short-title: lineNum
slug: Web/API/GPUCompilationMessage/lineNum
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`lineNum`**-Eigenschaft des [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Interfaces ist eine Zahl, die die Zeilennummer im Shader-Code repräsentiert, auf die sich die Nachricht bezieht.

## Wert

Eine Zahl.

Beachten Sie:

- Wenn sich die Nachricht auf ein Teilstück bezieht, steht `lineNum` für die Zeilennummer, an der das Teilstück beginnt.
- Wenn sich die Nachricht nicht auf eine spezifische Zeile des Codes bezieht (vielleicht bezieht sie sich auf den gesamten Shader-Code), wird `lineNum` 0 sein.
- Die Werte sind einsbasiert — ein Wert von 1 bezieht sich auf die erste Zeile des Codes.
- Zeilen werden durch Zeilenumbrüche begrenzt. In WGSL ist eine [spezifische Liste von Zeichen](https://gpuweb.github.io/gpuweb/wgsl/#line-break) als Zeilenumbrüche definiert.

## Beispiele

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});

const shaderInfo = await shaderModule.getCompilationInfo();
const firstMessage = shaderInfo.messages[0];
console.log(firstMessage.lineNum);
```

Sehen Sie die Hauptseite zu [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo#examples) für ein detaillierteres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
