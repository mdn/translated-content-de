---
title: "GPUCompilationMessage: Länge Eigenschaft"
short-title: Länge
slug: Web/API/GPUCompilationMessage/length
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`length`** schreibgeschützte Eigenschaft der {{domxref("GPUCompilationMessage")}}-Schnittstelle ist eine Zahl, die die Länge des Substrings darstellt, auf den sich die Nachricht bezieht.

## Wert

Eine Zahl.

Genauer gesagt ist `length` die Anzahl der UTF-16 Code-Einheiten im Shader-Code-Substring, auf den sich die Nachricht bezieht. Wenn sich die Nachricht auf einen einzelnen Punkt anstatt auf einen Substring bezieht, beträgt `length` 0.

## Beispiele

```js
  // ...
  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  const shaderInfo = await shaderModule.getCompilationInfo();
  const firstMessage = shaderInfo.messages[0];
  console.log(firstMessage.length);
  // ...
}
```

Sehen Sie sich die Hauptseite zu [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo#examples) für ein detaillierteres Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
