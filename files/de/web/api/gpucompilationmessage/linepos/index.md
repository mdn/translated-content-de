---
title: "GPUCompilationMessage: linePos-Eigenschaft"
short-title: linePos
slug: Web/API/GPUCompilationMessage/linePos
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`linePos`**-Eigenschaft der [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die die Position in der Codezeile darstellt, zu der die Nachricht gehört. Dies könnte ein exakter Punkt oder der Anfang des relevanten Substrings sein.

## Wert

Eine Zahl.

Genauer gesagt ist `linePos` die Anzahl der UTF-16-Code-Einheiten vom Beginn der Zeile bis zu dem exakten Punkt oder dem Anfang des relevanten Substrings, zu dem die Nachricht gehört.

Beachten Sie, dass:

- Wenn die Nachricht zu einem Substring gehört, bezieht sich `linePos` auf die erste UTF-16-Code-Einheit des Substrings.
- Wenn die Nachricht sich nicht auf eine spezifische Codeposition bezieht (vielleicht bezieht sie sich auf den gesamten Shader-Code), wird `linePos` 0 sein.
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

Sehen Sie sich die Hauptseite [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo#examples) für ein detaillierteres Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
