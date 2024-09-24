---
title: "GPUCompilationMessage: linePos-Eigenschaft"
short-title: linePos
slug: Web/API/GPUCompilationMessage/linePos
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`linePos`** schreibgeschützte Eigenschaft der
{{domxref("GPUCompilationMessage")}}-Schnittstelle ist eine Zahl, die die Position in der Codezeile darstellt, die der Nachricht entspricht. Dies kann ein genauer Punkt oder der Beginn des relevanten Substrings sein.

## Wert

Eine Zahl.

Genauer gesagt, ist `linePos` die Anzahl der UTF-16 Codeeinheiten vom Beginn der Zeile bis zum genauen Punkt oder Beginn des relevanten Substrings, dem die Nachricht entspricht.

Beachten Sie, dass:

- Wenn die Nachricht einem Substring entspricht, bezieht sich `linePos` auf die erste UTF-16 Codeeinheit des Substrings.
- Wenn die Nachricht keiner spezifischen Codeposition entspricht (möglicherweise bezieht sie sich auf den gesamten Shader-Code), wird `linePos` 0 sein.
- Die Werte sind einsbasiert — ein Wert von 1 bezieht sich auf die erste Codeeinheit der Zeile.

## Beispiele

```js
  // ...
  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  const shaderInfo = await shaderModule.getCompilationInfo();
  const firstMessage = shaderInfo.messages[0];
  console.log(firstMessage.linePos);
  // ...
}
```

Siehe die Hauptseite [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo#examples) für ein ausführlicheres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
