---
title: "GPUCompilationMessage: offset-Eigenschaft"
short-title: offset
slug: Web/API/GPUCompilationMessage/offset
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`offset`**-Schreibgeschützte Eigenschaft des [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Interfaces ist eine Zahl, die den Offset vom Anfang des Shader-Codes bis zu dem genauen Punkt oder dem Anfang der relevanten Teilzeichenfolge angibt, auf den sich die Nachricht bezieht.

## Wert

Eine Zahl.

Genauer gesagt ist `offset` die Anzahl der UTF-16-Code-Einheiten vom Beginn des Shader-Codes bis zum genauen Punkt oder Anfang der relevanten Teilzeichenfolge, auf den sich die Nachricht bezieht.

Wenn sich die Nachricht nicht auf eine bestimmte Codeposition bezieht (möglicherweise bezieht sie sich auf den gesamten Shader-Code), beträgt `offset` 0.

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

Sehen Sie sich die Hauptseite [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo#examples) für ein detaillierteres Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
