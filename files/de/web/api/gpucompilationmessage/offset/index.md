---
title: "GPUCompilationMessage: offset-Eigenschaft"
short-title: offset
slug: Web/API/GPUCompilationMessage/offset
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`offset`** der
{{domxref("GPUCompilationMessage")}}-Schnittstelle ist eine Zahl, die den Offset von Beginn des Shader-Codes bis zu dem genauen Punkt oder dem Beginn der relevanten Teilzeichenkette darstellt, auf den sich die Nachricht bezieht.

## Wert

Eine Zahl.

Genauer gesagt ist `offset` die Anzahl der UTF-16-Codeeinheiten vom Anfang des Shader-Codes bis zum genauen Punkt oder Beginn der relevanten Teilzeichenkette, auf den sich die Nachricht bezieht.

Wenn sich die Nachricht nicht auf eine bestimmte Position im Code bezieht (möglicherweise bezieht sie sich auf den gesamten Shader-Code), ist `offset` 0.

## Beispiele

```js
  // ...
  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  const shaderInfo = await shaderModule.getCompilationInfo();
  const firstMessage = shaderInfo.messages[0];
  console.log(firstMessage.offset);
  // ...
}
```

Sehen Sie sich die Hauptseite von [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo#examples) für ein ausführlicheres Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
