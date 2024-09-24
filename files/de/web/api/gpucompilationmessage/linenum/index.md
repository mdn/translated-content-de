---
title: "GPUCompilationMessage: lineNum-Eigenschaft"
short-title: lineNum
slug: Web/API/GPUCompilationMessage/lineNum
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`lineNum`** schreibgeschützte Eigenschaft der {{domxref("GPUCompilationMessage")}}-Schnittstelle ist eine Zahl, die die Zeilennummer im Shader-Code darstellt, auf die sich die Nachricht bezieht.

## Wert

Eine Zahl.

Beachten Sie:

- Wenn sich die Nachricht auf eine Teilzeichenkette bezieht, bezieht sich `lineNum` auf die Zeilennummer, bei der die Teilzeichenkette beginnt.
- Wenn die Nachricht sich nicht auf eine spezifische Zeile des Codes bezieht (vielleicht bezieht sie sich auf den gesamten Shader-Code), wird `lineNum` 0 sein.
- Die Werte beginnen mit eins — ein Wert von 1 bezieht sich auf die erste Zeile des Codes.
- Zeilen werden durch Zeilenumbrüche abgegrenzt. In WGSL wird eine [spezifische Liste von Zeichen](https://gpuweb.github.io/gpuweb/wgsl/#line-break) als Zeilenumbrüche definiert.

## Beispiele

```js
  // ...
  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  const shaderInfo = await shaderModule.getCompilationInfo();
  const firstMessage = shaderInfo.messages[0];
  console.log(firstMessage.lineNum);
  // ...
}
```

Siehe die Hauptseite [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo#examples) für ein detaillierteres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
